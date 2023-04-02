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
let defaultLocale = 'en-GB';

let injectTranslation = (component: ReactNode, tString: string) => {
  if (!tString) return component;
  if (tString.startsWith('<%0|')) tString = tString.replace('<%0|', '');
  try {
    let layer = -1;
    let writeChildren = (component: any, children: any) => {
      return {
        ...component,
        props: {
          ...component.props,
          children: children
        }
      };
    };
    let objRebuild = (component: any, tString: string): { component: any; tString: string } => {
      let element = component.props.children;
      if (typeof element == 'string') {
        let splitString = tString.split(`|%${layer}>`);
        return { component: writeChildren(component, splitString[0]), tString: splitString[1] };
      } else if (Array.isArray(element)) {
        let nextLayer = arrRebuild(element, tString);
        return { component: writeChildren(component, nextLayer.component), tString: nextLayer.tString };
      } else {
        let nextLayer = objRebuild(element, tString);
        return { component: writeChildren(component, nextLayer.component), tString: nextLayer.tString };
      }
    };
    let arrRebuild = (component: any[], tString: string): { component: any[]; tString: string } => {
      component = [...component];
      for (let i = 0; i < component.length; i++) {
        if (typeof component[i] == 'string') {
          // Merge consecutive strings
          while (typeof component[i + 1] == 'string') {
            component.splice(i + 1, 1);
          }
          if (component[i + 1]) {
            let splitString = tString.split(`<%${layer + 1}|`);
            component[i] = splitString.shift();
            tString = splitString.join(`<%${layer + 1}|`);
          } else {
            component[i] = tString;
          }
        } else if (Array.isArray(component[i])) {
          let nextLayer = arrRebuild(component[i], tString);
          component[i] = nextLayer.component;
          tString = nextLayer.tString;
        } else {
          layer++;
          let nextLayer = objRebuild(component[i], tString);
          layer--;
          component[i] = nextLayer.component;
          tString = nextLayer.tString;
        }
      }
      return { component, tString };
    };
    if (Array.isArray(component)) {
      return arrRebuild(component, tString).component;
    } else {
      return objRebuild(component, tString).component;
    }
  } catch (err) {
    console.groupCollapsed('Translation Mismatch Error');
    console.warn('Translation Mismatch, component will not get translated. Please update the following translation.');
    console.warn(`Was expecting translation of:
    ╔═══════════════════
    ║ ${componentToString(component as ReactElement)}
    ╚═══
    but this following translation is provided
    ╔═══════════════════
    ║ ${tString}
    ╚═══`);
    console.groupEnd();
    return component;
  }
};

let loadLocale = async (locale: string) => {
  if (locale == defaultLocale) {
    stringList.forEach((item) => {
      item.dispatch(item.text);
    });
    componentList.forEach((item) => {
      item.dispatch(item.component);
    });
    return;
  }

  let res = await fetch(`/assets/lang/${locale}.yaml`);
  if (!res.ok) return console.warn('locale is not available');

  importedLocale = Object.fromEntries(
    Object.entries(await YAML.parse(await res.text())).map(([key, val]) => [key.toLowerCase(), val])
  );
  stringList.forEach((item) => {
    item.dispatch(importedLocale[item.text.toLowerCase()] || item.text);
  });
  componentList.forEach((item) => {
    item.dispatch(injectTranslation(item.component, importedLocale[item.text]) || item.component);
  });
};

let componentToString = (component: ReactElement, layer = 0) => {
  let text = '';
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
  return text;
};

let currentLocale = defaultLocale;
// Determine the locale
if (typeof window !== 'undefined') {
  window.onload = () => {
    if (!(window && window.localStorage && (currentLocale = window.localStorage.getItem('locale'))))
      currentLocale = Intl.NumberFormat().resolvedOptions().locale;
    if (currentLocale != defaultLocale) loadLocale(currentLocale);
  };
}

/**
 * A magical component to translate anything.
 * @argument logTString Spit the correspinding translation key in JavaScript console.
 * @returns Children element with all strings translated.
 */
export function Chiislate({ children, logTString }: { children: ReactNode; logTString?: boolean }) {
  // Process string components differently
  if (typeof children == 'string') {
    const [translated, setTranslation] = useState<string>(
      currentLocale != defaultLocale && importedLocale ? importedLocale[children.toLowerCase()] || children : children
    );
    if (children == 'instagram') {
      currentLocale != defaultLocale && importedLocale ? importedLocale[children.toLowerCase()] || children : children;
    }
    stringList.push({
      text: children,
      dispatch: setTranslation
    });
    if (logTString) console.log(children);
    return translated as any as ReactElement;
  } else if (typeof children == 'boolean') {
    const [translated, setTranslation] = useState<string>(
      currentLocale != defaultLocale && importedLocale
        ? importedLocale[children.toString()] || children.toString()
        : children.toString()
    );
    if (logTString) console.log(children.toString());
    stringList.push({
      text: children.toString(),
      dispatch: setTranslation
    });
    return translated as any as ReactElement;
  } else if (typeof children == 'number' || typeof children == 'undefined') {
    if (logTString) console.log("You don't need to translate this element, do you?");
    return children as any as ReactElement;
  } else if (children) {
    const [translated, setTranslation] = useState<ReactNode>(
      currentLocale != defaultLocale && importedLocale
        ? injectTranslation(children, importedLocale[componentToString(children as ReactElement).toLowerCase()]) ||
            children
        : children
    );
    let componentString = componentToString(children as ReactElement);
    if (logTString) console.log(componentString);
    componentList.push({
      text: componentString.toLowerCase(),
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
  currentLocale = locale;
}
