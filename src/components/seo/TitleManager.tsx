import React from 'react';
import Head from 'next/head';
import { TranslatableText } from '../translation/TranslatableText';
interface TitleManagerProps {
  title: string;
  useScale: boolean;
}

const TitleManager = ({ title, useScale }: TitleManagerProps) => {
  return (
    <Head>
      <title>
        <TranslatableText>{title + ' - AvdanOS'}</TranslatableText>
        {useScale ? <meta name="viewport" content="initial-scale=1.0, width=device-width" /> : null}
      </title>
    </Head>
  );
};

export default TitleManager;
