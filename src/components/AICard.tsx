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

const AICard: React.FC<AICardProps> = ({ platform, data }) => (
  <div className="bg-white rounded-lg border-2 border-purple-200 p-4 h-full">
    <div className="flex items-center gap-2 mb-3">
      <Zap className="w-5 h-5 text-purple-600" />
      <h4 className="font-semibold">{platform}</h4>
      <div className="ml-auto flex gap-2">
        <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">CLOUD ONLY</div>
        <div className="bg-purple-100 px-2 py-1 rounded text-xs font-bold">{data.rating}/10</div>
      </div>
    </div>
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
);

export default AICard;
