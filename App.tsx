import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import ToolsSection from './components/ToolsSection';
import TheMachine from './components/TheMachine';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GrowthSimulator from './components/GrowthSimulator';
import LivePulse from './components/LivePulse';
import LegalHub from './components/LegalHub';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'cases' | 'calculator' | 'legal'>('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Scroll Progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // God Cursor Logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navigateTo = (view: 'home' | 'cases' | 'calculator' | 'legal') => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen bg-space-950 text-white selection:bg-teal-500/30 selection:text-teal-200 font-sans relative cursor-none md:cursor-auto">
      
      {/* --- GOD CURSOR (Spotlight) --- */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.07), transparent 40%)`
        }}
      />
      <div 
        className="pointer-events-none fixed inset-0 z-50 mix-blend-screen hidden md:block"
        style={{
            background: `radial-gradient(2px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.8), transparent 100%)`
        }}
      />

      {/* --- SCROLL PROGRESS --- */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* --- LIVE PULSE (FOMO) --- */}
      {currentView !== 'legal' && <LivePulse />}

      <Header onNavigate={navigateTo} currentView={currentView} />
      
      <main className="relative z-10">
        {currentView === 'home' ? (
          <>
            <Hero onNavigate={navigateTo} />
            <ToolsSection onNavigate={navigateTo} />
            <TheMachine />
            <Contact />
          </>
        ) : currentView === 'cases' ? (
          <CaseStudies onBack={() => navigateTo('home')} />
        ) : currentView === 'calculator' ? (
          <GrowthSimulator onBack={() => navigateTo('home')} />
        ) : (
          <LegalHub onBack={() => navigateTo('home')} />
        )}
      </main>
      
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;