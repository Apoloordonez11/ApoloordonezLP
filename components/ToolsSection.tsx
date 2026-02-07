import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Zap, TrendingUp, CheckCircle2, ChevronRight, LayoutDashboard } from 'lucide-react';
import { INDUSTRIES } from '../constants';
import { IndustryRoadmap } from '../types';

const ToolsSection: React.FC = () => {
  // Calculator State
  const [cac, setCac] = useState<number | ''>('');
  const [ltv, setLtv] = useState<number | ''>('');
  const [leads, setLeads] = useState<number | ''>('');
  const [result, setResult] = useState<any>(null);

  // Roadmap State
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const [roadmap, setRoadmap] = useState<IndustryRoadmap | null>(null);

  const calculateROI = () => {
    if (cac && ltv && leads) {
      const currentProfit = (Number(ltv) - Number(cac)) * Number(leads);
      // Apolo Methodology Projection: -20% CAC, +15% LTV
      const newCac = Number(cac) * 0.8;
      const newLtv = Number(ltv) * 1.15;
      const projectedProfit = (newLtv - newCac) * Number(leads);
      const growth = ((projectedProfit - currentProfit) / currentProfit) * 100;

      setResult({
        currentProfit,
        projectedProfit,
        growthPercentage: growth,
        potentialRevenue: projectedProfit - currentProfit
      });
    }
  };

  const generateRoadmap = (industryName: string) => {
    setSelectedIndustry(industryName);
    const found = INDUSTRIES.find(i => i.industry === industryName);
    setRoadmap(found || null);
  };

  return (
    <section className="py-24 bg-space-900 relative" id="tools">
       <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-space-800/50 to-transparent pointer-events-none" />
       
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-teal-400">///</span> Herramientas de Crecimiento
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Utiliza nuestras herramientas propietarias para auditar tu situación actual y visualizar 
            el impacto de una arquitectura de Growth Hacking avanzada.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* CALCULATOR */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-space-800 border border-space-700 rounded-2xl p-8 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-blue-600" />
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-teal-500/10 rounded-lg text-teal-400">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Calculadora de ROI Exponencial</h3>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">CAC Actual ($)</label>
                  <input 
                    type="number" 
                    value={cac} 
                    onChange={(e) => setCac(Number(e.target.value))}
                    className="w-full bg-space-900 border border-space-700 rounded-lg p-3 text-white focus:border-teal-500 focus:outline-none transition-colors"
                    placeholder="ej. 50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">LTV Promedio ($)</label>
                  <input 
                    type="number" 
                    value={ltv} 
                    onChange={(e) => setLtv(Number(e.target.value))}
                    className="w-full bg-space-900 border border-space-700 rounded-lg p-3 text-white focus:border-teal-500 focus:outline-none transition-colors"
                    placeholder="ej. 500"
                  />
                </div>
              </div>
              <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Leads Mensuales</label>
                  <input 
                    type="number" 
                    value={leads} 
                    onChange={(e) => setLeads(Number(e.target.value))}
                    className="w-full bg-space-900 border border-space-700 rounded-lg p-3 text-white focus:border-teal-500 focus:outline-none transition-colors"
                    placeholder="ej. 100"
                  />
                </div>

              <button 
                onClick={calculateROI}
                className="w-full py-4 bg-white hover:bg-slate-200 text-space-950 font-bold rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5 text-teal-600" />
                Ejecutar Simulación
              </button>

              <AnimatePresence>
                {result && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 pt-6 border-t border-space-700"
                  >
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-space-900 p-4 rounded-lg border border-space-700">
                        <p className="text-xs text-slate-500 uppercase">Profit Actual</p>
                        <p className="text-xl font-bold text-white">${result.currentProfit.toLocaleString()}</p>
                      </div>
                      <div className="bg-teal-500/10 p-4 rounded-lg border border-teal-500/30">
                        <p className="text-xs text-teal-300 uppercase">Profit Potencial</p>
                        <p className="text-xl font-bold text-teal-400">${result.projectedProfit.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="text-center">
                        <span className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-mono font-bold">
                            +{result.growthPercentage.toFixed(0)}% CRECIMIENTO ESTIMADO
                        </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* ROADMAP GENERATOR */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            id="roadmap"
            className="bg-space-800 border border-space-700 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600" />
             <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                <LayoutDashboard className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Generador de Roadmap IA</h3>
            </div>

            <p className="text-slate-400 text-sm mb-6">
                Selecciona tu industria para generar una estrategia trimestral basada en los casos de éxito de Christopher Ordóñez.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
                {INDUSTRIES.map((ind) => (
                    <button
                        key={ind.industry}
                        onClick={() => generateRoadmap(ind.industry)}
                        className={`px-4 py-2 rounded-full text-sm border transition-all ${
                            selectedIndustry === ind.industry 
                            ? 'bg-blue-600 border-blue-500 text-white' 
                            : 'bg-space-900 border-space-700 text-slate-400 hover:border-slate-500'
                        }`}
                    >
                        {ind.industry}
                    </button>
                ))}
            </div>

            <AnimatePresence mode='wait'>
                {roadmap && (
                    <motion.div
                        key={roadmap.industry}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-4"
                    >
                        <RoadmapItem quarter="Q1" data={roadmap.phases.q1} color="border-teal-500/50" />
                        <RoadmapItem quarter="Q2" data={roadmap.phases.q2} color="border-blue-500/50" />
                        <RoadmapItem quarter="Q3" data={roadmap.phases.q3} color="border-purple-500/50" />
                        
                        <div className="mt-6 pt-4 border-t border-space-700 text-center">
                            <p className="text-xs text-slate-500 font-mono">
                                JSON_RESPONSE: GENERATED SUCCESSFULLY VIA APOLO_ENGINE
                            </p>
                        </div>
                    </motion.div>
                )}
                 {!roadmap && (
                    <div className="h-64 flex flex-col items-center justify-center border-2 border-dashed border-space-700 rounded-lg text-slate-600">
                        <TrendingUp className="w-12 h-12 mb-4 opacity-50" />
                        <span>Esperando Input del Usuario...</span>
                    </div>
                )}
            </AnimatePresence>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

const RoadmapItem = ({ quarter, data, color }: { quarter: string, data: any, color: string }) => (
    <div className={`bg-space-900/50 border-l-2 ${color} p-4 rounded-r-lg hover:bg-space-900 transition-colors`}>
        <div className="flex justify-between items-start mb-1">
            <span className="text-xs font-bold text-slate-500 font-mono">{quarter}</span>
            <span className="text-xs bg-space-800 px-2 py-0.5 rounded text-slate-400 border border-space-700">{data.tech}</span>
        </div>
        <h4 className="font-bold text-white text-sm mb-1">{data.title}</h4>
        <p className="text-sm text-slate-400">{data.focus}</p>
    </div>
);

export default ToolsSection;