import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import React from "react";

const resources = {
  en: {
    translation: {
      "DonauTech": "DonauTech",
      "Product/Software development": "Product/Software development",
      'Upcoming product ;)': 'Upcoming product ;)',
      'Medium articles': 'Medium articles',
      'IOT/Scooter Business services': 'IOT/Scooter Business services',
      'Our products and services': 'Our products and services'
    }
  },
  de: {
    translation: {
      "DonauTech": "DonauTech DE",
      "Product/Software development": "Produkt/Software Entwicklung",
      'Upcoming product ;)': 'Bevorstehendes Produkt ;)',
      'Medium articles': "Medium Artikel",
      'IOT/Scooter Business services': 'IOT / Scooter Business-Dienstleistungen',
      "Our products and services": 'Unsere Produkte und Dienstleistungen'
    }
  }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: "en",

      keySeparator: false, // we do not use keys in form messages.welcome

      interpolation: {
        escapeValue: false // react already safes from xss
      }
    });

export default i18n;