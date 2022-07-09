import { Dispatch, useState, useEffect, ReactElement } from 'react';

let storeLocale: (locale: string) => void;
let globalCurrentLocale = 'en-GB';
let instanceList: Array<{ text: string; dispatcher: Dispatch<string> }> = [];
let importedLocale: { default: Map<string, string> } = null;

/**
 * Wrap text with this element to get automatic translation injection from locale.
 * This is not case sensitive, but punctuation still matters.
 * When no translation is available, it will leave the originla text untouched.
 * @example <TranslatableText>
 * This text will be automatically translated when available
 * </TranslatableText>
 */
const TranslatableText = ({ children }) => {
  useEffect(() => {
    storeLocale = (locale) => {
      window.localStorage.setItem('locale', locale);
    };
  }, []);

  let translationReady = false;

  if (importedLocale) {
    let fetchedText = importedLocale.default.get(children.toLowerCase());
    if (fetchedText && fetchedText != '' && fetchedText != children) {
      translationReady = true;
    }
  }

  const [translatedText, setTranslatedText] = useState<string>(
    translationReady ? importedLocale.default.get(children.toLowerCase()) : children
  );
  instanceList.push({ text: children, dispatcher: setTranslatedText });

  return translatedText as unknown as ReactElement;
};

/**
 * Updates all the translatable text to a set locale
 * @param locale A locale code for the website to update to (lowercase-UPPERCASE)
 */
const setLocale: (locale: string) => void = async (locale) => {
  if (!locale) return console.log('No locale supplied');
  console.log('Updating translation to ' + locale);
  if (storeLocale) storeLocale(locale);
  importedLocale = await import(`./locale/${locale}`);
  if (!importedLocale) return console.log('Locale import error');

  globalCurrentLocale = locale;
  instanceList.forEach((instance) => {
    let translatedText = importedLocale.default.get(instance.text.toLowerCase());
    if (!translatedText || translatedText == '') return;
    instance.dispatcher(translatedText);
  });
};

export { TranslatableText, setLocale };
