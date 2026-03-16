import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  src: string;
  alt: string;
}

interface ImageSliderProps {
  slides: Slide[];
  interval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const [progress, setProgress] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const updateProgress = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const newProgress = Math.min((elapsed / interval) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        nextSlide();
      }
    };

    const animationFrame = setInterval(updateProgress, 50);
    timerRef.current = animationFrame;

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, interval, nextSlide]);

  const variants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.2,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.8 },
        scale: { duration: 1.5, ease: "easeOut" }
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.9,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.8 }
      }
    })
  };

  return (
    <div 
      className="relative w-full h-full overflow-hidden group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        startTimeRef.current = Date.now() - (progress / 100) * interval;
      }}
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          {/* Continuous Ken Burns effect while visible */}
          <motion.img
            src={slides[currentIndex].src}
            alt={slides[currentIndex].alt}
            className="w-full h-full object-cover origin-center"
            animate={{
              scale: [1, 1.1],
              x: [0, -10],
              y: [0, -5]
            }}
            transition={{
              duration: interval / 1000 + 1,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        <div className="absolute inset-0 border-[20px] border-black/5" />
      </div>

      {/* Interactive Controls */}
      <div className="absolute inset-0 z-20 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(212, 175, 55, 0.2)' }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white shadow-2xl transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(212, 175, 55, 0.2)' }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white shadow-2xl transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Progress Indicators with Visual Feedback */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-end gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={(e) => { e.stopPropagation(); goToSlide(index); }}
            className="group relative h-8 flex items-center justify-center px-1"
          >
            <div className={`h-1 transition-all duration-500 rounded-full overflow-hidden ${
              currentIndex === index ? 'w-12 bg-white/20' : 'w-3 bg-white/20 hover:bg-white/40'
            }`}>
              {currentIndex === index && (
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F5E6AD]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
              )}
            </div>
            {/* Tooltip or Label on Hover */}
            <span className={`absolute -top-6 text-[10px] font-black text-[#D4AF37] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}>
              Slide 0{index + 1}
            </span>
          </button>
        ))}
      </div>

      {/* Pause Indicator */}
      <AnimatePresence>
        {isPaused && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute top-8 right-8 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-black uppercase tracking-widest"
          >
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-[#D4AF37] rounded-full animate-pulse" />
              <div className="w-1 h-3 bg-[#D4AF37] rounded-full animate-pulse [animation-delay:0.2s]" />
            </div>
            Paused
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageSlider;