import { SpreadsheetData } from '../types';

export const spreadsheetData: SpreadsheetData = {
  vantagens: {
    // GitLab Options
    gitlab_ce_onpremises: [
      "Custo zero de licenciamento",
      "Já configurado e automatizado",
      "Controle total dos dados (Oracle Cloud)",
      "Infraestrutura Oracle já estabelecida"
    ],
    gitlab_ee_premium_onpremises: [
      "Evolução natural da plataforma atual",
      "GitLab Duo incluído para recursos de IA",
      "Mantém dados on-premises na Oracle Cloud",
      "Aproveita infraestrutura Oracle existente",
      "Suporte profissional incluído"
    ],
    gitlab_ee_ultimate_onpremises: [
      "Evolução natural da plataforma atual",
      "GitLab Duo Ultimate incluído para recursos de IA avançados",
      "Mantém dados on-premises na Oracle Cloud",
      "Aproveita infraestrutura Oracle existente",
      "Suporte profissional premium incluído",
      "Recursos de segurança avançados"
    ],
    gitlab_ee_premium_cloud: [
      "Nenhuma instalação necessária",
      "GitLab Duo incluído para recursos de IA",
      "Atualizações automáticas",
      "Suporte profissional incluído",
      "Infraestrutura gerenciada"
    ],
    gitlab_ee_ultimate_cloud: [
      "Nenhuma instalação necessária",
      "GitLab Duo Ultimate incluído para recursos de IA avançados",
      "Atualizações automáticas",
      "Suporte profissional premium incluído",
      "Infraestrutura gerenciada",
      "Recursos de segurança avançados"
    ],
    // GitHub Options
    github_ee_onpremises: [
      "Dados on-premises (Azure)",
      "Controle total dos dados",
      "Recursos GitHub Enterprise completos"
    ],
    github_ee_cloud: [
      "Custo apenas de licenças",
      "Nenhuma instalação necessária",
      "Atualizações automáticas",
      "Aproveita migração já iniciada",
      "Infraestrutura gerenciada"
    ],
    github_ee_cloud_copilot: [
      "Custo apenas de licenças e Copilot",
      "Nenhuma instalação necessária",
      "Atualizações automáticas",
      "Integração direta do Copilot no código",
      "Aproveita migração já iniciada",
      "Recursos de IA avançados para .NET"
    ]
  },
  desvantagens: {
    // GitLab Options
    gitlab_ce_onpremises: [
      "Atualizações manuais (atualmente desatualizado)",
      "Não tem integração com Copilot",
      "Recursos limitados para modernização .NET"
    ],
    gitlab_ee_premium_onpremises: [
      "Reverter esforço de migração já iniciada",
      "Recursos de IA inferiores ao GitHub Copilot para .NET"
    ],
    gitlab_ee_ultimate_onpremises: [
      "Reverter esforço de migração já iniciada",
      "Recursos de IA inferiores ao GitHub Copilot para .NET",
      "Custo muito alto (R$ 25.592/mês)"
    ],
    gitlab_ee_premium_cloud: [
      "Código não fica na nossa nuvem",
      "Recursos de IA inferiores ao GitHub Copilot para .NET"
    ],
    gitlab_ee_ultimate_cloud: [
      "Código não fica na nossa nuvem",
      "Recursos de IA inferiores ao GitHub Copilot para .NET",
      "Custo muito alto (R$ 25.592/mês)"
    ],
    // GitHub Options
    github_ee_onpremises: [
      "Configuração complexa (VM, rede, portas, VPN)",
      "Não tem integração com o Copilot",
      "Custo duplo: VM Azure + licenças",
      "Nova infraestrutura Azure necessária"
    ],
    github_ee_cloud: [
      "Código não fica na nossa nuvem"
    ],
    github_ee_cloud_copilot: [
      "Código não fica na nossa nuvem",
      "Custo adicional do Copilot (R$ 11.864/mês)"
    ]
  }
}; 