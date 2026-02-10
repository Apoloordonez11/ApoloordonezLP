import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Activity, CreditCard, GraduationCap, Cpu, Bot, ShieldCheck, Download, ChevronRight, Lock, ArrowLeft } from 'lucide-react';

interface CaseStudiesProps {
  onBack: () => void;
}

const INDUSTRIES = [
  {
    id: 'health',
    label: 'Health Tech',
    sub: 'Bio-Data Growth',
    icon: Activity,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500',
    gradient: 'from-emerald-500',
    strategy: 'Predictive Patient Acquisition',
    mechanic: 'Uso de IA para predecir LTV de pacientes antes de la primera consulta.',
    stat: '+400%',
    statLabel: 'ROI (Retorno de Inversión)',
    stack: ['Python', 'HIPAA Compliant CRM'],
    visual: 'chart-line'
  },
  {
    id: 'fintech',
    label: 'Fin Tech',
    sub: 'Algorithmic Trust',
    icon: CreditCard,
    color: 'text-blue-400',
    borderColor: 'border-blue-500',
    gradient: 'from-blue-500',
    strategy: 'Zero-Friction Onboarding',
    mechanic: 'Automatización de KYC y nurturing basado en comportamiento financiero.',
    stat: '-60%',
    statLabel: 'CAC (Costo Adquisición)',
    stack: ['Plaid API', 'HubSpot'],
    visual: 'bar-inverted'
  },
  {
    id: 'edutech',
    label: 'Edu Tech',
    sub: 'Retention Loops',
    icon: GraduationCap,
    color: 'text-amber-400',
    borderColor: 'border-amber-500',
    gradient: 'from-amber-500',
    strategy: 'AI-Driven Learning Paths',
    mechanic: 'Agentes que reactivan estudiantes dormidos con contenido personalizado.',
    stat: '85%',
    statLabel: 'Tasa de Retención (vs 15%)',
    stack: ['OpenAI', 'LMS Custom'],
    visual: 'chart-curve'
  },
  {
    id: 'aitech',
    label: 'AI Tech',
    sub: 'SaaS Velocity',
    icon: Cpu,
    color: 'text-purple-400',
    borderColor: 'border-purple-500',
    gradient: 'from-purple-500',
    strategy: 'Product-Led Growth (PLG) Turbo',
    mechanic: 'Conversión de usuarios Freemium a Paid mediante análisis de tokens.',
    stat: 'EXP',
    statLabel: 'Crecimiento MRR',
    stack: ['Mixpanel', 'Stripe Webhooks'],
    visual: 'exponential'
  },
  {
    id: 'robot',
    label: 'Robot Tech',
    sub: 'B2B Engineering',
    icon: Bot,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500',
    gradient: 'from-cyan-500',
    strategy: 'Digital Twin ABM',
    mechanic: 'Identificación de compradores corporativos y demos técnicas automatizadas.',
    stat: '$5M+',
    statLabel: 'Pipeline Generado',
    stack: ['LinkedIn SN', 'Apollo.io', 'Bots'],
    visual: 'bar-vertical'
  }
];

// --- 3D TILT CARD COMPONENT ---
const TiltCard = ({ children, gradient }: { children?: React.ReactNode, gradient: string }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full h-full rounded-2xl transition-all duration-200 ease-linear"
        >
            {/* Main Card Background with Glassmorphism */}
            <div 
                className="absolute inset-0 bg-space-900/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden" 
                style={{ transform: "translateZ(0px)" }}
            >
                 {/* Holo Foil Gradient that moves opposite to mouse */}
                 <motion.div 
                    className={`absolute -inset-full opacity-30 bg-gradient-to-tr from-transparent via-white to-transparent blur-3xl`}
                    style={{
                        x: useTransform(mouseX, [-0.5, 0.5], ["100%", "-100%"]),
                        y: useTransform(mouseY, [-0.5, 0.5], ["100%", "-100%"]),
                        background: `linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)` 
                    }}
                 />
                 {children}
            </div>

            {/* Floating Border (Parallax) */}
            <div 
                className={`absolute inset-0 rounded-2xl border-2 border-white/5 pointer-events-none bg-gradient-to-br ${gradient} opacity-20`}
                style={{ transform: "translateZ(20px)" }}
            />
        </motion.div>
    );
};


