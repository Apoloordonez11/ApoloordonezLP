import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Zap, Play } from 'lucide-react';

interface HeroProps {
  onNavigate: (view: 'home' | 'cases' | 'calculator' | 'legal') => void;
}

// Magnetic Button Component
const MagneticButton = ({ children, className, onClick, href }: any) => {
    const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouse = (e: React.MouseEvent) => {
      const { clientX, clientY } = e;
      // @ts-ignore
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX * 0.15, y: middleY * 0.15 });
    };
  
    const reset = () => {
      setPosition({ x: 0, y: 0 });
      setIsHovered(false);
    };
  
    const content = (
      <>
         <span className="relative z-10 flex items-center justify-center gap-2">
            {children}
         </span>
         {isHovered && (
             <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-0 bg-white/20 blur-md rounded-lg"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
             />
         )}
      </>
    );

    const commonProps = {
        ref: ref as any,
        onMouseMove: handleMouse,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: reset,
        onClick,
        className: `relative overflow-hidden transition-all duration-300 ${className}`,
        style: { transform: `translate(${position.x}px, ${position.y}px)` }
    };

    if (href) {
        return <a href={href} target="_blank" rel="noopener noreferrer" {...commonProps}>{content}</a>;
    }

    return <button {...commonProps}>{content}</button>;
};

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-space-950 pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-teal-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        <div className="flex flex-col items-center">
            {/* System Badge */}
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-mono mb-8 animate-pulse"
             >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                SYSTEM READY // DOMINATION MODE
             </motion.div>

            {/* Headline Line 1 - The Hook */}
            <motion.h1 
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-2 leading-none"
            >
                Dominio de Mercado.
            </motion.h1>

            {/* Headline Line 2 - The Promise */}
            <motion.h1 
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 drop-shadow-[0_0_30px_rgba(0,210,200,0.3)] mb-8 leading-tight"
            >
                Matemáticamente Inevitable.
            </motion.h1>

            {/* Subtitle - The Pain & Cure */}
            <motion.p
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed mb-12"
            >
                La suerte no es una estrategia. Instalamos la arquitectura de Inteligencia Artificial que convierte tu caos operativo en crecimiento perpetuo.
            </motion.p>

            {/* Buttons - Apex Controls */}
            <motion.div
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
                {/* Primary Button */}
                <MagneticButton
                    href="https://9000-firebase-studio-1770326908424.cluster-r7kbxfo3fnev2vskbkhhphetq6.cloudworkstations.dev"
                    className="group px-8 py-4 bg-teal-500 text-space-950 font-black rounded-xl hover:shadow-[0_0_20px_#00d2c8] hover:scale-105 transition-all duration-300"
                >
                    <Zap className="w-5 h-5 fill-current" />
                    INICIAR PROTOCOLO
                </MagneticButton>

                {/* Secondary Button */}
                <MagneticButton
                    onClick={() => onNavigate('calculator')}
                    className="group px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md text-white font-medium rounded-xl hover:border-teal-500/50 hover:text-white transition-all duration-300"
                >
                    <Play className="w-5 h-5 group-hover:fill-current" />
                    Ver Simulación de Futuro
                </MagneticButton>
            </motion.div>
        </div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2"
        >
            <span className="text-xs uppercase tracking-widest font-mono opacity-50">Scroll to Decrypt</span>
            <ChevronDown className="w-5 h-5 animate-bounce text-teal-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;