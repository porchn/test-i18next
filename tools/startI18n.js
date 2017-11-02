import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
import Cache from 'i18next-localstorage-cache';
/**
 * Initialize a i18next instance.
 * @function startI18n
 * @param {object} files - Translation files.
 * @param {string} lang - Active language.
 */
const startI18n = (files,lang=null) => {
  i18n
    .use(LanguageDetector)
    .use(Cache)
    .init({
      lng:lang,
      fallbackLng: 'en',
      resources: files,
      ns: ['common'],
      defaultNS: 'common',
      debug: true,
      detection: {},
      saveMissing: true,
      interpolation: {
        order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
        lookupQuerystring: 'lng',
        lookupCookie: 'i18next',
        lookupLocalStorage: 'i18nextLng',
        caches: ['localStorage', 'cookie'],
        excludeCacheFor: ['cimode'],
        cookieMinutes: 10,
        cookieDomain: 'myDomain'
      }
    })

  return i18n
}
export default startI18n
