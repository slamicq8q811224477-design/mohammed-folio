import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Camera, Filter, X, ChevronRight, Share2, Heart, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null);

  const categories = [
    { key: 'all', label: t('gallery.categories.all'), icon: <Camera className="w-4 h-4" /> },
    { key: 'studio', label: 'Studio', icon: <Camera className="w-4 h-4" /> },
    { key: 'commercial', label: 'Commercial', icon: <Sparkles className="w-4 h-4" /> },
  ];

  const galleryImages = {
    studio: [
      'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520856629106-dd8151030ad5?q=80&w=2070&auto=format&fit=crop',
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a0bba25c-b112-495b-ad67-5f0c249f5a52/generic-studio-1-6546a00e-1773653535449.webp'
    ],
    commercial: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop'
    ]
  };

  const allPhotos = useMemo(() => {
    const photos: any[] = [];
    Object.keys(galleryImages).forEach((cat) => {
      const images = galleryImages[cat as keyof typeof galleryImages];
      const label = cat.charAt(0).toUpperCase() + cat.slice(1);
      const price = 'Contact for Pricing';
      
      images.forEach((img, i) => {
        photos.push({
          id: `${cat}-${i}`,
          title: `${label} Collection`,
          category: cat,
          image: img,
          price: price
        });
      });
    });
    return photos;
  }, []);

  const filteredPhotos = activeCategory === 'all' 
    ? allPhotos 
    : allPhotos.filter(p => p.category === activeCategory);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 w-full">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs mb-4 block"
          >
            {t('gallery.badge')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-8xl font-black text-white mb-8 tracking-tighter"
          >
            The <span className="text-[#D4AF37]">Studio</span> Gallery
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 p-2 rounded-[2.5rem] md:rounded-[4rem] bg-white/5 backdrop-blur-xl border border-white/10 max-w-4xl">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center gap-2 px-6 md:px-10 py-3 md:py-5 rounded-[1.8rem] md:rounded-[3rem] text-xs font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat.key 
                    ? 'bg-[#D4AF37] text-slate-950 shadow-[0_10px_30px_rgba(212,175,55,0.4)]' 
                    : 'text-slate-400 hover:text-[#D4AF37] hover:bg-white/5'
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: (idx % 8) * 0.05 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] md:rounded-[4rem] bg-slate-900 shadow-2xl transition-all duration-700 group-hover:-translate-y-3 group-hover:shadow-[#D4AF37]/20 border border-white/5">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 md:p-10">
                    <p className="text-white font-black text-xl md:text-2xl mb-1">{photo.title}</p>
                    <p className="text-[#D4AF37] font-bold text-sm md:text-lg mb-6 drop-shadow-md">{photo.price}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#D4AF37] text-slate-950 flex items-center justify-center shadow-lg">
                        <Eye className="w-6 h-6" />
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
                        <Share2 className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal for detail view */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-3xl"
              onClick={() => setSelectedPhoto(null)}
            >
              <button className="absolute top-10 right-10 p-5 rounded-full bg-white/5 text-white hover:bg-[#D4AF37] hover:text-slate-950 transition-all border border-white/10">
                <X className="w-8 h-8" />
              </button>
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="max-w-[1500px] w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center overflow-y-auto max-h-[90vh] lg:overflow-visible"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="aspect-[3/4] rounded-[3.5rem] md:rounded-[5.5rem] overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.3)] border-4 border-[#D4AF37]/20">
                  <img src={selectedPhoto.image} alt={selectedPhoto.title} className="w-full h-full object-cover" />
                </div>
                
                <div className="text-white p-4 md:p-0">
                  <span className="inline-block px-5 py-2.5 rounded-full bg-[#D4AF37] text-slate-950 text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-lg shadow-[#D4AF37]/20">
                    {selectedPhoto.category.replace('_', ' ')}
                  </span>
                  <h3 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none">{selectedPhoto.title}</h3>
                  <p className="text-xl md:text-2xl text-slate-400 font-medium mb-12 leading-relaxed italic">
                    "Elevating your essence through professional studio artistry and cinematic light manipulation."
                  </p>
                  
                  <div className="bg-white/5 border border-white/10 p-10 md:p-14 rounded-[3.5rem] mb-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl" />
                    <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs mb-6">Investment</p>
                    <div className="flex items-end gap-3">
                      <p className="text-6xl md:text-9xl font-black text-[#D4AF37] drop-shadow-[0_10px_10px_rgba(212,175,55,0.2)]">Contact</p>
                      <p className="text-2xl md:text-3xl font-black text-slate-500 mb-2 md:mb-6 uppercase">Us</p>
                    </div>
                    <p className="text-slate-400 text-sm mt-8 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                      Includes high-end retouching & 4K digital delivery
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-6">
                    <a 
                      href="#contact" 
                      onClick={() => setSelectedPhoto(null)}
                      className="flex-1 flex items-center justify-center gap-4 px-12 py-7 rounded-[3rem] bg-[#D4AF37] text-slate-950 font-black text-xl hover:bg-white transition-all shadow-2xl shadow-[#D4AF37]/30"
                    >
                      Reserve Your Date
                      <ChevronRight className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;