import React, { useState } from "react";
import Pokedex from './components/templates/Pokedex';
import { IntlProvider, FormattedMessage } from "react-intl";

const messages = {
  en: {
    defaultMessage: 'Welcome to Pokedex App'
  },
  es: {
    defaultMessage: 'Bienvenido a la aplicacion Pokedex'
  },
  fr: {
    defaultMessage: 'Bienvenue dans l application Pokedex'
  }
};

function App() {
  const [locale, setLocale] = useState('es');

  return <>
    <nav className='navigation'>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <blockquote>
          <FormattedMessage id="defaultMessage" />
        </blockquote>
      </IntlProvider>
      <ul>
        <li onClick={ () => setLocale('en') } className={ locale === 'en' ? 'active' : ''}>English</li>
        <li onClick={ () => setLocale('es') } className={ locale === 'es' ? 'active' : ''}>Spanish</li>
        <li onClick={ () => setLocale('fr') } className={ locale === 'fr' ? 'active' : ''}>French</li>
      </ul>
    </nav>
    
    <Pokedex />
  </>;
}

export default App;
