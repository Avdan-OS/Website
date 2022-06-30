import { Dispatch, useState, useEffect } from 'react';

let storeLocale: (locale: string) => void;
let globalCurrentLocale = 'en-GB';
let dispatcherList: Array<Dispatch<string>> = [];

/**
 * Wrap text with this element to get automatic translation injection from locale.
 * This is not case sensitive, but punctuation still matters.
 * When no translation is available, it will leave the originla text untouched.
 * @example <TranslatableText>
 * This text will be automatically translated when available
 * </TranslatableText>
 */
const TranslatableText = ({ children }) => {
  // This is responsible for making locale selection persistant
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

  // This will register TranslatableText's dispatcher to a
  // global sink, making global update possible
  const [currentLocale, setCurrentLocale] = useState(globalCurrentLocale);
  dispatcherList.push(setCurrentLocale);
  const [translatedText, setTranslatedText] = useState(children);

  // This is responsible for grabbing translation from locale file mapping
  const getTranslation = async (content, setTranslatedText: Dispatch<any>) => {
    if (!currentLocale) return;
    let importedTranslation = await import(`./${currentLocale}`);
    const translation: Map<string, string> = importedTranslation.default;
    if (translation.has(content)) {
      if (translation.get(content) != '') setTranslatedText(translation.get(content));
    }
  };

  // Simple return logic
  if (currentLocale === 'en-GB') return children;
  else {
    getTranslation(children.toLowerCase(), setTranslatedText);
    return translatedText;
  }
};

/**
 * Updates all the translatable text to a set locale
 * @param locale A locale code for the website to update to (lowercase-UPPERCASE)
 */
const setLocale: (locale: string) => void = (locale) => {
  if (!locale) return;
  if (storeLocale) storeLocale(locale);
  globalCurrentLocale = locale;
  // This will update every <TranslatableText> to the current locale
  dispatcherList.forEach((setCurrentLocale) => {
    setCurrentLocale(locale);
  });
};

export { TranslatableText, setLocale };
