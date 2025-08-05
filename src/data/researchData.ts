import { ResearchData } from '../types';

export const researchData: ResearchData = {
  custos: {
    // GitLab Options
    gitlab_ce_onpremises: { 
      mensal: "R$ 0", 
      anual: "R$ 0", 
      detalhes: "Custo de licença apenas, exclui infraestrutura Oracle Cloud",
      explicacao: "GitLab Community Edition - licença gratuita",
      fonte: "GitLab Community Edition",
      link: "https://about.gitlab.com/pricing/"
    },
    gitlab_ee_premium_onpremises: { 
      mensal: "R$ 7.496", 
      anual: "R$ 89.958", 
      detalhes: "GitLab EE Premium: $29/usuário × 47 usuários",
      explicacao: "GitLab Enterprise Edition Premium + infraestrutura Oracle Cloud",
      fonte: "GitLab Enterprise Edition Premium",
      link: "https://about.gitlab.com/pricing/"
    },
    gitlab_ee_ultimate_onpremises: { 
      mensal: "R$ 25.592", 
      anual: "R$ 307.100", 
      detalhes: "GitLab EE Ultimate: $99/usuário × 47 usuários",
      explicacao: "GitLab Enterprise Edition Ultimate + infraestrutura Oracle Cloud",
      fonte: "GitLab Enterprise Edition Ultimate",
      link: "https://about.gitlab.com/pricing/"
    },
    gitlab_ee_premium_cloud: { 
      mensal: "R$ 7.496", 
      anual: "R$ 89.958", 
      detalhes: "GitLab EE Premium Cloud: $29/usuário × 47 usuários",
      explicacao: "GitLab Enterprise Edition Premium Cloud",
      fonte: "GitLab Enterprise Edition Premium Cloud",
      link: "https://about.gitlab.com/pricing/"
    },
    gitlab_ee_ultimate_cloud: { 
      mensal: "R$ 25.592", 
      anual: "R$ 307.100", 
      detalhes: "GitLab EE Ultimate Cloud: $99/usuário × 47 usuários",
      explicacao: "GitLab Enterprise Edition Ultimate Cloud",
      fonte: "GitLab Enterprise Edition Ultimate Cloud",
      link: "https://about.gitlab.com/pricing/"
    },
    // GitHub Options
    github_ee_onpremises: { 
      mensal: "R$ 5.429", 
      anual: "R$ 65.142", 
      detalhes: "GitHub EE: $21/usuário × 47 usuários + Azure VM",
      explicacao: "GitHub Enterprise Edition + infraestrutura Azure VM",
      fonte: "GitHub Enterprise Edition",
      link: "https://github.com/pricing"
    },
    github_ee_cloud: { 
      mensal: "R$ 5.429", 
      anual: "R$ 65.142", 
      detalhes: "GitHub EE Cloud: $21/usuário × 47 usuários",
      explicacao: "GitHub Enterprise Edition Cloud",
      fonte: "GitHub Enterprise Edition Cloud",
      link: "https://github.com/pricing"
    },
    github_ee_cloud_copilot: { 
      mensal: "R$ 11.864", 
      anual: "R$ 142.362", 
      detalhes: "GitHub EE Cloud + Copilot Enterprise: $21 + $39/usuário × 47",
      explicacao: "GitHub Enterprise Edition Cloud + Copilot Enterprise para 30 usuários",
      fonte: "GitHub Enterprise Edition Cloud + Copilot",
      link: "https://github.com/pricing"
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