import React from 'react';
import ComparisonBox from './ComparisonBox';
import CostTable from './CostTable';
import { Trophy, Users } from 'lucide-react';

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
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-lg p-6">
        <div className="text-center">
          <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center justify-center gap-2">
            <Trophy className="w-6 h-6" />
            Recomendação Estratégica da Equipe de Desenvolvimento
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-green-300 rounded-lg p-6 mb-4">
              <h4 className="font-bold text-green-800 mb-3 text-lg">
                🎯 GitHub Enterprise Cloud
              </h4>
              <p className="text-gray-700 text-base leading-relaxed">
                <strong>Proceder com GitHub Enterprise Cloud</strong> representa a decisão estratégica
                mais equilibrada. Maximiza o investimento já realizado, oferece superioridade comprovada
                das ferramentas de IA para modernização .NET, e elimina overhead operacional identificado
                pela equipe interna.
              </p>
            </div>
            
            <div className="bg-white border border-blue-300 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-blue-600" />
                <h5 className="font-semibold text-blue-800">Base da Recomendação</h5>
              </div>
              <p className="text-blue-700 text-sm">
                Esta análise foi conduzida pelo time de desenvolvimento, considerando aspectos 
                técnicos, operacionais e estratégicos da migração, com foco na continuidade 
                do projeto já iniciado e nas necessidades de modernização do SHMS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
