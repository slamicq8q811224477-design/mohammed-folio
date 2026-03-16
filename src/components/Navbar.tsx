import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Camera, Globe, ChevronDown } from 'lucide-react';
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
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'AR' },
    { code: 'fr', label: 'FR' }
  ];

  const navLinks = [
    { name: t('navbar.home'), href: '/', isAnchor: false },
    { name: t('navbar.wedding'), href: '/wedding', isAnchor: false },
    { name: t('navbar.passport'), href: '/passport', isAnchor: false },
    { name: t('navbar.graduation'), href: '/graduation', isAnchor: false },
    { name: t('navbar.services'), href: '#services', isAnchor: true },
    { name: t('navbar.contact'), href: '#contact', isAnchor: true },
  ];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setShowLangs(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'py-4 bg-black/80 backdrop-blur-2xl border-b border-[#D4AF37]/20 shadow-2xl' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
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
                    className="text-xs font-black text-slate-400 hover:text-[#D4AF37] uppercase tracking-widest transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-xs font-black uppercase tracking-widest transition-colors ${ 
                      location.pathname === link.href ? 'text-[#D4AF37]' : 'text-slate-400 hover:text-[#D4AF37]'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>

            <div className="flex items-center gap-6 border-l border-white/10 pl-10">
              <div className="relative">
                <button
                  onClick={() => setShowLangs(!showLangs)}
                  className="flex items-center gap-2 text-xs font-black text-[#D4AF37] uppercase tracking-widest hover:text-white transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  {i18n.language.toUpperCase()}
                  <ChevronDown className={`w-3 h-3 transition-transform ${showLangs ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {showLangs && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full mt-4 right-0 bg-black/90 backdrop-blur-xl border border-[#D4AF37]/30 rounded-2xl overflow-hidden shadow-2xl min-w-[120px]"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className="w-full px-6 py-4 text-left text-[10px] font-black text-slate-400 hover:bg-[#D4AF37] hover:text-slate-950 transition-all uppercase tracking-widest border-b border-white/5 last:border-0"
                        >
                          {lang.label}
                        </button>
                      ))}
                    </motion.div>
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
            className="lg:hidden bg-black/95 backdrop-blur-3xl border-b border-[#D4AF37]/20"
          >
            <div className="mx-auto px-6 py-12 flex flex-col gap-8 max-w-[1440px]">
              {navLinks.map((link) => (
                link.isAnchor && location.pathname === '/' ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-black text-white uppercase tracking-tighter hover:text-[#D4AF37]"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-black uppercase tracking-tighter ${ 
                      location.pathname === link.href ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              
              <div className="flex gap-4 pt-8 border-t border-white/10">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`px-6 py-3 rounded-xl border text-xs font-black transition-all ${
                      i18n.language === lang.code 
                        ? 'bg-[#D4AF37] border-[#D4AF37] text-slate-950' 
                        : 'border-white/10 text-slate-400'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-6 rounded-3xl bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-slate-950 text-center font-black text-xl shadow-2xl"
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