import { Button, Text, useTheme } from '@geist-ui/core';
import Link from 'next/link';
import dynamicWidth from '@/lib/dynamic-width';
import { useState } from 'react';
import Discover from '@/components/discover';
import MiniFeatures from '@/components/miniFeatures';
import { Chiislate } from '@/components/translation/Chiislate';

const Index = () => {
  const theme = useTheme();
  const [useMobileBar, setMobileBar] = useState(false);
  dynamicWidth((width) => (width < 768 ? setMobileBar(true) : setMobileBar(false)));

  return (
    <>
      <section className="hero-section">
        <div className="video-player">
          <video autoPlay muted loop playsInline>
            <source type="video/webm" src="/assets/marketing/header_animated.webm" />
          </video>
          <div className="video-overlay" />
        </div>

        <div className="hero-content">
          <div className="text-center">
            <Text h1 className="hero-headline">
              <Chiislate>A modern desktop operating system</Chiislate>
            </Text>
            <Text p type="secondary" className="hero-subhead">
              <Chiislate>
                Fluid window grouping, intuitive gestures, and a unified dock built for focused computing.
              </Chiislate>
            </Text>
          </div>

          <div className="hero-actions">
            {!useMobileBar && (
              <Link href="/demo" passHref legacyBehavior>
                <Button auto scale={1.1} type="secondary">
                  <Chiislate>Try in browser</Chiislate>
                </Button>
              </Link>
            )}
            <Link href="/downloads" passHref legacyBehavior>
              <Button auto scale={1.1} type="default">
                <Chiislate>Download concept</Chiislate>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-container">
        <MiniFeatures />
      </section>

      <section className="section-container">
        <div className="text-center">
          <Text h2 style={{ letterSpacing: '-0.02em', marginBottom: '8px' }}>
            <Chiislate>Open projects, open community</Chiislate>
          </Text>
          <Text p type="secondary" style={{ maxWidth: '580px', margin: '0 auto 32px auto' }}>
            <Chiislate>
              Developed transparently on GitHub by contributors around the world under GPL-3.0.
            </Chiislate>
          </Text>
        </div>
        <Discover />
      </section>

      <section className="cta-section">
        <div className="text-center">
          <Text h3 style={{ letterSpacing: '-0.02em', marginBottom: '12px' }}>
            <Chiislate>Experience the interface concept</Chiislate>
          </Text>
          <Text p type="secondary" style={{ maxWidth: '480px', margin: '0 auto 24px auto' }}>
            <Chiislate>
              Interact with the desktop environment prototype directly in your browser or explore the codebase.
            </Chiislate>
          </Text>
          <div className="hero-actions">
            {!useMobileBar && (
              <Link href="/demo" passHref legacyBehavior>
                <Button auto scale={1.05} type="secondary">
                  <Chiislate>Launch web demo</Chiislate>
                </Button>
              </Link>
            )}
            <Link href="/downloads" passHref legacyBehavior>
              <Button auto scale={1.05} type="default">
                <Chiislate>Get concept builds</Chiislate>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{
        .hero-section {
          position: relative;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 80px 24px;
        }
        .video-player {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }
        .video-player video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: \;
        }
        .video-overlay {
          position: absolute;
          inset: 0;
          background: \;
        }
        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
        }
        :global(.hero-headline) {
          font-size: clamp(2.5rem, 5vw, 4rem) !important;
          font-weight: 500 !important;
          line-height: 1.05 !important;
          letter-spacing: -0.03em !important;
          color: \ !important;
          margin-bottom: 16px !important;
        }
        :global(.hero-subhead) {
          font-size: clamp(1.1rem, 2vw, 1.25rem) !important;
          max-width: 600px;
          margin: 0 auto 32px auto !important;
          line-height: 1.5 !important;
        }
        .hero-actions {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .section-container {
          position: relative;
          padding: 64px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .cta-section {
          padding: 80px 24px 100px 24px;
          max-width: 800px;
          margin: 0 auto;
        }
      }</style>
    </>
  );
};

export default Index;