import React, { useState } from 'react';
import { CheckCircle, XCircle, DollarSign, Cloud, Server } from 'lucide-react';
import { CostData } from '../types';
import { spreadsheetData, researchData } from '../data';

interface ComparisonBoxProps {
  platform: 'gitlab' | 'github';
}

const ComparisonBox: React.FC<ComparisonBoxProps> = ({ platform }) => {
  const [deploymentType, setDeploymentType] = useState<'onpremises' | 'cloud'>('onpremises');
  const [subtype, setSubtype] = useState<string>('');

  const isGitLab = platform === 'gitlab';
  const borderColor = isGitLab ? 'border-orange-500' : 'border-gray-900';
  const bgColor = isGitLab ? 'bg-orange-500' : 'bg-gray-900';

  const getOptions = () => {
    if (platform === 'gitlab') {
      if (deploymentType === 'onpremises') {
        return [
          { key: 'gitlab_ce_onpremises', label: 'GitLab CE', cost: researchData.custos.gitlab_ce_onpremises },
          { key: 'gitlab_ee_premium_onpremises', label: 'GitLab EE Premium', cost: researchData.custos.gitlab_ee_premium_onpremises },
          { key: 'gitlab_ee_ultimate_onpremises', label: 'GitLab EE Ultimate', cost: researchData.custos.gitlab_ee_ultimate_onpremises }
        ];
      } else {
        return [
          { key: 'gitlab_ee_premium_cloud', label: 'GitLab EE Premium', cost: researchData.custos.gitlab_ee_premium_cloud },
          { key: 'gitlab_ee_ultimate_cloud', label: 'GitLab EE Ultimate', cost: researchData.custos.gitlab_ee_ultimate_cloud }
        ];
      }
    } else {
      if (deploymentType === 'onpremises') {
        return [
          { key: 'github_ee_onpremises', label: 'GitHub EE', cost: researchData.custos.github_ee_onpremises }
        ];
      } else {
        return [
          { key: 'github_ee_cloud', label: 'GitHub EE', cost: researchData.custos.github_ee_cloud },
          { key: 'github_ee_cloud_copilot', label: 'GitHub EE + Copilot', cost: researchData.custos.github_ee_cloud_copilot }
        ];
      }
    }
  };

  const options = getOptions();
  const selectedOption = options.find(opt => opt.key === subtype) || options[0];

  React.useEffect(() => {
    setSubtype(options[0]?.key || '');
  }, [deploymentType, platform]);

  const advantages = spreadsheetData.vantagens[selectedOption.key as keyof typeof spreadsheetData.vantagens] || [];
  const disadvantages = spreadsheetData.desvantagens[selectedOption.key as keyof typeof spreadsheetData.desvantagens] || [];

  return (
    <div className={`bg-white rounded-lg border-2 ${borderColor} shadow-lg overflow-hidden`}>
      {/* Header */}
      <div className={`${bgColor} text-white p-4 flex items-center gap-2`}>
        <h3 className="font-bold text-lg">
          {platform === 'gitlab' ? 'GitLab' : 'GitHub'}
        </h3>
        {platform === 'github' && (
          <div className="ml-auto bg-yellow-400 text-gray-900 px-2 py-1 rounded text-xs font-bold">
            RECOMENDADO
          </div>
        )}
      </div>

      <div className="p-4 space-y-4">
        {/* Deployment Type Toggle */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Tipo de Implantação:</h4>
          <div className="flex gap-2">
            <button
              onClick={() => setDeploymentType('onpremises')}
              className={`px-3 py-1 rounded text-sm flex items-center gap-1 ${
                deploymentType === 'onpremises'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Server className="w-4 h-4" />
              Self-hosted
            </button>
            <button
              onClick={() => setDeploymentType('cloud')}
              className={`px-3 py-1 rounded text-sm flex items-center gap-1 ${
                deploymentType === 'cloud'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Cloud className="w-4 h-4" />
              Cloud
            </button>
          </div>
        </div>

        {/* Subtype Toggle */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Opção:</h4>
          <div className="flex flex-wrap gap-2">
            {options.map((option) => (
              <button
                key={option.key}
                onClick={() => setSubtype(option.key)}
                className={`px-3 py-1 rounded text-sm ${
                  subtype === option.key
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cost Information */}
        <div className="bg-green-50 border border-green-200 rounded p-3">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-4 h-4 text-green-600" />
            <span className="font-semibold text-green-800">Custo ({selectedOption.label})</span>
          </div>
          <div className="text-sm text-green-700">
            <div><strong>Mensal:</strong> {selectedOption.cost.mensal}</div>
            <div><strong>Anual:</strong> {selectedOption.cost.anual}</div>
            <div className="text-xs text-gray-600 mt-1">{selectedOption.cost.detalhes}</div>
            {deploymentType === 'onpremises' && (
              <div className="text-xs text-red-600 mt-2 font-semibold">
                ⚠️ SEM recursos de IA (apenas Cloud)
              </div>
            )}
          </div>
        </div>

        {/* Advantages */}
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
            {deploymentType === 'onpremises' && (
              <div className="flex items-start gap-2 mt-3 p-2 bg-red-50 border border-red-200 rounded">
                <XCircle className="w-3 h-3 text-red-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-red-700 font-semibold">
                  ⚠️ Recursos de IA NÃO disponíveis em soluções On-premises
                </span>
              </div>
            )}
          </div>
        </div>
        
        {/* Disadvantages */}
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
      </div>
    </div>
  );
};

export default ComparisonBox; 