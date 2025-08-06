import React from 'react';
import AICard from './AICard';
import { researchData } from '@/data';
import { AlertTriangle, Brain, Users } from 'lucide-react';

const AISection: React.FC = () => {
  const aiCards = [
    { platform: 'GitHub Copilot Ecosystem', data: researchData.ia.github },
    { platform: 'GitLab Duo Suite', data: researchData.ia.gitlab },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto" data-section="ai">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Recursos de Inteligência Artificial
      </h2>

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
          <AICard key={index} platform={card.platform} data={card.data} />
        ))}
      </div>

      {/* Benefícios Detalhados do GitHub Copilot */}
      <div className="border-2 border-gray-900 rounded-lg p-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            🤖 GitHub Copilot para Modernização do SHMS
          </h3>
          <p className="text-gray-700 text-lg">
            Ferramentas avançadas de IA que aceleram a modernização e melhorias de código
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Migração Assistida */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">🚀</div>
              <h4 className="text-lg font-bold text-purple-800">
                Migração Assistida .NET Framework → .NET Core
              </h4>
            </div>
            <p className="text-gray-700 mb-3">
              O GitHub Copilot oferece ferramentas especializadas para modernizar aplicações .NET
              Framework para as versões mais recentes do .NET Core.
            </p>
            <div className="bg-purple-100 border border-purple-200 rounded p-3 mb-3">
              <p className="text-purple-800 text-sm font-medium">
                📈 <strong>Impacto no SHMS:</strong> Pode nos auxiliar a atualizar o sistema para a
                mais nova versão do .NET Core, trazendo{' '}
                <strong>
                  imensas melhorias de performance, segurança e funcionalidades modernas
                </strong>{' '}
                para a aplicação.
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
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">🧪</div>
              <h4 className="text-lg font-bold text-purple-800">
                Geração Automatizada de Unit Tests
              </h4>
            </div>
            <p className="text-gray-700 mb-3">
              Criação automática de testes unitários abrangentes, melhorando a qualidade e
              confiabilidade do código.
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
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">⚡</div>
              <h4 className="text-lg font-bold text-purple-800">
                Suggestions para Patterns Modernos
              </h4>
            </div>
            <p className="text-gray-700 mb-3">
              Sugestões automáticas para implementar padrões modernos e melhores práticas de
              desenvolvimento.
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
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">☁️</div>
              <h4 className="text-lg font-bold text-purple-800">Integração com Azure Services</h4>
            </div>
            <p className="text-gray-700 mb-3">
              Assistência especializada para integração com serviços Azure, otimizando a arquitetura
              cloud-native.
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

          {/* Agente de Código */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">🤖</div>
              <h4 className="text-lg font-bold text-purple-800">Agente de Código Inteligente</h4>
            </div>
            <p className="text-gray-700 mb-3">
              Delegue tarefas completas ao agente GitHub Copilot que planeja, escreve, testa e itera
              código automaticamente usando GitHub Actions.
            </p>
            <div className="bg-green-100 border border-green-200 rounded p-3">
              <strong className="text-green-800">Impacto para SHMS:</strong> Acelera desenvolvimento
              de funcionalidades complexas através de automação inteligente de tarefas.
            </div>
          </div>

          {/* Múltiplos Modelos */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">🧠</div>
              <h4 className="text-lg font-bold text-purple-800">Múltiplos Modelos de IA</h4>
            </div>
            <p className="text-gray-700 mb-3">
              Acesso a diferentes modelos de IA (Claude 3.5 Sonnet, GPT-4.1, Gemini 2.0) conforme a
              necessidade específica da tarefa.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-purple-500">⚡</span>
                <span>Claude 3.5 Sonnet para análise de código</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-500">🎯</span>
                <span>GPT-4.1 para tarefas específicas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-500">🚀</span>
                <span>Gemini 2.0 Flash para velocidade</span>
              </div>
            </div>
          </div>

          {/* Code Review Automatizado */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">🔍</div>
              <h4 className="text-lg font-bold text-purple-800">Code Review Automatizado</h4>
            </div>
            <p className="text-gray-700 mb-3">
              Análise automatizada de código antes da revisão humana, detectando bugs ocultos,
              vulnerabilidades e sugerindo melhorias.
            </p>
            <div className="bg-green-100 border border-green-200 rounded p-3">
              <strong className="text-green-800">Benefício:</strong> Reduz significativamente o
              tempo de code review e melhora a qualidade do código SHMS.
            </div>
          </div>

          {/* Segurança Inteligente */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">🛡️</div>
              <h4 className="text-lg font-bold text-purple-800">Segurança Inteligente</h4>
            </div>
            <p className="text-gray-700 mb-3">
              Filtros avançados que detectam vulnerabilidades, código duplicado e padrões inseguros
              em tempo real durante desenvolvimento.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-red-500">🔒</span>
                <span>Detecção de vulnerabilidades em tempo real</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500">🔍</span>
                <span>Identificação de código duplicado</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500">⚠️</span>
                <span>Filtros contra padrões inseguros</span>
              </div>
            </div>
          </div>
        </div>

        {/* Comparação GitHub vs GitLab */}
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-lg font-bold text-purple-800 mb-4 text-center">
            📊 Comparação de Ecosistemas IA
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <span className="text-xl">🏆</span>
                GitHub Copilot - Superioridade Técnica
              </h5>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>
                    <strong>Integração direta</strong> com Visual Studio/VS Code
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>
                    <strong>Ferramentas específicas</strong> para .NET modernization
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>
                    <strong>Ecosystem maduro</strong> para desenvolvimento Microsoft
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>
                    <strong>Agente de código</strong> para delegação automática de tarefas
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>
                    <strong>Múltiplos modelos de IA</strong> (Claude, GPT, Gemini) conforme
                    necessidade
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>
                    <strong>Code review automatizado</strong> com detecção avançada de bugs
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>
                    <strong>Custo:</strong> Enterprise R$ 214,50/usuário/mês
                  </span>
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
                  <span>
                    <strong>Integração limitada</strong> com IDEs .NET
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">△</span>
                  <span>
                    <strong>Ecosystem menos maduro</strong> para .NET
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">△</span>
                  <span>
                    <strong>Foco em DevSecOps</strong>, não modernização
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>
                    <strong>Custo:</strong> Pro Premium R$ 214,50/usuário/mês
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-4 text-xs text-purple-600 bg-purple-100 p-2 rounded">
          <strong>Fontes:</strong>
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
            Recomendação de Recursos de IA
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-purple-300 rounded-lg p-6 mb-4">
              <h4 className="font-bold text-purple-800 mb-3 text-lg">
                🤖 GitHub Copilot Enterprise (CLOUD) para Modernização .NET
              </h4>
              <p className="text-gray-700 text-base leading-relaxed">
                Para o contexto específico do <strong>SHMS e modernização .NET Framework</strong>, o
                GitHub Copilot oferece vantagens técnicas decisivas. Com{' '}
                <strong>preços equivalentes</strong>
                ao GitLab Duo Pro, suas ferramentas especializadas para migração .NET, geração
                automatizada de testes e integração com Visual Studio proporcionam um{' '}
                <strong>ROI superior</strong>
                para modernização de código comparado ao GitLab Duo, que possui foco em DevSecOps.
              </p>
            </div>

            <div className="bg-white border border-blue-300 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-blue-600" />
                <h5 className="font-semibold text-blue-800">Justificativa Técnica</h5>
              </div>
              <p className="text-blue-700 text-sm">
                Análise baseada na superioridade do GitHub Copilot para desenvolvimento .NET,
                integração nativa com Azure services, e ferramentas específicas para modernização de
                aplicações legadas - fatores críticos para o sucesso da evolução do SHMS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISection;
