import { Dispatch, useState, useEffect } from 'react';

let storeLocale: (locale: string) => void;

let globalCurrentLocale = 'en-GB';
let dispatcherList: Array<Dispatch<string>> = [];

const TranslatableText = ({ children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      if (window.localStorage.getItem('locale')) {
        setLocale(window.localStorage.getItem('locale'));
      } else {
        window.localStorage.setItem('locale', 'en-GB');
        setLocale('en-GB');
      }
    }
    storeLocale = (locale) => {
      window.localStorage.setItem('locale', locale);
    };
  }, []);
  const [currentLocale, setCurrentLocale] = useState(globalCurrentLocale);
  dispatcherList.push(setCurrentLocale);
  const [translatedText, setTranslatedText] = useState(children);

  const getTranslation = async (content, setTranslatedText: Dispatch<any>) => {
    if (!currentLocale) return;
    let importedTranslation = await import(`./${currentLocale}`);
    const translation: Map<string, string> = importedTranslation.default;
    if (translation.has(content)) {
      if (translation.get(content) != '') setTranslatedText(translation.get(content));
    }
  };

  if (currentLocale === 'en-GB') return children;
  else {
    getTranslation(children.toLowerCase(), setTranslatedText);
    return translatedText;
  }
};

const useTranslatableDispatcher = (content: string) => {
  let [newDispatcher, newUpdateDispatcher] = useState(content);
  dispatcherList.push(newUpdateDispatcher);
  return newDispatcher;
};

const setLocale = (locale: string) => {
  if (!locale) return;
  if (storeLocale) storeLocale(locale);
  globalCurrentLocale = locale;
  dispatcherList.forEach((setCurrentLocale) => {
    setCurrentLocale(locale);
  });
};

export { TranslatableText, setLocale, useTranslatableDispatcher };
