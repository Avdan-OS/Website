import { Dispatch, useState, ReactElement, useEffect } from 'react';
import YAML from 'yaml';
import NextLink from 'next/link';
import { Link } from '@geist-ui/core';

let storeLocale: (locale: string) => void = (locale) => {
  if (window && window.localStorage) window.localStorage.setItem('locale', locale);
};
let instanceList: Array<{ text: string; dispatch: Dispatch<string | JSX.Element>; link?: string }> = [];
let importedLocale: Map<string, string> = null;

/**
 * Wrap text with this element to get automatic translation injection from locale.
 * This is not case sensitive, but punctuation still matters.
 * When no translation is available, it will leave the original text untouched.
 * @argument link Optional. If supplied, [%s] will be injected with link. Can be absolute or relative url.
 * @example ```html
 * <TranslatableText>This text can be automatically translated</TranslatableText>
 * ```
 */
const TranslatableText = ({ children, link }: { children: string; link?: string }) => {
  let fetchedTranslation = importedLocale?.get(children.toLowerCase());
  let initialState: string | JSX.Element = link
    ? injectLink(fetchedTranslation || children, link)
    : fetchedTranslation || children;
  const [translatedText, setTranslatedText] = useState<string | JSX.Element>(initialState);
  useEffect(() => {
    let item = { text: children, link: link, dispatch: setTranslatedText };
    instanceList.push(item);
    return () => {
      let index = instanceList.indexOf(item);
      if (index !== -1) instanceList.splice(index, 1);
    };
  }, []);
  return translatedText as unknown as ReactElement;
};

const injectLink = (text: string, link: string) => {
  let splittedText = text.split('[%s]');
  if (link.startsWith('/')) {
    return (
      <>
        {splittedText[0]}
        <NextLink href={link}>
          <Link block>{splittedText[1]}</Link>
        </NextLink>
        {splittedText[2]}
      </>
    );
  } else {
    return (
      <>
        {splittedText[0]}
        <a href={link}>{splittedText[1]}</a>
        {splittedText[2]}
      </>
    );
  }
};

/**
 * Updates all the translatable text to a set locale
 * @param locale A locale code for the website to update to (lowercase-UPPERCASE)
 */
const setLocale: (locale: string) => void = async (locale) => {
  storeLocale(locale);
  importedLocale = await YAML.parse(await (await fetch(`/assets/lang/${locale}.yaml`)).text(), {
    mapAsMap: true
  });
  if (!importedLocale) return console.warn('Importing localisation failed.');
  instanceList.forEach((instance) => {
    let translatedText = importedLocale.get(instance.text.toLowerCase());
    instance.dispatch(
      instance.link ? injectLink(translatedText || instance.text, instance.link) : translatedText || instance.text
    );
  });
};

export { TranslatableText, setLocale };
