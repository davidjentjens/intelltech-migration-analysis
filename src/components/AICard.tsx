import React from 'react';
import { Zap } from 'lucide-react';

interface AICardProps {
  platform: string;
  data: {
    tools: string[];
    rating: number;
    fonte: string;
  };
}

const AICard: React.FC<AICardProps> = ({ platform, data }) => {
  const isGitHub = platform.includes('GitHub');
  const bgColor = isGitHub ? 'bg-gray-900' : 'bg-orange-500';
  const borderColor = isGitHub ? 'border-gray-900' : 'border-orange-500';
  const platformName = isGitHub ? 'GitHub Copilot' : 'GitLab Duo';

  return (
    <div className={`w-full bg-white rounded-lg border-2 ${borderColor} shadow-lg overflow-hidden`}>
      {/* Colored Header with Zap, Platform Name, and Tags */}
      <div className={`${bgColor} text-white p-4`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            <h3 className="font-bold text-lg">{platformName}</h3>
          </div>
          <div className="flex gap-2">
            <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">
              CLOUD ONLY
            </div>
            <div className="bg-white text-gray-900 px-2 py-1 rounded text-xs font-bold">
              {data.rating}/10
            </div>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <div className="space-y-1 mb-3">
          {data.tools.map((tool, index) => (
            <div key={index} className="text-xs bg-purple-50 px-2 py-1 rounded">
              {tool}
            </div>
          ))}
        </div>
        <div className="text-xs text-purple-600 bg-purple-50 p-2 rounded">
          <strong>Fonte:</strong> {data.fonte}
        </div>
      </div>
    </div>
  );
};

export default AICard;
