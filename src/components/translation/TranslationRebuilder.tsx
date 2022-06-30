import { Link } from '@geist-ui/core';
import NextLink from 'next/link';

// This file is responsible for converting a translation key and translated string (with identifier) back
// into component. If you use a translation key, please implement your injection logic below.

const TranslationRebuilder = (key: string, translatedSource: string) => {
  switch (key) {
    case 'download.tsx/having-trouble':
      return (
        <>
          {translatedSource.split('[%s]')[0].trim()}{' '}
          <NextLink href="/support">
            <>
              <Link block>{translatedSource.split('[%s]')[1].split('[%/s]')[0].trim()}</Link>{' '}
              {translatedSource.split('[%/s]')[1].trim()}
            </>
          </NextLink>
        </>
      );

    default:
      return translatedSource;
  }
};

export default TranslationRebuilder;
