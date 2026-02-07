import React from 'react';
import { TECH_STACK } from '../constants';

const TheMachine: React.FC = () => {
  return (
    <section className="py-24 bg-space-900 border-y border-space-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-6">
              The Machine: <br />
              <span className="text-teal-400">Arquitectura de Crecimiento</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              No dependemos de la suerte. Integramos Paid Media de nivel experto con 
              automatizaciones Low-Code y Ciencia de Datos para construir un ecosistema 
              que aprende y mejora solo.
            </p>
          </div>
          <div className="md:w-1/2 bg-space-950 p-6 rounded-xl border border-space-800 font-mono text-xs md:text-sm text-slate-400 overflow-hidden shadow-2xl">
            <div className="flex gap-2 mb-4 border-b border-space-800 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p>
              <span className="text-purple-400">const</span> <span className="text-blue-400">growthSystem</span> = {'{'}
            </p>
            <p className="pl-4">
              <span className="text-teal-400">acquisition</span>: <span className="text-green-300">"Meta + Google Ads (Broad Match Modifier)"</span>,
            </p>
            <p className="pl-4">
              <span className="text-teal-400">retention</span>: <span className="text-green-300">"HubSpot CDP + ActiveCampaign"</span>,
            </p>
            <p className="pl-4">
              <span className="text-teal-400">automation</span>: [<span className="text-green-300">"n8n"</span>, <span className="text-green-300">"LangChain Agents"</span>],
            </p>
            <p className="pl-4">
              <span className="text-teal-400">analytics</span>: <span className="text-green-300">"Python MMM (Marketing Mix Modeling)"</span>
            </p>
            <p>{'};'}</p>
            <p className="mt-2 text-slate-500">// Executing optimization protocol...</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {TECH_STACK.map((tech) => {
            const Icon = tech.icon;
            return (
              <div key={tech.name} className="flex flex-col items-center text-center p-6 bg-space-800 rounded-xl hover:bg-space-700 transition-colors border border-transparent hover:border-teal-500/20 group">
                <div className="p-3 bg-space-950 rounded-full mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-teal-900/10">
                  <Icon className="w-6 h-6 text-teal-400" />
                </div>
                <h4 className="font-bold text-white text-sm mb-1">{tech.name}</h4>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">{tech.category}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TheMachine;