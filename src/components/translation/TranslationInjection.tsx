import { Link } from '@geist-ui/core';
import NextLink from 'next/link';

// This file is responsible for converting a translation key and translated string (with identifier) back
// into component. If you use a translation key, please implement your injection logic below.

const TranslationInjection = (key: string, translatedSource: string) => {
  let splittedTranslation = translatedSource.split('[%s]');
  switch (key) {
    case 'download.tsx/having-trouble':
      return (
        <>
          {splittedTranslation[0]}
          <NextLink href="/support">
            <>
              <Link block>{splittedTranslation[1]}</Link>
              {splittedTranslation[2]}
            </>
          </NextLink>
        </>
      );
    case 'support.tsx/send-suggestions':
      return (
        <>
          {splittedTranslation[0]}
          <a href="https://github.com/Avdan-OS/suggestions">{splittedTranslation[1]}</a>
          {splittedTranslation[2]}
        </>
      );

    default:
      return translatedSource;
  }
};

export default TranslationInjection;
