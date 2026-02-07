import { IndustryRoadmap, CaseStudy, TechItem } from './types';
import { 
  BarChart3, 
  BrainCircuit, 
  Megaphone, 
  Code2, 
  Workflow
} from 'lucide-react';

export const INDUSTRIES: IndustryRoadmap[] = [
  {
    industry: 'HealthTech',
    phases: {
      q1: {
        title: 'Fase de Penetración (Neuromarketing)',
        focus: 'Doctor Authority & Trust',
        tech: 'Meta Ads + Video Sales Letters (VSL)',
      },
      q2: {
        title: 'Fase de Conversión (Ingeniería de Funnels)',
        focus: 'Automated Booking Engine',
        tech: 'HubSpot + Calendly Integration',
      },
      q3: {
        title: 'Escalamiento (AI Layer)',
        focus: 'Predictive Patient LTV',
        tech: 'Python (MMM) + Google Cloud AI',
      },
    },
  },
  {
    industry: 'FinTech',
    phases: {
      q1: {
        title: 'Captación de Alta Intención',
        focus: 'Lead Scoring & Qualification',
        tech: 'Google Ads (Search) + Typeform',
      },
      q2: {
        title: 'Nurturing Automatizado',
        focus: 'Educational Drip Campaigns',
        tech: 'n8n + OpenAI API',
      },
      q3: {
        title: 'Cierre High-Ticket',
        focus: 'AI Sales Assistants',
        tech: 'LangChain Agents + CRM',
      },
    },
  },
  {
    industry: 'Real Estate',
    phases: {
      q1: {
        title: 'Visualización Inmersiva',
        focus: 'Virtual Tours & Lifestyle Ads',
        tech: 'Meta Ads (Lead Forms)',
      },
      q2: {
        title: 'Filtrado Automático',
        focus: 'WhatsApp Pre-qualification',
        tech: 'ManyChat + ChatGPT API',
      },
      q3: {
        title: 'Optimización de Citas',
        focus: 'Show-up Rate Maximization',
        tech: 'Zapier + SMS Reminders',
      },
    },
  },
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