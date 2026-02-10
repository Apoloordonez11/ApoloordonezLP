import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radar, Cpu, Workflow, Coins, Terminal, Zap, Database, Lock, Search } from 'lucide-react';

const PHASES = [
  {
    id: 1,
    title: "Ingesta",
    label: "High-Intent Signal",
    icon: Radar,
    color: "text-blue-400",
    bg: "bg-blue-500",
    tech: "Meta Ads / Google Ads",
    description: "Capturamos señales de alta intención mediante segmentación algorítmica, filtrando el 90% del tráfico basura antes de que toque tu CRM."
  },
  {
    id: 2,
    title: "Procesamiento",
    label: "Neural Processing",
    icon: Cpu,
    color: "text-purple-400",
    bg: "bg-purple-500",
    tech: "Python MMM + OpenAI",
    description: "Modelos predictivos analizan 50+ variables por lead (LTV potencial, urgencia, presupuesto) para priorizar oportunidades reales."
  },
  {
    id: 3,
    title: "Orquestación",
    label: "Autonomous Agents",
    icon: Workflow,
    color: "text-teal-400",
    bg: "bg-teal-500",
    tech: "n8n / Make",
    description: "Agentes autónomos ejecutan secuencias de nutrición personalizadas por WhatsApp y Email sin intervención humana."
  },
  {
    id: 4,
    title: "Resultado",
    label: "Exponential Revenue",
    icon: Coins,
    color: "text-yellow-400",
    bg: "bg-yellow-500",
    tech: "Stripe / CRM",
    description: "El sistema entrega citas agendadas y transacciones cerradas. Tu equipo de ventas solo habla con prospectos listos para comprar."
  }
];

const CONSOLE_LOGS = [
  "> Initializing Apolo_Protocol v2.4...",
  "> Analyzing traffic source: META_ADS [ID: 8492]",
  "> Signal detected: High Purchase Intent (0.98)",
  "> Filtering low-quality leads... [DONE]",
  "> Triggering 'Nurture_Sequence_Alpha'...",
  "> Agent deployed: WhatsApp personalized intro",
  "> Lead score updated: 95/100",
  "> CRM Sync: SUCCESS",
  "> Revenue Event Predicted: +$4,500 LTV"
];

