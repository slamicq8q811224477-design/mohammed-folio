import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Camera, Globe, ChevronDown, Check } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangs, setShowLangs] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { 
      code: 'en', 
      label: 'English', 
      short: 'EN',
      flag: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a0bba25c-b112-495b-ad67-5f0c249f5a52/english-flag-icon-6364089d-1773659690830.webp' 
    },
    { 
      code: 'ar', 
      label: 'العربية', 
      short: 'AR',
      flag: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a0bba25c-b112-495b-ad67-5f0c249f5a52/arabic-flag-icon-3990a18a-1773659691431.webp' 
    },
    { 
      code: 'fr', 
      label: 'Français', 
      short: 'FR',
      flag: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a0bba25c-b112-495b-ad67-5f0c249f5a52/french-flag-icon-918dac0c-1773659691148.webp' 
    }
  ];

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  const navLinks = [
    { name: t('navbar.home'), href: '/', isAnchor: false, color: 'text-blue-400', hoverColor: 'hover:text-blue-300' },
    { name: t('navbar.wedding'), href: '/wedding', isAnchor: false, color: 'text-rose-400', hoverColor: 'hover:text-rose-300' },
    { name: t('navbar.passport'), href: '/passport', isAnchor: false, color: 'text-violet-400', hoverColor: 'hover:text-violet-300' },
    { name: t('navbar.graduation'), href: '/graduation', isAnchor: false, color: 'text-emerald-400', hoverColor: 'hover:text-emerald-300' },
    { name: t('navbar.services'), href: '#services', isAnchor: true, color: 'text-amber-400', hoverColor: 'hover:text-amber-300' },
    { name: t('navbar.contact'), href: '#contact', isAnchor: true, color: 'text-sky-400', hoverColor: 'hover:text-sky-300' },
  ];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setShowLangs(false);
    if (isOpen) setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'py-4 bg-black/80 backdrop-blur-2xl border-b border-[#D4AF37]/20 shadow-2xl' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#C5A028] flex items-center justify-center text-slate-950 shadow-xl group-hover:rotate-12 transition-transform duration-500">
              <Camera className="w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-white tracking-tighter leading-none uppercase">Mohammed</span>
              <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.4em]">studio</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                link.isAnchor && location.pathname === '/' ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-xs font-black uppercase tracking-widest transition-all duration-300 ${link.color} ${link.hoverColor} hover:scale-110`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-xs font-black uppercase tracking-widest transition-all duration-300 hover:scale-110 ${ 
                      location.pathname === link.href ? 'underline underline-offset-4 decoration-2' : ''
                    } ${link.color} ${link.hoverColor}`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>

            <div className="flex items-center gap-6 border-l border-white/10 pl-10">
              {/* Enhanced Language Selector */}
              <div className="relative group/lang">
                <button
                  onClick={() => setShowLangs(!showLangs)}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 transition-all duration-300"
                >
                  <div className="w-5 h-5 rounded-full overflow-hidden border border-[#D4AF37]/20 shadow-lg">
                    <img 
                      src={currentLang.flag} 
                      alt={currentLang.label} 
                      className="w-full h-full object-cover scale-110" 
                    />
                  </div>
                  <span className="text-xs font-black text-white/90 uppercase tracking-widest">
                    {currentLang.short}
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 text-[#D4AF37] transition-transform duration-500 ${showLangs ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {showLangs && (
                    <>
                      <div 
                        className="fixed inset-0 z-0" 
                        onClick={() => setShowLangs(false)}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full mt-4 right-0 z-10 bg-black/90 backdrop-blur-3xl border border-[#D4AF37]/30 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] min-w-[180px] p-2"
                      >
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 group/item ${
                              i18n.language === lang.code 
                                ? 'bg-[#D4AF37] text-slate-950 shadow-lg' 
                                : 'text-slate-400 hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            <div className={`w-6 h-6 rounded-full overflow-hidden border ${
                              i18n.language === lang.code ? 'border-slate-950/20' : 'border-[#D4AF37]/20'
                            }`}>
                              <img 
                                src={lang.flag} 
                                alt={lang.label} 
                                className="w-full h-full object-cover" 
                              />
                            </div>
                            <span className="text-[11px] font-black uppercase tracking-widest flex-1 text-left">
                              {lang.label}
                            </span>
                            {i18n.language === lang.code && <Check className="w-3.5 h-3.5" />}\
                          </button>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-slate-950 text-xs font-black uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                {t('navbar.bookNow')}
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-3 rounded-2xl bg-white/5 border border-white/10 text-[#D4AF37]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-3xl border-b border-[#D4AF37]/20 overflow-hidden"
          >
            <div className="mx-auto px-6 py-12 flex flex-col gap-8 max-w-[1600px]">
              {navLinks.map((link) => (
                link.isAnchor && location.pathname === '/' ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-black uppercase tracking-tighter transition-all duration-300 ${link.color} ${link.hoverColor}`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-black uppercase tracking-tighter transition-all duration-300 ${link.color} ${link.hoverColor} ${ 
                      location.pathname === link.href ? 'pl-4 border-l-4 border-current' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              
              <div className="grid grid-cols-3 gap-3 pt-8 border-t border-white/10">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex flex-col items-center gap-2 px-3 py-4 rounded-2xl border transition-all duration-300 ${
                      i18n.language === lang.code 
                        ? 'bg-[#D4AF37] border-[#D4AF37] text-slate-950 shadow-lg scale-105' 
                        : 'border-white/10 text-slate-400 bg-white/5'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-black/10">
                      <img 
                        src={lang.flag} 
                        alt={lang.label} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      {lang.short}
                    </span>
                  </button>
                ))}
              </div>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-6 rounded-3xl bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-slate-950 text-center font-black text-xl shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                {t('navbar.bookNow')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;