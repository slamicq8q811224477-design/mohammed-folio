import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton = () => {
  const whatsappNumber = "0931800688"; // Based on contact info
  const message = encodeURIComponent("Hello! I'm interested in booking a photography session at Mohammed Studio.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="fixed bottom-10 right-10 z-[100] group">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="relative"
        >
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="bg-white text-black px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest whitespace-nowrap shadow-2xl flex items-center gap-2">
              Chat on WhatsApp
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>
            <div className="absolute top-full right-6 -mt-1 border-8 border-transparent border-t-white" />
          </div>

          {/* Pulse Effect */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
          
          {/* Main Button */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 12 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_10px_40px_rgba(37,211,102,0.4)] border-4 border-white/20 transition-transform"
          >
            <MessageCircle className="w-8 h-8 md:w-10 md:h-10 fill-current" />
          </motion.a>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppButton;