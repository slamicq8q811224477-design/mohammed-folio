import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, User, Globe, 
  Hash, Lock, CheckCircle, Trash2, Save,
  Briefcase, Camera, ShieldCheck, Star, Sparkles,
  Instagram, Facebook, Youtube, MessageCircle, 
  Award, Zap
} from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [passwords, setPasswords] = useState({ password: '', confirm: '' });
  const isRtl = i18n.language === 'ar';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (passwords.password !== passwords.confirm) {
      toast.error(t('contact.form.passwordError') || "Passwords do not match");
      return;
    }

    if (!isCaptchaVerified) {
      toast.error("Please verify you are not a robot (Enter '1234')");
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success(t('common.success'));
      (e.target as HTMLFormElement).reset();
      setIsCaptchaVerified(false);
      setPasswords({ password: '', confirm: '' });
    }, 1500);
  };

  const handleReset = () => {
    const form = document.getElementById('complex-contact-form') as HTMLFormElement;
    if (form) form.reset();
    setPasswords({ password: '', confirm: '' });
    setIsCaptchaVerified(false);
    toast.info("Form cleared");
  };

  const handleSaveDraft = () => {
    toast.success("Draft saved successfully!");
  };

  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '1234') {
      setIsCaptchaVerified(true);
    } else {
      setIsCaptchaVerified(false);
    }
  };

  const countries = t('contact.form.countries', { returnObjects: true }) as string[];

  // Updated with the user's specific photographer photo
  const mohammedImage = "https://storage.googleapis.com/dala-prod-public-storage/attachments/ef61363d-231f-498e-a5c4-d1a3b524c57d/1773651248751_photo_2026-03-16_11-46-18.jpg";

  const emailVal = t('contact.emailAddress');
  const phoneVal = t('contact.phoneNumber');
  const whatsappVal = t('contact.whatsappNumber');
  const locationVal = t('contact.location');

  return (
    <section id="contact" className="py-24 md:py-40 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-[#D4AF37]/5 rounded-full blur-[150px] opacity-40 -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-[#D4AF37]/5 rounded-full blur-[150px] opacity-40 -z-10" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-24 md:mb-40">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <Sparkles className="w-6 h-6 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-black tracking-[0.5em] uppercase text-[10px] md:text-xs">
                {t('contact.badge')}
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-9xl font-black mb-12 text-white tracking-tighter leading-none italic"
            >
              {t('contact.title')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-3xl text-slate-400 max-w-4xl mx-auto font-medium leading-relaxed italic"
            >
              {t('contact.description')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-start">
            <div className="lg:col-span-4 space-y-12">
              {/* Profile Card */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-black/40 backdrop-blur-3xl rounded-[4rem] md:rounded-[5rem] shadow-2xl border border-[#D4AF37]/20 overflow-hidden group"
              >
                <div className="relative h-64 bg-gradient-to-br from-[#D4AF37] to-[#C5A028]">
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
                    <div className="w-32 h-32 md:w-44 md:h-44 rounded-[2.5rem] md:rounded-[3.5rem] border-8 border-[#050505] overflow-hidden bg-slate-800 shadow-2xl group-hover:scale-105 transition-transform duration-700">
                      <img 
                        src={mohammedImage} 
                        alt="Mohammed Said" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="pt-24 pb-16 px-10 text-center">
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-3 group-hover:text-[#D4AF37] transition-colors">{t('contact.ownerName')}</h3>
                  <p className="text-[#D4AF37] font-black uppercase tracking-[0.3em] text-[11px] mb-10">{t('contact.ownerJob')}</p>
                  
                  <div className="flex justify-center gap-10 mb-12">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl md:text-3xl font-black text-white">{t('contact.ownerExperience')}</span>
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Years Mastery</span>
                    </div>
                    <div className="w-px h-12 bg-white/10" />
                    <div className="flex flex-col items-center">
                      <span className="text-2xl md:text-3xl font-black text-white">500+</span>
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Masterpieces</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {(t('contact.ownerSkills') || '').split(',').map(skill => (
                      <span key={skill} className="px-5 py-2.5 bg-white/5 text-slate-400 rounded-2xl text-[11px] font-black border border-white/10 uppercase tracking-widest hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
                        {skill.trim()}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center gap-6">
                    {[Instagram, Facebook, Youtube].map((Icon, idx) => (
                      <a key={idx} href="#" className="w-14 h-14 rounded-2xl bg-white/5 text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-slate-950 transition-all shadow-xl">
                        <Icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Info Card */}
              <div className="bg-black/40 backdrop-blur-3xl p-12 md:p-16 rounded-[4rem] md:rounded-[5rem] shadow-2xl border border-white/5">
                <h3 className="text-3xl font-black mb-12 text-white italic">Connect <span className="text-[#D4AF37]">Directly</span></h3>
                
                <div className="space-y-12">
                  {[ 
                    { icon: Mail, label: t('contact.emailUs'), value: emailVal, href: `mailto:${emailVal}`, color: 'text-[#D4AF37]' },
                    { icon: Phone, label: t('contact.callUs'), value: phoneVal, href: `tel:${phoneVal.replace(/\s/g, '')}`, color: 'text-[#D4AF37]' },
                    { icon: MessageCircle, label: 'WhatsApp', value: whatsappVal, href: `https://wa.me/${whatsappVal.replace(/\s/g, '').replace('+', '')}`, color: 'text-emerald-400' },
                    { icon: MapPin, label: t('contact.visitStudio'), value: locationVal, href: "#location", color: 'text-slate-400' }
                  ].map((info, idx) => (
                    <a key={idx} href={info.href} className="flex items-start gap-8 group block">
                      <div className="w-16 h-16 rounded-[1.8rem] bg-white/5 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-slate-950 transition-all duration-500">
                        <info.icon className={`w-7 h-7 ${info.color} group-hover:text-inherit`} />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-[10px] text-slate-600 uppercase font-black tracking-[0.3em] mb-2">{info.label}</p>
                        <p className="text-xl font-bold text-slate-300 group-hover:text-[#D4AF37] transition-colors break-all leading-tight">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              {/* Form Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-black/40 backdrop-blur-3xl p-12 md:p-20 rounded-[4rem] md:rounded-[6rem] shadow-2xl border border-white/5"
              >
                <form id="complex-contact-form" onSubmit={handleSubmit} className="space-y-16 md:space-y-24">
                  {/* Personal Info Section */}
                  <section className="space-y-12">
                    <div className="flex items-center gap-6 mb-12">
                      <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                        <User className="w-7 h-7" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black text-white italic">{t('contact.form.sections.personal')}</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
                      {[ 
                        { label: t('contact.form.name'), icon: User, placeholder: t('contact.form.namePlaceholder'), type: 'text' },
                        { label: t('contact.form.email'), icon: Mail, placeholder: t('contact.form.emailPlaceholder'), type: 'email' },
                        { label: t('contact.form.phone'), icon: Phone, placeholder: t('contact.form.phonePlaceholder'), type: 'tel' },
                        { label: t('contact.form.whatsapp'), icon: MessageCircle, placeholder: t('contact.form.whatsappPlaceholder'), type: 'tel' }
                      ].map((field, idx) => (
                        <div key={idx} className="space-y-4">
                          <label className="text-[11px] font-black text-slate-600 uppercase tracking-[0.3em] ml-2">{field.label}</label>
                          <div className="relative group">
                            <field.icon className={`absolute ${isRtl ? 'right-7' : 'left-7'} top-1/2 -translate-y-1/2 w-6 h-6 text-slate-700 group-focus-within:text-[#D4AF37] transition-all duration-500`} />
                            <input required type={field.type} className={`w-full ${isRtl ? 'pr-20 pl-10' : 'pl-20 pr-10'} py-6 md:py-7 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.03] border border-white/10 focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all outline-none font-bold text-white placeholder:text-slate-700 shadow-inner`} placeholder={field.placeholder} />
                          </div>
                        </div>
                      ))}

                      <div className="space-y-4 md:col-span-2">
                        <label className="text-[11px] font-black text-slate-600 uppercase tracking-[0.3em] ml-2">{t('contact.form.country')}</label>
                        <div className="relative group">
                          <Globe className={`absolute ${isRtl ? 'right-7' : 'left-7'} top-1/2 -translate-y-1/2 w-6 h-6 text-slate-700 group-focus-within:text-[#D4AF37] transition-all duration-500 pointer-events-none`} />
                          <select required className={`w-full ${isRtl ? 'pr-20 pl-14' : 'pl-20 pr-14'} py-6 md:py-7 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.03] border border-white/10 focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all outline-none appearance-none font-bold text-white cursor-pointer`}>
                            <option value="" disabled selected className="bg-black">{t('contact.form.countryPlaceholder')}</option>
                            {Array.isArray(countries) && countries.map(c => <option key={c} value={c} className="bg-black">{c}</option>)}
                          </select>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Profile Details Section */}
                  <section className="space-y-12">
                    <div className="flex items-center gap-6 mb-12">
                      <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                        <Award className="w-7 h-7" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black text-white italic">{t('contact.form.sections.profile')}</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
                      <div className="space-y-4">
                        <label className="text-[11px] font-black text-slate-600 uppercase tracking-[0.3em] ml-2">{t('contact.form.jobTitle')}</label>
                        <div className="relative group">
                          <Briefcase className={`absolute ${isRtl ? 'right-7' : 'left-7'} top-1/2 -translate-y-1/2 w-6 h-6 text-slate-700 group-focus-within:text-[#D4AF37] transition-all duration-500`} />
                          <input type="text" className={`w-full ${isRtl ? 'pr-20 pl-10' : 'pl-20 pr-10'} py-6 md:py-7 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.03] border border-white/10 focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all outline-none font-bold text-white placeholder:text-slate-700`} placeholder={t('contact.form.jobTitlePlaceholder')} />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <label className="text-[11px] font-black text-slate-600 uppercase tracking-[0.3em] ml-2">{t('contact.form.experience')}</label>
                        <div className="relative group">
                          <Star className={`absolute ${isRtl ? 'right-7' : 'left-7'} top-1/2 -translate-y-1/2 w-6 h-6 text-slate-700 group-focus-within:text-[#D4AF37] transition-all duration-500`} />
                          <input type="number" className={`w-full ${isRtl ? 'pr-20 pl-10' : 'pl-20 pr-10'} py-6 md:py-7 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.03] border border-white/10 focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all outline-none font-bold text-white placeholder:text-slate-700`} placeholder={t('contact.form.experiencePlaceholder')} />
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Security & Robot Verification */}
                  <section className="space-y-12">
                    <div className="flex items-center gap-6 mb-12">
                      <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                        <ShieldCheck className="w-7 h-7" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black text-white italic">{t('contact.form.sections.security')}</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
                      <div className="space-y-4">
                        <label className="text-[11px] font-black text-slate-600 uppercase tracking-[0.3em] ml-2">{t('contact.form.password')}</label>
                        <div className="relative group">
                          <Lock className={`absolute ${isRtl ? 'right-7' : 'left-7'} top-1/2 -translate-y-1/2 w-6 h-6 text-slate-700 group-focus-within:text-[#D4AF37] transition-all duration-500`} />
                          <input required type="password" value={passwords.password} onChange={(e) => setPasswords(prev => ({ ...prev, password: e.target.value }))} className={`w-full ${isRtl ? 'pr-20 pl-10' : 'pl-20 pr-10'} py-6 md:py-7 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.03] border border-white/10 focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all outline-none font-bold text-white placeholder:text-slate-700`} placeholder={t('contact.form.passwordPlaceholder')} />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <label className="text-[11px] font-black text-slate-600 uppercase tracking-[0.3em] ml-2">{t('contact.form.confirmPassword')}</label>
                        <div className="relative group">
                          <Lock className={`absolute ${isRtl ? 'right-7' : 'left-7'} top-1/2 -translate-y-1/2 w-6 h-6 text-slate-700 group-focus-within:text-[#D4AF37] transition-all duration-500`} />
                          <input required type="password" value={passwords.confirm} onChange={(e) => setPasswords(prev => ({ ...prev, confirm: e.target.value }))} className={`w-full ${isRtl ? 'pr-20 pl-10' : 'pl-20 pr-10'} py-6 md:py-7 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.03] border border-white/10 focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all outline-none font-bold text-white placeholder:text-slate-700`} placeholder={t('contact.form.confirmPasswordPlaceholder')} />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6 pt-6">
                      <label className="text-[11px] font-black text-slate-600 uppercase tracking-[0.3em] ml-2">Human Verification (Enter '1234')</label>
                      <div className="relative group max-w-sm">
                        <Hash className={`absolute ${isRtl ? 'right-7' : 'left-7'} top-1/2 -translate-y-1/2 w-6 h-6 text-slate-700 group-focus-within:text-[#D4AF37] transition-all duration-500`} />
                        <input required type="text" onChange={handleCaptchaChange} className={`w-full ${isRtl ? 'pr-20 pl-14' : 'pl-20 pr-14'} py-6 md:py-7 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.03] border border-white/10 focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all outline-none font-black text-white text-2xl tracking-[0.5em] placeholder:text-slate-800 shadow-inner`} placeholder="1234" />
                        {isCaptchaVerified && (
                          <div className={`absolute ${isRtl ? 'left-6' : 'right-6'} top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-black shadow-xl`}>
                            <CheckCircle className="w-6 h-6" />
                          </div>
                        )}
                      </div>
                    </div>
                  </section>

                  {/* Form Actions */}
                  <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                    <button type="button" onClick={handleReset} className="flex items-center justify-center gap-4 px-10 py-7 rounded-[2.5rem] md:rounded-[3rem] bg-white/5 text-slate-500 font-black text-sm uppercase tracking-[0.3em] hover:bg-white/10 hover:text-white transition-all duration-500">
                      <Trash2 className="w-6 h-6" />
                      {t('contact.form.reset')}
                    </button>
                    <button type="button" onClick={handleSaveDraft} className="flex items-center justify-center gap-4 px-10 py-7 rounded-[2.5rem] md:rounded-[3rem] bg-white/5 text-white font-black text-sm uppercase tracking-[0.3em] hover:bg-white/10 transition-all duration-500 border-2 border-white/10">
                      <Save className="w-6 h-6" />
                      {t('contact.form.saveDraft')}
                    </button>
                    <button disabled={loading} type="submit" className="flex items-center justify-center gap-4 px-10 py-7 rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-br from-[#D4AF37] to-[#C5A028] text-slate-950 font-black text-sm uppercase tracking-[0.3em] hover:scale-105 transition-all duration-500 shadow-2xl shadow-[#D4AF37]/30 disabled:opacity-70">
                      {loading ? (
                        <div className="w-8 h-8 border-4 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-6 h-6" />
                          {t('contact.form.submit')}
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;