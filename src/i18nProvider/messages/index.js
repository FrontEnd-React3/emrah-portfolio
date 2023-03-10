import en from './en-US';
import nl from './nl-NL';

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import './index.css';
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next"
        }
      },       
      fr: {
        translation: {
          "Welcome to React": "Bienvenu chez React and react-i18next"
        }
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

   
  });

function App() {
  const { t } = useTranslation();

  return <h2>{t('Welcome to React')}</h2>;
}

// append app to dom
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);



export default {
  ...en,
  ...nl,
};
