import { Link } from '@geist-ui/core';
import { CSSProperties, ReactElement } from 'react';
import NextLink from 'next/link';

const injectStyle = (text: string, link?: string, linkStyle?: CSSProperties) => {
  let splittedText = text.split('[%a]');
  if (!splittedText[1]) return injectBold(text);
  if (link.startsWith('/')) {
    return (
      <>
        {injectBold(splittedText[0])}
        <NextLink href={link}>
          <Link block>{injectBold(splittedText[1])}</Link>
        </NextLink>
        {injectBold(splittedText[2])}
      </>
    );
  } else {
    return (
      <>
        {injectBold(splittedText[0])}
        <a href={link} style={linkStyle}>
          {injectBold(splittedText[1])}
        </a>
        {injectBold(splittedText[2])}
      </>
    );
  }
};

const injectBold: (text: string) => ReactElement = (text: string) => {
  if (!text.includes('[%b]')) return <>{text}</>;
  let splittedText = text.split('[%b]');
  return (
    <>
      {splittedText[0]}
      <strong>{splittedText[1]}</strong>
      {splittedText[2]}
    </>
  );
};

export default injectStyle;
