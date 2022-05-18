import React from 'react';
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
          <h1 className="h-one">404.</h1>
          <h1 className="h-one-sub">This page does not exist.</h1>

          <Note width="50%" type="warning" label="Tip">
            Join in and{' '}
            <Link underline color href="https://github.com/avdan-os">
              help us
            </Link>{' '}
            out developing <strong>open-source software</strong>.
          </Note>
        </Page>
        <style jsx>
          {`
            .page__wrapper {
              // background-color: ${theme.palette.accents_1};
              // background-color:rgba(0, 0, 0, 0.1);
            }
            .h-one {
              /*font-size: 53px;*/
              font-weight: bold;
              font-size: 129px;
              padding-bottom: 13px;
              text-align: left;
              padding-left: 72px;
              padding-top: 85px;
              word-wrap: break-word;
            }
            .h-one-sub {
              /*font-size: 53px;*/
              font-weight: bold;
              font-size: 37px;
              padding-bottom: 122px;
              text-align: left;
              padding-left: 86px;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Page404;
