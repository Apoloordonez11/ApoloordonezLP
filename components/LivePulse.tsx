import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, X, TrendingUp, Building, Server, HeartPulse, ShoppingBag, CreditCard, 
  Sun, Scale, Car, BookOpen, Trophy, Shield, Truck, 
  Bitcoin, Hammer, Megaphone, Plane, Lock, Users, 
  Utensils, Shirt, Dna, FileText, Dumbbell, Calendar, 
  PenTool, HardHat, Heart, Gamepad, Sprout, Activity
} from 'lucide-react';

// 1. DATABASE (30 HIGH-TICKET SCENARIOS)
const EVENTS = [
  { industry: "Real Estate", location: "CDMX", action: "activó Neural Acquisition", metric: "+$120k/mo Projected", icon: Building, color: "text-amber-400" },
  { industry: "SaaS B2B", location: "Miami", action: "desplegó Agentes Autónomos", metric: "Ahorro: 40h/semana", icon: Server, color: "text-blue-400" },
  { industry: "Clínica Estética", location: "Madrid", action: "escaló Presupuesto Ads", metric: "ROAS 8.5x", icon: HeartPulse, color: "text-pink-400" },
  { industry: "E-commerce", location: "Bogotá", action: "instaló Predictive Data", metric: "LTV +45%", icon: ShoppingBag, color: "text-purple-400" },
  { industry: "Fintech", location: "Lima", action: "contrató Growth Fraccional", metric: "Validación Completa", icon: CreditCard, color: "text-cyan-400" },
  { industry: "Energía Solar", location: "Texas", action: "automatizó Calif. Leads", metric: "CPA -60%", icon: Sun, color: "text-yellow-400" },
  { industry: "Firma Legal", location: "Londres", action: "inició Auditoría IA", metric: "Velocidad +300%", icon: Scale, color: "text-slate-400" },
  { industry: "Automotriz", location: "Dubai", action: "predijo Inventario", metric: "Rotación 2x", icon: Car, color: "text-red-400" },
  { industry: "Info-Producto", location: "Sao Paulo", action: "optimizó Funnel Webinar", metric: "Tasa Conv. 12%", icon: BookOpen, color: "text-orange-400" },
  { industry: "High-Ticket Coach", location: "New York", action: "activó Setter IA", metric: "15 Citas/Día", icon: Trophy, color: "text-yellow-500" },
  { industry: "Seguros", location: "Toronto", action: "integró Algoritmo Riesgo", metric: "Pólizas +20%", icon: Shield, color: "text-blue-500" },
  { industry: "Logística", location: "Panamá", action: "optimizó Rutas", metric: "Costos -15%", icon: Truck, color: "text-slate-500" },
  { industry: "Crypto Exchange", location: "Singapur", action: "automatizó Onboarding", metric: "KYC Time -90%", icon: Bitcoin, color: "text-amber-500" },
  { industry: "Constructora", location: "Sydney", action: "digitalizó Licitaciones", metric: "Win Rate +35%", icon: Hammer, color: "text-orange-500" },
  { industry: "Cadena Dental", location: "CDMX", action: "reactivó Pacientes", metric: "Citas +50%", icon: Activity, color: "text-teal-400" },
  { industry: "Agencia Mkt", location: "Los Angeles", action: "lanzó IA White-Label", metric: "$50k MRR Agregado", icon: Megaphone, color: "text-purple-500" },
  { industry: "Luxury Travel", location: "París", action: "activó Concierge Bot", metric: "Upsell +25%", icon: Plane, color: "text-sky-400" },
  { industry: "Ciberseguridad", location: "Tel Aviv", action: "detectó Amenazas", metric: "0 Brechas", icon: Lock, color: "text-green-500" },
  { industry: "Recruiting", location: "Berlín", action: "filtró CVs con IA", metric: "Time-to-Hire -40%", icon: Users, color: "text-indigo-400" },
  { industry: "Grupo Restaurantero", location: "Chicago", action: "predijo Demanda", metric: "Mermas -20%", icon: Utensils, color: "text-orange-300" },
  { industry: "Marca Moda", location: "Milán", action: "pronosticó Tendencias", metric: "Sell-through 95%", icon: Shirt, color: "text-pink-500" },
  { industry: "Biotech", location: "Boston", action: "aceleró Trials", metric: "Inscripciones 3x", icon: Dna, color: "text-teal-300" },
  { industry: "Contabilidad", location: "Buenos Aires", action: "automatizó Impuestos", metric: "Capacidad +80%", icon: FileText, color: "text-gray-400" },
  { industry: "App Fitness", location: "Seúl", action: "redujo Churn", metric: "Retención +15%", icon: Dumbbell, color: "text-emerald-400" },
  { industry: "Eventos", location: "Barcelona", action: "gestionó Proveedores", metric: "Costos -10%", icon: Calendar, color: "text-rose-400" },
  { industry: "Arquitectura", location: "Tokio", action: "generó Renders IA", metric: "Aprobación 2x", icon: PenTool, color: "text-violet-400" },
  { industry: "Minería", location: "Santiago", action: "monitoreó Seguridad", metric: "Incidentes -70%", icon: HardHat, color: "text-yellow-600" },
  { industry: "Non-Profit", location: "Ginebra", action: "perfiló Donantes", metric: "Donaciones +40%", icon: Heart, color: "text-red-500" },
  { industry: "Gaming Studio", location: "Montreal", action: "analizó Jugadores", metric: "Sesión +20%", icon: Gamepad, color: "text-indigo-500" },
  { industry: "Agrotech", location: "Córdoba", action: "predijo Cosecha", metric: "Output +15%", icon: Sprout, color: "text-green-400" }
];

