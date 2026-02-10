import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useTransform, animate, useMotionValue } from 'framer-motion';
import { X, ArrowRight, Zap, Bot, BrainCircuit, TrendingUp, Lock, Activity, Sparkles } from 'lucide-react';

// --- TIPOS ---
type ProtocolType = 'A' | 'B' | 'C';

interface ProtocolData {
  id: ProtocolType;
  name: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  baseColor: string; // Hex para sombras
  gradient: string; // Tailwind classes
  shadow: string; // Tailwind shadow class
  multiplier: (rev: number, ads: number) => number;
  cta: string;
}

const PROTOCOLS: ProtocolData[] = [
  {
    id: 'A',
    name: 'NEURAL ACQUISITION',
    tagline: 'ROI FOCUS',
    description: 'Optimización algorítmica de pauta. Reducción de CAC y escalado de tráfico cualificado.',
    icon: Zap,
    baseColor: '#3b82f6',
    gradient: 'from-blue-500 via-indigo-500 to-blue-600',
    shadow: 'shadow-blue-500/50',
    multiplier: (rev, ads) => rev + (ads * 3.8),
    cta: 'ACTIVAR MOTOR',
  },
  {
    id: 'B',
    name: 'AUTONOMOUS AGENTS',
    tagline: 'ZERO FRICTION',
    description: 'Fuerza de ventas IA 24/7. Nutre, califica y cierra prospectos sin intervención humana.',
    icon: Bot,
    baseColor: '#14b8a6',
    gradient: 'from-teal-400 via-emerald-400 to-teal-500',
    shadow: 'shadow-teal-500/50',
    multiplier: (rev, ads) => rev + (ads * 7.5) + (rev * 0.2),
    cta: 'DESPLEGAR AGENTES',
  },
  {
    id: 'C',
    name: 'PREDICTIVE VISIONARY',
    tagline: 'GOD MODE',
    description: 'Arquitectura de Ecosistema Completo. Predicción de LTV y dominio total de mercado.',
    icon: BrainCircuit,
    baseColor: '#d946ef',
    gradient: 'from-fuchsia-500 via-purple-500 to-pink-500',
    shadow: 'shadow-fuchsia-500/50',
    multiplier: (rev, ads) => (rev * 1.5) + (ads * 12) + (rev * 0.5),
    cta: 'INICIAR ARQUITECTURA',
  },
];

// --- COMPONENTE: CONTADOR JACKPOT ---
const JackpotCounter = ({ value, color }: { value: number, color: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 200 });
    const rounded = useTransform(springValue, (latest) => Math.floor(latest).toLocaleString());
  
    useEffect(() => {
      motionValue.set(value);
    }, [value, motionValue]);
  
    return <motion.span ref={ref} className="tabular-nums" style={{ color: 'white' }}>{rounded}</motion.span>;
};

