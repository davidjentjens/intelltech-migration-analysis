import { SpreadsheetData } from '../types';

export const spreadsheetData: SpreadsheetData = {
  vantagens: {
    // GitLab Options - Self-hosted
    gitlab_ce_onpremises: [
      'Controle total dos dados (Oracle Cloud)',
      'Aproveita infraestrutura Oracle existente',
      'Plataforma já configurada e operacional',
      '**Custo zero de licenciamento**',
    ],
    gitlab_ee_premium_onpremises: [
      'Controle total dos dados (Oracle Cloud)',
      'Aproveita infraestrutura Oracle existente',
      'Suporte profissional GitLab incluído',
      '**Recursos avançados de DevSecOps**',
    ],
    gitlab_ee_ultimate_onpremises: [
      'Controle total dos dados (Oracle Cloud)',
      'Aproveita infraestrutura Oracle existente',
      'Suporte profissional premium GitLab',
      '**Recursos completos de DevSecOps e Compliance**',
      '**Recursos de segurança empresariais avançados**',
    ],
    // GitLab Options - Cloud
    gitlab_ee_premium_cloud: [
      'Infraestrutura totalmente gerenciada',
      'Atualizações automáticas da plataforma',
      'Escalabilidade automática',
      'Suporte profissional GitLab incluído',
      '**Recursos avançados de DevSecOps**',
    ],
    gitlab_ee_ultimate_cloud: [
      'Infraestrutura totalmente gerenciada',
      'Atualizações automáticas da plataforma',
      'Escalabilidade automática',
      'Suporte profissional premium GitLab',
      '**Recursos completos de DevSecOps e Compliance**',
      '**Recursos de segurança empresariais avançados**',
    ],
    // GitHub Options - Self-hosted
    github_ee_onpremises: [
      '**Aproveita migração já iniciada**',
      'Controle total dos dados',
      'Recursos GitHub Enterprise completos',
      '**Ecossistema maduro para desenvolvimento .NET**',
    ],
    // GitHub Options - Cloud
    github_ee_cloud: [
      'Infraestrutura totalmente gerenciada',
      'Atualizações automáticas da plataforma',
      '**Aproveita migração já iniciada**',
      'Custo operacional otimizado',
      '**Ecossistema maduro para desenvolvimento .NET**',
    ],
    github_ee_cloud_copilot: [
      'Infraestrutura totalmente gerenciada',
      'Atualizações automáticas da plataforma',
      '**Aproveita migração já iniciada**',
      '**Ferramentas de IA líderes de mercado**',
      '**Ecossistema maduro para desenvolvimento .NET**',
      '**Migração assistida .NET Framework → .NET Core**',
      '**Geração automatizada de unit tests**',
      '**Suggestions para patterns modernos (async/await, DI)**',
      '**Integração nativa com Azure services**',
    ],
  },
  desvantagens: {
    // GitLab Options - Self-hosted
    gitlab_ce_onpremises: [
      '**Não aproveita investimento da migração iniciada**',
      'Nenhum recurso de IA disponível',
      'Ecossistema menos maduro para .NET',
      'Atualizações e manutenção manuais',
      'Funcionalidades empresariais limitadas',
    ],
    gitlab_ee_premium_onpremises: [
      '**Não aproveita investimento da migração iniciada**',
      'Nenhum recurso de IA disponível',
      'Ecossistema menos maduro para .NET',
    ],
    gitlab_ee_ultimate_onpremises: [
      '**Não aproveita investimento da migração iniciada**',
      'Nenhum recurso de IA disponível',
      'Ecossistema menos maduro para .NET',
      '**Custo extremamente alto (R$ 25.592/mês)**',
    ],
    // GitLab Options - Cloud
    gitlab_ee_premium_cloud: [
      '**Não aproveita investimento da migração iniciada**',
      'Dados não permanecem na infraestrutura corporativa',
      'Recursos de IA limitados comparado ao GitHub Copilot',
      'Ecossistema menos maduro para .NET',
    ],
    gitlab_ee_ultimate_cloud: [
      '**Não aproveita investimento da migração iniciada**',
      'Dados não permanecem na infraestrutura corporativa',
      'Recursos de IA limitados comparado ao GitHub Copilot',
      'Ecossistema menos maduro para .NET',
      '**Custo extremamente alto (R$ 25.592/mês)**',
    ],
    // GitHub Options - Self-hosted
    github_ee_onpremises: [
      'Nenhum recurso de IA disponível',
      '**Custo duplo: infraestrutura Azure + licenças**',
      'Configuração complexa de infraestrutura',
      'Requer nova infraestrutura Azure',
      'Overhead operacional significativo',
    ],
    // GitHub Options - Cloud
    github_ee_cloud: [
      'Dados não permanecem na infraestrutura corporativa',
      '**Sem acesso às ferramentas avançadas de IA**',
      'Limitações para modernização automatizada',
    ],
    github_ee_cloud_copilot: [
      'Dados não permanecem na infraestrutura corporativa',
      'Investimento adicional em licenças Copilot',
    ],
  },
};