const LivePulse: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flash, setFlash] = useState(false);

  // 4. ALGORITMO DE ROTACIÓN
  useEffect(() => {
    // Intervalo aleatorio entre 8s y 15s para naturalidad
    const getInterval = () => Math.floor(Math.random() * (15000 - 8000 + 1) + 8000);
    
    let timerId: ReturnType<typeof setTimeout>;

    const cycle = () => {
      // Activar flash visual si está minimizado
      if (!isExpanded) {
        setFlash(true);
        setTimeout(() => setFlash(false), 800);
      }

      // Cambiar evento (pequeño delay para sincronizar con el flash)
      setTimeout(() => {
         setCurrentIndex(prev => (prev + 1) % EVENTS.length);
         // Programar el siguiente ciclo
         timerId = setTimeout(cycle, getInterval());
      }, 400); 
    };

    // Iniciar primer ciclo
    timerId = setTimeout(cycle, getInterval());

    return () => clearTimeout(timerId);
  }, [isExpanded]);

  const currentEvent = EVENTS[currentIndex];
  const Icon = currentEvent.icon;

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex items-end justify-end pointer-events-auto">
       <AnimatePresence mode="wait">
          {!isExpanded ? (
             // 2. GHOST BUBBLE (IDLE STATE)
             <motion.button
                key="bubble"
                layoutId="pulse-container"
                onClick={() => setIsExpanded(true)}
                className={`
                    group relative flex items-center justify-center 
                    w-10 h-10 md:w-14 md:h-14 
                    rounded-full border border-white/10
                    bg-space-950/20 backdrop-blur-sm
                    hover:bg-space-900/80 hover:border-teal-500/50 hover:opacity-100 hover:shadow-[0_0_20px_rgba(0,210,200,0.3)]
                    transition-all duration-300 cursor-pointer
                    ${flash ? 'opacity-90 scale-110 shadow-[0_0_15px_rgba(255,255,255,0.3)] bg-space-900/60' : 'opacity-30 scale-100'}
                `}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: flash ? 0.9 : 0.3 }}
                exit={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
             >
                 {/* Inner Pulse Dot */}
                 <span className="absolute flex h-2.5 w-2.5 top-0 right-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
                 </span>

                 <Zap className={`w-4 h-4 md:w-6 md:h-6 text-teal-500/80 group-hover:text-teal-400 transition-colors ${flash ? 'text-white' : ''}`} />
             </motion.button>
          ) : (
             // 3. EXPANDED CARD (ACTIVE STATE)
             <motion.div
                key="card"
                layoutId="pulse-container"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                className="
                    relative w-[280px] md:w-[320px] 
                    bg-space-900/90 backdrop-blur-xl border border-teal-500/30 
                    shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]
                    rounded-2xl p-4 md:p-5 overflow-hidden
                    mb-16 md:mb-0 mr-2 md:mr-0
                "
             >
                 {/* Close Button */}
                 <button 
                    onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
                    className="absolute top-2 right-2 p-1 text-slate-500 hover:text-white transition-colors rounded-full hover:bg-white/10 z-20"
                 >
                     <X className="w-4 h-4" />
                 </button>

                 {/* Top Badge */}
                 <div className="flex items-center gap-2 mb-3">
                     <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                     </span>
                     <span className="text-[10px] font-mono uppercase text-slate-400 tracking-widest">Live Activity</span>
                 </div>

                 {/* Content */}
                 <div className="flex items-start gap-3 relative z-10">
                     <div className={`p-2.5 rounded-lg bg-space-950 border border-white/10 ${currentEvent.color} bg-opacity-10 shrink-0`}>
                         <Icon className={`w-5 h-5 ${currentEvent.color}`} />
                     </div>
                     <div>
                         <h4 className="text-white font-bold text-sm leading-tight mb-1">Nuevo Partner Verificado</h4>
                         <p className="text-xs text-slate-400 mb-2 leading-relaxed">
                             <span className="text-slate-200 font-semibold">{currentEvent.industry}</span> en {currentEvent.location} {currentEvent.action}.
                         </p>
                         <div className={`text-sm font-mono font-bold ${currentEvent.color} flex items-center gap-1`}>
                             <TrendingUp className="w-3 h-3" />
                             {currentEvent.metric}
                         </div>
                     </div>
                 </div>

                 {/* Background FX */}
                 <div className={`absolute -top-10 -right-10 w-32 h-32 ${currentEvent.color.replace('text-', 'bg-')} blur-[60px] opacity-10 pointer-events-none`} />
             </motion.div>
          )}
       </AnimatePresence>
    </div>
  );
};

export default LivePulse;