// --- COMPONENTE: SLIDER DE PLASMA 4D ---
const PlasmaSlider = ({ label, value, min, max, onChange, protocol }: any) => {
    const percentage = ((value - min) / (max - min)) * 100;
    
    return (
      <div className="mb-10 group">
        <div className="flex justify-between items-end mb-4">
          <label className="text-xs font-mono text-slate-400 uppercase tracking-[0.2em]">{label}</label>
          <div className="font-mono text-xl text-white font-bold tracking-widest bg-black/30 px-3 py-1 rounded border border-white/10">
            ${value.toLocaleString()}
          </div>
        </div>
        
        <div className="relative h-8 w-full flex items-center cursor-pointer touch-none">
          <input
            type="range" min={min} max={max} value={value} onChange={(e) => onChange(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 z-50 cursor-ew-resize"
          />
          
          {/* Track Base */}
          <div className="absolute inset-0 h-2 bg-space-900 rounded-full border border-white/5 overflow-hidden">
             {/* Relleno Líquido */}
             <motion.div 
               className={`h-full bg-gradient-to-r ${protocol.gradient} opacity-80`}
               style={{ width: `${percentage}%` }}
               animate={{ filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)'] }}
               transition={{ duration: 2, repeat: Infinity }}
             />
          </div>
  
          {/* Thumb de Energía */}
          <motion.div 
              className={`absolute h-8 w-4 rounded-sm bg-white shadow-[0_0_20px_currentColor] z-20 border-x border-white/50`}
              style={{ left: `${percentage}%`, color: protocol.baseColor, x: '-50%' }}
              whileHover={{ scaleY: 1.2, scaleX: 1.1 }}
              whileTap={{ scale: 0.9 }}
          >
              <div className="absolute inset-0 bg-white animate-pulse mix-blend-overlay"></div>
          </motion.div>
  
          {/* Glow debajo del thumb */}
          <div 
             className="absolute h-12 w-12 rounded-full blur-xl opacity-40 pointer-events-none transition-all duration-300"
             style={{ left: `${percentage}%`, backgroundColor: protocol.baseColor, transform: 'translate(-50%, 0)' }}
          />
        </div>
      </div>
    );
};

// --- COMPONENTE PRINCIPAL ---
interface GrowthSimulatorProps {
  onBack: () => void;
}

const GrowthSimulator: React.FC<GrowthSimulatorProps> = ({ onBack }) => {
  const [revenue, setRevenue] = useState(25000);
  const [adSpend, setAdSpend] = useState(5000);
  const [selectedId, setSelectedId] = useState<ProtocolType>('B');
  const [isProcessing, setIsProcessing] = useState(false);

  const activeP = PROTOCOLS.find(p => p.id === selectedId) || PROTOCOLS[1];
  
  // Cálculos
  const projectedMonthly = activeP.multiplier(revenue, adSpend);
  const projectedAnnual = projectedMonthly * 12;
  const currentAnnual = revenue * 12;
  const growth = ((projectedAnnual - currentAnnual) / currentAnnual) * 100;

  const handleAction = () => {
    setIsProcessing(true);
    // Simular carga y redirección
    setTimeout(() => {
        setIsProcessing(false);
        // Aquí iría la redirección real
        alert("PROTOCOL INITIATED. WELCOME TO APOLO OS.");
    }, 2000);
  };

  return (
    <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#050506] flex flex-col md:flex-row overflow-hidden"
    >
        {/* FONDO AMBIENTAL 4D */}
        <motion.div 
            className="absolute inset-0 opacity-20 pointer-events-none transition-colors duration-700"
            style={{ background: `radial-gradient(circle at 70% 30%, ${activeP.baseColor}, transparent 60%)` }}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

        {/* --- PANEL IZQUIERDO: CONTROLES --- */}
        <div className="relative w-full md:w-[450px] bg-space-950/80 backdrop-blur-2xl border-r border-white/5 flex flex-col h-full z-20">
            {/* Header */}
            <div className="p-8 border-b border-white/5">
                <button onClick={onBack} className="mb-6 flex items-center gap-2 text-xs text-slate-500 hover:text-white transition-colors uppercase tracking-widest font-mono group">
                    <div className="p-1 border border-slate-700 rounded-full group-hover:border-white group-hover:bg-white/10"><X className="w-3 h-3" /></div>
                    Abortar Simulación
                </button>
                <h2 className="text-3xl font-black text-white mb-1 tracking-tight">GROWTH<br/><span className={`text-transparent bg-clip-text bg-gradient-to-r ${activeP.gradient}`}>REACTOR_v4</span></h2>
            </div>

            {/* Inputs Scrollable */}
            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                <PlasmaSlider label="Ingreso Mensual Actual" value={revenue} min={1000} max={100000} onChange={setRevenue} protocol={activeP} />
                <PlasmaSlider label="Inversión Ads (Mes)" value={adSpend} min={500} max={50000} onChange={setAdSpend} protocol={activeP} />

                <div className="mt-12">
                    <label className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] mb-6 block">Protocolo de Reacción</label>
                    <div className="grid gap-4">
                        {PROTOCOLS.map((p) => {
                            const isActive = selectedId === p.id;
                            return (
                                <button
                                    key={p.id}
                                    onClick={() => setSelectedId(p.id)}
                                    className={`relative p-4 rounded-xl text-left border transition-all duration-300 overflow-hidden group
                                        ${isActive ? `border-transparent bg-space-900 shadow-[0_0_30px_-10px_${p.baseColor}]` : 'border-white/5 hover:border-white/10 bg-transparent'}
                                    `}
                                >
                                    {isActive && (
                                        <div className={`absolute inset-0 bg-gradient-to-r ${p.gradient} opacity-10`} />
                                    )}
                                    <div className="flex items-center gap-4 relative z-10">
                                        <div className={`p-2 rounded-lg ${isActive ? `bg-gradient-to-br ${p.gradient} text-black shadow-lg` : 'bg-space-900 text-slate-500'}`}>
                                            <p.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h4 className={`font-bold text-sm ${isActive ? 'text-white' : 'text-slate-400'}`}>{p.name}</h4>
                                                {isActive && <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-white font-mono">{p.tagline}</span>}
                                            </div>
                                            <p className="text-xs text-slate-500 mt-1 line-clamp-2">{p.description}</p>
                                        </div>
                                    </div>
                                    {isActive && <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${p.gradient}`} />}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

        {/* --- PANEL DERECHO: VISUALIZACIÓN HOLOGRÁFICA --- */}
        <div className="relative flex-1 flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden">
            
            {/* Círculo Holográfico de Fondo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div 
                    className={`w-[500px] h-[500px] rounded-full border border-white/5 opacity-20`}
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ borderTopColor: activeP.baseColor }}
                />
                <motion.div 
                    className={`absolute w-[300px] h-[300px] rounded-full border border-white/10 opacity-30`}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    style={{ borderBottomColor: activeP.baseColor }}
                />
            </div>

            {/* Tarjeta de Resultado Principal */}
            <div className="relative z-10 w-full max-w-2xl">
                <motion.div 
                    layoutId="result-card"
                    className="bg-space-950/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden"
                >
                    {/* Brillo Superior */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${activeP.gradient}`} />
                    <div className={`absolute -top-20 -left-20 w-64 h-64 bg-${activeP.baseColor} blur-[100px] opacity-20 pointer-events-none`} />

                    <h3 className="text-sm font-mono text-slate-400 uppercase tracking-[0.3em] mb-4 flex items-center justify-center gap-2">
                        <Activity className="w-4 h-4 animate-pulse" />
                        Proyección Anual Ecosistema
                    </h3>

                    {/* JACKPOT NUMBER */}
                    <div className="relative mb-8">
                        <div className={`text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br ${activeP.gradient} drop-shadow-2xl`}>
                            $<JackpotCounter value={projectedAnnual} color={activeP.baseColor} />
                        </div>
                        <div className="text-sm md:text-lg text-emerald-400 font-mono mt-2 bg-emerald-500/10 inline-block px-4 py-1 rounded-full border border-emerald-500/20">
                            ▲ +{growth.toFixed(0)}% Crecimiento Explosivo
                        </div>
                    </div>

                    {/* Gráfico Minimalista de Comparación */}
                    <div className="h-16 w-full max-w-md mx-auto bg-space-900 rounded-lg overflow-hidden relative mb-8 flex items-end">
                        <div className="w-1/2 h-full absolute left-0 bottom-0 bg-slate-800/30 border-r border-white/10 flex items-center justify-center text-xs text-slate-500 font-mono">ACTUAL</div>
                        <div className="w-full h-full absolute left-0 bottom-0 flex items-end">
                             <motion.div 
                                initial={{ height: '20%' }}
                                animate={{ height: '30%' }}
                                className="w-1/2 bg-slate-600/50 backdrop-blur-sm"
                             />
                             <motion.div 
                                initial={{ height: '20%' }}
                                animate={{ height: '100%' }}
                                transition={{ type: "spring", stiffness: 100 }}
                                className={`w-1/2 bg-gradient-to-t ${activeP.gradient} relative overflow-hidden`}
                             >
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                                <div className="absolute top-0 left-0 w-full h-px bg-white/50 shadow-[0_0_10px_white]"></div>
                             </motion.div>
                        </div>
                    </div>

                    {/* BOTÓN 4D */}
                    <motion.button
                        onClick={handleAction}
                        whileHover={{ scale: 1.02, boxShadow: `0 0 40px ${activeP.baseColor}40` }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isProcessing}
                        className={`
                            relative w-full py-5 rounded-xl font-black text-lg tracking-[0.2em] uppercase text-white overflow-hidden transition-all
                            bg-gradient-to-r ${activeP.gradient} ${activeP.shadow}
                        `}
                    >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            {isProcessing ? <Activity className="animate-spin" /> : <Sparkles className="w-5 h-5" />}
                            {isProcessing ? 'INICIALIZANDO...' : activeP.cta}
                        </span>
                        
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                    </motion.button>

                    <p className="text-xs text-slate-500 mt-6 max-w-xs mx-auto">
                        *Estimación basada en data histórica de clientes Apolo con configuraciones similares.
                    </p>
                </motion.div>
            </div>
        </div>
    </motion.div>
  );
};

export default GrowthSimulator;