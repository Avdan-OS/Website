import { Button, Text, Spacer, useTheme } from '@geist-ui/core';
import Link from 'next/link';
import dynamicWidth from '@/lib/dynamic-width';
import { useState } from 'react';
import Discover from '@/components/discover';
import MiniFeatures from '@/components/miniFeatures';
import { TranslatableText } from '@/components/translation/TranslatableText';

const index = () => {
  const theme = useTheme();
  const [useMobileBar, setMobileBar] = useState(false);
  dynamicWidth((width) => (width < 1200 ? setMobileBar(true) : setMobileBar(false)));

  return (
    <>
      <div className="video-player" style={{ position: 'absolute', zIndex: 0 }}>
        <video autoPlay={true} muted loop style={{ height: '100%', width: '100%' }}>
          <source type="video/webm" src="/assets/marketing/header_animated.webm" height="100%" width="100%" />
        </video>
      </div>
      <Spacer h="30vh" />
      <div style={{ position: 'relative', zIndex: '1' }}>
        <div className="text-center">
          <Text h1 className="header" style={{ fontSize: 'calc(2rem + 2vw)' }}>
            <TranslatableText>Your PC but Even Better!</TranslatableText>
          </Text>
        </div>
        <Spacer h={2} />
        <div className="center card-container">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            {useMobileBar ? null : (
              <Link href="/demo">
                <Button shadow type="secondary" margin="10px">
                  <TranslatableText>Try in your browser</TranslatableText>
                </Button>
              </Link>
            )}
            <Link href="/downloads">
              <Button shadow type="success" margin="10px">
                <TranslatableText>Download Now!</TranslatableText>
              </Button>
            </Link>
          </div>
        </div>
        <Spacer h="35vh" />
        <MiniFeatures />
        <Spacer h="15vh" />
        <Text h1 className="text-center">
          <TranslatableText>Open projects with open community</TranslatableText>
        </Text>
        <Discover />
        <Spacer h={5} />
        <div className="text-center">
          <Text h2>
            <TranslatableText>Interested? Give it a try!</TranslatableText>
          </Text>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            {useMobileBar ? null : (
              <Link href="/demo">
                <Button shadow type="secondary" margin="10px">
                  <TranslatableText>Try in your browser</TranslatableText>
                </Button>
              </Link>
            )}
            <Link href="/downloads">
              <Button shadow type="success" margin="10px">
                <TranslatableText>Download Now!</TranslatableText>
              </Button>
            </Link>
          </div>
        </div>
        <Spacer h={2} />
      </div>
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
          background: -webkit-linear-gradient(#eee, ${theme.palette.accents_2});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .video-player {
          width: 100vw;
          position: relative;
          margin-bottom: ${useMobileBar ? '-20vh' : '-60vh'};
          top: ${theme.type === 'dark' ? '0' : '90px'};
        }
        .video-player:before {
          content: ' ';
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 1;
          left: 0;
          top: 0;
          background: rgba(0, 0, 0, 0.8);
          background: linear-gradient(
            0deg,
            ${theme.palette.background} 0%,
            ${theme.type === 'dark' ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0)'} 100%
          );
        }
      `}</style>
    </>
  );
};
export default index;
