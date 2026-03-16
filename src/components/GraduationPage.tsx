import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowLeft, Award, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const GraduationPage = () => {
  const photos = [
    { src: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a0bba25c-b112-495b-ad67-5f0c249f5a52/graduation-photo-2-8271f3ea-1773653938125.webp", title: "Class Celebration" },
    { src: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a0bba25c-b112-495b-ad67-5f0c249f5a52/graduation-photo-3-3af4e012-1773653938168.webp", title: "Graduation Portrait" },
    { src: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a0bba25c-b112-495b-ad67-5f0c249f5a52/graduation-photo-4-3c150c25-1773653938353.webp", title: "Family Moment" }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 mb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
        
        <div className="max-w-4xl mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <GraduationCap className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs">
              Academic Excellence
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-6"
          >
            Graduation <span className="text-[#D4AF37]">Portraits</span>
          </motion.h1>
          <p className="text-xl text-slate-400 italic border-l-4 border-[#D4AF37] pl-6">
            Commemorating your achievement with timeless, elegant photography.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-[4rem] border border-white/5 bg-white/5"
            >
              <img 
                src={photo.src} 
                alt={photo.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <p className="text-white font-black text-3xl">{photo.title}</p>
                <p className="text-[#D4AF37] font-bold">Class of 2024</p>
              </div>
            </motion.div>
          ))}
          <div className="aspect-square rounded-[4rem] bg-[#D4AF37] flex flex-col items-center justify-center p-10 text-slate-950">
             <Award className="w-16 h-16 mb-6" />
             <h3 className="text-2xl font-black uppercase tracking-widest mb-2">Group Sessions</h3>
             <p className="font-bold">Available for whole classes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraduationPage;