import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Globe, UserPlus, TrendingUp, ShieldCheck } from 'lucide-react';

const EVENTS = [
  { icon: Globe, text: "New Partner Verified from Mexico City", color: "text-blue-400" },
  { icon: TrendingUp, text: "ROI Simulation: +450% Potential (FinTech)", color: "text-green-400" },
  { icon: UserPlus, text: "Agency Slot Reserved: 2 Spots Left", color: "text-yellow-400" },
  { icon: Zap, text: "Protocol 'Neural-Acquisition' Deployed", color: "text-purple-400" },
  { icon: ShieldCheck, text: "Security Audit Passed: 100% Score", color: "text-teal-400" },
];

const LivePulse: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % EVENTS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentEvent = EVENTS[index];
  const Icon = currentEvent.icon;

  return (
    <div className="fixed bottom-6 left-6 z-40 pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex items-center gap-3 px-4 py-3 bg-space-900/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl shadow-teal-900/20"
        >
          <div className="relative">
            <div className={`absolute inset-0 ${currentEvent.color} blur-sm opacity-50 animate-pulse`} />
            <div className="relative bg-space-950 p-1.5 rounded-full border border-white/5">
              <Icon className={`w-3 h-3 ${currentEvent.color}`} />
            </div>
            <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full border border-space-900" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Live Activity</span>
            <span className="text-xs font-medium text-slate-200 whitespace-nowrap">{currentEvent.text}</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LivePulse;