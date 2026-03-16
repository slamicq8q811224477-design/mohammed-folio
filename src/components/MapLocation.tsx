import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Sparkles, ExternalLink, MousePointer2 } from 'lucide-react';

const MapLocation = () => {
  const { t } = useTranslation();

  // Coordinates for Summit Square, Addis Ababa
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.66288544421!2d38.8687708!3d9.0021644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9015c907a759%3A0x8e831665e77b63f!2sSummit%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1710000000000!5m2!1sen!2set";
  const mapExternalUrl = "https://www.google.com/maps/search/?api=1&query=Summit+Square+Addis+Ababa+2V22%2BJP8";

  return (
    <section id="location" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 w-full">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs">
              {t('location.badge', 'Visit Us')}
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black text-white tracking-tighter"
          >
            {t('location.title', 'Studio Location')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="bg-zinc-900 p-10 rounded-[3rem] border border-white/10 shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-8">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4">{t('location.addressTitle', 'Find Us At')}</h3>
              
              <a 
                href={mapExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group/addr"
              >
                <p className="text-xl text-slate-400 font-medium leading-relaxed mb-10 group-hover/addr:text-[#D4AF37] transition-colors duration-300">
                  {t('location.addressDetail', 'Summit Square | ሰሚት አደባባይ, 2V22+JP8, Addis Ababa')}
                </p>
              </a>
              
              <div className="space-y-4">
                <a 
                  href={mapExternalUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37] transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <Navigation className="w-5 h-5 text-[#D4AF37]" />
                    <span className="font-bold text-white uppercase tracking-wider text-sm">Open in Maps</span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            <div className="bg-[#D4AF37] p-10 rounded-[3rem] shadow-2xl text-black">
              <h4 className="text-2xl font-black mb-4">Free Parking Available</h4>
              <p className="font-bold opacity-80 mb-6">Our studio provides easy parking for all clients during their photo sessions.</p>
              <div className="flex items-center gap-2 font-black uppercase tracking-widest text-[10px]">
                <Sparkles className="w-4 h-4" /> 
                Premium Experience
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-8 h-[500px] md:h-auto min-h-[400px] rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl relative group cursor-pointer"
          >
            <a 
              href={mapExternalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
              aria-label="View on Google Maps"
            >
              <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/5 transition-colors duration-500" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md px-8 py-4 rounded-full border border-white/10 text-white font-bold flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-2xl">
                <MousePointer2 className="w-5 h-5 text-[#D4AF37]" />
                Click to View Full Map
              </div>
            </a>
            
            <iframe
              src={mapEmbedUrl}
              className="w-full h-full border-0 grayscale invert contrast-125 opacity-70 group-hover:opacity-90 transition-opacity duration-500"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Location Map"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;