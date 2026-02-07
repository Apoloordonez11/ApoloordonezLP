import React from 'react';
import { motion } from 'framer-motion';
import { CASE_STUDIES } from '../constants';
import { Trophy, TrendingUp, Users } from 'lucide-react';

const TrackRecord: React.FC = () => {
  return (
    <section className="py-24 bg-space-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Track Record Probado
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            No vendemos humo. Vendemos resultados auditables en sectores de alta complejidad regulatoria y técnica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-space-900 rounded-2xl p-8 border border-space-800 hover:border-teal-500/30 transition-all hover:transform hover:-translate-y-2 group"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-space-800 text-teal-400 text-xs font-bold uppercase tracking-wider rounded-full border border-space-700">
                  {study.industry}
                </span>
                {index === 0 ? <Trophy className="w-6 h-6 text-yellow-500" /> : <TrendingUp className="w-6 h-6 text-slate-600 group-hover:text-teal-500 transition-colors" />}
              </div>
              
              <div className="mb-6">
                <span className="text-5xl font-black text-white block mb-2">{study.value}</span>
                <span className="text-sm text-slate-500 font-mono uppercase">{study.metric}</span>
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">
                {study.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {study.tags.map(tag => (
                  <span key={tag} className="text-xs text-slate-500 bg-space-800 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
