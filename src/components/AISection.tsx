import React from 'react';
import { useTranslation } from 'react-i18next';
import AICard from './AICard';
import { researchData } from '@/data';
import { AlertTriangle, Brain, Users } from 'lucide-react';

// Helper function to render HTML content safely
const renderHTML = (htmlString: string) => {
  return <span dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

const AISection: React.FC = () => {
  const { t } = useTranslation();

  const aiCards = [
    { platform: 'GitHub Copilot Ecosystem', data: researchData.ia.github },
    { platform: 'GitLab Duo Suite', data: researchData.ia.gitlab },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto" data-section="ai">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">{t('ai.title')}</h2>

      {/* Warning about Cloud-only availability */}
      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-red-500" />
          <p className="text-red-700 text-lg font-semibold">
            <strong>{t('ai.cloudOnlyWarning')}</strong>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {aiCards.map((card, index) => (
          <AICard key={index} platform={card.platform} data={card.data} />
        ))}
      </div>

      {/* Benefícios Detalhados do GitHub Copilot */}
      <div className="border-2 border-gray-900 rounded-lg p-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">🤖 {t('ai.copilotBenefits')}</h3>
          <p className="text-gray-700 text-lg">{t('ai.copilotDescription')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Migração Assistida */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">🚀</div>
              <h4 className="text-lg font-bold text-purple-800">
                {t('ai.migrationAssisted.title')}
              </h4>
            </div>
            <p className="text-gray-700 mb-3">{t('ai.migrationAssisted.description')}</p>
            <div className="bg-purple-100 border border-purple-200 rounded p-3 mb-3">
              <p className="text-purple-800 text-sm font-medium">
                📈 <strong>{t('ai.migrationAssisted.impactLabel')}:</strong>{' '}
                {t('ai.migrationAssisted.impact')}
              </p>
            </div>
            <a
              href="https://learn.microsoft.com/pt-br/dotnet/core/porting/github-copilot-app-modernization-overview"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-800 font-medium text-sm underline"
            >
              📖 {t('ai.migrationAssisted.microsoftDocs')}
            </a>
          </div>

          {/* Geração de Testes */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">🧪</div>
              <h4 className="text-lg font-bold text-purple-800">{t('ai.unitTests.title')}</h4>
            </div>
            <p className="text-gray-700 mb-3">{t('ai.unitTests.shortDescription')}</p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>{t('ai.unitTests.features.automaticAnalysis')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>{t('ai.unitTests.features.complexScenarios')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>{t('ai.unitTests.features.codeCoverage')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>{t('ai.unitTests.features.legacyCode')}</span>
              </div>
            </div>
          </div>

          {/* Patterns Modernos */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">⚡</div>
              <h4 className="text-lg font-bold text-purple-800">{t('ai.modernPatterns.title')}</h4>
            </div>
            <p className="text-gray-700 mb-3">{t('ai.modernPatterns.description')}</p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-blue-500">🔄</span>
                <span>{t('ai.modernPatterns.features.asyncAwait')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">💉</span>
                <span>{t('ai.modernPatterns.features.dependencyInjection')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">🎯</span>
                <span>{t('ai.modernPatterns.features.contextualSuggestions')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">🔧</span>
                <span>{t('ai.modernPatterns.features.intelligentRefactoring')}</span>
              </div>
            </div>
          </div>

          {/* Integração Azure */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">☁️</div>
              <h4 className="text-lg font-bold text-purple-800">
                {t('ai.azureIntegration.title')}
              </h4>
            </div>
            <p className="text-gray-700 mb-3">{t('ai.azureIntegration.description')}</p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-blue-500">🏗️</span>
                <span>{t('ai.azureIntegration.features.serviceConfiguration')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">🔐</span>
                <span>{t('ai.azureIntegration.features.cloudSecurity')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">🚀</span>
                <span>{t('ai.azureIntegration.features.performanceOptimization')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">📊</span>
                <span>{t('ai.azureIntegration.features.monitoring')}</span>
              </div>
            </div>
          </div>

          {/* Agente de Código */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">🤖</div>
              <h4 className="text-lg font-bold text-purple-800">{t('ai.codeAgent.title')}</h4>
            </div>
            <p className="text-gray-700 mb-3">{t('ai.codeAgent.description')}</p>
            <div className="bg-green-100 border border-green-200 rounded p-3">
              <strong className="text-green-800">{t('ai.codeAgent.impactLabel')}:</strong>{' '}
              {t('ai.codeAgent.impact')}
            </div>
          </div>

          {/* Múltiplos Modelos */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">🧠</div>
              <h4 className="text-lg font-bold text-purple-800">{t('ai.multipleModels.title')}</h4>
            </div>
            <p className="text-gray-700 mb-3">{t('ai.multipleModels.description')}</p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-purple-500">⚡</span>
                <span>{t('ai.multipleModels.models.claude')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-500">🎯</span>
                <span>{t('ai.multipleModels.models.gpt')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-500">🚀</span>
                <span>{t('ai.multipleModels.models.gemini')}</span>
              </div>
            </div>
          </div>

          {/* Code Review Automatizado */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">🔍</div>
              <h4 className="text-lg font-bold text-purple-800">{t('ai.codeReview.title')}</h4>
            </div>
            <p className="text-gray-700 mb-3">{t('ai.codeReview.description')}</p>
            <div className="bg-green-100 border border-green-200 rounded p-3">
              <strong className="text-green-800">{t('ai.codeReview.benefitLabel')}:</strong>{' '}
              {t('ai.codeReview.benefit')}
            </div>
          </div>

          {/* Segurança Inteligente */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">🛡️</div>
              <h4 className="text-lg font-bold text-purple-800">
                {t('ai.intelligentSecurity.title')}
              </h4>
            </div>
            <p className="text-gray-700 mb-3">{t('ai.intelligentSecurity.description')}</p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-red-500">🔒</span>
                <span>{t('ai.intelligentSecurity.features.realTimeDetection')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500">🔍</span>
                <span>{t('ai.intelligentSecurity.features.duplicateCode')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500">⚠️</span>
                <span>{t('ai.intelligentSecurity.features.insecurePatterns')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Comparação GitHub vs GitLab */}
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-lg font-bold text-purple-800 mb-4 text-center">
            📊 {t('ai.comparison.title')}
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <span className="text-xl">🏆</span>
                {t('ai.comparison.githubTitle')}
              </h5>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  {renderHTML(t('ai.comparison.github.directIntegration'))}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  {renderHTML(t('ai.comparison.github.specificTools'))}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  {renderHTML(t('ai.comparison.github.matureEcosystem'))}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  {renderHTML(t('ai.comparison.github.codeAgent'))}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  {renderHTML(t('ai.comparison.github.multipleModels'))}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  {renderHTML(t('ai.comparison.github.automatedReview'))}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  {renderHTML(t('ai.comparison.github.cost'))}
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-orange-700 mb-3 flex items-center gap-2">
                <span className="text-xl">⚠️</span>
                {t('ai.comparison.gitlabTitle')}
              </h5>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">△</span>
                  {renderHTML(t('ai.comparison.gitlab.limitedIntegration'))}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">△</span>
                  {renderHTML(t('ai.comparison.gitlab.lessMatture'))}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">△</span>
                  {renderHTML(t('ai.comparison.gitlab.devSecOpsFocus'))}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  {renderHTML(t('ai.comparison.gitlab.cost'))}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-4 text-xs text-purple-600 bg-purple-100 p-2 rounded">
          <strong>{t('ai.sources')}:</strong>
          <a
            href="https://learn.microsoft.com/pt-br/dotnet/core/porting/github-copilot-app-modernization-overview"
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-1"
          >
            Documentação Microsoft GitHub Copilot
          </a>{' '}
          | GitHub Copilot oficial ($19/mês Business, $39/mês Enterprise) | GitLab Duo Pro ($19/mês
          Standard, $39/mês Premium) | Conversão: 1 USD = 5,50 BRL
        </div>
      </div>

      {/* Recomendação de IA */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-lg p-6">
        <div className="text-center">
          <h3 className="text-xl font-bold text-purple-800 mb-3 flex items-center justify-center gap-2">
            <Brain className="w-6 h-6" />
            {t('ai.recommendation.title')}
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-purple-300 rounded-lg p-6 mb-4">
              <h4 className="font-bold text-purple-800 mb-3 text-lg">
                🤖 {t('ai.recommendation.subtitle')}
              </h4>
              <p className="text-gray-700 text-base leading-relaxed">
                {t('ai.recommendation.description')}
              </p>
            </div>

            <div className="bg-white border border-blue-300 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-blue-600" />
                <h5 className="font-semibold text-blue-800">
                  {t('ai.recommendation.technicalJustification')}
                </h5>
              </div>
              <p className="text-blue-700 text-sm">{t('ai.recommendation.technicalDescription')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISection;
