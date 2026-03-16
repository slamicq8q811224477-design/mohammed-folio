import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Camera, Instagram, Facebook, Twitter, Mail, MapPin, Phone, Heart, ArrowUp, Sparkles } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: <Instagram className="w-6 h-6" />, href: "#", label: 'Instagram' },
    { icon: <Facebook className="w-6 h-6" />, href: "#", label: 'Facebook' },
    { icon: <Twitter className="w-6 h-6" />, href: "#", label: 'Twitter' },
  ];

  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const phoneVal = t('contact.phoneNumber');
  const emailVal = t('contact.emailAddress');
  const locationVal = t('contact.location');

  return (
    <footer className="bg-[#050505] text-white pt-24 pb-12 overflow-hidden relative border-t border-white/5">
      {/* Background Decorative Circle */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px] -z-0 translate-x-1/2 translate-y-1/2" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 mb-24">
          <div className="lg:col-span-5">
            <a href="#home" className="flex items-center gap-5 mb-12 group">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-[2rem] bg-gradient-to-br from-[#D4AF37] to-[#C5A028] flex items-center justify-center text-slate-950 shadow-xl shadow-[#D4AF37]/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                <Camera className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-4xl md:text-5xl tracking-tighter text-white">{t('hero.title')}</span>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] font-black text-[#D4AF37] uppercase tracking-[0.5em]">{t('hero.subtitle')}</span>
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
            </a>
            
            <p className="text-slate-400 text-xl md:text-2xl font-medium leading-relaxed mb-16 max-w-md italic">
              {t('footer.description') || "Capturing the elegance of life through the lens of artistry and professional precision."}
            </p>
            
            <div className="flex flex-wrap items-center gap-5">
              {socialLinks.map((social, i) => (
                <motion.a 
                  key={i} 
                  href={social.href} 
                  whileHover={{ y: -8, backgroundColor: '#D4AF37', borderColor: '#D4AF37', color: '#000' }}
                  className="w-16 h-16 rounded-[1.8rem] bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] transition-all duration-500 shadow-xl"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-16">
            <div className="space-y-10">
              <h4 className="text-2xl md:text-3xl font-black tracking-tighter text-white">{t('footer.quickLinks')}</h4>
              <ul className="space-y-6">
                {['home', 'about', 'services', 'gallery', 'contact'].map(link => (
                  <li key={link}>
                    <a href={`#${link}`} className="text-slate-500 hover:text-[#D4AF37] transition-all font-black text-lg flex items-center gap-3 group uppercase tracking-widest text-[13px]">
                      <div className="w-2 h-2 rounded-full bg-[#D4AF37] scale-0 group-hover:scale-100 transition-transform" />
                      {t(`navbar.${link}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-10">
              <h4 className="text-2xl md:text-3xl font-black tracking-tighter text-white">Connect</h4>
              <ul className="space-y-10">
                <li className="flex gap-6 group">
                  <a href={`tel:${phoneVal.replace(/\s/g, '')}`} className="flex gap-6 items-center w-full">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] group-hover:text-slate-950 transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Call Us</span>
                      <span className="text-slate-300 font-bold text-lg group-hover:text-[#D4AF37] transition-colors">{phoneVal}</span>
                    </div>
                  </a>
                </li>
                <li className="flex gap-6 group">
                  <a href={`mailto:${emailVal}`} className="flex gap-6 items-center w-full">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] group-hover:text-slate-950 transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Email</span>
                      <span className="text-slate-300 font-bold text-lg break-all group-hover:text-[#D4AF37] transition-colors">{emailVal}</span>
                    </div>
                  </a>
                </li>
                <li className="flex gap-6 group">
                  <a href="#location" className="flex gap-6 items-center w-full">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] group-hover:text-slate-950 transition-all">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Studio</span>
                      <span className="text-slate-300 font-bold text-lg leading-snug group-hover:text-[#D4AF37] transition-colors">{locationVal}</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="space-y-10">
              <h4 className="text-2xl md:text-3xl font-black tracking-tighter text-white">{t('footer.legal')}</h4>
              <ul className="space-y-6">
                {['privacy', 'terms', 'booking'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-slate-500 hover:text-[#D4AF37] transition-all font-black text-lg uppercase tracking-widest text-[13px]">
                      {t(`footer.${item}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-12">
          <p className="text-slate-600 font-black text-xs uppercase tracking-[0.4em] text-center md:text-left">
            &copy; {currentYear} {t('hero.title')}. Crafted for Excellence.
          </p>
          
          <motion.button 
            onClick={scrollToTop}
            whileHover={{ y: -10, backgroundColor: '#D4AF37', color: '#000', boxShadow: '0 0 30px rgba(212,175,55,0.4)' }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] shadow-2xl transition-all duration-500"
          >
            <ArrowUp className="w-7 h-7" />
          </motion.button>

          <div className="flex items-center gap-3 text-slate-600 font-black text-[10px] md:text-xs uppercase tracking-[0.5em] group">
            Artistry <Heart className="w-5 h-5 text-rose-600 fill-current group-hover:scale-125 transition-transform animate-pulse" /> in Ethiopia
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;