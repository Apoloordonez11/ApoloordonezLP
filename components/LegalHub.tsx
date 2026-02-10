import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scale, FileText, Lock, ArrowLeft, ShieldCheck, AlertCircle, ChevronRight } from 'lucide-react';

interface LegalHubProps {
  onBack: () => void;
}

// --- SUB-COMPONENT: NEON CALLOUT ---
const LegalCallout = ({ title, children, type = 'info' }: { title: string, children?: React.ReactNode, type?: 'info' | 'warning' }) => {
  const colors = type === 'info' 
    ? { border: 'border-teal-500', bg: 'bg-teal-500/5', icon: 'text-teal-400' }
    : { border: 'border-yellow-500', bg: 'bg-yellow-500/5', icon: 'text-yellow-400' };

  return (
    <div className={`relative p-6 rounded-r-xl border-l-4 ${colors.border} ${colors.bg} my-8`}>
      <div className="flex items-start gap-3">
        <AlertCircle className={`w-5 h-5 mt-0.5 ${colors.icon}`} />
        <div>
          <h4 className={`font-mono text-sm font-bold uppercase tracking-wider mb-2 ${colors.icon}`}>{title}</h4>
          <div className="text-slate-300 text-sm leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const LegalHub: React.FC<LegalHubProps> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState('manifesto');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const menuItems = [
    { id: 'manifesto', label: 'Ethos & Manifesto', icon: Scale },
    { id: 'terms', label: 'Terms of Service', icon: FileText },
    { id: 'privacy', label: 'Data & Privacy', icon: Lock },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-space-950 text-slate-300 font-sans pt-24 pb-20"
    >
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-6">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group font-mono text-sm uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Return to Base
          </button>
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-xs font-mono text-slate-400">
            <ShieldCheck className="w-3 h-3 text-teal-500" />
            LEGAL TRANSPARENCY HUB v1.0
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* --- SIDEBAR NAVIGATION (Sticky) --- */}
          <div className="lg:col-span-3">
            <div className="sticky top-32 space-y-2">
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4 pl-4">Navigation</p>
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300
                      ${isActive 
                        ? 'bg-teal-500/10 text-teal-400 border border-teal-500/30' 
                        : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'}
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                    {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* --- MAIN CONTENT --- */}
          <div className="lg:col-span-9 max-w-4xl">
            
            {/* SECTION 1: MANIFESTO */}
            <section id="manifesto" className="mb-24 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h1 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">
                  Ethos & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Manifesto</span>
                </h1>
                
                <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                  <p className="lead text-xl text-slate-200">
                    En ApoloordonezLP, no creemos en la "letra chica" diseñada para confundir. 
                    Nuestra arquitectura legal es tan transparente como nuestro código.
                  </p>
                  
                  <h3 className="text-white font-mono uppercase text-sm tracking-wider mt-8 mb-4 border-b border-white/10 pb-2">01. Nuestra Promesa</h3>
                  <p>
                    {/* PASTE MANIFESTO TEXT HERE */}
                    Nos comprometemos a utilizar la Inteligencia Artificial y la Ciencia de Datos de manera ética, 
                    priorizando siempre la privacidad del usuario final y la integridad de los datos de nuestros clientes.
                    No vendemos humo; vendemos sistemas auditables.
                  </p>

                  <LegalCallout title="Income Disclaimer">
                    {/* PASTE DISCLAIMER TEXT HERE */}
                    Los resultados mostrados en este sitio web (ROI, Revenue, Growth) son de casos de estudio reales, 
                    pero no garantizan resultados futuros. Cada negocio es una arquitectura única con variables distintas.
                    Tu éxito depende de tu ejecución, condiciones de mercado y adaptación al sistema.
                  </LegalCallout>
                </div>
              </motion.div>
            </section>

            <div className="w-full h-px bg-white/10 mb-24" />

            {/* SECTION 2: TERMS */}
            <section id="terms" className="mb-24 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 border border-blue-500/20">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Términos de Servicio</h2>
                </div>

                <div className="space-y-6 text-slate-300 leading-relaxed">
                  <p>
                    {/* PASTE TERMS OF SERVICE TEXT HERE */}
                    Al contratar nuestros servicios de arquitectura de crecimiento, aceptas que la implementación 
                    de sistemas de IA requiere colaboración activa. La propiedad intelectual de los "Agentes" y "Algoritmos" 
                    personalizados pertenece al cliente tras el pago final, mientras que la tecnología base (Framework Apolo) 
                    permanece bajo nuestra licencia.
                  </p>
                  
                  <div className="bg-space-900 p-6 rounded-xl border border-white/5">
                    <h4 className="text-white font-bold mb-2">Cláusula de Confidencialidad</h4>
                    <p className="text-sm">
                      Todos los datos procesados por nuestros sistemas (Leads, Métricas Financieras, Secretos Comerciales) 
                      están protegidos bajo estrictos acuerdos de NDA (Non-Disclosure Agreements).
                    </p>
                  </div>
                </div>
              </motion.div>
            </section>

            <div className="w-full h-px bg-white/10 mb-24" />

            {/* SECTION 3: PRIVACY */}
            <section id="privacy" className="mb-24 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-teal-500/10 rounded-lg text-teal-400 border border-teal-500/20">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Privacidad y Datos</h2>
                </div>

                <div className="space-y-6 text-slate-300 leading-relaxed">
                  <p>
                    {/* PASTE PRIVACY POLICY TEXT HERE */}
                    Cumplimos con los estándares internacionales de protección de datos (GDPR / CCPA donde aplique).
                    No comercializamos tus datos con terceros.
                  </p>

                  <LegalCallout title="Uso de Cookies & Tracking" type="warning">
                    Utilizamos tecnologías de seguimiento avanzadas (Pixel de Meta, Google Analytics 4, Hotjar) 
                    únicamente para optimizar la experiencia de usuario y re-targetizar contenido relevante. 
                    Puedes optar por no participar en cualquier momento.
                  </LegalCallout>

                  <ul className="list-disc list-inside space-y-2 marker:text-teal-500">
                    <li>Recolección de datos: Limitada a lo estrictamente necesario.</li>
                    <li>Almacenamiento: En servidores encriptados (AES-256).</li>
                    <li>Derechos ARCO: Tienes derecho total sobre tu información.</li>
                  </ul>
                </div>
              </motion.div>
            </section>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LegalHub;