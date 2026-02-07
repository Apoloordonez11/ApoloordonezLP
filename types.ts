export interface IndustryRoadmap {
  industry: string;
  phases: {
    q1: { title: string; focus: string; tech: string };
    q2: { title: string; focus: string; tech: string };
    q3: { title: string; focus: string; tech: string };
  };
}

export interface CaseStudy {
  id: string;
  clientType: string;
  industry: string;
  metric: string;
  value: string;
  description: string;
  tags: string[];
}

export interface TechItem {
  name: string;
  category: 'Paid Media' | 'Automation & IA' | 'Data' | 'Low-Code';
  icon: any;
  description: string;
}

export interface CalculatorResult {
  currentProfit: number;
  projectedProfit: number;
  growthPercentage: number;
  potentialRevenue: number;
}