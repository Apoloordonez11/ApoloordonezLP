import React from 'react';
import { Linkedin, Github } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: 'home' | 'cases' | 'calculator' | 'legal') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-space-950 pt-20 pb-10 border-t border-space-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
              Apol<span className="text-teal-500">∞</span>rdonez
            </h2>
            <p className="text-slate-500 text-sm max-w-xs">
              Estrategia Digital Full Stack & Arquitectura de Soluciones IA.
            </p>
          </div>
          <div className="flex gap-6">
            <a 
              href="https://www.linkedin.com/in/apoloordonez" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/Apoloordonez11" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-space-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Christopher Ordoñez. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button onClick={() => onNavigate('legal')} className="hover:text-slate-400 transition-colors">Privacidad & Datos</button>
            <button onClick={() => onNavigate('legal')} className="hover:text-slate-400 transition-colors">Términos de Servicio</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;