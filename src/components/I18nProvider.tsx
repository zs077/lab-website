'use client';

import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from '@/translations/en';
import zhTranslations from '@/translations/zh';

// 初始化 i18n
if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: enTranslations,
        },
        zh: {
          translation: zhTranslations,
        },
      },
      fallbackLng: 'en',
      lng: 'en',
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
      },
    });
}

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 默认打开站点时统一使用英文
    if (i18n.language !== 'en') {
      i18n.changeLanguage('en');
    }
    localStorage.setItem('i18nextLng', 'en');
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
