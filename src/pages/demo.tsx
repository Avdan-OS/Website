import { Button, Card, Text, useTheme } from '@geist-ui/core';
import { useRef } from 'react';
import WidthRequirement from '@/components/WidthRequirement';
import Link from 'next/link';
import { Chiislate } from '@/components/translation/Chiislate';

const Demo = () => {
  const theme = useTheme();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const toggleFullScreen = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if ((iframe as any).webkitRequestFullscreen) {
        (iframe as any).webkitRequestFullscreen();
      }
    }
  };

  return (
    <>
      <WidthRequirement width={768} />
      <div className="demo-page">
        <div className="text-center" style={{ maxWidth: '720px', margin: '0 auto 32px auto' }}>
          <Text h1 style={{ letterSpacing: '-0.03em', fontWeight: 500, marginBottom: '8px' }}>
            <Chiislate>Interactive browser prototype</Chiislate>
          </Text>
          <Text p type="secondary" style={{ fontSize: '1rem', margin: 0 }}>
            <Chiislate>
              Open source prototype maintained on <Link href="https://github.com/Avdan-OS/Demo" target="_blank" rel="noreferrer">GitHub</Link>.
            </Chiislate>
          </Text>
        </div>

        <div className="demo-container">
          <Card className="demo-card">
            <iframe
              ref={iframeRef}
              className="demo-frame"
              src="https://avdan-os.github.io/Demo/"
              title="AvdanOS Web Demo"
              allow="fullscreen"
            />
            <div className="demo-bar">
              <Button auto scale={0.9} type="default" onClick={toggleFullScreen}>
                <Chiislate>Full Screen</Chiislate>
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <style jsx>{
        .demo-page {
          padding: 64px 24px 80px 24px;
        }
        .demo-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        :global(.demo-card) {
          border-radius: 12px !important;
          border: 1px solid \ !important;
          background: \ !important;
          overflow: hidden !important;
          padding: 0 !important;
        }
        .demo-frame {
          width: 100%;
          height: 65vh;
          min-height: 500px;
          border: none;
          display: block;
        }
        .demo-bar {
          display: flex;
          justify-content: flex-end;
          padding: 12px 16px;
          border-top: 1px solid \;
        }
      }</style>
    </>
  );
};

export default Demo;