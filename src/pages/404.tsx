import { Page, Text, Note, Link } from '@geist-ui/core';
import Head from 'next/head';

const Page404 = () => {
  return (
    <>
      <Head>
        <title>Page not found</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <Page>
          <Text h1>404.</Text>
          <Text h4>This page does not exist.</Text>
          <Note style={{display:"inline-block"}} type="warning" label="Tip">
            Join in and{' '}
            <Link underline color href="https://github.com/avdan-os">
              help us
            </Link>{' '}
            out developing an <strong>open-source operating system</strong>.
          </Note>
        </Page>
    </>
  );
};

export default Page404;
