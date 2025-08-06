import React from 'react';
import { Settings, Zap, Shield } from 'lucide-react';
import { TabItem } from '../types';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs: TabItem[] = [
    { id: 'overview', label: 'Análise Completa', icon: <Settings className="w-4 h-4" /> },
    { id: 'ai', label: 'Recursos de IA', icon: <Zap className="w-4 h-4" /> },
    { id: 'security', label: 'Segurança', icon: <Shield className="w-4 h-4" /> },
  ];

  return (
    <div className="flex justify-center mb-8">
      <div className="bg-white rounded-lg p-1 shadow-lg flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
              activeTab === tab.id ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
