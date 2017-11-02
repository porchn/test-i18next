import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
import Cache from 'i18next-localstorage-cache';
/**
 * Initialize a i18next instance.
 * @function startI18n
 * @param {object} files - Translation files.
 * @param {string} lang - Active language.
 */
const startI18n = (files) => {
  i18n
    .use(LanguageDetector)
    .use(Cache)
    .init({
      fallbackLng: 'en',
      resources: files,
      ns: ['common'],
      defaultNS: 'common',
      debug: true,
      detection: {
        order: ['localStorage'],
        lookupLocalStorage: 'userLng',
        caches: ['localStorage']
      },
      saveMissing: true,
      interpolation: {
        escapeValue: false,
        formatSeparator: ',',
        format: (value, format, lng) => {
          if (format === 'uppercase') return value.toUpperCase();
          return value;
        }
      }
    })

  return i18n
}
export default startI18n