const TheMachine: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Follow Effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-24 bg-space-950 border-y border-space-800 relative overflow-hidden min-h-screen flex flex-col justify-center"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none"></div>
      
      {/* Mouse Spotlight */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 210, 200, 0.15), transparent 40%)`
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Database className="w-4 h-4 text-teal-500" />
            <span className="text-xs font-mono text-teal-400 tracking-widest uppercase">The Data Refinery</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Arquitectura de <span className="text-teal-400">Crecimiento</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Transformamos el caos de datos en ingresos predecibles. Un pipeline end-to-end donde
            la IA filtra, nutre y convierte por ti.
          </p>
        </div>

        <div className="grid xl:grid-cols-12 gap-12 items-center">
          
          {/* THE PIPELINE (Visual Interactive Flow) */}
          <div className="xl:col-span-8">
            <div className="flex flex-col md:flex-row items-center justify-between relative gap-8 md:gap-0">
              
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-space-800 -z-10 -translate-y-1/2 overflow-hidden rounded-full">
                 <motion.div 
                    className="w-full h-full bg-gradient-to-r from-blue-500 via-teal-500 to-yellow-500 opacity-50"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                 />
              </div>

              {PHASES.map((phase, index) => {
                const Icon = phase.icon;
                const isActive = activePhase === phase.id;
                const isDimmed = activePhase !== null && activePhase !== phase.id;

                return (
                  <div key={phase.id} className="relative group w-full md:w-auto flex flex-col items-center">
                    {/* Vertical Connector (Mobile) */}
                    {index !== PHASES.length - 1 && (
                        <div className="md:hidden absolute top-full left-1/2 w-1 h-8 bg-space-800 -translate-x-1/2 overflow-hidden z-0">
                             <motion.div 
                                className="w-full h-full bg-teal-500 opacity-50"
                                animate={{ y: ['-100%', '100%'] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                             />
                        </div>
                    )}

                    {/* Node */}
                    <motion.div
                      onMouseEnter={() => setActivePhase(phase.id)}
                      onMouseLeave={() => setActivePhase(null)}
                      animate={{ 
                        scale: isActive ? 1.1 : 1,
                        opacity: isDimmed ? 0.3 : 1,
                        filter: isActive ? 'drop-shadow(0 0 15px rgba(0, 210, 200, 0.5))' : 'none'
                      }}
                      className={`
                        w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-space-900 border-2 ${isActive ? 'border-teal-400' : 'border-space-700'}
                        flex items-center justify-center cursor-pointer relative z-10 transition-colors duration-300
                      `}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
                      <Icon className={`w-8 h-8 md:w-10 md:h-10 ${phase.color}`} />
                      
                      {/* Pulse Effect */}
                      {isActive && (
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${phase.bg} opacity-75`}></span>
                          <span className={`relative inline-flex rounded-full h-3 w-3 ${phase.bg}`}></span>
                        </span>
                      )}
                    </motion.div>

                    {/* Label */}
                    <motion.div 
                        animate={{ opacity: isDimmed ? 0.3 : 1 }}
                        className="mt-4 text-center"
                    >
                        <h4 className="text-white font-bold text-sm md:text-base">{phase.title}</h4>
                        <p className="text-[10px] md:text-xs text-slate-500 font-mono uppercase tracking-wider">{phase.label}</p>
                    </motion.div>

                    {/* Holographic Detail Card (Hover) */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 20, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-64 md:w-72 bg-space-900/90 backdrop-blur-xl border border-teal-500/30 p-5 rounded-xl shadow-2xl z-50 text-left pointer-events-none"
                        >
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-space-900 border-t border-l border-teal-500/30 rotate-45" />
                            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/5">
                                <Zap className={`w-4 h-4 ${phase.color}`} />
                                <span className="text-xs font-bold text-white uppercase">{phase.tech}</span>
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed">
                                {phase.description}
                            </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* THE TERMINAL (Dynamic Code Display) */}
          <div className="xl:col-span-4">
            <div className="bg-space-950 rounded-xl border border-space-800 shadow-2xl overflow-hidden font-mono text-xs md:text-sm relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-teal-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-lg"></div>
                
                <div className="relative bg-space-950 p-6 h-[400px] flex flex-col">
                    {/* Terminal Header */}
                    <div className="flex items-center justify-between mb-4 border-b border-space-800 pb-4">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500">
                            <Lock className="w-3 h-3" />
                            <span>root@apolo-server:~</span>
                        </div>
                    </div>

                    {/* Code Content */}
                    <div className="flex-grow overflow-hidden">
                        <TypewriterCode />
                    </div>

                    {/* Live Logs */}
                    <div className="mt-4 pt-4 border-t border-space-800 h-32 overflow-hidden flex flex-col justify-end">
                        <LiveLogs />
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Sub-component: Typewriter Code Effect
const TypewriterCode = () => {
    const codeString = `
const growthSystem = {
  acquisition: "Meta + Google Ads",
  ai_layer: "Predictive Lead Scoring",
  automation: ["n8n", "Agents"],
  
  optimize: function(data) {
    if (data.roi < 400) {
      return this.recalibrate_algo();
    }
    return this.scale_budget();
  }
};

// Initializing Core...
growthSystem.optimize(streamData);
    `.trim();

    const [displayedCode, setDisplayedCode] = useState('');

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedCode(codeString.substring(0, i));
            i++;
            if (i > codeString.length) clearInterval(interval);
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <pre className="text-slate-400 whitespace-pre-wrap leading-relaxed">
            <span dangerouslySetInnerHTML={{ 
                __html: displayedCode
                    .replace(/const|function|return|if/g, '<span class="text-purple-400">$&</span>')
                    .replace(/"[^"]*"/g, '<span class="text-green-400">$&</span>')
                    .replace(/growthSystem|acquisition|ai_layer|automation|optimize/g, '<span class="text-blue-400">$&</span>')
            }} />
            <span className="animate-pulse inline-block w-2 h-4 bg-teal-500 align-middle ml-1"></span>
        </pre>
    );
};

// Sub-component: Live Console Logs
const LiveLogs = () => {
    const [logs, setLogs] = useState<string[]>([]);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setLogs(prev => {
                const newLogs = [...prev, CONSOLE_LOGS[index % CONSOLE_LOGS.length]];
                if (newLogs.length > 5) newLogs.shift();
                return newLogs;
            });
            index++;
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-1">
            {logs.map((log, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-[10px] md:text-xs font-mono"
                >
                    <span className="text-teal-500/50 mr-2">[{new Date().toLocaleTimeString()}]</span>
                    <span className={log.includes('Error') ? 'text-red-400' : 'text-slate-500'}>
                        {log}
                    </span>
                </motion.div>
            ))}
        </div>
    );
};

export default TheMachine;