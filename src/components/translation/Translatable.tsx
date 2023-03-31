import { Dispatch, ReactElement, ReactNode, useEffect, useState } from 'react';
import YAML from 'yaml';

let stringList: Array<{
  text: string;
  dispatch: Dispatch<string>;
}> = [];
let componentList: Array<{
  text: string;
  component: ReactNode;
  dispatch: Dispatch<ReactNode>;
}> = [];
let importedLocale;

// This function takes translated string and inject it to the component
let injectTranslation = (component: ReactNode, tString: string) => {
  try {
    if (Array.isArray(component)) {
      let rebuiltComponent = [...component];
      for (let i = 0; i < rebuiltComponent.length; i++) {
        if (typeof rebuiltComponent[i] == 'string') {
          // Merge consecutive strings
          while (typeof rebuiltComponent[i + 1] == 'string') {
            rebuiltComponent.splice(i + 1, 1);
          }
          rebuiltComponent[i] = tString.split('<%0|')[0];
          tString = tString.split('<%0|')[1];
        } else {
          let element = rebuiltComponent[i];
          if (typeof element.props.children == 'string') {
            let modifiedElement = {
              ...element,
              props: {
                ...element.props,
                children: tString.split('|%0>')[0]
              }
            };
            rebuiltComponent[i] = modifiedElement;
            tString = tString.split('|%0>')[1];
          } else if (Array.isArray(element.props.children)) {
          } else {
            let modifiedElement = {
              ...element,
              props: {
                ...element.props,
                children: {
                  ...element.props.children,
                  props: {
                    ...element.props.children.props,
                    children: tString.split('|%0>')[0]
                  }
                }
              }
            };
            rebuiltComponent[i] = modifiedElement;
            tString = tString.split('|%0>')[1];
          }
        }
      }
      return rebuiltComponent;
    }
  } catch (err) {
    console.log(err);
    console.warn(`
      Translation Mismatch, component will not get translated.
      This following translation string\n
      ============
      ${tString}
      ============
      cannot be mapped the component. Please update the translation.
    `);
    return component;
  }
};

let loadLocale = async (locale: string) => {
  if (locale == 'en-GB') {
    stringList.forEach((item) => {
      item.dispatch(item.text);
    });
    componentList.forEach((item) => {
      item.dispatch(item.component);
    });
    return;
  }
  let res = await fetch(`/assets/lang/${locale}.yaml`);
  if (!res.ok) {
    return console.warn('locale is not available');
  }
  importedLocale = Object.fromEntries(
    Object.entries(await YAML.parse(await res.text())).map(([key, val]) => [key.toLowerCase(), val])
  );
  stringList.forEach((item) => {
    item.dispatch(importedLocale[item.text.toLowerCase()] || item.text);
  });
  componentList.forEach((item) => {
    console.log(importedLocale[item.text]);
    console.log(injectTranslation(item.component, importedLocale[item.text]));
    item.dispatch(injectTranslation(item.component, importedLocale[item.text]) || item.component);
  });
};

let componentToString = (component: ReactElement, layer = 0) => {
  let text = '';
  console.log(component);
  let objToString = (object: any) => {
    let children: ReactElement = object.props.children;
    if (typeof children == 'string') {
      return children;
    } else if (Array.isArray(children)) {
      let content = componentToString(children, layer + 1);
      return content;
    } else if (typeof children == 'object') {
      return objToString(children);
    }
  };
  if (Array.isArray(component)) {
    component.forEach((item) => {
      if (typeof item == 'string') {
        text += item;
      } else {
        text += `<%${layer}|${objToString(item)}|%${layer}>`;
      }
    });
  } else if (typeof component == 'object') {
    text = objToString(component);
  }
  console.log(text);
  return text;
};

let locale = 'en-GB';
// Determine the locale
if (typeof window !== 'undefined') {
  window.onload = () => {
    if (!(window && window.localStorage && (locale = window.localStorage.getItem('locale'))))
      locale = Intl.NumberFormat().resolvedOptions().locale;
    if (locale != 'en-GB') loadLocale(locale);
  };
}

/**
 * A magical component to translate anything.
 * @returns Children element with all strings translated.
 */
export function Translatable({ children }: { children: ReactNode }) {
  // Process string components differently
  if (typeof children == 'string') {
    const [translated, setTranslation] = useState<string>(
      locale != 'en-GB' && importedLocale ? importedLocale[children.toLowerCase()] || children : children
    );
    if (children == 'instagram') {
      locale != 'en-GB' && importedLocale ? importedLocale[children.toLowerCase()] || children : children;
    }
    stringList.push({
      text: children,
      dispatch: setTranslation
    });
    return translated as any as ReactElement;
  } else if (typeof children == 'boolean') {
    const [translated, setTranslation] = useState<string>(
      locale != 'en-GB' && importedLocale
        ? importedLocale[children.toString()] || children.toString()
        : children.toString()
    );
    stringList.push({
      text: children.toString(),
      dispatch: setTranslation
    });
    return translated as any as ReactElement;
  } else if (typeof children == 'number' || typeof children == 'undefined') {
    return children as any as ReactElement;
  } else if (children) {
    const [translated, setTranslation] = useState<ReactNode>(
      locale != 'en-GB' && importedLocale
        ? injectTranslation(children, importedLocale[componentToString(children as ReactElement).toLowerCase()]) ||
            children
        : children
    );
    componentList.push({
      text: componentToString(children as ReactElement).toLowerCase(),
      component: children,
      dispatch: setTranslation
    });

    return translated as ReactElement;
  }
}

/**
 * Set the translation locale
 * @param locale locale name
 */
export async function setLocale(locale: string) {
  window.localStorage.setItem('locale', locale);
  loadLocale(locale);
}
