import { Button, Card, Text } from '@geist-ui/core';
import { TranslatableText } from '@/components/translation/TranslatableText';
import { useRef } from 'react';
import WidthRequirement from '@/components/WidthRequirement';
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
          <TranslatableText>Try in your browser</TranslatableText>
        </Text>
        <Text className="text-center">
          <TranslatableText injKey="support.tsx/send-suggestions">This Demo is open source on GitHub.</TranslatableText>
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
              <TranslatableText>Full Screen</TranslatableText>
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default preview;
