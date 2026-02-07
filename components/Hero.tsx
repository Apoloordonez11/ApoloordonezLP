import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-space-950 pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-teal-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
        >
          Transformamos tu Marketing en <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            Ciencia de Datos & IA
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Deja de "comprar clics". Empieza a comprar Ingresos Exponenciales.
          Diseñamos arquitecturas de Agentes Autónomos y Embudos de Alta Conversión 
          para escalar agresivamente sin sacrificar rentabilidad.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://9000-firebase-studio-1770326908424.cluster-r7kbxfo3fnev2vskbkhhphetq6.cloudworkstations.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-teal-500 hover:bg-teal-400 text-space-950 font-bold rounded-lg transition-all flex items-center justify-center gap-2"
          >
            Ver Comunidad
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#calculator"
            className="px-8 py-4 bg-space-800 border border-space-700 hover:border-teal-500/50 text-white font-medium rounded-lg transition-all"
          >
            Calcular Potencial de Escalamiento
          </a>
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2"
        >
            <span className="text-xs uppercase tracking-widest">Scroll to Initialize</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;