const CaseStudies: React.FC<CaseStudiesProps> = ({ onBack }) => {
  const [selectedId, setSelectedId] = useState('health');
  const selectedCase = INDUSTRIES.find(c => c.id === selectedId) || INDUSTRIES[0];

  return (
    <section className="py-24 bg-space-950 relative overflow-hidden min-h-screen flex flex-col">
      {/* Moving Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <motion.div 
            className="w-full h-full bg-grid-pattern"
            animate={{ backgroundPosition: ["0px 0px", "0px 40px"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-10">
        {/* Botón VOLVER AL COMANDO */}
        <button 
            onClick={onBack}
            className="mb-8 flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors group font-mono text-sm"
        >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            // BACK_TO_COMMAND_CENTER
        </button>

        <div className="mb-12 text-center md:text-left">
             <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                <ShieldCheck className="w-5 h-5 text-teal-500" />
                <span className="text-xs font-mono text-teal-400 uppercase tracking-widest">Apolo Intelligence Center</span>
             </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
                Simulador de <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Estrategia</span>
            </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 h-full">
            
            {/* Sidebar Navigation */}
            <div className="lg:col-span-4 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
                {INDUSTRIES.map((ind) => {
                    const Icon = ind.icon;
                    const isActive = selectedId === ind.id;
                    return (
                        <button
                            key={ind.id}
                            onClick={() => setSelectedId(ind.id)}
                            className={`
                                relative group flex-shrink-0 lg:w-full text-left p-4 rounded-xl border transition-all duration-300 overflow-hidden
                                ${isActive 
                                    ? `bg-space-900 ${ind.borderColor} border shadow-[0_0_15px_rgba(0,0,0,0.5)] scale-[1.02]` 
                                    : 'bg-space-950/50 border-space-800 hover:border-space-700 hover:bg-space-900'}
                            `}
                        >
                            {isActive && (
                                <motion.div 
                                    layoutId="activeGlow"
                                    className={`absolute inset-0 bg-gradient-to-r ${ind.gradient} opacity-10`} 
                                />
                            )}
                            <div className="relative z-10 flex items-center gap-4">
                                <div className={`p-2 rounded-lg ${isActive ? 'bg-space-950 shadow-inner' : 'bg-space-900'} transition-colors`}>
                                    <Icon className={`w-6 h-6 ${isActive ? ind.color : 'text-slate-500 group-hover:text-slate-300'}`} />
                                </div>
                                <div>
                                    <h4 className={`font-bold ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>{ind.label}</h4>
                                    <p className="text-xs font-mono text-slate-600 uppercase">{ind.sub}</p>
                                </div>
                                {isActive && (
                                    <motion.div 
                                        initial={{ opacity: 0, x: -10 }} 
                                        animate={{ opacity: 1, x: 0 }} 
                                        className="ml-auto"
                                    >
                                        <ChevronRight className={`w-5 h-5 ${ind.color}`} />
                                    </motion.div>
                                )}
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Holographic Main Display (The 3D Tilt Card) */}
            <div className="lg:col-span-8 relative min-h-[500px] perspective-1000">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCase.id}
                        initial={{ opacity: 0, rotateX: 20, z: -100 }}
                        animate={{ opacity: 1, rotateX: 0, z: 0 }}
                        exit={{ opacity: 0, rotateX: -20, z: -100 }}
                        transition={{ duration: 0.5 }}
                        className="h-full"
                    >
                        <TiltCard gradient={selectedCase.gradient}>
                            <div className="p-8 h-full flex flex-col relative z-20">
                                 {/* Floating Grid Element */}
                                 <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${selectedCase.gradient} opacity-10 blur-[80px] pointer-events-none`} />

                                 {/* Top Bar Status */}
                                 <div className="flex justify-between items-center pb-4 border-b border-white/5 mb-6">
                                     <div className="flex gap-2">
                                          <div className="w-2 h-2 rounded-full bg-slate-500/20 border border-slate-500"></div>
                                          <div className="w-2 h-2 rounded-full bg-slate-500/20 border border-slate-500"></div>
                                     </div>
                                     <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono text-slate-400">
                                         <Lock className="w-3 h-3" />
                                         <span>DATA ENCRYPTED</span>
                                     </div>
                                 </div>

                                 {/* Content Header */}
                                 <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8 relative z-10" style={{ transform: "translateZ(30px)" }}>
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2 shadow-black drop-shadow-lg">
                                            {selectedCase.strategy}
                                        </h3>
                                        <p className="text-slate-400 max-w-lg leading-relaxed">
                                            {selectedCase.mechanic}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] uppercase text-slate-500 font-mono mb-1">Impacto Auditado</div>
                                        <div className={`text-5xl font-black ${selectedCase.color} drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                                            {selectedCase.stat}
                                        </div>
                                        <div className="text-sm font-bold text-slate-400">{selectedCase.statLabel}</div>
                                    </div>
                                 </div>

                                 {/* Interactive Visual Area */}
                                 <div 
                                    className="flex-grow bg-black/20 rounded-xl border border-white/5 p-6 mb-8 relative overflow-hidden group shadow-inner"
                                    style={{ transform: "translateZ(10px)" }}
                                 >
                                     <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                                     
                                     <div className="relative z-10 h-full flex items-end gap-2 pb-4">
                                         {['h-1/3', 'h-1/2', 'h-2/3', 'h-3/4', 'h-full'].map((h, i) => (
                                             <motion.div
                                                key={i}
                                                initial={{ height: '0%' }}
                                                animate={{ height: selectedCase.visual === 'bar-inverted' ? ['100%', '40%'] : ['0%', i === 4 ? '90%' : `${(i+1)*15}%`] }}
                                                transition={{ duration: 1, delay: i * 0.1 }}
                                                className={`flex-1 rounded-t-sm opacity-60 ${selectedCase.color.replace('text-', 'bg-')}`}
                                             />
                                         ))}
                                     </div>
                                 </div>

                                 {/* Bottom Tech Stack & CTA */}
                                 <div 
                                    className="mt-auto flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-white/5"
                                    style={{ transform: "translateZ(20px)" }}
                                 >
                                     <div className="flex items-center gap-4">
                                         <span className="text-xs font-bold text-slate-500 uppercase">Tech Stack:</span>
                                         <div className="flex gap-2">
                                             {selectedCase.stack.map(tech => (
                                                 <span key={tech} className="px-2 py-1 bg-white/5 rounded text-xs text-slate-300 border border-white/10">
                                                     {tech}
                                                 </span>
                                             ))}
                                         </div>
                                     </div>

                                     <button 
                                        onClick={() => navigator.clipboard.writeText("Protocol Details Copied")}
                                        className={`
                                            group flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all
                                            bg-white/10 text-white hover:bg-white/20 border border-white/10 hover:border-teal-500/50
                                        `}
                                     >
                                         <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                                         Descargar Protocolo
                                     </button>
                                 </div>
                            </div>
                        </TiltCard>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;