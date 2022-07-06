import Head from 'next/head';
import { TranslatableText } from '../translation/TranslatableText';
interface SeoManagerProps {
  title: string;
  useScale: boolean;
  description: string;
}

const SeoManager = ({ title, useScale, description }: SeoManagerProps) => {
  return (
    <Head>
      <title>
        <TranslatableText>{title + ' - AvdanOS'}</TranslatableText>
        {useScale ? <meta name="viewport" content="initial-scale=1.0, width=device-width" /> : null}
        <meta name="twitter:title" content={description + ' - AvdanOS.com'} />
        <meta name="description" content={description + ' - AvdanOS.com'} />
      </title>
    </Head>
  );
};

export default SeoManager;
