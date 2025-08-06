import React from 'react';
import { DollarSign, Cloud, Zap } from 'lucide-react';
import { CostData } from '../types';

interface CostCardProps {
  platform: string;
  data: CostData;
}

const CostCard: React.FC<CostCardProps> = ({ platform, data }) => (
  <div
    className={`bg-white rounded-lg border-2 p-4 h-full ${
      platform.includes('GitLab')
        ? 'border-orange-500'
        : platform.includes('GitHub')
          ? 'border-gray-900'
          : 'border-gray-400'
    }`}
  >
    <div className="flex items-center gap-2 mb-3">
      <DollarSign className="w-5 h-5 text-green-600" />
      <h4 className="font-semibold">{platform}</h4>
      <div className="ml-auto flex gap-1">
        {/* Ícones indicadores */}
        {(platform.includes('Cloud') || platform.includes('Ultimate Cloud')) && (
          <Cloud className="w-4 h-4 text-blue-500" title="Cloud" />
        )}
        {(platform.includes('Copilot') ||
          platform.includes('Ultimate') ||
          platform.includes('Enterprise Cloud')) && (
          <Zap className="w-4 h-4 text-yellow-500" title="IA Integrada" />
        )}
      </div>
    </div>
    <div className="space-y-2 text-sm">
      <div>
        <span className="font-medium">Mensal:</span> {data.mensal}
      </div>
      <div>
        <span className="font-medium">Anual:</span> {data.anual}
      </div>
      <div className="text-gray-600 mb-2">{data.detalhes}</div>
      {data.explicacao && (
        <div className="text-xs text-gray-500 italic mb-2">{data.explicacao}</div>
      )}
      <div className="text-xs text-blue-600 bg-blue-50 p-2 rounded">
        <strong>Fonte:</strong>
        <a
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 underline hover:text-blue-800"
        >
          {data.fonte}
        </a>
      </div>
    </div>
  </div>
);

export default CostCard;
