export interface SpreadsheetData {
  vantagens: {
    // GitLab Options
    gitlab_ce_onpremises: string[];
    gitlab_ee_premium_onpremises: string[];
    gitlab_ee_ultimate_onpremises: string[];
    gitlab_ee_premium_cloud: string[];
    gitlab_ee_ultimate_cloud: string[];
    // GitHub Options
    github_ee_onpremises: string[];
    github_ee_cloud: string[];
    github_ee_cloud_copilot: string[];
  };
  desvantagens: {
    // GitLab Options
    gitlab_ce_onpremises: string[];
    gitlab_ee_premium_onpremises: string[];
    gitlab_ee_ultimate_onpremises: string[];
    gitlab_ee_premium_cloud: string[];
    gitlab_ee_ultimate_cloud: string[];
    // GitHub Options
    github_ee_onpremises: string[];
    github_ee_cloud: string[];
    github_ee_cloud_copilot: string[];
  };
}

export interface CostData {
  mensal: string;
  anual: string;
  detalhes: string;
  fonte: string;
  link: string;
  explicacao?: string;
  // Detailed cost breakdown
  licenseMensal?: string;
  infrastructureMensal?: string;
  totalMensal?: string;
  licenseAnual?: string;
  infrastructureAnual?: string;
  totalAnual?: string;
  vmSpecs?: string;
}

export interface ResearchData {
  custos: {
    // GitLab Options
    gitlab_ce_onpremises: CostData;
    gitlab_ee_premium_onpremises: CostData;
    gitlab_ee_ultimate_onpremises: CostData;
    gitlab_ee_premium_cloud: CostData;
    gitlab_ee_ultimate_cloud: CostData;
    // GitHub Options
    github_ee_onpremises: CostData;
    github_ee_cloud: CostData;
    github_ee_cloud_copilot: CostData;
  };
  ia: {
    github: {
      tools: string[];
      rating: number;
      fonte: string;
    };
    gitlab: {
      tools: string[];
      rating: number;
      fonte: string;
    };
  };
}

export interface PlatformData {
  name: string;
  type: 'cloud' | 'self-hosted';
  provider: 'github' | 'gitlab';
  advantages: string[];
  disadvantages: string[];
  cost: CostData;
  recommended?: boolean;
}

export interface TabItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}
