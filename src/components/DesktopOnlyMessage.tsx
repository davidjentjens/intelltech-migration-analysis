import React from 'react';
import { useTranslation } from 'react-i18next';
import { Monitor, Smartphone } from 'lucide-react';

const DesktopOnlyMessage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="lg:hidden min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Monitor className="w-16 h-16 text-blue-600" />
            <div className="absolute -bottom-2 -right-2 bg-red-500 rounded-full p-1">
              <Smartphone className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-4">{t('responsive.title')}</h1>

        <p className="text-gray-600 mb-6 leading-relaxed">{t('responsive.message')}</p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-700">
            <strong>{t('responsive.recommendation')}</strong>
          </p>
          <p className="text-xs text-blue-600 mt-1">{t('responsive.minWidth')}</p>
        </div>
      </div>
    </div>
  );
};

export default DesktopOnlyMessage;
