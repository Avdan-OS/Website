import { Button, Card, Text } from '@geist-ui/core';
import { useRef } from 'react';
import WidthRequirement from '@/components/WidthRequirement';
import Link from 'next/link';
import { Chiislate } from '@/components/translation/Chiislate';
const preview = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const minWidthNeeded = 1200;

  const fullScreen = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.requestFullscreen();
    }
  };

  return (
    <>
      <WidthRequirement width={minWidthNeeded} />
      <div className="mx-auto" style={{ width: '100%', height: '100%' }}>
        <Text className="header text-center" h1 style={{ marginTop: '25px' }}>
          <Chiislate>Try in your browser</Chiislate>
        </Text>
        <Text className="text-center">
          <Chiislate>
            This demo is open source on <Link href="https://github.com/Avdan-OS/Demo">GitHub</Link>.
          </Chiislate>
        </Text>
        <Card shadow>
          <iframe
            ref={iframeRef}
            style={{ padding: '0', width: '100%', height: '45rem ' }}
            height="100%"
            width="100%"
            src="https://avdan-os.github.io/Demo/"
          />
          <div style={{ display: 'flex', margin: '15px' }}>
            <Button shadow type="success" margin="auto" onClick={fullScreen}>
              <Chiislate>Full Screen</Chiislate>
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default preview;
