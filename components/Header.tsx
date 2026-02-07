import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-space-950/90 backdrop-blur-md border-b border-space-800 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter text-white">
          Apol<span className="text-teal-400">∞</span>rdonez
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#tools" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Herramientas</a>
          <a href="#roadmap" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Metodología</a>
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Casos de Éxito</a>
          <a href="#audit" className="px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-medium transition-all">
            Agendar Diagnóstico
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-space-900 border-b border-space-800 p-6 flex flex-col gap-4">
          <a href="#tools" className="text-slate-300" onClick={() => setMobileMenuOpen(false)}>Herramientas</a>
          <a href="#roadmap" className="text-slate-300" onClick={() => setMobileMenuOpen(false)}>Metodología</a>
          <a href="#audit" className="text-teal-400 font-bold" onClick={() => setMobileMenuOpen(false)}>Agendar Diagnóstico</a>
        </div>
      )}
    </header>
  );
};

export default Header;
