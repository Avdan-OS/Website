import { Link } from '@geist-ui/core';
import NextLink from 'next/link';

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
      break;

    default:
      break;
  }
};

export default TranslationRebuilder;
//
