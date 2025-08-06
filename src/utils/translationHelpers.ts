import { TFunction } from 'react-i18next';

// Translation mapping for advantages
const advantageTranslations: Record<string, string> = {
  'Controle total dos dados (Oracle Cloud)': 'advantages.dataControl',
  'Aproveita infraestrutura Oracle existente': 'advantages.existingInfra',
  'Plataforma já configurada e operacional': 'advantages.platformConfigured',
  '**Custo zero de licenciamento**': 'advantages.zeroCost',
  'Suporte profissional GitLab incluído': 'advantages.professionalSupport',
  '**Recursos avançados de DevSecOps**': 'advantages.advancedDevSecOps',
  'Suporte profissional premium GitLab': 'advantages.premiumSupport',
  '**Recursos completos de DevSecOps e Compliance**': 'advantages.completeDevSecOps',
  '**Recursos de segurança empresariais avançados**': 'advantages.enterpriseSecurity',
  'Infraestrutura totalmente gerenciada': 'advantages.managedInfra',
  'Atualizações automáticas da plataforma': 'advantages.autoUpdates',
  'Escalabilidade automática': 'advantages.autoScalability',
  'Aproveita migração já iniciada': 'advantages.continueMigration',
  '**Aproveita migração já iniciada**': 'advantages.continueMigration',
  'Nenhuma instalação necessária': 'advantages.noInstallation',
  'Custo apenas de licenças': 'advantages.onlyLicenseCost',
  '**Acesso a ferramentas de IA de ponta**': 'advantages.aiTools',
  '**Ferramentas de IA de ponta incluídas**': 'advantages.aiToolsIncluded',
  '**Migração assistida .NET Framework → .NET Core**': 'advantages.netMigration',
  '**Geração automatizada de unit tests**': 'advantages.unitTests',
  'Infraestrutura gerenciada': 'advantages.managedInfra',
  'Evolução natural da solução atual': 'advantages.naturalEvolution',
  '**Ecossistema maduro para desenvolvimento .NET**': 'advantages.matureEcosystem',
  'Custo operacional otimizado': 'advantages.optimizedCost',
  '**Ferramentas de IA líderes de mercado**': 'advantages.marketLeadingAI',
  '**Suggestions para patterns modernos (async/await, DI)**': 'advantages.modernPatterns',
  '**Integração nativa com Azure services**': 'advantages.azureIntegration',
};

// Translation mapping for disadvantages
const disadvantageTranslations: Record<string, string> = {
  '**Não aproveita investimento da migração iniciada**': 'disadvantages.noMigrationInvestment',
  'Não aproveitaremos o investimento realizado na migração': 'disadvantages.noMigrationInvestment',
  'Nenhum recurso de IA disponível': 'disadvantages.noAI',
  'Sem recursos de IA': 'disadvantages.noAI',
  'Ecossistema menos maduro para .NET': 'disadvantages.lessMatture',
  'Ecosystem menos maduro para .NET': 'disadvantages.lessMatture',
  'Atualizações e manutenção manuais': 'disadvantages.manualUpdates',
  'Funcionalidades empresariais limitadas': 'disadvantages.limitedFeatures',
  '**Custo elevado de licenciamento**': 'disadvantages.highLicenseCost',
  '**Custo extremamente alto (R$ 25.592/mês)**': 'disadvantages.extremelyHighCost',
  'Dados não permanecem na infraestrutura corporativa': 'disadvantages.dataNotCorporate',
  'Recursos de IA limitados comparado ao GitHub Copilot': 'disadvantages.limitedAIvsGitHub',
  '**Custo duplo: infraestrutura Azure + licenças**': 'disadvantages.doubleCost',
  'Configuração complexa de infraestrutura': 'disadvantages.complexInfraConfig',
  'Requer nova infraestrutura Azure': 'disadvantages.requiresNewAzure',
  'Overhead operacional significativo': 'disadvantages.significantOverhead',
  '**Sem acesso às ferramentas avançadas de IA**': 'disadvantages.noAdvancedAI',
  'Limitações para modernização automatizada': 'disadvantages.limitedAutomatedModernization',
  'Investimento adicional em licenças Copilot': 'disadvantages.additionalCopilotInvestment',
};

export const translateAdvantageOrDisadvantage = (text: string, t: TFunction): string => {
  const translationKey = advantageTranslations[text] || disadvantageTranslations[text];

  if (translationKey) {
    return t(translationKey);
  }

  // If no translation found, return the original text
  return text;
};
