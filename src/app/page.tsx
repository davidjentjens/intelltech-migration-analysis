'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import TabNavigation from '../components/TabNavigation';
import OverviewSection from '../components/OverviewSection';
import AISection from '../components/AISection';
import SecuritySection from '../components/SecuritySection';
import LanguageSelector from '../components/LanguageSelector';
import ClientOnly from '../components/ClientOnly';

const ComparisonPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { t } = useTranslation();

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
          {/* Language Selector - Top Right */}
          <div className="flex justify-end mb-4">
            <LanguageSelector />
          </div>

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

          <ClientOnly
            fallback={
              <>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  Análise Comparativa de Plataformas Git
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Comparação detalhada entre GitLab e GitHub para modernização do SHMS
                </p>
              </>
            }
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('overview.title')}</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('overview.subtitle')}</p>
          </ClientOnly>
        </div>

        {/* Navigation Tabs */}
        <ClientOnly
          fallback={
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg p-1 shadow-lg flex">
                <button className="px-4 py-2 rounded-md flex items-center gap-2 bg-blue-600 text-white">
                  Análise Completa
                </button>
                <button className="px-4 py-2 rounded-md flex items-center gap-2 text-gray-600">
                  Recursos de IA
                </button>
                <button className="px-4 py-2 rounded-md flex items-center gap-2 text-gray-600">
                  Segurança
                </button>
              </div>
            </div>
          }
        >
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        </ClientOnly>

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
