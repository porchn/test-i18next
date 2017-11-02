import React, { Component } from 'react'
import { I18nextProvider } from 'react-i18next'
import startI18n from '../tools/startI18n'
import { getTranslation } from '../tools/translationHelpers'
import Title from '../components/Title'
import Post from '../components/Post'

function getLanguage(){
  if (global.navigator !== undefined) {
    return global.navigator.languages ? global.navigator.languages[0] : (global.navigator.language || global.navigator.userLanguage) || 'en';
  }else{
    return 'en';
  }
}

export default class Homepage extends Component {
  static async getInitialProps () {
    const translations = await getTranslation(['common', 'namespace1'])
    return { translations }
  }

  constructor (props) {
    super(props)
    console.log(`constructor : ${getLanguage()}`);
    this.i18n = startI18n(props.translations, getLanguage())
  }

  componentDidMount(){
    console.log(this.props.translations);
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
