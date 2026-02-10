import { IndustryRoadmap, CaseStudy, TechItem } from './types';
import { 
  BarChart3, 
  BrainCircuit, 
  Megaphone, 
  Code2, 
  Workflow
} from 'lucide-react';

export const INDUSTRIES: IndustryRoadmap[] = [
  // --- EXISTING CORE ---
  {
    industry: 'HealthTech',
    phases: {
      q1: { title: 'Penetración (Neuromarketing)', focus: 'Doctor Authority & Trust', tech: 'Meta Ads + VSL' },
      q2: { title: 'Conversión (Funnels)', focus: 'Automated Booking Engine', tech: 'HubSpot + Calendly' },
      q3: { title: 'Escalamiento (AI Layer)', focus: 'Predictive Patient LTV', tech: 'Python (MMM)' }
    }
  },
  {
    industry: 'FinTech',
    phases: {
      q1: { title: 'Captación High-Intent', focus: 'Lead Scoring & KYC', tech: 'Google Search + Plaid' },
      q2: { title: 'Nurturing Financiero', focus: 'Educational Drip', tech: 'n8n + OpenAI' },
      q3: { title: 'Cierre High-Ticket', focus: 'AI Sales Assistants', tech: 'LangChain Agents' }
    }
  },
  {
    industry: 'Real Estate',
    phases: {
      q1: { title: 'Visualización Inmersiva', focus: 'Virtual Tours 360', tech: 'Matterport + Meta Ads' },
      q2: { title: 'Filtrado Automático', focus: 'WhatsApp Pre-qual', tech: 'ManyChat + ChatGPT' },
      q3: { title: 'Optimización Citas', focus: 'Show-up Rate Max', tech: 'Zapier + SMS' }
    }
  },
  // --- NEW HYPER-TECH SECTORS ---
  {
    industry: 'EduTech AI',
    phases: {
      q1: { title: 'Diagnóstico Cognitivo', focus: 'Skill-Gap AI Audit', tech: 'Typeform Logic + GPT-4' },
      q2: { title: 'Retención Adaptativa', focus: 'Personalized Micro-Learning', tech: 'Vector DB + WhatsApp' },
      q3: { title: 'Comunidad Monetizada', focus: 'Peer-to-Peer Flywheel', tech: 'Circle + Stripe Connect' }
    }
  },
  {
    industry: 'AI SaaS',
    phases: {
      q1: { title: 'PLG Aggressive', focus: 'Token Consumption Hook', tech: 'Next.js + Segment' },
      q2: { title: 'Enterprise Trust', focus: 'SOC2 & Security Marketing', tech: 'LinkedIn ABM + Vanta' },
      q3: { title: 'Ecosystem Lock-in', focus: 'Agent Marketplace Launch', tech: 'LangChain Hub' }
    }
  },
  {
    industry: 'AgroTech',
    phases: {
      q1: { title: 'Prospección Satelital', focus: 'Crop Yield Gap Detection', tech: 'Google Earth Engine + Python' },
      q2: { title: 'Demo IoT In-Situ', focus: 'Hardware Integration Proof', tech: 'Tablets + LoraWAN' },
      q3: { title: 'Revenue Recurrente', focus: 'Predictive Pest Control', tech: 'Computer Vision Drone' }
    }
  },
  {
    industry: 'Robot Tech',
    phases: {
      q1: { title: 'Digital Twin Audit', focus: 'Factory Inefficiency Scan', tech: 'Nvidia Omniverse' },
      q2: { title: 'Cobot Simulation', focus: 'Labor ROI Calculator', tech: 'Unity WebGL + React' },
      q3: { title: 'Fleet Orchestration', focus: 'Zero-Downtime SLA', tech: 'Predictive Maint. AI' }
    }
  },
  {
    industry: 'Humanoid',
    phases: {
      q1: { title: 'Viral Uncanny', focus: 'Shock & Awe PR Stunts', tech: 'Unreal Engine 5 + TikTok' },
      q2: { title: 'B2B Pilot Program', focus: 'Receptionist Replacement', tech: 'OpenAI Realtime API' },
      q3: { title: 'Mass Deployment', focus: 'Global Logistics Chain', tech: 'ERP + IoT Tracking' }
    }
  },
  {
    industry: 'Crypto Tech',
    phases: {
      q1: { title: 'Liquidity Vampire', focus: 'TVL Migration Campaigns', tech: 'On-Chain Analytics Bot' },
      q2: { title: 'Governance Utility', focus: 'DAO Participation', tech: 'Snapshot + Discord Roles' },
      q3: { title: 'Institutional Rails', focus: 'Compliance & OTC Desk', tech: 'Fireblocks + Chainalysis' }
    }
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    clientType: 'HealthTech',
    industry: 'Seguros Médicos',
    metric: 'ROI',
    value: '+720%',
    description: 'Escalamiento de pauta de alta intención para SaludS.A.',
    tags: ['Google Ads', 'Data Studio', 'Python'],
  },
  {
    id: '2',
    clientType: 'FinTech',
    industry: 'Servicios Financieros',
    metric: 'CAC Reduction',
    value: '-45%',
    description: 'Optimización de embudo para Sodig (Firmas Electrónicas).',
    tags: ['Conversion API', 'HubSpot', 'n8n'],
  },
  {
    id: '3',
    clientType: 'Real Estate',
    industry: 'Desarrollo Inmobiliario',
    metric: 'Sales Pipeline',
    value: '$2.4M',
    description: 'Estrategia Drive-to-Store para Villa Cumbayá.',
    tags: ['Meta Ads', 'WhatsApp API', 'CRM'],
  },
];

export const TECH_STACK: TechItem[] = [
  { name: 'Meta Business Suite', category: 'Paid Media', icon: Megaphone, description: 'Arquitectura de campañas de nivel experto.' },
  { name: 'Google Cloud AI', category: 'Automation & IA', icon: BrainCircuit, description: 'Infraestructura para modelos predictivos.' },
  { name: 'n8n / Make', category: 'Automation & IA', icon: Workflow, description: 'Orquestación de flujos de trabajo autónomos.' },
  { name: 'Python / Pandas', category: 'Data', icon: Code2, description: 'Ciencia de datos aplicada a marketing (MMM).' },
  { name: 'LangChain', category: 'Automation & IA', icon: BrainCircuit, description: 'Desarrollo de agentes conversacionales complejos.' },
  { name: 'Looker Studio', category: 'Data', icon: BarChart3, description: 'Visualización de datos en tiempo real.' },
];