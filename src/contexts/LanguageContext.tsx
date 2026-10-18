import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { translations, type Language } from '../translations';

type TranslationTree = {
  [key: string]: string | TranslationTree;
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

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
    let value: string | TranslationTree = translations[language];

    for (const part of path) {
      if (typeof value === 'string' || !Object.prototype.hasOwnProperty.call(value, part)) {
        console.error(`Missing ${language} translation: ${key}`);
        return key;
      }
      value = value[part];
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

  const contextValue = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t],
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
