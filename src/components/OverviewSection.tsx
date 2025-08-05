import React from 'react';
import ComparisonBox from './ComparisonBox';

const OverviewSection: React.FC = () => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Análise Comparativa Completa */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Análise Comparativa por Plataforma</h2>
        
        {/* Two main comparison boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ComparisonBox platform="gitlab" />
          <ComparisonBox platform="github" />
        </div>
      </div>

      {/* Comparativo de Custos */}
      <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-yellow-800 mb-4 text-center">
          💰 Comparativo de Custos Anuais (47 usuários)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-yellow-300">
                <th className="text-left py-3 px-4 font-semibold">Plataforma</th>
                <th className="text-center py-3 px-4 font-semibold">Custo Mensal</th>
                <th className="text-center py-3 px-4 font-semibold">Custo Anual</th>
                <th className="text-center py-3 px-4 font-semibold">Detalhes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-yellow-200">
                <td className="py-3 px-4 font-medium">GitLab CE (Self-hosted)</td>
                <td className="text-center py-3 px-4">R$ 0</td>
                <td className="text-center py-3 px-4">R$ 0</td>
                <td className="py-3 px-4 text-xs">Licença gratuita, apenas infraestrutura</td>
              </tr>
              <tr className="border-b border-yellow-200">
                <td className="py-3 px-4 font-medium">GitLab EE Premium (Self-hosted)</td>
                <td className="text-center py-3 px-4">R$ 7.496</td>
                <td className="text-center py-3 px-4">R$ 89.958</td>
                <td className="py-3 px-4 text-xs">GitLab EE Premium $29/usuário</td>
              </tr>
              <tr className="border-b border-yellow-200">
                <td className="py-3 px-4 font-medium">GitLab EE Ultimate (Self-hosted)</td>
                <td className="text-center py-3 px-4">R$ 25.592</td>
                <td className="text-center py-3 px-4">R$ 307.100</td>
                <td className="py-3 px-4 text-xs">GitLab EE Ultimate $99/usuário</td>
              </tr>
              <tr className="border-b border-yellow-200">
                <td className="py-3 px-4 font-medium">GitLab EE Premium (Cloud)</td>
                <td className="text-center py-3 px-4">R$ 7.496</td>
                <td className="text-center py-3 px-4">R$ 89.958</td>
                <td className="py-3 px-4 text-xs">GitLab EE Premium Cloud $29/usuário</td>
              </tr>
              <tr className="border-b border-yellow-200">
                <td className="py-3 px-4 font-medium">GitLab EE Ultimate (Cloud)</td>
                <td className="text-center py-3 px-4">R$ 25.592</td>
                <td className="text-center py-3 px-4">R$ 307.100</td>
                <td className="py-3 px-4 text-xs">GitLab EE Ultimate Cloud $99/usuário</td>
              </tr>
              <tr className="border-b border-yellow-200">
                <td className="py-3 px-4 font-medium">GitHub EE (Self-hosted)</td>
                <td className="text-center py-3 px-4">R$ 5.429</td>
                <td className="text-center py-3 px-4">R$ 65.142</td>
                <td className="py-3 px-4 text-xs">GitHub EE $21/usuário + Azure VM</td>
              </tr>
              <tr className="border-b border-yellow-200 bg-green-50">
                <td className="py-3 px-4 font-medium">GitHub EE (Cloud)</td>
                <td className="text-center py-3 px-4">R$ 5.429</td>
                <td className="text-center py-3 px-4">R$ 65.142</td>
                <td className="py-3 px-4 text-xs">GitHub EE Cloud $21/usuário</td>
              </tr>
              <tr className="border-b border-yellow-200 bg-green-50">
                <td className="py-3 px-4 font-medium">GitHub EE + Copilot (Cloud)</td>
                <td className="text-center py-3 px-4">R$ 11.864</td>
                <td className="text-center py-3 px-4">R$ 142.362</td>
                <td className="py-3 px-4 text-xs">GitHub EE + Copilot Enterprise $21+$39/usuário</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Análise de Migração */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">
          📊 Análise de Investimento em Migração
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-blue-700 mb-3">✅ Vantagens de Continuar com GitHub:</h3>
            <ul className="space-y-2 text-blue-600 text-sm">
              <li>• <strong>80% dos pipelines já convertidos</strong> automaticamente</li>
              <li>• <strong>Repositórios Git migram seamless</strong>, preservando histórico completo</li>
              <li>• <strong>Equipe já treinada</strong> em GitHub Actions</li>
              <li>• <strong>Momentum mantido</strong> em adoção de ferramentas de IA</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-red-700 mb-3">❌ Custo de Reverter para GitLab:</h3>
            <ul className="space-y-2 text-red-600 text-sm">
              <li>• <strong>8-12 semanas</strong> para reconversão de pipelines</li>
              <li>• <strong>R$ 15.000-25.000</strong> em re-treinamento da equipe</li>
              <li>• <strong>3-6 meses de atraso</strong> em projetos de modernização</li>
              <li>• <strong>Perda de momentum</strong> em adoção de IA</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recomendação Principal */}
      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-green-800 mb-3">
          🏆 Recomendação Estratégica: GitHub Enterprise Cloud
        </h2>
        <p className="text-green-700 text-lg max-w-4xl mx-auto">
          <strong>Proceder com GitHub Enterprise Cloud</strong> representa a decisão estratégica mais equilibrada. 
          Maximiza o investimento já realizado, oferece superioridade comprovada das ferramentas de IA para modernização .NET, 
          e elimina overhead operacional identificado pela equipe interna.
        </p>
      </div>
    </div>
  );
};

export default OverviewSection; 