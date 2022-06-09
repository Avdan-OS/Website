import { Button, Card, Text, Spacer, Image } from '@geist-ui/core';
import NextLink from 'next/link';
import dynamicWidth from '@/lib/dynamic-width';
import { useState } from 'react';

const index = () => {
  const [useMobileBar, setMobileBar] = useState(false);
  dynamicWidth((width) => {
    width < 1200 ? setMobileBar(true) : setMobileBar(false);
  });
  return (
    <>
      <div className="text-center">
        <Text className="header" h1 style={{ marginTop: '25px' }}>
          Your PC but even better.
        </Text>
        <div className="mx-auto" style={{ width: '80%', height: '100%' }}>
          <Card shadow>
            {/* <Image draggable="false" src="/assets/marketing/header.png" height="100%" width="100%" /> */}
            <video controls autoPlay={true} muted loop style={{ width: '100%', height: '100%' }}>
              <source type="video/webm" src="/assets/marketing/header_animated.webm" height="100%" width="100%" />
            </video>
          </Card>
        </div>
      </div>
      <Spacer h={2} />
      <div className="center card-container">
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          {useMobileBar ? null : (
            <NextLink href="/demo">
              <Button shadow type="secondary" margin="10px">
                Try in your browser
              </Button>
            </NextLink>
          )}
          <NextLink href="/downloads">
            <Button shadow type="success" margin="10px">
              Download Now
            </Button>
          </NextLink>
        </div>
      </div>
      <Spacer h={2} />
      <style jsx>{`
        .card-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          max-width: 500%;
          padding: 0;
          border-top: none !important;
        }
        .header {
          font-size: 72px;
          background: -webkit-linear-gradient(#eee, #333);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </>
  );
};
export default index;
