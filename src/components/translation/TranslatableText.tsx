import { Dispatch, useState, ReactElement, useEffect } from 'react';

let storeLocale: (locale: string) => void = (locale) => {
  if (window && window.localStorage) window.localStorage.setItem('locale', locale);
};
let instanceList: Array<{ text: string; dispatch: Dispatch<string> }> = [];
let importedLocale: { default: Map<string, string> } = null;

/**
 * Wrap text with this element to get automatic translation injection from locale.
 * This is not case sensitive, but punctuation still matters.
 * When no translation is available, it will leave the original text untouched.
 * @example ```html
 * <TranslatableText>This text can be automatically translated</TranslatableText>
 * ```
 */
const TranslatableText = ({ children }) => {
  useEffect(() => {
    console.log('Rendered text for ' + children + ' as ' + fetchedTranslation);
  }, [this]);
  let fetchedTranslation = importedLocale?.default.get(children.toLowerCase());
  const [translatedText, setTranslatedText] = useState<string>(fetchedTranslation ? fetchedTranslation : children);
  instanceList.push({ text: children, dispatch: setTranslatedText });
  return translatedText as unknown as ReactElement;
};

/**
 * Updates all the translatable text to a set locale
 * @param locale A locale code for the website to update to (lowercase-UPPERCASE)
 */
const setLocale: (locale: string) => void = async (locale) => {
  console.log('Setting locale to ' + locale);
  storeLocale(locale);
  importedLocale = await import(`./locale/${locale}`);
  if (!importedLocale) return console.warn('Importing localisation failed.');
  instanceList.forEach((instance) => {
    let translatedText = importedLocale.default.get(instance.text.toLowerCase());
    translatedText == '' && instance.dispatch(instance.text);
    if (!translatedText) return;
    instance.dispatch(translatedText);
  });
};

export { TranslatableText, setLocale };
