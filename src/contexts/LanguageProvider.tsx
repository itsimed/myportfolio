import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { LanguageContext } from './LanguageContext';
import type { LanguageContextType, TranslationValue } from './LanguageContext';
import { translations, type Language } from '../translations';

interface LanguageProviderProps {
  children: ReactNode;
}

const getInitialLanguage = (): Language => {
  try {
    return localStorage.getItem('language') === 'en' ? 'en' : 'fr';
  } catch (error) {
    console.warn('Unable to read the saved language preference.', error);
    return 'fr';
  }
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setCurrentLanguage] = useState<Language>(getInitialLanguage);

  const t = useCallback((key: string): string => {
    const path = key.split('.');
    let value: TranslationValue = translations[language];

    for (const part of path) {
      if (typeof value === 'string') {
        console.error(`Missing ${language} translation: ${key}`);
        return key;
      }
      if (Array.isArray(value)) {
        const index = Number(part);
        if (!Number.isInteger(index) || !Object.prototype.hasOwnProperty.call(value, index)) {
          console.error(`Missing ${language} translation: ${key}`);
          return key;
        }
        value = value[index];
      } else {
        if (!Object.prototype.hasOwnProperty.call(value, part)) {
          console.error(`Missing ${language} translation: ${key}`);
          return key;
        }
        value = value[part];
      }
    }

    if (typeof value !== 'string') {
      console.error(`Translation is not a string: ${key}`);
      return key;
    }
    return value;
  }, [language]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setCurrentLanguage(nextLanguage);
    try {
      localStorage.setItem('language', nextLanguage);
    } catch (error) {
      console.warn('Unable to save the language preference.', error);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const contextValue: LanguageContextType = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t],
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
