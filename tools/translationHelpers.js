/* global fetch */
import 'isomorphic-fetch'

/**
 * Fetch translation file(s).
 * @function getTranslation
 * @param {string} lang - Language to fetch.
 * @param {array} files - Translation files to fetch.
 * @param {string} baseUrl - Locale location.
 * @return {object} Fetched translation files.
 */
export async function getTranslation (files=['common']) {
  let translation = {}
  let langs=['en','th']
  let baseUrl='http://localhost:3000/static/locales/'
  
  // for (let file of files) {
  //   const response = await fetch(`${baseUrl}${lang}/${file}.json`)
  //   translation[file] = await response.json()
  // }

  for (let lang of langs) {
    const languagefile={}
    for(let file of files){
      const response=await fetch(`${baseUrl}${lang}/${file}.json`)
      languagefile[file]=await response.json()
    }
    translation[lang] = languagefile
  }

  return translation
}
