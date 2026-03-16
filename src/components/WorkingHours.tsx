import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Clock, Calendar, Sparkles, MapPin } from 'lucide-react';

const WorkingHours = () => {
  const { t } = useTranslation();

  const schedule = [
    { day: t('hours.monday', 'Monday'), hours: '08:30 AM - 07:00 PM' },
    { day: t('hours.tuesday', 'Tuesday'), hours: '08:30 AM - 07:00 PM' },
    { day: t('hours.wednesday', 'Wednesday'), hours: '08:30 AM - 07:00 PM' },
    { day: t('hours.thursday', 'Thursday'), hours: '08:30 AM - 07:00 PM' },
    { day: t('hours.friday', 'Friday'), hours: '08:30 AM - 07:00 PM' },
    { day: t('hours.saturday', 'Saturday'), hours: '09:00 AM - 06:00 PM' },
    { day: t('hours.sunday', 'Sunday'), hours: t('hours.closed', 'Closed (Appointment only)') },
  ];

  return (
    <section id="working-hours" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Studio Image */}
      <div className="absolute inset-0 opacity-20 grayscale pointer-events-none">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a0bba25c-b112-495b-ad67-5f0c249f5a52/modern-photography-studio-interior-445be013-1773650605858.webp" 
          alt="Studio Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-6"
            >
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs">
                {t('hours.badge', 'Availability')}
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none"
            >
              {t('hours.title', 'Studio Working Hours')}
            </motion.h2>
            <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed mb-12">
              {t('hours.description', 'We are open throughout the week to capture your special moments. Please check our timings and plan your visit or booking accordingly.')}
            </p>
            
            <a 
              href="#location"
              className="flex items-center gap-6 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md group hover:border-[#D4AF37] transition-all block"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Location</p>
                <p className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">{t('location.addressDetail', 'Addis Ababa, summit safari, Ethiopia')}</p>
              </div>
            </a>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-zinc-900/80 backdrop-blur-2xl p-10 md:p-14 rounded-[4rem] border border-white/10 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37] flex items-center justify-center text-black shadow-lg shadow-[#D4AF37]/20">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white">{t('hours.scheduleTitle', 'Our Weekly Schedule')}</h3>
            </div>
            
            <div className="space-y-6">
              {schedule.map((item, i) => (
                <div key={i} className="flex items-center justify-between pb-6 border-b border-white/5 last:border-none last:pb-0">
                  <div className="flex items-center gap-4">
                    <Calendar className="w-4 h-4 text-[#D4AF37] opacity-50" />
                    <span className="text-lg font-bold text-slate-300">{item.day}</span>
                  </div>
                  <span className="text-lg font-black text-white tracking-tight">{item.hours}</span>
                </div>
              ))}
            </div>

            <a 
              href="#contact" 
              className="mt-12 w-full flex items-center justify-center py-6 rounded-3xl bg-white/5 border border-white/10 text-[#D4AF37] font-black uppercase text-sm tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all"
            >
              {t('hours.bookConsultation', 'Book a Consultation')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkingHours;