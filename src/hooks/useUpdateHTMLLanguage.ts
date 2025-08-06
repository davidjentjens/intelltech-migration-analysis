import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useUpdateHTMLLanguage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute('lang', i18n.resolvedLanguage || i18n.language);
  }, [i18n.resolvedLanguage, i18n.language]);
};
