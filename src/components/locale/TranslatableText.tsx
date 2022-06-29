import { Dispatch, useState } from 'react';

let globalCurrentLocale = 'en-GB';
let dispatcherList: Array<Dispatch<string>> = [];

let TranslatableText = ({ children }) => {
  const [currentLocale, setCurrentLocale] = useState(globalCurrentLocale);
  dispatcherList.push(setCurrentLocale);
  const [translatedText, setTranslatedText] = useState(children);

  const getTranslation = async (content, setTranslatedText: Dispatch<any>) => {
    let importedTranslation = await import(`./${currentLocale}`);
    const translation: Map<string, string> = importedTranslation.default;
    if (translation.has(content)) setTranslatedText(translation.get(content));
  };

  if (currentLocale === 'en-GB') return children;
  else {
    getTranslation(children.toLowerCase(), setTranslatedText);
    return translatedText;
  }
};

const setLocale = async (locale: string) => {
  globalCurrentLocale = locale;
  dispatcherList.forEach((setCurrentLocale) => {
    setCurrentLocale(locale);
  });
};

export { TranslatableText, setLocale };
