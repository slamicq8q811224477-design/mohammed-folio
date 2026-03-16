import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoreVertical, X, Home, Camera, GraduationCap, FileText, Phone, Info, LayoutGrid, Globe, Instagram, MessageCircle, MapPin, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuLinks = [
    { name: t('navbar.home'), href: '/', icon: Home, isAnchor: false },
    { name: t('navbar.wedding'), href: '/wedding', icon: Camera, isAnchor: false },
    { name: t('navbar.passport'), href: '/passport', icon: FileText, isAnchor: false },
    { name: t('navbar.graduation'), href: '/graduation', icon: GraduationCap, isAnchor: false },
    { name: t('navbar.services'), href: '#services', icon: LayoutGrid, isAnchor: true },
    { name: t('navbar.about'), href: '#about', icon: Info, isAnchor: true },
    { name: t('navbar.contact'), href: '#contact', icon: Phone, isAnchor: true },
  ];

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' },
    { code: 'fr', label: 'Français' }
  ];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
  };

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMenu}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-[70] p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-[#D4AF37]/30 text-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:border-[#D4AF37] transition-all duration-300 group"
        aria-label="More Options"
      >
        <MoreVertical className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
      </motion.button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[80] lg:bg-black/40"
          />
        )}
      </AnimatePresence>

      {/* Side Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-[400px] bg-[#050505] z-[90] border-l border-[#D4AF37]/20 shadow-[-20px_0_50px_rgba(0,0,0,0.5)] overflow-y-auto"
          >
            <div className="p-8 h-full flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center mb-12">
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-white uppercase tracking-tighter">Options</span>
                  <div className="h-1 w-12 bg-[#D4AF37] rounded-full" />
                </div>
                <button
                  onClick={toggleMenu}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:text-[#D4AF37] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-4 mb-12">
                {menuLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.href;
                  
                  return link.isAnchor && location.pathname === '/' ? (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={toggleMenu}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/5 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-lg font-bold text-slate-300 group-hover:text-white transition-colors">{link.name}</span>
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={toggleMenu}
                      className={`flex items-center gap-4 p-4 rounded-2xl border transition-all group ${
                        isActive 
                          ? 'bg-[#D4AF37] border-[#D4AF37] text-slate-950' 
                          : 'bg-white/5 border-white/5 text-slate-300 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/5 hover:text-white'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                        isActive ? 'bg-black/20 text-slate-950' : 'bg-[#D4AF37]/10 text-[#D4AF37]'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-lg font-bold">{link.name}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* Languages Section */}
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-4 text-[#D4AF37]">
                  <Globe className="w-4 h-4" />
                  <span className="text-xs font-black uppercase tracking-widest">Language</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`py-3 rounded-xl border text-[10px] font-black transition-all ${
                        i18n.language === lang.code
                          ? 'bg-[#D4AF37] border-[#D4AF37] text-slate-950'
                          : 'bg-white/5 border-white/5 text-slate-400 hover:border-[#D4AF37]/30'
                      }`}
                    >
                      {lang.code.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info & Socials */}
              <div className="mt-auto pt-8 border-t border-white/10">
                <div className="space-y-4 mb-8">
                  <a href="tel:0931800688" className="flex items-center gap-3 text-slate-400 hover:text-[#D4AF37] transition-colors">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">0931800688</span>
                  </a>
                  <a href="mailto:Slamicq8q811224477@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-[#D4AF37] transition-colors">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm truncate">Slamicq8q811224477@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-slate-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Summit Square, Addis Ababa</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://wa.me/251931800688" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideMenu;