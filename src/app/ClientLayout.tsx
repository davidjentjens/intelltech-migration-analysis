'use client';

import React from 'react';
import { useUpdateHTMLLanguage } from '@/hooks/useUpdateHTMLLanguage';
import '@/i18n';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  useUpdateHTMLLanguage();

  return <>{children}</>;
};

export default ClientLayout;
