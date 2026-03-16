import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star, MessageSquare, User, Sparkles, Plus } from 'lucide-react';

const CustomerReviews = () => {
  const { t } = useTranslation();

  const reviews = [
    {
      name: 'Hanna Tadesse',
      role: 'Fashion Model',
      rating: 5,
      comment: t('reviews.r1', 'The studio atmosphere is incredibly professional. Mohammed knows exactly how to make you feel comfortable while capturing your best angles.'),
      date: '2 weeks ago',
      avatar: 'https://i.pravatar.cc/150?u=hanna'
    },
    {
      name: 'Yared Solomon',
      role: 'Recent Graduate',
      rating: 5,
      comment: t('reviews.r2', 'Got my graduation photos here and they turned out better than I could have imagined. High resolution, great lighting, and quick delivery!'),
      date: '1 month ago',
      avatar: 'https://i.pravatar.cc/150?u=yared'
    },
    {
      name: 'Marta Bekele',
      role: 'Bride',
      rating: 5,
      comment: t('reviews.r3', 'Mohammed captured our traditional wedding perfectly. He has a deep understanding of cultural details which is reflected in every photo.'),
      date: '3 months ago',
      avatar: 'https://i.pravatar.cc/150?u=marta'
    }
  ];

  return (
    <section id="reviews" className="py-24 md:py-40 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-10">
          <div className="text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-6"
            >
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs">
                {t('reviews.badge', 'Client Feedback')}
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black text-white tracking-tighter"
            >
              {t('reviews.title', 'Customer Reviews')}
            </motion.h2>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-4 bg-white/5 px-8 py-5 rounded-3xl border border-white/10">
              <div className="flex text-[#D4AF37]">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="text-2xl font-black text-white">4.9/5.0</span>
            </div>
            <button className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#D4AF37] text-black font-black uppercase text-xs tracking-widest hover:bg-white transition-all shadow-xl shadow-[#D4AF37]/10">
              <Plus className="w-4 h-4" />
              {t('reviews.write', 'Write a Review')}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/50 p-10 md:p-14 rounded-[3.5rem] border border-white/5 hover:border-[#D4AF37]/20 transition-all duration-500 group"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="flex gap-1 text-[#D4AF37]">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{rev.date}</span>
              </div>
              
              <p className="text-xl md:text-2xl font-medium text-slate-300 mb-12 leading-relaxed italic">
                "{rev.comment}"
              </p>
              
              <div className="flex items-center gap-5 pt-10 border-t border-white/5">
                <div className="w-16 h-16 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={rev.avatar} alt={rev.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-white">{rev.name}</h4>
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest">{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;