import React from 'react';
import AICard from './AICard';
import { researchData } from '../data';
import { AlertTriangle } from 'lucide-react';

const AISection: React.FC = () => {
  const aiCards = [
    { platform: "GitHub Copilot Ecosystem", data: researchData.ia.github },
    { platform: "GitLab Duo Suite", data: researchData.ia.gitlab }
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
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
      
      <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-purple-800 mb-3">🚀 Vantagem Competitiva para .NET</h3>
        <div className="flex gap-4 overflow-x-auto">
                        <div className="flex-shrink-0 w-96">
                <h4 className="font-semibold text-purple-700 mb-2">GitHub Copilot - Superioridade Técnica:</h4>
                <ul className="space-y-1 text-purple-600 text-sm">
                  <li>• <strong>Integração direta no código</strong> através de VS Code/Studio</li>
                  <li>• <strong>Migração assistida</strong> .NET Framework → .NET Core</li>
                  <li>• <strong>Geração automatizada</strong> de unit tests para código legado</li>
                  <li>• <strong>Sugestões contextuais</strong> em tempo real</li>
                  <li>• <strong>Padrões modernos</strong> (async/await, dependency injection)</li>
                  <li>• <strong>Custo:</strong> Business R$ 104,50/usuário/mês</li>
                </ul>
              </div>
              <div className="flex-shrink-0 w-96">
                <h4 className="font-semibold text-purple-700 mb-2">GitLab Duo - Limitações:</h4>
                <ul className="space-y-1 text-purple-600 text-sm">
                  <li>• <strong>Não oferece integração equivalente</strong> com IDEs .NET</li>
                  <li>• <strong>Ecosystem menos maduro</strong> para modernização Microsoft</li>
                  <li>• Foco em DevSecOps e privacidade</li>
                  <li>• Resolução automática de vulnerabilidades</li>
                  <li>• Análise de root cause em CI/CD</li>
                  <li>• <strong>Custo:</strong> Incluído nos planos EE</li>
                </ul>
              </div>
        </div>
        <div className="mt-4 text-xs text-purple-600 bg-purple-100 p-2 rounded">
          <strong>Fontes de Preços:</strong> GitHub Copilot oficial ($19/mês Business, $39/mês Enterprise), 
          GitLab Duo incluído nos planos pagos. Conversão: 1 USD = 5,50 BRL
        </div>
      </div>
    </div>
  );
};

export default AISection; 