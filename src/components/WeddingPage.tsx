import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ArrowLeft, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const WeddingPage = () => {
  const weddingPhotos = [
    {
      src: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a0bba25c-b112-495b-ad67-5f0c249f5a52/ethiopian-muslim-wedding-couple-1-dd23ebd5-1773653535475.webp",
      title: "Wedding Couple 1"
    },
    {
      src: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a0bba25c-b112-495b-ad67-5f0c249f5a52/ethiopian-muslim-wedding-couple-2-75b3f06a-1773653535467.webp",
      title: "Wedding Couple 2"
    },
    {
      src: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a0bba25c-b112-495b-ad67-5f0c249f5a52/ethiopian-muslim-bride-alone-1-1c6f4d02-1773653534543.webp",
      title: "Bride Portrait"
    },
    {
      src: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a0bba25c-b112-495b-ad67-5f0c249f5a52/ethiopian-muslim-groom-alone-1-35666f40-1773653535788.webp",
      title: "Groom Portrait"
    },
    {
      src: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a0bba25c-b112-495b-ad67-5f0c249f5a52/ethiopian-muslim-man-portrait-e4810e0c-1773653535442.webp",
      title: "Cultural Attire Male"
    },
    {
      src: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a0bba25c-b112-495b-ad67-5f0c249f5a52/ethiopian-muslim-woman-portrait-15ae709c-1773653534681.webp",
      title: "Cultural Attire Female"
    }
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
            <Heart className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs">
              Special Collection
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-6"
          >
            Wedding <span className="text-[#D4AF37]">&</span> Culture
          </motion.h1>
          <p className="text-xl text-slate-400 italic border-l-4 border-[#D4AF37] pl-6">
            Capturing the eternal bond and rich cultural heritage with cinematic precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weddingPhotos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-[3rem] border border-white/5 bg-white/5"
            >
              <img 
                src={photo.src} 
                alt={photo.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <p className="text-white font-black text-2xl">{photo.title}</p>
                <p className="text-[#D4AF37] font-bold">Ethiopian Muslim Wedding</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeddingPage;