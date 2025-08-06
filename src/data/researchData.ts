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
    infrastructureMensal: 41452.68 / 12, 
    totalMensal: 41452.68 / 12, 
    vmSpecs: "Oracle VM" 
  },
  gitlab_ee_premium_onpremises: { 
    licenseMensal: 89958 / 12, 
    infrastructureMensal: 41452.68 / 12, 
    totalMensal: 131410.68 / 12, 
    vmSpecs: "Oracle VM" 
  },
  gitlab_ee_ultimate_onpremises: { 
    licenseMensal: 307100 / 12, 
    infrastructureMensal: 41452.68 / 12, 
    totalMensal: 348552.68 / 12, 
    vmSpecs: "Oracle VM" 
  },
  gitlab_ee_premium_cloud: { 
    licenseMensal: 89958 / 12, 
    infrastructureMensal: 0, 
    totalMensal: 89958 / 12, 
    vmSpecs: "N/A" 
  },
  gitlab_ee_ultimate_cloud: { 
    licenseMensal: 307100 / 12, 
    infrastructureMensal: 0, 
    totalMensal: 307100 / 12, 
    vmSpecs: "N/A" 
  },
  github_ee_onpremises: { 
    licenseMensal: 65142 / 12, 
    infrastructureMensal: 23100 / 12, 
    totalMensal: 88242 / 12, 
    vmSpecs: "Azure VM" 
  },
  github_ee_cloud: { 
    licenseMensal: 65142 / 12, 
    infrastructureMensal: 0, 
    totalMensal: 65142 / 12, 
    vmSpecs: "N/A" 
  },
  github_ee_cloud_copilot: { 
    licenseMensal: 142362 / 12, 
    infrastructureMensal: 0, 
    totalMensal: 142362 / 12, 
    vmSpecs: "N/A" 
  }
};

export const researchData: ResearchData = {
  custos: {
    // GitLab Options
    gitlab_ce_onpremises: { 
      mensal: formatMonthlyCost(costData.gitlab_ce_onpremises.totalMensal),
      anual: calculateAnnualCost(costData.gitlab_ce_onpremises.totalMensal),
      detalhes: `Licença: ${calculateAnnualCost(costData.gitlab_ce_onpremises.licenseMensal)} + Infraestrutura: ${calculateAnnualCost(costData.gitlab_ce_onpremises.infrastructureMensal)}`,
      explicacao: "GitLab Community Edition (licença gratuita) + Oracle VM",
      fonte: "GitLab Community Edition + Oracle Cloud",
      link: "https://about.gitlab.com/pricing/",
      licenseAnual: calculateAnnualCost(costData.gitlab_ce_onpremises.licenseMensal),
      infrastructureAnual: calculateAnnualCost(costData.gitlab_ce_onpremises.infrastructureMensal),
      totalAnual: calculateAnnualCost(costData.gitlab_ce_onpremises.totalMensal),
      vmSpecs: costData.gitlab_ce_onpremises.vmSpecs
    },
    gitlab_ee_premium_onpremises: { 
      mensal: formatMonthlyCost(costData.gitlab_ee_premium_onpremises.totalMensal),
      anual: calculateAnnualCost(costData.gitlab_ee_premium_onpremises.totalMensal),
      detalhes: `Licença: ${calculateAnnualCost(costData.gitlab_ee_premium_onpremises.licenseMensal)} + Infraestrutura: ${calculateAnnualCost(costData.gitlab_ee_premium_onpremises.infrastructureMensal)}`,
      explicacao: "GitLab Enterprise Edition Premium + Oracle VM",
      fonte: "GitLab Enterprise Edition Premium + Oracle Cloud",
      link: "https://about.gitlab.com/pricing/",
      licenseAnual: calculateAnnualCost(costData.gitlab_ee_premium_onpremises.licenseMensal),
      infrastructureAnual: calculateAnnualCost(costData.gitlab_ee_premium_onpremises.infrastructureMensal),
      totalAnual: calculateAnnualCost(costData.gitlab_ee_premium_onpremises.totalMensal),
      vmSpecs: costData.gitlab_ee_premium_onpremises.vmSpecs
    },
    gitlab_ee_ultimate_onpremises: { 
      mensal: formatMonthlyCost(costData.gitlab_ee_ultimate_onpremises.totalMensal),
      anual: calculateAnnualCost(costData.gitlab_ee_ultimate_onpremises.totalMensal),
      detalhes: `Licença: ${calculateAnnualCost(costData.gitlab_ee_ultimate_onpremises.licenseMensal)} + Infraestrutura: ${calculateAnnualCost(costData.gitlab_ee_ultimate_onpremises.infrastructureMensal)}`,
      explicacao: "GitLab Enterprise Edition Ultimate + Oracle VM",
      fonte: "GitLab Enterprise Edition Ultimate + Oracle Cloud",
      link: "https://about.gitlab.com/pricing/",
      licenseAnual: calculateAnnualCost(costData.gitlab_ee_ultimate_onpremises.licenseMensal),
      infrastructureAnual: calculateAnnualCost(costData.gitlab_ee_ultimate_onpremises.infrastructureMensal),
      totalAnual: calculateAnnualCost(costData.gitlab_ee_ultimate_onpremises.totalMensal),
      vmSpecs: costData.gitlab_ee_ultimate_onpremises.vmSpecs
    },
    gitlab_ee_premium_cloud: { 
      mensal: formatMonthlyCost(costData.gitlab_ee_premium_cloud.totalMensal),
      anual: calculateAnnualCost(costData.gitlab_ee_premium_cloud.totalMensal),
      detalhes: `Licença: ${calculateAnnualCost(costData.gitlab_ee_premium_cloud.licenseMensal)} (apenas licenças)`,
      explicacao: "GitLab Enterprise Edition Premium Cloud",
      fonte: "GitLab Enterprise Edition Premium Cloud",
      link: "https://about.gitlab.com/pricing/",
      licenseAnual: calculateAnnualCost(costData.gitlab_ee_premium_cloud.licenseMensal),
      infrastructureAnual: "R$ 0,00",
      totalAnual: calculateAnnualCost(costData.gitlab_ee_premium_cloud.totalMensal),
      vmSpecs: "N/A (Cloud)"
    },
    gitlab_ee_ultimate_cloud: { 
      mensal: formatMonthlyCost(costData.gitlab_ee_ultimate_cloud.totalMensal),
      anual: calculateAnnualCost(costData.gitlab_ee_ultimate_cloud.totalMensal),
      detalhes: `Licença: ${calculateAnnualCost(costData.gitlab_ee_ultimate_cloud.licenseMensal)} (apenas licenças)`,
      explicacao: "GitLab Enterprise Edition Ultimate Cloud",
      fonte: "GitLab Enterprise Edition Ultimate Cloud",
      link: "https://about.gitlab.com/pricing/",
      licenseAnual: calculateAnnualCost(costData.gitlab_ee_ultimate_cloud.licenseMensal),
      infrastructureAnual: "R$ 0,00",
      totalAnual: calculateAnnualCost(costData.gitlab_ee_ultimate_cloud.totalMensal),
      vmSpecs: "N/A (Cloud)"
    },
    // GitHub Options
    github_ee_onpremises: { 
      mensal: formatMonthlyCost(costData.github_ee_onpremises.totalMensal),
      anual: calculateAnnualCost(costData.github_ee_onpremises.totalMensal),
      detalhes: `Licença: ${calculateAnnualCost(costData.github_ee_onpremises.licenseMensal)} + Infraestrutura: ${calculateAnnualCost(costData.github_ee_onpremises.infrastructureMensal)}`,
      explicacao: "GitHub Enterprise Edition + Azure VM",
      fonte: "GitHub Enterprise Edition + Azure VM",
      link: "https://github.com/pricing",
      licenseAnual: calculateAnnualCost(costData.github_ee_onpremises.licenseMensal),
      infrastructureAnual: calculateAnnualCost(costData.github_ee_onpremises.infrastructureMensal),
      totalAnual: calculateAnnualCost(costData.github_ee_onpremises.totalMensal),
      vmSpecs: costData.github_ee_onpremises.vmSpecs
    },
    github_ee_cloud: { 
      mensal: formatMonthlyCost(costData.github_ee_cloud.totalMensal),
      anual: calculateAnnualCost(costData.github_ee_cloud.totalMensal),
      detalhes: `Licença: ${calculateAnnualCost(costData.github_ee_cloud.licenseMensal)} (apenas licenças)`,
      explicacao: "GitHub Enterprise Edition Cloud",
      fonte: "GitHub Enterprise Edition Cloud",
      link: "https://github.com/pricing",
      licenseAnual: calculateAnnualCost(costData.github_ee_cloud.licenseMensal),
      infrastructureAnual: "R$ 0,00",
      totalAnual: calculateAnnualCost(costData.github_ee_cloud.totalMensal),
      vmSpecs: "N/A (Cloud)"
    },
    github_ee_cloud_copilot: { 
      mensal: formatMonthlyCost(costData.github_ee_cloud_copilot.totalMensal),
      anual: calculateAnnualCost(costData.github_ee_cloud_copilot.totalMensal),
      detalhes: `Licença: ${calculateAnnualCost(costData.github_ee_cloud_copilot.licenseMensal)} (GitHub EE + 30 usuários Copilot)`,
      explicacao: "GitHub Enterprise Edition Cloud + Copilot Enterprise (30 usuários)",
      fonte: "GitHub Enterprise Edition Cloud + Copilot",
      link: "https://github.com/pricing",
      licenseAnual: calculateAnnualCost(costData.github_ee_cloud_copilot.licenseMensal),
      infrastructureAnual: "R$ 0,00",
      totalAnual: calculateAnnualCost(costData.github_ee_cloud_copilot.totalMensal),
      vmSpecs: "N/A (Cloud)"
    }
  },
  ia: {
    github: {
      tools: [
        "Integração direta no código (VS Code/Studio)",
        "Migração assistida .NET Framework → .NET Core",
        "Geração automatizada de unit tests",
        "Suggestions para patterns modernos (async/await, DI)",
        "Integração com Azure services",
        "Copilot Business: R$ 104,50/usuário/mês"
      ],
      rating: 9.5,
      fonte: "GitHub Copilot oficial - Business $19/mês, Enterprise $39/mês"
    },
    gitlab: {
      tools: [
        "GitLab Duo incluído nos planos EE",
        "Foco em DevSecOps e privacidade",
        "Resolução automática de vulnerabilidades",
        "Análise de root cause em CI/CD",
        "Ecosystem menos maduro para .NET",
        "Sem ferramentas específicas de modernização"
      ],
      rating: 7.0,
      fonte: "GitLab Duo incluído nos planos pagos"
    }
  }
}; 