import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Camera, Zap, Target, Layers, Cpu, Maximize, Sparkles } from 'lucide-react';

const CameraInfo = () => {
  const { t } = useTranslation();

  const specs = [
    { icon: <Target className="w-5 h-5" />, label: t('camera.sharper'), value: "Full Frame" },
    { icon: <Zap className="w-5 h-5" />, label: t('camera.instant'), value: "AI AF" },
    { icon: <Layers className="w-5 h-5" />, label: "Color", value: "14-Bit" },
    { icon: <Cpu className="w-5 h-5" />, label: "Output", value: "Raw 4K" },
  ];

  const features = [
    t('camera.feat1'),
    t('camera.feat2'),
    t('camera.feat3'),
    t('camera.feat4')
  ];

  const gearImg = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a0bba25c-b112-495b-ad67-5f0c249f5a52/studio-photo-3-12fe51cf-1773650596029.webp";

  return (
    <section className="py-24 md:py-40 bg-[#050505] text-white relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1600px] aspect-square bg-[#D4AF37]/5 rounded-full blur-[180px] -z-10" />
      
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 md:gap-32 items-center">
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-black tracking-[0.5em] uppercase text-[10px] md:text-xs">
                {t('camera.badge')}
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-[0.9]"
            >
              {t('camera.title')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-xl md:text-3xl font-medium leading-relaxed mb-16 max-w-3xl italic"
            >
              {t('camera.description')}
            </motion.p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10 mb-20">
              {specs.map((spec, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/[0.03] border border-white/10 p-8 rounded-[2.5rem] text-center hover:border-[#D4AF37]/40 transition-all hover:bg-white/5 group shadow-2xl"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-slate-950 transition-all duration-500">
                    {spec.icon}
                  </div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">{spec.label}</p>
                  <p className="text-xl font-black text-white">{spec.value}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.4 }}
                  className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/5"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C5A028] flex items-center justify-center shadow-lg">
                    <Camera className="w-4 h-4 text-slate-950" />
                  </div>
                  <span className="text-lg md:text-2xl font-black text-slate-300">{feat}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative z-10 aspect-[4/5] rounded-[4rem] md:rounded-[6rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(212,175,55,0.3)] border-[10px] border-white/5 group">
              <img 
                src={gearImg} 
                alt="Master Studio Equipment" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              <div className="absolute bottom-12 left-12 md:bottom-20 md:left-20">
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-black/80 backdrop-blur-2xl border border-[#D4AF37]/30 text-[#D4AF37]"
                >
                  <Maximize className="w-6 h-6" />
                  <span className="font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">Signature Optics Collection</span>
                </motion.div>
              </div>
            </div>
            {/* Decorative frame */}
            <div className="absolute inset-0 translate-x-12 translate-y-12 border-2 border-[#D4AF37]/10 rounded-[4rem] md:rounded-[6rem] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CameraInfo;