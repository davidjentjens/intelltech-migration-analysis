'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import TabNavigation from '../components/TabNavigation';
import OverviewSection from '../components/OverviewSection';
import AISection from '../components/AISection';
import SecuritySection from '../components/SecuritySection';

const ComparisonPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewSection />;
      case 'ai':
        return <AISection />;
      case 'security':
        return <SecuritySection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          {/* Logo */}
          <div className="mb-6">
            <Image
              src="/intelltech.png"
              alt="Intelltech Logo"
              width={200}
              height={80}
              className="mx-auto"
              priority
            />
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Análise Estratégica: GitHub vs GitLab / Self-Hosted vs Cloud + IA
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comparativo detalhado das opções de versionamento considerando custos, recursos de IA, e
            adequação para arquiteturas .NET legadas
          </p>
        </div>

        {/* Navigation Tabs */}
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Content based on active tab */}
        <div className="flex justify-center">{renderContent()}</div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">
            Análise baseada em dados de mercado atualizados (Agosto 2025) e especificidades da
            arquitetura .NET da empresa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComparisonPage;
