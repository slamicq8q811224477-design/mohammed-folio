import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Quote, Star, Sparkles } from 'lucide-react';

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    { key: 't1', author: 'Abebe Bikila', role: 'Business Owner', img: 'https://i.pravatar.cc/100?img=15' },
    { key: 't2', author: 'Selamawit Yohannes', role: 'Graduate', img: 'https://i.pravatar.cc/100?img=25' },
    { key: 't3', author: 'Dawit Mekonnen', role: 'Newlywed', img: 'https://i.pravatar.cc/100?img=35' },
  ];

  return (
    <section id="testimonials" className="py-24 md:py-40 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Decorative BG */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D4AF37]/[0.02] -z-10 rounded-l-[20rem]" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 md:mb-40 gap-16">
          <div className="text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center md:justify-start gap-4 mb-8"
            >
              <Sparkles className="w-6 h-6 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-black tracking-[0.5em] uppercase text-[10px] md:text-xs">
                {t('testimonials.badge')}
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none italic"
            >
              {t('testimonials.title')}
            </motion.h2>
          </div>
          
          <div className="hidden md:flex flex-col items-end">
            <div className="flex -space-x-4 mb-6">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="w-16 h-16 rounded-full border-4 border-black bg-slate-800 overflow-hidden shadow-2xl ring-2 ring-[#D4AF37]/20">
                  <img src={`https://i.pravatar.cc/100?img=${i+45}`} alt="Reviewer" />
                </div>
              ))}
            </div>
            <p className="text-[#D4AF37] font-black uppercase text-[11px] tracking-[0.4em] flex items-center gap-3">
              <span className="w-10 h-px bg-[#D4AF37]" /> 500+ LEGENDS SERVED
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {testimonials.map((test, i) => (
            <motion.div
              key={test.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-white/[0.03] border border-white/10 p-12 md:p-20 rounded-[4rem] md:rounded-[5rem] group hover:bg-[#D4AF37]/5 transition-all duration-700 shadow-2xl hover:shadow-[#D4AF37]/10 hover:-translate-y-6"
            >
              <div className="absolute -top-10 left-12 md:left-20 w-20 h-20 md:w-24 md:h-24 rounded-[2.5rem] bg-gradient-to-br from-[#D4AF37] to-[#C5A028] flex items-center justify-center text-slate-950 shadow-2xl shadow-[#D4AF37]/30 group-hover:rotate-12 transition-all duration-700">
                <Quote className="w-10 h-10 md:w-12 md:h-12 fill-current opacity-80" />
              </div>
              
              <div className="flex text-[#D4AF37] mb-12 gap-1.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-current" />)}
              </div>
              
              <p className="text-2xl md:text-3xl font-bold text-slate-300 mb-16 md:mb-24 leading-relaxed group-hover:text-white transition-colors italic tracking-tight">
                "{t(`testimonials.${test.key}`)}"
              </p>
              
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden ring-4 ring-white/5 group-hover:ring-[#D4AF37] group-hover:ring-offset-8 group-hover:ring-offset-[#050505] transition-all duration-700">
                  <img src={test.img} alt={test.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-black text-white group-hover:text-[#D4AF37] transition-colors tracking-tighter">{test.author}</h4>
                  <p className="text-xs md:text-sm font-black text-slate-500 uppercase tracking-[0.4em] group-hover:text-slate-400 transition-colors mt-1">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;