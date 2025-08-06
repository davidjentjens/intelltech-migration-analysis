import React from 'react';
import AICard from './AICard';
import { researchData } from '@/data';
import { AlertTriangle } from 'lucide-react';

const AISection: React.FC = () => {
  const aiCards = [
    { platform: "GitHub Copilot Ecosystem", data: researchData.ia.github },
    { platform: "GitLab Duo Suite", data: researchData.ia.gitlab }
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto" data-section="ai">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Recursos de Inteligência Artificial</h2>
      
      {/* Warning about Cloud-only availability */}
      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-red-500" />
          <p className="text-red-700 text-lg font-semibold">
            <strong>Recursos de IA APENAS disponíveis em soluções CLOUD</strong>
          </p>        
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {aiCards.map((card, index) => (
          <div key={index} className="w-full">
            <AICard platform={card.platform} data={card.data} />
          </div>
        ))}
      </div>
      
      {/* Benefícios Detalhados do GitHub Copilot */}
      <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-purple-800 mb-2">
            🤖 GitHub Copilot para Modernização do SHMS
          </h3>
          <p className="text-purple-700 text-lg">
            Ferramentas avançadas de IA que aceleram a modernização e melhorias de código
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Migração Assistida */}
          <div className="bg-white border border-purple-300 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">🚀</div>
              <h4 className="text-lg font-bold text-purple-800">Migração Assistida .NET Framework → .NET Core</h4>
            </div>
            <p className="text-gray-700 mb-3">
              O GitHub Copilot oferece ferramentas especializadas para modernizar aplicações .NET Framework para as versões mais recentes do .NET Core.
            </p>
            <div className="bg-purple-100 border border-purple-200 rounded p-3 mb-3">
              <p className="text-purple-800 text-sm font-medium">
                📈 <strong>Impacto no SHMS:</strong> Pode nos auxiliar a atualizar o sistema para a mais nova versão do .NET Core, 
                trazendo <strong>imensas melhorias de performance, segurança e funcionalidades modernas</strong> para a aplicação.
              </p>
            </div>
            <a 
              href="https://learn.microsoft.com/pt-br/dotnet/core/porting/github-copilot-app-modernization-overview"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-800 font-medium text-sm underline"
            >
              📖 Documentação Oficial Microsoft
            </a>
          </div>

          {/* Geração de Testes */}
          <div className="bg-white border border-purple-300 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">🧪</div>
              <h4 className="text-lg font-bold text-purple-800">Geração Automatizada de Unit Tests</h4>
            </div>
            <p className="text-gray-700 mb-3">
              Criação automática de testes unitários abrangentes, melhorando a qualidade e confiabilidade do código.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Análise automática de métodos e classes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Geração de cenários de teste complexos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Melhoria da cobertura de código</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Testes para código legado</span>
              </div>
            </div>
          </div>

          {/* Patterns Modernos */}
          <div className="bg-white border border-purple-300 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">⚡</div>
              <h4 className="text-lg font-bold text-purple-800">Suggestions para Patterns Modernos</h4>
            </div>
            <p className="text-gray-700 mb-3">
              Sugestões automáticas para implementar padrões modernos e melhores práticas de desenvolvimento.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-blue-500">🔄</span>
                <span>Conversão para padrões assíncronos (async/await)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">💉</span>
                <span>Implementação de Dependency Injection</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">🎯</span>
                <span>Sugestões contextuais em tempo real</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">🔧</span>
                <span>Refactoring inteligente de código</span>
              </div>
            </div>
          </div>

          {/* Integração Azure */}
          <div className="bg-white border border-purple-300 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">☁️</div>
              <h4 className="text-lg font-bold text-purple-800">Integração com Azure Services</h4>
            </div>
            <p className="text-gray-700 mb-3">
              Assistência especializada para integração com serviços Azure, otimizando a arquitetura cloud-native.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-blue-500">🏗️</span>
                <span>Configuração de serviços Azure</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">🔐</span>
                <span>Implementação de segurança cloud</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">🚀</span>
                <span>Otimização de performance</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">📊</span>
                <span>Monitoramento e telemetria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Comparação GitHub vs GitLab */}
        <div className="bg-white border border-purple-300 rounded-lg p-5">
          <h4 className="text-lg font-bold text-purple-800 mb-4 text-center">📊 Comparação de Ecosistemas IA</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <span className="text-xl">🏆</span>
                GitHub Copilot - Superioridade Técnica
              </h5>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Integração direta</strong> com Visual Studio/VS Code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Ferramentas específicas</strong> para .NET modernization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Ecosystem maduro</strong> para desenvolvimento Microsoft</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Custo:</strong> Business R$ 104,50/usuário/mês</span>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-orange-700 mb-3 flex items-center gap-2">
                <span className="text-xl">⚠️</span>
                GitLab Duo - Limitações
              </h5>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">△</span>
                  <span><strong>Integração limitada</strong> com IDEs .NET</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">△</span>
                  <span><strong>Ecosystem menos maduro</strong> para .NET</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">△</span>
                  <span><strong>Foco em DevSecOps</strong>, não modernização</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Custo:</strong> Incluído nos planos EE</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-4 text-xs text-purple-600 bg-purple-100 p-2 rounded">
          <strong>Fontes:</strong> 
          <a href="https://learn.microsoft.com/pt-br/dotnet/core/porting/github-copilot-app-modernization-overview" target="_blank" rel="noopener noreferrer" className="underline ml-1">
            Documentação Microsoft GitHub Copilot
          </a> | 
          GitHub Copilot oficial ($19/mês Business, $39/mês Enterprise) | 
          GitLab Duo incluído nos planos pagos | Conversão: 1 USD = 5,50 BRL
        </div>
      </div>
    </div>
  );
};

export default AISection; 