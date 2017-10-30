import React, { Component } from 'react'
import { I18nextProvider } from 'react-i18next'
import startI18n from '../tools/startI18n'
import { getTranslation } from '../tools/translationHelpers'
import Title from '../components/Title'
import Post from '../components/Post'

// get language from query parameter or url path
const lang = 'en'

export default class Homepage extends Component {
  static async getInitialProps () {
    const translations = await getTranslation(
      lang,
      ['common', 'namespace1']
    )

    return { translations }
  }

  constructor (props) {
    super(props)

    this.i18n = startI18n(props.translations, lang)
  }

  componentDidMount(){
    const newlang = getTranslation(
      'th',
      ['common', 'namespace1']
    )

    console.log(newlang)
  }

  render (props) {
    return (
      <I18nextProvider i18n={this.i18n}>
        <div>
          <p>{this.i18n.t('hello')}</p>
          <Title />
          <Post />
        </div>
      </I18nextProvider>
    )
  }
}
