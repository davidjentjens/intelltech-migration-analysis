import { ResearchData } from '../types';

// Utility function to calculate annual cost from monthly
const calculateAnnualCost = (monthlyCostBRL: number): string => {
  const annual = monthlyCostBRL * 12;
  return `R$ ${annual.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

// Utility function to format monthly cost
const formatMonthlyCost = (monthlyCostBRL: number): string => {
  return `R$ ${monthlyCostBRL.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

// Cost data from CSV (monthly values in BRL)
const costData = {
  gitlab_ce_onpremises: {
    licenseMensal: 0,
    infrastructureMensal: 144, // R$ 70 USD × 5,50 BRL
    get totalMensal() {
      return this.licenseMensal + this.infrastructureMensal;
    },
    vmSpecs: '1 vCPU 8GB RAM 500GB',
  },
  gitlab_ee_premium_onpremises: {
    licenseMensal: 7482.5, // $29 × 47 usuários × 5,50 BRL = $1363 × 5,50
    infrastructureMensal: 488, // R$ 88 USD × 5,50 BRL
    get totalMensal() {
      return this.licenseMensal + this.infrastructureMensal;
    },
    vmSpecs: '2 vCPU 8GB RAM 1000GB',
  },
  gitlab_ee_ultimate_onpremises: {
    licenseMensal: 25592.5, // $99 × 47 usuários × 5,50 BRL = $4653 × 5,50
    infrastructureMensal: 742, // R$ 135 USD × 5,50 BRL
    get totalMensal() {
      return this.licenseMensal + this.infrastructureMensal;
    },
    vmSpecs: '4 vCPU 16GB RAM 1000GB',
  },
  gitlab_ee_premium_cloud: {
    licenseMensal: 7482.5, // $29 × 47 usuários × 5,50 BRL
    infrastructureMensal: 0,
    get totalMensal() {
      return this.licenseMensal + this.infrastructureMensal;
    },
    vmSpecs: 'N/A (Cloud)',
  },
  gitlab_ee_ultimate_cloud: {
    licenseMensal: 25592.5, // $99 × 47 usuários × 5,50 BRL
    infrastructureMensal: 0,
    get totalMensal() {
      return this.licenseMensal + this.infrastructureMensal;
    },
    vmSpecs: 'N/A (Cloud)',
  },
  github_ee_onpremises: {
    licenseMensal: 5428.5, // $21 × 47 usuários × 5,50 BRL = $987 × 5,50
    infrastructureMensal: 4328.5, // $787 USD × 5,50 BRL (Azure VM E8s_v5)
    get totalMensal() {
      return this.licenseMensal + this.infrastructureMensal;
    },
    vmSpecs: '16 vCPU 64GB RAM 768GB',
  },
  github_ee_cloud: {
    licenseMensal: 5428.5, // $21 × 47 usuários × 5,50 BRL
    infrastructureMensal: 0,
    get totalMensal() {
      return this.licenseMensal + this.infrastructureMensal;
    },
    vmSpecs: 'N/A (Cloud)',
  },
  github_ee_cloud_copilot: {
    licenseMensal: 8549.5, // ($21 × 47) + ($19 × 31) = $987 + $570 = $1557 × 5,50
    infrastructureMensal: 0,
    get totalMensal() {
      return this.licenseMensal + this.infrastructureMensal;
    },
    vmSpecs: 'N/A (Cloud)',
  },
};

export const researchData: ResearchData = {
  custos: {
    // GitLab Options
    gitlab_ce_onpremises: {
      mensal: formatMonthlyCost(costData.gitlab_ce_onpremises.totalMensal),
      anual: calculateAnnualCost(costData.gitlab_ce_onpremises.totalMensal),
      detalhes: `Licença: ${calculateAnnualCost(costData.gitlab_ce_onpremises.licenseMensal)} + Infraestrutura: ${calculateAnnualCost(costData.gitlab_ce_onpremises.infrastructureMensal)}`,
      explicacao: 'GitLab Community Edition (licença gratuita) + Oracle VM',
      fonte: 'GitLab Community Edition + Oracle Cloud',
      link: 'https://about.gitlab.com/pricing/',
      licenseMensal: formatMonthlyCost(costData.gitlab_ce_onpremises.licenseMensal),
      infrastructureMensal: formatMonthlyCost(costData.gitlab_ce_onpremises.infrastructureMensal),
      totalMensal: formatMonthlyCost(costData.gitlab_ce_onpremises.totalMensal),
      licenseAnual: calculateAnnualCost(costData.gitlab_ce_onpremises.licenseMensal),
      infrastructureAnual: calculateAnnualCost(costData.gitlab_ce_onpremises.infrastructureMensal),
      totalAnual: calculateAnnualCost(costData.gitlab_ce_onpremises.totalMensal),
      vmSpecs: costData.gitlab_ce_onpremises.vmSpecs,
    },
    gitlab_ee_premium_onpremises: {
      mensal: formatMonthlyCost(costData.gitlab_ee_premium_onpremises.totalMensal),
      anual: calculateAnnualCost(costData.gitlab_ee_premium_onpremises.totalMensal),
      detalhes: `Licença: ${calculateAnnualCost(costData.gitlab_ee_premium_onpremises.licenseMensal)} + Infraestrutura: ${calculateAnnualCost(costData.gitlab_ee_premium_onpremises.infrastructureMensal)}`,
      explicacao: 'GitLab Enterprise Edition Premium + Oracle VM',
      fonte: 'GitLab Enterprise Edition Premium + Oracle Cloud',
      link: 'https://about.gitlab.com/pricing/',
      licenseMensal: formatMonthlyCost(costData.gitlab_ee_premium_onpremises.licenseMensal),
      infrastructureMensal: formatMonthlyCost(
        costData.gitlab_ee_premium_onpremises.infrastructureMensal
      ),
      totalMensal: formatMonthlyCost(costData.gitlab_ee_premium_onpremises.totalMensal),
      licenseAnual: calculateAnnualCost(costData.gitlab_ee_premium_onpremises.licenseMensal),
      infrastructureAnual: calculateAnnualCost(
        costData.gitlab_ee_premium_onpremises.infrastructureMensal
      ),
      totalAnual: calculateAnnualCost(costData.gitlab_ee_premium_onpremises.totalMensal),
      vmSpecs: costData.gitlab_ee_premium_onpremises.vmSpecs,
    },
    gitlab_ee_ultimate_onpremises: {
      mensal: formatMonthlyCost(costData.gitlab_ee_ultimate_onpremises.totalMensal),
      anual: calculateAnnualCost(costData.gitlab_ee_ultimate_onpremises.totalMensal),
      detalhes: `Licença: ${calculateAnnualCost(costData.gitlab_ee_ultimate_onpremises.licenseMensal)} + Infraestrutura: ${calculateAnnualCost(costData.gitlab_ee_ultimate_onpremises.infrastructureMensal)}`,
      explicacao: 'GitLab Enterprise Edition Ultimate + Oracle VM',
      fonte: 'GitLab Enterprise Edition Ultimate + Oracle Cloud',
      link: 'https://about.gitlab.com/pricing/',
      licenseMensal: formatMonthlyCost(costData.gitlab_ee_ultimate_onpremises.licenseMensal),
      infrastructureMensal: formatMonthlyCost(
        costData.gitlab_ee_ultimate_onpremises.infrastructureMensal
      ),
      totalMensal: formatMonthlyCost(costData.gitlab_ee_ultimate_onpremises.totalMensal),
      licenseAnual: calculateAnnualCost(costData.gitlab_ee_ultimate_onpremises.licenseMensal),
      infrastructureAnual: calculateAnnualCost(
        costData.gitlab_ee_ultimate_onpremises.infrastructureMensal
      ),
      totalAnual: calculateAnnualCost(costData.gitlab_ee_ultimate_onpremises.totalMensal),
      vmSpecs: costData.gitlab_ee_ultimate_onpremises.vmSpecs,
    },
    gitlab_ee_premium_cloud: {
      mensal: formatMonthlyCost(costData.gitlab_ee_premium_cloud.totalMensal),
      anual: calculateAnnualCost(costData.gitlab_ee_premium_cloud.totalMensal),
      detalhes: `Licença: ${calculateAnnualCost(costData.gitlab_ee_premium_cloud.licenseMensal)} (apenas licenças)`,
      explicacao: 'GitLab Enterprise Edition Premium Cloud',
      fonte: 'GitLab Enterprise Edition Premium Cloud',
      link: 'https://about.gitlab.com/pricing/',
      licenseMensal: formatMonthlyCost(costData.gitlab_ee_premium_cloud.licenseMensal),
      infrastructureMensal: formatMonthlyCost(
        costData.gitlab_ee_premium_cloud.infrastructureMensal
      ),
      totalMensal: formatMonthlyCost(costData.gitlab_ee_premium_cloud.totalMensal),
      licenseAnual: calculateAnnualCost(costData.gitlab_ee_premium_cloud.licenseMensal),
      infrastructureAnual: calculateAnnualCost(
        costData.gitlab_ee_premium_cloud.infrastructureMensal
      ),
      totalAnual: calculateAnnualCost(costData.gitlab_ee_premium_cloud.totalMensal),
      vmSpecs: 'N/A (Cloud)',
    },
    gitlab_ee_ultimate_cloud: {
      mensal: formatMonthlyCost(costData.gitlab_ee_ultimate_cloud.totalMensal),
      anual: calculateAnnualCost(costData.gitlab_ee_ultimate_cloud.totalMensal),
      detalhes: `Licença: ${calculateAnnualCost(costData.gitlab_ee_ultimate_cloud.licenseMensal)} (apenas licenças)`,
      explicacao: 'GitLab Enterprise Edition Ultimate Cloud',
      fonte: 'GitLab Enterprise Edition Ultimate Cloud',
      link: 'https://about.gitlab.com/pricing/',
      licenseMensal: formatMonthlyCost(costData.gitlab_ee_ultimate_cloud.licenseMensal),
      infrastructureMensal: formatMonthlyCost(
        costData.gitlab_ee_ultimate_cloud.infrastructureMensal
      ),
      totalMensal: formatMonthlyCost(costData.gitlab_ee_ultimate_cloud.totalMensal),
      licenseAnual: calculateAnnualCost(costData.gitlab_ee_ultimate_cloud.licenseMensal),
      infrastructureAnual: calculateAnnualCost(
        costData.gitlab_ee_ultimate_cloud.infrastructureMensal
      ),
      totalAnual: calculateAnnualCost(costData.gitlab_ee_ultimate_cloud.totalMensal),
      vmSpecs: 'N/A (Cloud)',
    },
    // GitHub Options
    github_ee_onpremises: {
      mensal: formatMonthlyCost(costData.github_ee_onpremises.totalMensal),
      anual: calculateAnnualCost(costData.github_ee_onpremises.totalMensal),
      detalhes: `Licença: ${calculateAnnualCost(costData.github_ee_onpremises.licenseMensal)} + Infraestrutura: ${calculateAnnualCost(costData.github_ee_onpremises.infrastructureMensal)}`,
      explicacao: 'GitHub Enterprise Edition + Azure VM',
      fonte: 'GitHub Enterprise Edition + Azure VM',
      link: 'https://github.com/pricing',
      licenseMensal: formatMonthlyCost(costData.github_ee_onpremises.licenseMensal),
      infrastructureMensal: formatMonthlyCost(costData.github_ee_onpremises.infrastructureMensal),
      totalMensal: formatMonthlyCost(costData.github_ee_onpremises.totalMensal),
      licenseAnual: calculateAnnualCost(costData.github_ee_onpremises.licenseMensal),
      infrastructureAnual: calculateAnnualCost(costData.github_ee_onpremises.infrastructureMensal),
      totalAnual: calculateAnnualCost(costData.github_ee_onpremises.totalMensal),
      vmSpecs: costData.github_ee_onpremises.vmSpecs,
    },
    github_ee_cloud: {
      mensal: formatMonthlyCost(costData.github_ee_cloud.totalMensal),
      anual: calculateAnnualCost(costData.github_ee_cloud.totalMensal),
      detalhes: `Licença: ${calculateAnnualCost(costData.github_ee_cloud.licenseMensal)} (apenas licenças)`,
      explicacao: 'GitHub Enterprise Edition Cloud',
      fonte: 'GitHub Enterprise Edition Cloud',
      link: 'https://github.com/pricing',
      licenseMensal: formatMonthlyCost(costData.github_ee_cloud.licenseMensal),
      infrastructureMensal: formatMonthlyCost(costData.github_ee_cloud.infrastructureMensal),
      totalMensal: formatMonthlyCost(costData.github_ee_cloud.totalMensal),
      licenseAnual: calculateAnnualCost(costData.github_ee_cloud.licenseMensal),
      infrastructureAnual: calculateAnnualCost(costData.github_ee_cloud.infrastructureMensal),
      totalAnual: calculateAnnualCost(costData.github_ee_cloud.totalMensal),
      vmSpecs: 'N/A (Cloud)',
    },
    github_ee_cloud_copilot: {
      mensal: formatMonthlyCost(costData.github_ee_cloud_copilot.totalMensal),
      anual: calculateAnnualCost(costData.github_ee_cloud_copilot.totalMensal),
      detalhes: `Licença: ${calculateAnnualCost(costData.github_ee_cloud_copilot.licenseMensal)} (GitHub EE + 30 usuários Copilot)`,
      explicacao: 'GitHub Enterprise Edition Cloud + Copilot Enterprise (30 usuários)',
      fonte: 'GitHub Enterprise Edition Cloud + Copilot',
      link: 'https://github.com/pricing',
      licenseMensal: formatMonthlyCost(costData.github_ee_cloud_copilot.licenseMensal),
      infrastructureMensal: formatMonthlyCost(
        costData.github_ee_cloud_copilot.infrastructureMensal
      ),
      totalMensal: formatMonthlyCost(costData.github_ee_cloud_copilot.totalMensal),
      licenseAnual: calculateAnnualCost(costData.github_ee_cloud_copilot.licenseMensal),
      infrastructureAnual: calculateAnnualCost(
        costData.github_ee_cloud_copilot.infrastructureMensal
      ),
      totalAnual: calculateAnnualCost(costData.github_ee_cloud_copilot.totalMensal),
      vmSpecs: 'N/A (Cloud)',
    },
  },
  ia: {
    github: {
      tools: [
        'Integração direta no código (VS Code/Studio)',
        'Migração assistida .NET Framework → .NET Core',
        'Geração automatizada de unit tests',
        'Suggestions para patterns modernos (async/await, DI)',
        'Integração com Azure services',
        'Copilot Business: R$ 104,50/usuário/mês',
      ],
      rating: 9.5,
      fonte: 'GitHub Copilot oficial - Business $19/mês, Enterprise $39/mês',
    },
    gitlab: {
      tools: [
        'GitLab Duo incluído nos planos EE',
        'Foco em DevSecOps e privacidade',
        'Resolução automática de vulnerabilidades',
        'Análise de root cause em CI/CD',
        'Ecosystem menos maduro para .NET',
        'Sem ferramentas específicas de modernização',
      ],
      rating: 7.0,
      fonte: 'GitLab Duo incluído nos planos pagos',
    },
  },
};
