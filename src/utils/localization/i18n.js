import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { ua, en } from './dictionaries';
import { LANGUAGE_STORAGE_KEY } from '../../constants';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      lookupLocalStorage: LANGUAGE_STORAGE_KEY,
    },
    lng: 'ua',
    resources: { ua, en },
    fallbackLng: 'ua',
    debug: false,
    returnObjects: true,
    whitelist: ['ua', 'en'],
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      useSuspense: true,
      transSupportBasicHtmlNodes: true,
    },
  });

export default i18n;
