import React from 'react';
import ComparisonBox from './ComparisonBox';
import CostTable from './CostTable';

const OverviewSection: React.FC = () => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Análise Comparativa Completa */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Análise Comparativa por Plataforma
        </h2>

        {/* Two main comparison boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ComparisonBox platform="gitlab" />
          <ComparisonBox platform="github" />
        </div>
      </div>

      {/* Comparativo de Custos */}
      <CostTable />

      {/* Recomendação Principal */}
      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-green-800 mb-3">
          🏆 Recomendação Estratégica: GitHub Enterprise Cloud
        </h2>
        <p className="text-green-700 text-lg max-w-4xl mx-auto mb-4">
          <strong>Proceder com GitHub Enterprise Cloud</strong> representa a decisão estratégica
          mais equilibrada. Maximiza o investimento já realizado, oferece superioridade comprovada
          das ferramentas de IA para modernização .NET, e elimina overhead operacional identificado
          pela equipe interna.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded p-3 max-w-3xl mx-auto">
          <p className="text-blue-800 text-sm font-medium">
            📋 <strong>Base da Recomendação:</strong> Esta análise foi conduzida pelo time de
            desenvolvimento, considerando aspectos técnicos, operacionais e estratégicos da
            migração.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
