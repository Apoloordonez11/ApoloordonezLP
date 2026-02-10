import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Workflow, Lock, TrendingUp, ChevronRight, Binary, Activity, ShieldAlert, ArrowLeft, LayoutDashboard, Database } from 'lucide-react';
import { INDUSTRIES } from '../constants';
import { IndustryRoadmap } from '../types';

interface ToolsSectionProps {
  onNavigate: (view: 'home' | 'cases' | 'calculator' | 'legal') => void;
}

const ToolsSection: React.FC<ToolsSectionProps> = ({ onNavigate }) => {
  const [activeTool, setActiveTool] = useState<'menu' | 'roadmap'>('menu');

  return (
    <section className="py-24 bg-space-950 relative overflow-hidden" id="tools">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-teal-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center md:text-left">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-400 mb-4">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              DEPLOYMENT_READY
           </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Armería de <span className="text-teal-400">Crecimiento</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Selecciona tu módulo de expansión. Tecnología propietaria diseñada para auditar, 
            proyectar y escalar arquitecturas de ingresos.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {activeTool === 'menu' ? (
             <ModuleGrid 
                onOpenCalculator={() => onNavigate('calculator')} 
                onOpenRoadmap={() => setActiveTool('roadmap')} 
             />
          ) : (
             <RoadmapInterface onBack={() => setActiveTool('menu')} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// --- SUB-COMPONENT: MODULE GRID (THE ARMORY) ---
const ModuleGrid = ({ onOpenCalculator, onOpenRoadmap }: { onOpenCalculator: () => void, onOpenRoadmap: () => void }) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[2000px]">
            {/* MODULE A: REACTOR */}
            <ArmoryCard 
                title="Growth Reactor"
                subtitle="SIMULADOR FINANCIERO"
                icon={Zap}
                status="SYSTEM: READY"
                accentColor="teal"
                onClick={onOpenCalculator}
                delay={0}
            >
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                     <svg className="w-full h-full" preserveAspectRatio="none">
                        <motion.path 
                            d="M0 100 Q 50 50 100 80 T 200 40 T 300 90 T 400 20"
                            fill="none"
                            stroke="#2dd4bf"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1, pathOffset: [0, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                     </svg>
                </div>
            </ArmoryCard>

            {/* MODULE B: ARCHITECT */}
            <ArmoryCard 
                title="Strategic Architect"
                subtitle="GENERADOR DE ROADMAP"
                icon={Workflow}
                status="AI AGENT: STANDBY"
                accentColor="blue"
                onClick={onOpenRoadmap}
                delay={0.1}
            >
                <div className="absolute inset-0 opacity-10 pointer-events-none font-mono text-[10px] text-blue-400 p-4 leading-3 overflow-hidden">
                    <MatrixRain />
                </div>
            </ArmoryCard>

            {/* MODULE C: AUDITOR (LOCKED) */}
            <ArmoryCard 
                title="Neural Auditor"
                subtitle="ANÁLISIS DE INFRAESTRUCTURA"
                icon={Lock}
                status="RESTRICTED ACCESS"
                accentColor="red"
                locked={true}
                delay={0.2}
            >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-10 pointer-events-none"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-red-500/10 border border-red-500/30 p-2 rounded text-red-400 text-xs font-mono flex items-center gap-2">
                        <ShieldAlert className="w-4 h-4" />
                        REQUIRES_PARTNER_AUTH
                    </div>
                </div>
            </ArmoryCard>
        </div>
    )
}

// --- SUB-COMPONENT: ROADMAP INTERFACE ---
const RoadmapInterface = ({ onBack }: { onBack: () => void }) => {
    const [selectedIndustry, setSelectedIndustry] = useState<string>('');
    const [roadmap, setRoadmap] = useState<IndustryRoadmap | null>(null);

    const generateRoadmap = (industryName: string) => {
        setSelectedIndustry(industryName);
        const found = INDUSTRIES.find(i => i.industry === industryName);
        setRoadmap(found || null);
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full bg-space-900/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
        >
            <div className="p-8 md:p-12">
                <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-white mb-8 transition-colors text-sm font-mono group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    ABORTAR_SECUENCIA
                </button>

                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400 border border-blue-500/30">
                        <LayoutDashboard className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white">Strategic Architect <span className="text-blue-500 text-sm font-mono ml-2">v1.0</span></h3>
                        <p className="text-slate-400 text-sm">Selecciona parámetros de industria para generar roadmap trimestral.</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-12">
                    {INDUSTRIES.map((ind) => (
                        <button
                            key={ind.industry}
                            onClick={() => generateRoadmap(ind.industry)}
                            className={`
                                relative px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border
                                ${selectedIndustry === ind.industry 
                                    ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]' 
                                    : 'bg-space-950 border-space-800 text-slate-500 hover:border-slate-600 hover:text-slate-300'}
                            `}
                        >
                            {ind.industry}
                            {selectedIndustry === ind.industry && (
                                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode='wait'>
                    {roadmap ? (
                        <motion.div
                            key={roadmap.industry}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="grid md:grid-cols-3 gap-6"
                        >
                            <RoadmapCard quarter="Q1" data={roadmap.phases.q1} color="teal" delay={0} />
                            <RoadmapCard quarter="Q2" data={roadmap.phases.q2} color="blue" delay={0.1} />
                            <RoadmapCard quarter="Q3" data={roadmap.phases.q3} color="purple" delay={0.2} />
                        </motion.div>
                    ) : (
                        <div className="h-64 flex flex-col items-center justify-center border-2 border-dashed border-space-800 rounded-xl text-slate-700 bg-space-950/50">
                            <Binary className="w-12 h-12 mb-4 opacity-20" />
                            <span className="font-mono text-xs uppercase tracking-widest">Awaiting Input Parameters...</span>
                        </div>
                    )}
                </AnimatePresence>
            </div>
            {/* Status Footer */}
            <div className="bg-space-950 py-3 px-8 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-slate-600">
                <span>GENERATOR_STATUS: {roadmap ? 'ACTIVE' : 'IDLE'}</span>
                <span>SECURE CONNECTION</span>
            </div>
        </motion.div>
    )
}

const RoadmapCard = ({ quarter, data, color, delay }: { quarter: string, data: any, color: string, delay: number }) => {
    const colors: any = {
        teal: 'border-teal-500/50 text-teal-400 bg-teal-500/10',
        blue: 'border-blue-500/50 text-blue-400 bg-blue-500/10',
        purple: 'border-purple-500/50 text-purple-400 bg-purple-500/10',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            className={`bg-space-950 border-t-2 ${colors[color].split(' ')[0]} p-6 rounded-b-xl relative overflow-hidden`}
        >
            <div className={`absolute top-0 right-0 px-3 py-1 rounded-bl-xl text-xs font-bold ${colors[color]}`}>
                {quarter}
            </div>
            <div className="mb-4">
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Focus Principal</div>
                <h4 className="font-bold text-white text-lg">{data.title}</h4>
            </div>
            <div className="space-y-4">
                <div>
                    <span className="text-xs text-slate-500 block mb-1">Estrategia</span>
                    <p className="text-sm text-slate-300">{data.focus}</p>
                </div>
                <div>
                    <span className="text-xs text-slate-500 block mb-1">Tecnología</span>
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-white/5 p-2 rounded border border-white/5">
                        <Database className="w-3 h-3" />
                        {data.tech}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

// --- SUB-COMPONENT: ARMORY CARD (THE HOLOGRAPHIC MODULE) ---
const ArmoryCard = ({ title, subtitle, icon: Icon, status, accentColor, onClick, locked, children, delay }: any) => {
    const colors: any = {
        teal: { border: 'group-hover:border-teal-500/50', glow: 'group-hover:shadow-teal-500/20', text: 'text-teal-400', bg: 'bg-teal-500' },
        blue: { border: 'group-hover:border-blue-500/50', glow: 'group-hover:shadow-blue-500/20', text: 'text-blue-400', bg: 'bg-blue-500' },
        red: { border: 'group-hover:border-red-500/50', glow: 'group-hover:shadow-red-500/20', text: 'text-red-400', bg: 'bg-red-500' },
    };
    const c = colors[accentColor];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6 }}
            className={`
                group relative h-[420px] bg-space-900/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-500
                ${!locked ? `hover:-translate-y-2 hover:scale-[1.02] cursor-pointer ${c.border} hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]` : 'opacity-80 grayscale-[0.5]'}
            `}
            onClick={!locked ? onClick : undefined}
        >
            {/* Active Border Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 ${!locked && 'group-hover:opacity-100'} transition-opacity duration-500 pointer-events-none`} />
            
            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col p-8 z-20">
                {/* Header */}
                <div className="flex justify-between items-start mb-auto">
                    <div className={`p-3 rounded-lg bg-space-950 border border-white/10 ${c.text}`}>
                        <Icon className="w-8 h-8" />
                    </div>
                    <div className="text-[10px] font-mono tracking-widest text-slate-500 border border-white/5 px-2 py-1 rounded bg-space-950/50">
                        {status}
                    </div>
                </div>

                {/* Main Text */}
                <div className="mb-8">
                    <h3 className={`text-2xl font-black text-white mb-2 transition-all duration-300 ${!locked && 'group-hover:tracking-wide'}`}>
                        {title}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">{subtitle}</p>
                </div>

                {/* Action Trigger */}
                <div className="mt-auto">
                    <button className={`
                        w-full py-4 text-sm font-bold uppercase tracking-widest relative overflow-hidden transition-all
                        ${locked 
                            ? 'bg-space-950 text-slate-600 border border-space-800 cursor-not-allowed' 
                            : `bg-white text-space-950 hover:bg-${accentColor}-400 hover:text-white`}
                    `}
                    style={{ clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)' }}
                    >
                         {locked ? 'ACCESS DENIED' : (
                             <span className="flex items-center justify-center gap-2">
                                 INITIALIZE <ChevronRight className="w-4 h-4" />
                             </span>
                         )}
                    </button>
                </div>
            </div>

            {/* Visual Layer (Children) */}
            <div className="absolute inset-0 z-0">
                {children}
            </div>

            {/* Hover Glow (Background) */}
            {!locked && (
                <div className={`absolute -inset-20 bg-gradient-to-tr from-${accentColor}-500/20 to-transparent opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 pointer-events-none`} />
            )}
        </motion.div>
    );
}

const MatrixRain = () => {
    return (
        <div className="leading-none opacity-30 break-all">
            {Array.from({ length: 400 }).map((_, i) => (
                <span key={i} style={{ opacity: Math.random() }}>{Math.random() > 0.5 ? '1' : '0'} </span>
            ))}
        </div>
    )
}

export default ToolsSection;