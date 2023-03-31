import { Button, Card, Text } from '@geist-ui/core';
import { useRef } from 'react';
import WidthRequirement from '@/components/WidthRequirement';
import Link from 'next/link';
import { Translatable } from '@/components/translation/Translatable';
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
          <Translatable>Try in your browser</Translatable>
        </Text>
        <Text className="text-center">
          <Translatable>
            This demo is open source on <Link href="https://github.com/FacuA0/AvdanOS-UI-Online">GitHub</Link>.
          </Translatable>
        </Text>
        <Card shadow>
          <iframe
            ref={iframeRef}
            style={{ padding: '0', width: '100%', height: '45rem ' }}
            height="100%"
            width="100%"
            src="https://demo.avdanos.com"
          />
          <div style={{ display: 'flex', margin: '15px' }}>
            <Button shadow type="success" margin="auto" onClick={fullScreen}>
              <Translatable>Full Screen</Translatable>
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default preview;
