import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Shield, Heart, Sparkles, ArrowRight } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const studioImg = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a0bba25c-b112-495b-ad67-5f0c249f5a52/studio-environment-shot-fcdde9b8-1773650268756.webp";

  const features = [
    { icon: <Award className="w-7 h-7" />, title: t('about.professional'), desc: t('about.professionalDesc'), color: 'text-[#D4AF37]' },
    { icon: <Heart className="w-7 h-7" />, title: t('about.personalized'), desc: t('about.personalizedDesc'), color: 'text-amber-400' },
    { icon: <Shield className="w-7 h-7" />, title: t('about.topQuality'), desc: t('about.topQualityDesc'), color: 'text-[#D4AF37]' },
    { icon: <Users className="w-7 h-7" />, title: t('about.greatGear'), desc: t('about.greatGearDesc'), color: 'text-amber-500' },
  ];

  return (
    <section id="about" className="py-24 md:py-40 bg-[#050505] overflow-hidden relative border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Studio Image with frame */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-[4rem] md:rounded-[6rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(212,175,55,0.2)] z-10 border-4 border-[#D4AF37]/20">
                <img 
                  src={studioImg} 
                  alt="Professional Studio Setup" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              
              {/* Floating XP Badge */}
              <motion.div 
                whileInView={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-6 md:-bottom-16 md:-right-16 bg-black/80 backdrop-blur-2xl p-8 md:p-16 rounded-[3.5rem] md:rounded-[5rem] shadow-2xl border border-[#D4AF37]/30 z-20 flex flex-col items-center"
              >
                <span className="text-5xl md:text-9xl font-black text-[#D4AF37] leading-none tracking-tighter drop-shadow-lg">15+</span>
                <span className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-[0.4em] mt-4">Years Mastery</span>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-[radial-gradient(#D4AF37_2px,transparent_2px)] [background-size:24px_24px] opacity-30 -z-10" />
              <div className="absolute inset-0 translate-x-12 -translate-y-12 border-2 border-[#D4AF37]/10 rounded-[4rem] md:rounded-[6rem] -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-black tracking-[0.5em] uppercase text-[10px] md:text-xs">
                {t('about.badge')}
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-black text-white mb-10 tracking-tighter leading-[0.85] italic">
              {t('about.title')}
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium mb-16 max-w-xl italic">
              {t('about.description')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16">
              {features.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="flex flex-col gap-6 group"
                >
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-[1.8rem] md:rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center justify-center ${item.color} shadow-2xl transition-all duration-500 group-hover:bg-[#D4AF37] group-hover:text-slate-950 group-hover:scale-110`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl md:text-3xl font-black text-white mb-3 group-hover:text-[#D4AF37] transition-colors">{item.title}</h4>
                    <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-20 p-10 md:p-14 rounded-[3rem] md:rounded-[4.5rem] bg-gradient-to-br from-[#D4AF37] to-[#C5A028] text-slate-950 flex flex-col md:flex-row items-center gap-8 md:gap-14 relative overflow-hidden group shadow-2xl shadow-[#D4AF37]/20"
            >
              <div className="relative z-10 w-24 h-24 md:w-28 md:h-28 rounded-full bg-slate-950 flex items-center justify-center text-[#D4AF37] shadow-2xl group-hover:scale-110 transition-transform duration-700 shrink-0">
                <CheckCircle className="w-12 h-12 md:w-14 md:h-14" />
              </div>
              <div className="relative z-10">
                <p className="text-2xl md:text-3xl font-black leading-tight mb-5">
                  Uncompromising quality in every frame. We deliver in 4K resolution.
                </p>
                <a href="#gallery" className="inline-flex items-center gap-2 text-slate-900 font-black uppercase text-[10px] md:text-xs tracking-[0.3em] hover:text-white transition-colors">
                  SEE THE PORTFOLIO <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/30 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;