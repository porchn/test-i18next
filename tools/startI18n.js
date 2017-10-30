import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
import Cache from 'i18next-localstorage-cache';
/**
 * Initialize a i18next instance.
 * @function startI18n
 * @param {object} files - Translation files.
 * @param {string} lang - Active language.
 */
const startI18n = (files, lang) => {
  i18n
    .use(LanguageDetector)
    .use(Cache)
    .init({
    lng: lang, // active language http://i18next.com/translate/
    fallbackLng: 'en',
    resources: files,
    ns: ['common'],
    defaultNS: 'common',
    debug: true
  })

  return i18n
}
export default startI18n
