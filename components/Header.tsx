import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket, Terminal, Activity, Trophy, ChevronRight, Lock, Zap, LayoutGrid } from 'lucide-react';

interface HeaderProps {
  onNavigate: (view: 'home' | 'cases' | 'calculator') => void;
  currentView: 'home' | 'cases' | 'calculator';
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHoveringLaunch, setIsHoveringLaunch] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const appUrl = "https://9000-firebase-studio-1770326908424.cluster-r7kbxfo3fnev2vskbkhhphetq6.cloudworkstations.dev";

  const handleMobileNav = (view: 'home' | 'cases') => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-white/5 ${
        scrolled 
          ? 'bg-space-950/80 backdrop-blur-xl py-2 shadow-2xl shadow-teal-900/10' 
          : 'bg-transparent py-4'
      }`}
    >
      {/* System Ticker - Desktop Only */}
      <div className="hidden lg:flex justify-between px-6 mb-2 text-[10px] font-mono text-teal-500/40 tracking-widest uppercase">
         <div className="flex gap-4">
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span> SYSTEM: ONLINE</span>
            <span>v.2.4.0 STABLE</span>
         </div>
         <div className="flex gap-4">
            <span>AI AGENTS: ACTIVE</span>
            <span>MEMBERS: 1,242</span>
         </div>
      </div>

      <div className="container mx-auto px-6 flex justify-between items-center relative">
        
        {/* LOGO: Al hacer clic, vuelve al HOME */}
        <div className="relative z-20 cursor-pointer" onClick={() => onNavigate('home')}>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tighter flex items-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-teal-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                  Apol
                </span>
                <motion.span 
                  className="mx-0.5 text-teal-400 relative"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(45, 212, 191, 0.4)", // Glow suave
                      "0 0 25px rgba(45, 212, 191, 0.9)", // Glow intenso
                      "0 0 10px rgba(45, 212, 191, 0.4)"  // Retorno
                    ],
                    scale: [1, 1.05, 1],
                    filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"]
                  }}
                  transition={{
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    filter: "drop-shadow(0 2px 0px rgba(0,0,0,0.5))" 
                  }}
                >
                  ∞
                </motion.span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-teal-400 to-teal-500 drop-shadow-[0_0_15px_rgba(20,184,166,0.4)]">
                  rdonez
                </span>
            </h1>
        </div>

        {/* Desktop Nav - The Bridge */}
        <nav className="hidden md:flex gap-1 items-center bg-space-900/50 p-1 rounded-full border border-white/5 backdrop-blur-sm">
          {/* Botón Home/Soluciones */}
          <button 
            onClick={() => onNavigate('home')} 
            className={`px-5 py-2 text-sm font-medium transition-colors rounded-full flex items-center gap-2 ${currentView === 'home' ? 'text-white bg-white/10' : 'text-slate-400 hover:text-white'}`}
          >
             <LayoutGrid className="w-3 h-3" />
             Soluciones
          </button>
          
          {/* Botón Casos de Estudio */}
          <button 
            onClick={() => onNavigate('cases')} 
            className={`px-5 py-2 text-sm font-medium transition-colors rounded-full flex items-center gap-2 ${currentView === 'cases' ? 'text-white bg-white/10' : 'text-slate-400 hover:text-white'}`}
          >
             <Trophy className="w-3 h-3" />
             Casos de Estudio
          </button>

          {/* Enlace Externo Seguro */}
          <a 
            href={appUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-5 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-2 relative group hover:bg-white/5 rounded-full"
          >
             <Activity className="w-3 h-3" />
             Comunidad
             <span className="absolute top-2 right-1 flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal-500"></span>
             </span>
          </a>
        </nav>

        {/* Action Zone - The Launchpad */}
        <div className="hidden md:flex items-center gap-4">
            {/* Entry 1: Audit */}
            <button 
                onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth'}), 100); }} 
                className="text-xs font-mono text-slate-400 hover:text-teal-400 transition-colors border-b border-transparent hover:border-teal-500/50 pb-0.5"
            >
                Agendar Diagnóstico
            </button>

            {/* Entry 2: Launch Console (Primary) */}
            <motion.a
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
                onHoverStart={() => setIsHoveringLaunch(true)}
                onHoverEnd={() => setIsHoveringLaunch(false)}
                className="relative group flex items-center gap-3 px-6 py-2.5 bg-teal-500 text-space-950 font-bold text-sm rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(0,210,200,0.3)]"
            >
                <div className="relative z-10 flex items-center gap-2">
                    <Terminal className="w-4 h-4" />
                    <span>LAUNCH CONSOLE</span>
                </div>
                
                {/* Shimmer Effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent z-0"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear", delay: 1 }}
                />
            </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Animated Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-teal-500/50 to-transparent animate-[shimmer_3s_infinite_linear] opacity-50" />
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-space-950 border-b border-space-800 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-6">
                
                <button 
                    onClick={() => handleMobileNav('home')}
                    className="flex items-center justify-between text-lg text-slate-300 font-medium border-b border-space-800 pb-4 w-full"
                >
                    <span className="flex items-center gap-3">
                         <LayoutGrid className="w-5 h-5 text-teal-500" />
                         Soluciones
                    </span>
                </button>

                <button 
                    onClick={() => handleMobileNav('cases')}
                    className="flex items-center justify-between text-lg text-slate-300 font-medium border-b border-space-800 pb-4 w-full"
                >
                    <span className="flex items-center gap-3">
                         <Trophy className="w-5 h-5 text-teal-500" />
                         Casos de Estudio
                    </span>
                </button>

                <a 
                    href={appUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-lg text-slate-300 font-medium border-b border-space-800 pb-4 w-full"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <span className="flex items-center gap-3">
                        <Activity className="w-5 h-5 text-teal-500" />
                        Comunidad
                    </span>
                    <span className="text-xs bg-teal-500/20 text-teal-400 px-2 py-1 rounded animate-pulse">LIVE</span>
                </a>
                
                <div className="grid gap-4 mt-2">
                    <button 
                        onClick={() => { handleMobileNav('home'); setTimeout(() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth'}), 100); }} 
                        className="w-full py-4 rounded-lg border border-space-700 text-center text-slate-400 font-medium hover:bg-space-900 transition-colors"
                    >
                        Agendar Diagnóstico
                    </button>
                    <a 
                        href={appUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 rounded-lg bg-teal-500 text-space-950 font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20"
                    >
                        <Zap className="w-5 h-5 fill-current" />
                        LAUNCH CONSOLE
                    </a>
                </div>

                <div className="text-[10px] font-mono text-center text-slate-600 mt-4">
                    SYSTEM STATUS: ONLINE // SECURE CONNECTION
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;