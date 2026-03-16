import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Camera, Award, Zap, Play } from 'lucide-react';
import ImageSlider from './ImageSlider';

const Hero = () => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Using one of the provided images as background but dark and blurred
  const heroBg = "https://storage.googleapis.com/dala-prod-public-storage/attachments/ef61363d-231f-498e-a5c4-d1a3b524c57d/1773654557705_photo_2026-03-16_11-46-18.jpg";
  
  // Specific photos provided by the user for the slideshow
  const heroSlides = [
    {
      src: "https://storage.googleapis.com/dala-prod-public-storage/attachments/ef61363d-231f-498e-a5c4-d1a3b524c57d/1773654557705_photo_2026-03-16_11-46-18.jpg",
      alt: "Professional portrait of a young man with headphones"
    },
    {
      src: "https://storage.googleapis.com/dala-prod-public-storage/attachments/ef61363d-231f-498e-a5c4-d1a3b524c57d/1773654552525_photo_2026-03-16_12-01-19.jpg",
      alt: "Close-up portrait of a young man with dark curly hair"
    },
    {
      src: "https://storage.googleapis.com/dala-prod-public-storage/attachments/ef61363d-231f-498e-a5c4-d1a3b524c57d/1773654554594_photo_2026-03-16_12-01-35.jpg",
      alt: "Two young men smiling in a photo together"
    }
  ];

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden">
      {/* Background with Camera Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroBg} 
          alt="Professional Photography Background" 
          className="w-full h-full object-cover opacity-20 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,0.15)_0%,transparent_50%)]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] font-black text-[10px] md:text-xs uppercase tracking-[0.3em] mb-8 shadow-2xl backdrop-blur-md"
            >
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#D4AF37]" />
              {t('hero.badge', 'Premium Photography Studio')}
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-black text-white tracking-tighter leading-[0.85] mb-8">
              <span className="block text-[#D4AF37] overflow-hidden group">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="block drop-shadow-[0_10px_10px_rgba(212,175,55,0.3)]"
                >
                  {t('hero.title')}
                </motion.span>
              </span>
              <span className="relative block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="block bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent"
                >
                  {t('hero.subtitle')}
                </motion.span>
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="absolute bottom-2 left-0 h-2 md:h-4 bg-[#D4AF37] -z-10 rounded-full opacity-30 blur-sm"
                />
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-300 leading-relaxed font-medium max-w-2xl mb-10 md:mb-12 border-l-4 border-[#D4AF37] pl-6 italic">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
              <motion.a 
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212,175,55,0.4)' }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#C5A028] text-slate-950 font-black text-lg shadow-2xl transition-all flex items-center justify-center gap-3"
              >
                {t('navbar.bookNow')}
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.95 }}
                href="#gallery"
                className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-[#D4AF37] font-black text-lg hover:shadow-lg transition-all flex items-center justify-center gap-3 backdrop-blur-sm"
              >
                {t('hero.viewPortfolio')}
                <Play className="w-4 h-4 fill-current" />
              </motion.a>
            </div>

            <div className="mt-16 flex flex-wrap items-center gap-8 md:gap-12">
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <Award className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-3xl font-black text-[#D4AF37] tracking-tighter">10+</span>
                </div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Years Exp.</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <Zap className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-3xl font-black text-[#D4AF37] tracking-tighter">5k+</span>
                </div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Photos Taken</span>
              </div>
            </div>
          </motion.div>
          
          {/* Automatic Slideshow Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
            style={{ y: y1 }}
          >
            <div className="relative">
              <div className="relative z-10 aspect-[4/5] rounded-[3.5rem] md:rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(212,175,55,0.3)] group border border-[#D4AF37]/20 bg-black">
                <ImageSlider slides={heroSlides} interval={4000} />
              </div>

              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-6 md:-left-16 z-20 bg-black/80 backdrop-blur-2xl p-6 md:p-8 rounded-[2.5rem] shadow-2xl border border-[#D4AF37]/30 flex flex-col gap-4 max-w-[240px]"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#C5A028] flex items-center justify-center text-slate-950 shadow-xl shadow-[#D4AF37]/20">
                  <Camera className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.2em] mb-1">Signature Style</p>
                  <p className="text-xl font-black text-white leading-tight tracking-tight">Elite Studio & Commercial Portraits</p>
                </div>
              </motion.div>

              <div className="absolute inset-0 translate-x-12 translate-y-12 border-4 border-[#D4AF37]/10 rounded-[3.5rem] md:rounded-[5rem] -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.4em]">Discover</span>
        <div className="w-[2px] h-16 bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/50 to-transparent rounded-full shadow-[0_0_10px_#D4AF37]" />
      </motion.div>
    </section>
  );
};

export default Hero;