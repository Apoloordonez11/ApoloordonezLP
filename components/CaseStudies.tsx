import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, CreditCard, GraduationCap, Cpu, Bot, ArrowRight, ShieldCheck, Database, TrendingUp, Download, Zap, Lock } from 'lucide-react';

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

const CaseStudies: React.FC = () => {
  const [selectedId, setSelectedId] = useState('health');
  const selectedCase = INDUSTRIES.find(c => c.id === selectedId) || INDUSTRIES[0];

  return (
    <section id="case-studies" className="py-24 bg-space-950 relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Moving Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10">
        <motion.div 
            className="w-full h-full bg-grid-pattern"
            animate={{ backgroundPosition: ["0px 0px", "0px 40px"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
                                    ? `bg-space-900 ${ind.borderColor} border shadow-[0_0_15px_rgba(0,0,0,0.5)]` 
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

            {/* Holographic Main Display */}
            <div className="lg:col-span-8 relative min-h-[500px]">
                <div className="absolute inset-0 bg-space-900/80 backdrop-blur-md rounded-2xl border border-space-700/50 overflow-hidden shadow-2xl">
                    
                    {/* Top Bar Status */}
                    <div className="flex justify-between items-center p-4 border-b border-space-700/50 bg-space-950/50">
                        <div className="flex gap-2">
                             <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500"></div>
                             <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500"></div>
                             <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500"></div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-[10px] font-mono text-slate-500">ENCRYPTION: AES-256</span>
                            <div className="flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/30 rounded text-teal-400 text-[10px] font-mono">
                                <Lock className="w-3 h-3" />
                                <span>STATUS: VERIFIED</span>
                            </div>
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedCase.id}
                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, filter: 'blur(10px)' }}
                            transition={{ duration: 0.4 }}
                            className="p-8 h-full flex flex-col relative"
                        >
                             {/* Floating Grid Element */}
                             <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${selectedCase.gradient} opacity-5 blur-[100px] pointer-events-none`} />

                             {/* Content Header */}
                             <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8 relative z-10">
                                <div>
                                    <motion.h3 
                                        className="text-3xl font-bold text-white mb-2"
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        {selectedCase.strategy}
                                    </motion.h3>
                                    <motion.p 
                                        className="text-slate-400 max-w-lg leading-relaxed"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {selectedCase.mechanic}
                                    </motion.p>
                                </div>
                                <div className="text-right">
                                    <div className="text-[10px] uppercase text-slate-500 font-mono mb-1">Impacto Auditado</div>
                                    <motion.div 
                                        className={`text-5xl font-black ${selectedCase.color}`}
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                                    >
                                        {selectedCase.stat}
                                    </motion.div>
                                    <div className="text-sm font-bold text-slate-400">{selectedCase.statLabel}</div>
                                </div>
                             </div>

                             {/* Interactive Visual Area */}
                             <div className="flex-grow bg-space-950/50 rounded-xl border border-space-800 p-6 mb-8 relative overflow-hidden group">
                                 <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                                 
                                 <div className="relative z-10 h-full flex items-end gap-2 pb-4">
                                     {/* Simple Animated Graph Simulation based on type */}
                                     {['h-1/3', 'h-1/2', 'h-2/3', 'h-3/4', 'h-full'].map((h, i) => (
                                         <motion.div
                                            key={i}
                                            initial={{ height: '0%' }}
                                            animate={{ height: selectedCase.visual === 'bar-inverted' ? ['100%', '40%'] : ['0%', i === 4 ? '90%' : `${(i+1)*15}%`] }}
                                            transition={{ duration: 1, delay: i * 0.1 }}
                                            className={`flex-1 rounded-t-sm opacity-50 ${selectedCase.color.replace('text-', 'bg-')}`}
                                         />
                                     ))}
                                 </div>
                                 
                                 {/* Overlay Data Points */}
                                 <div className="absolute top-4 left-4 font-mono text-xs text-slate-500">
                                     <div>DATA_POINTS: 1,402</div>
                                     <div>OPTIMIZATION: ACTIVE</div>
                                 </div>
                             </div>

                             {/* Bottom Tech Stack & CTA */}
                             <div className="mt-auto flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-space-800">
                                 <div className="flex items-center gap-4">
                                     <span className="text-xs font-bold text-slate-500 uppercase">Tech Stack:</span>
                                     <div className="flex gap-2">
                                         {selectedCase.stack.map(tech => (
                                             <span key={tech} className="px-2 py-1 bg-space-800 rounded text-xs text-slate-300 border border-space-700">
                                                 {tech}
                                             </span>
                                         ))}
                                     </div>
                                 </div>

                                 <a 
                                    href="#audit"
                                    className={`
                                        group flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all
                                        bg-space-800 text-white hover:bg-space-700 border border-space-700 hover:border-teal-500/50
                                    `}
                                 >
                                     <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                                     Descargar Protocolo
                                 </a>
                             </div>

                        </motion.div>
                    </AnimatePresence>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-space-800 -z-10 rounded-br-3xl" />
                <div className="absolute -top-2 -left-2 w-20 h-20 bg-space-800 -z-10 rounded-tl-3xl" />
            </div>
        </div>
      </div>
    </section>
  );
};

// Helper component for arrow
const ChevronRight = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>
);

export default CaseStudies;