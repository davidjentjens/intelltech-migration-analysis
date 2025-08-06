import React from 'react';
import { useTranslation } from 'react-i18next';
import { Settings, Zap, Shield } from 'lucide-react';
import { TabItem } from '../types';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  const { t } = useTranslation();

  const tabs: TabItem[] = [
    { id: 'overview', label: t('navigation.overview'), icon: <Settings className="w-4 h-4" /> },
    { id: 'ai', label: t('navigation.ai'), icon: <Zap className="w-4 h-4" /> },
    { id: 'security', label: t('navigation.security'), icon: <Shield className="w-4 h-4" /> },
  ];

  return (
    <div className="flex justify-center mb-8">
      <div className="bg-white rounded-lg p-1 shadow-lg flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors cursor-pointer ${
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
