import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Eye, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const GalleryPreview = () => {
  const { t } = useTranslation();

  const previewImages = [
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520856629106-dd8151030ad5?q=80&w=2070&auto=format&fit=crop'
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] relative">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 w-full">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-4"
            >
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs">
                {t('gallery.previewBadge', 'Moments Captured')}
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none"
            >
              {t('gallery.previewTitle', 'Sneak Peek of Our Work')}
            </motion.h2>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-black uppercase text-xs tracking-widest hover:border-[#D4AF37] transition-all"
          >
            <Link to="/wedding" className="flex items-center gap-3">
              {t('gallery.viewPortfolio', 'View Portfolios')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {previewImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group aspect-[3/4] overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/5"
            >
              <img src={img} alt="Gallery Preview" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center text-black">
                  <Eye className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;