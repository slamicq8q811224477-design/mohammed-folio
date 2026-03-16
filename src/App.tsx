import React from 'react';
import { Toaster } from 'sonner';
import { motion, useScroll, useSpring } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CameraInfo from './components/CameraInfo';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import WorkingHours from './components/WorkingHours';
import MapLocation from './components/MapLocation';
import CustomerReviews from './components/CustomerReviews';
import GalleryPreview from './components/GalleryPreview';
import WeddingPage from './components/WeddingPage';
import PassportPage from './components/PassportPage';
import GraduationPage from './components/GraduationPage';
import './i18n';

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#D4AF37] z-[60] origin-left shadow-[0_0_10px_#D4AF37]"
        style={{ scaleX }}
      />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <WorkingHours />
      <CameraInfo />
      <GalleryPreview />
      <div id="gallery">
        <Gallery />
      </div>
      <CustomerReviews />
      <Testimonials />
      <MapLocation />
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <main className="min-h-screen bg-[#050505] selection:bg-[#D4AF37] selection:text-slate-950 scroll-smooth antialiased overflow-x-hidden">
        {/* Dynamic Background Gradients */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[#050505]" />
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#D4AF37]/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#D4AF37]/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)]" />
        </div>

        <Toaster position="top-center" theme="dark" richColors closeButton />
        
        <Navbar />
        <SideMenu />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wedding" element={<WeddingPage />} />
          <Route path="/passport" element={<PassportPage />} />
          <Route path="/graduation" element={<GraduationPage />} />
        </Routes>

        <Footer />
        <WhatsAppButton />
      </main>
    </Router>
  );
}

export default App;