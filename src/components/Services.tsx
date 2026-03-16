import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Camera, User, Users, GraduationCap, Heart, 
  ChevronRight, ArrowUpRight, Zap, Image as ImageIcon, Sparkles
} from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    { key: 'passport', icon: <Camera className="w-7 h-7" />, color: 'bg-[#D4AF37]', shadow: 'shadow-[#D4AF37]/40', iconColor: 'text-slate-950' },
    { key: 'student', icon: <User className="w-7 h-7" />, color: 'bg-white/5', shadow: 'shadow-black/20', iconColor: 'text-[#D4AF37]' },
    { key: 'grad_single', icon: <GraduationCap className="w-7 h-7" />, color: 'bg-white/5', shadow: 'shadow-black/20', iconColor: 'text-[#D4AF37]' },
    { key: 'grad_group', icon: <Users className="w-7 h-7" />, color: 'bg-white/5', shadow: 'shadow-black/20', iconColor: 'text-[#D4AF37]' },
    { key: 'wedding', icon: <Heart className="w-7 h-7" />, color: 'bg-[#D4AF37]', shadow: 'shadow-[#D4AF37]/40', iconColor: 'text-slate-950' },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 md:mb-40 gap-16">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-[3px] bg-[#D4AF37]" />
              <span className="text-[#D4AF37] font-black tracking-[0.5em] uppercase text-[10px] md:text-xs">
                {t('services.badge')}
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-9xl font-black text-white tracking-tighter leading-none"
            >
              {t('services.title')}
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-md bg-white/5 p-8 rounded-[2.5rem] border-l-4 border-[#D4AF37]"
          >
            <p className="text-slate-400 text-xl md:text-2xl font-medium leading-relaxed mb-6 italic">
              {t('services.description') || "Capturing the soul of every moment with artistic precision."}
            </p>
            <p className="text-[#D4AF37] font-black text-xs uppercase tracking-[0.3em] flex items-center gap-3 animate-pulse">
              <Sparkles className="w-5 h-5" /> 
              PREMIUM 4K STUDIO QUALITY
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14">
          {services.map((service, i) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative bg-white/[0.03] p-12 md:p-16 rounded-[4rem] border border-white/10 transition-all duration-700 hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/30 hover:shadow-[0_40px_100px_-20px_rgba(212,175,55,0.15)] hover:-translate-y-5"
            >
              <div className="flex flex-col h-full">
                <div className={`w-20 h-20 md:w-28 md:h-28 rounded-[2rem] md:rounded-[2.5rem] ${service.color} ${service.shadow} flex items-center justify-center ${service.iconColor} mb-12 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-2xl`}>
                  {service.icon}
                </div>
                
                <h3 className="text-3xl md:text-5xl font-black text-white mb-8 group-hover:text-[#D4AF37] transition-colors tracking-tighter">
                  {t(`services.${service.key}.title`)}
                </h3>
                
                <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium mb-16">
                  {t(`services.${service.key}.description`)}
                </p>
                
                <div className="mt-auto flex items-center justify-between pt-12 border-t border-white/10">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Starting Investment</span>
                    <span className="text-4xl font-black text-[#D4AF37] tracking-tighter">{t(`services.${service.key}.price`)}</span>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.1, backgroundColor: '#D4AF37', color: '#000' }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] flex items-center justify-center transition-all shadow-xl"
                  >
                    <ArrowUpRight className="w-7 h-7" />
                  </motion.button>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black uppercase text-slate-400 group-hover:border-[#D4AF37]/30">
                    <Zap className="w-4 h-4 text-[#D4AF37]" /> 30+ Shots
                  </div>
                  <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black uppercase text-slate-400 group-hover:border-[#D4AF37]/30">
                    <ImageIcon className="w-4 h-4 text-[#D4AF37]" /> 4K Edits
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Custom Package Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="group relative bg-gradient-to-br from-[#D4AF37] to-[#C5A028] p-12 md:p-16 rounded-[4rem] text-slate-950 overflow-hidden flex flex-col justify-center items-center text-center shadow-[0_30px_60px_-10px_rgba(212,175,55,0.4)] hover:scale-[1.02] transition-transform duration-700"
          >
            <div className="relative z-10">
              <div className="w-24 h-24 rounded-full bg-black/10 backdrop-blur-md flex items-center justify-center text-slate-950 mb-12 mx-auto">
                <Sparkles className="w-12 h-12" />
              </div>
              <h3 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Bespoke Session?</h3>
              <p className="text-slate-950/80 text-xl md:text-2xl font-bold mb-14 leading-tight italic">
                Craft a unique photographic experience tailored specifically to your story.
              </p>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="inline-flex items-center gap-4 px-14 py-7 rounded-[3rem] bg-slate-950 text-[#D4AF37] font-black text-2xl hover:bg-slate-900 transition-all shadow-2xl"
              >
                GET QUOTE
                <ChevronRight className="w-7 h-7" />
              </motion.a>
            </div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/30 rounded-full blur-[120px] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;