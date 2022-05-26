import { Page, Text, useTheme, Code, Note, Link, Collapse } from '@geist-ui/core';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Page404 = () => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Page not found - AZ Software</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="page__wrapper" style={{ height: '100%' }}>
        <Page>
          <Text h1>404.</Text>
          <Text h4>This page does not exist.</Text>
          <Note width="50%" type="warning" label="Tip">
            Join in and{' '}
            <Link underline color href="https://github.com/avdan-os">
              help us
            </Link>{' '}
            out developing <strong>open-source software</strong>.
          </Note>
        </Page>
      </div>
    </>
  );
};

export default Page404;
