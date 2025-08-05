import React from 'react';
import { CheckCircle, XCircle, DollarSign, Cloud, Server } from 'lucide-react';
import { CostData } from '../types';

interface PlatformCardProps {
  name: string;
  type: 'cloud' | 'on-premises';
  provider: 'github' | 'gitlab';
  advantages: string[];
  disadvantages: string[];
  cost: CostData;
  recommended?: boolean;
}

const PlatformCard: React.FC<PlatformCardProps> = ({
  name,
  type,
  provider,
  advantages,
  disadvantages,
  cost,
  recommended = false
}) => {
  const isGitLab = provider === 'gitlab';
  const borderColor = isGitLab ? 'border-orange-500' : 'border-gray-900';
  const bgColor = isGitLab ? 'bg-orange-500' : 'bg-gray-900';
  const Icon = type === 'cloud' ? Cloud : Server;

  return (
    <div className={`w-full bg-white rounded-lg shadow-lg overflow-hidden border-2 ${borderColor} h-full`}>
      <div className={`${bgColor} text-white p-4 flex items-center gap-2`}>
        <Icon className="w-6 h-6" />
        <h3 className="font-bold text-lg">{name}</h3>
        {recommended && (
          <div className="ml-auto bg-yellow-400 text-gray-900 px-2 py-1 rounded text-xs font-bold">
            RECOMENDADO
          </div>
        )}
      </div>
      <div className="p-4 space-y-4">
        {/* Vantagens */}
        <div>
          <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Vantagens
          </h4>
          <div className="space-y-2">
            {advantages.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="w-3 h-3 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Desvantagens */}
        <div className="border-t pt-4">
          <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
            <XCircle className="w-5 h-5" />
            Desvantagens
          </h4>
          <div className="space-y-2">
            {disadvantages.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <XCircle className="w-3 h-3 text-red-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Custo Total */}
        <div className="bg-green-50 border border-green-200 rounded p-3">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-4 h-4 text-green-600" />
            <span className="font-semibold text-green-800">Custo Total</span>
          </div>
          <div className="text-sm text-green-700">
            <div><strong>Mensal:</strong> {cost.mensal}</div>
            <div><strong>Anual:</strong> {cost.anual}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformCard; 