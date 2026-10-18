import { createContext } from 'react';
import type { Language } from '../translations';

export type TranslationValue = string | TranslationValue[] | TranslationTree;
export type TranslationTree = { [key: string]: TranslationValue };

export interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
