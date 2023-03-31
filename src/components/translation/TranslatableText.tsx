import { Dispatch, useState, ReactElement, useEffect, CSSProperties } from 'react';
import YAML from 'yaml';
import styleInjector from './StyleInjector';

let storeLocale: (locale: string) => void = (locale) => {
  //if (window && window.localStorage) window.localStorage.setItem('locale', locale);
};
let instanceList: Array<{
  text: string;
  dispatch: Dispatch<string | JSX.Element>;
  link?: string;
  linkStyle?: CSSProperties;
}> = [];
let importedLocale: Map<string, string> = null;

/**
 * Wrap text with this element to get automatic translation injection from locale.
 * This is not case sensitive, but punctuation still matters.
 * When no translation is available, it will leave the original text untouched.
 * @argument link Optional. If supplied, [%s] will be injected with link. Can be absolute or relative url.
 * @example ```html
 * <Translatable>This text can be automatically translated</Translatable>
 * ```
 */
const Translatable = ({
  children,
  link,
  linkStyle
}: {
  children: string;
  link?: string;
  linkStyle?: CSSProperties;
}) => {
  let fetchedTranslation = importedLocale?.get(children.toLowerCase());
  let initialState: string | JSX.Element = styleInjector(fetchedTranslation || children, link, linkStyle);
  const [translatedText, setTranslatedText] = useState<string | JSX.Element>(initialState);
  useEffect(() => {
    let item = { text: children, link: link, linkStyle: linkStyle, dispatch: setTranslatedText };
    instanceList.push(item);
    return () => {
      let index = instanceList.indexOf(item);
      if (index !== -1) instanceList.splice(index, 1);
    };
  }, []);
  return translatedText as unknown as ReactElement;
};

/**
 * Updates all the translatable text to a set locale
 * @param locale A locale code for the website to update to (lowercase-UPPERCASE)
 */
const setLocale: (locale: string) => void = async (locale) => {
  storeLocale(locale);
  if (locale.includes('_')) return;
  importedLocale = await YAML.parse(await (await fetch(`/assets/lang/${locale}.yaml`)).text(), {
    mapAsMap: true
  });
  if (!importedLocale) return console.warn('Importing localisation failed.');
  instanceList.forEach((instance) => {
    let translatedText = importedLocale.get(instance.text.toLowerCase());
    instance.dispatch(styleInjector(translatedText || instance.text, instance.link, instance.linkStyle));
  });
};

export { Translatable, setLocale };
