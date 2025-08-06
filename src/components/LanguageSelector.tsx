import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const languages = [
    { code: 'pt-BR', label: t('common.portuguese'), flag: '🇧🇷' },
    { code: 'en', label: t('common.english'), flag: '🇺🇸' },
  ];

  // Use a fallback during SSR/hydration to prevent mismatch
  const currentLanguage = isClient
    ? languages.find((lang) => lang.code === i18n.language) || languages[0]
    : languages[0]; // Always use pt-BR as default during SSR

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <div className="relative inline-block text-left">
      <div className="group">
        <button
          type="button"
          className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors cursor-pointer"
          aria-expanded="false"
          aria-haspopup="true"
        >
          <Languages className="w-4 h-4" />
          <span className="flex items-center gap-1">
            <span>{currentLanguage.flag}</span>
            <span>{currentLanguage.label}</span>
          </span>
        </button>

        <div className="absolute right-0 z-10 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                  isClient && i18n.language === language.code
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-700'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{language.flag}</span>
                  <span>{language.label}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
