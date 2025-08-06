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
      "Mantém dados self-hosted na Oracle Cloud",
      "Aproveita infraestrutura Oracle existente",
      "Suporte profissional incluído"
    ],
    gitlab_ee_ultimate_onpremises: [
      "Evolução natural da plataforma atual",
      "Mantém dados self-hosted na Oracle Cloud",
      "Aproveita infraestrutura Oracle existente",
      "Suporte profissional premium incluído",
      "Recursos de segurança avançados"
    ],
    gitlab_ee_premium_cloud: [
      "Nenhuma instalação necessária",
      "Atualizações automáticas",
      "Suporte profissional incluído",
      "Infraestrutura gerenciada"
    ],
    gitlab_ee_ultimate_cloud: [
      "Nenhuma instalação necessária",
      "Atualizações automáticas",
      "Suporte profissional premium incluído",
      "Infraestrutura gerenciada",
      "Recursos de segurança avançados"
    ],
    // GitHub Options
    github_ee_onpremises: [
      "Controle total dos dados",
      "Recursos GitHub Enterprise completos",
      "Aproveita migração já iniciada"
    ],
    github_ee_cloud: [
      "Custo apenas de licenças",
      "Nenhuma instalação necessária",
      "Atualizações automáticas",
      "Aproveita migração já iniciada",
      "Infraestrutura gerenciada",
      "Acesso a ferramentas de IA de ponta",
      "**Migração assistida .NET Framework → .NET Core**",
      "**Geração automatizada de unit tests**",
      "**Suggestions para patterns modernos (async/await, DI)**"
    ],
    github_ee_cloud_copilot: [
      "Custo apenas de licenças e Copilot",
      "Nenhuma instalação necessária",
      "Atualizações automáticas",
      "Aproveita migração já iniciada",
      "Infraestrutura gerenciada",
      "Ferramentas de IA de ponta incluídas",
      "**Migração assistida .NET Framework → .NET Core**",
      "**Geração automatizada de unit tests**",
      "**Suggestions para patterns modernos (async/await, DI)**",
      "**Integração direta com Azure services**"
    ]
  },
  desvantagens: {
    // GitLab Options
    gitlab_ce_onpremises: [
      "Não aproveitaremos o investimento realizado na migração",
      "Atualizações manuais",
      "Recursos limitados para modernização .NET",
      "Sem recursos de IA"
    ],
    gitlab_ee_premium_onpremises: [
      "Não aproveitaremos o investimento realizado na migração",
      "Sem recursos de IA"
    ],
    gitlab_ee_ultimate_onpremises: [
      "Não aproveitaremos o investimento realizado na migração",
      "Custo muito alto (R$ 25.592/mês)",
      "Sem recursos de IA"
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
      "Custo duplo: VM Azure + licenças",
      "Nova infraestrutura Azure necessária",
      "Sem recursos de IA"
    ],
    github_ee_cloud: [
      "Código não fica na nossa nuvem",
      "Sem acesso às ferramentas de IA avançadas"
    ],
    github_ee_cloud_copilot: [
      "Código não fica na nossa nuvem",
      "Custo adicional do Copilot (R$ 11.864/mês)"
    ]
  }
}; 