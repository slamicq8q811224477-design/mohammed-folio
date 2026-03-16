import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ArrowLeft, User, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const PassportPage = () => {
  const photos = [
    { src: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a0bba25c-b112-495b-ad67-5f0c249f5a52/passport-photo-1-2d04a1ae-1773653943719.webp", title: "Male Passport Portrait" },
    { src: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a0bba25c-b112-495b-ad67-5f0c249f5a52/passport-photo-2-55bd7f30-1773653937884.webp", title: "Female Passport Portrait" }
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
            <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs">
              Official Documentation
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-6"
          >
            Passport <span className="text-[#D4AF37] font-serif">&</span> ID
          </motion.h1>
          <p className="text-xl text-slate-400 italic border-l-4 border-[#D4AF37] pl-6">
            Compliance-ready, high-resolution studio shots for all official requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/5 bg-white/5"
            >
              <img 
                src={photo.src} 
                alt={photo.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <p className="text-white font-black text-lg">{photo.title}</p>
                <p className="text-[#D4AF37] font-bold text-xs">Standard Requirements Met</p>
              </div>
            </motion.div>
          ))}
          {/* Placeholder for more types */}
          <div className="aspect-[3/4] rounded-[2rem] border-2 border-dashed border-white/10 flex flex-col items-center justify-center p-8 text-center">
             <Camera className="w-10 h-10 text-[#D4AF37] mb-4" />
             <p className="text-slate-500 font-bold">Digital Delivery Included</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassportPage;