import { Chiislate } from '@/components/translation/Chiislate';
import { Button, Text, useTheme } from '@geist-ui/core';
import Head from 'next/head';
import Link from 'next/link';

const Page404 = () => {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>Page Not Found - AvdanOS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="not-found-container text-center">
        <Text h1 className="error-code">404</Text>
        <Text h3 style={{ fontWeight: 500, marginBottom: '12px' }}>
          <Chiislate>This page could not be found</Chiislate>
        </Text>
        <Text p type="secondary" style={{ maxWidth: '440px', margin: '0 auto 32px auto' }}>
          <Chiislate>
            The link you followed may be broken or the page may have been moved to a new route.
          </Chiislate>
        </Text>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <Link href="/" passHref legacyBehavior>
            <Button auto type="default">
              <Chiislate>Back to Home</Chiislate>
            </Button>
          </Link>
          <Link href="/demo" passHref legacyBehavior>
            <Button auto type="secondary">
              <Chiislate>Try Web Demo</Chiislate>
            </Button>
          </Link>
        </div>
      </div>
      <style jsx>{
        .not-found-container {
          min-height: 65vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 64px 24px;
        }
        :global(.error-code) {
          font-size: clamp(4rem, 10vw, 7rem) !important;
          font-weight: 500 !important;
          line-height: 1 !important;
          margin-bottom: 8px !important;
          color: \ !important;
        }
      }</style>
    </>
  );
};

export default Page404;