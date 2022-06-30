import React from 'react';
import Head from 'next/head';
interface TitleManagerProps {
  title: string;
}

const TitleManager = ({ title }: TitleManagerProps) => {
  return (
    <Head>
      <title>{title + ' - AvdanOS'}</title>
    </Head>
  );
};

export default TitleManager;
