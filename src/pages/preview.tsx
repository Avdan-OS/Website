import { Button, Card } from '@geist-ui/core';
import { useEffect, useRef } from 'react';
const preview = () => {
  const iframeRef = useRef<HTMLIFrameElement>();
  const fullScreen = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.requestFullscreen();
    }
  };

  return (
    <div className="mx-auto" style={{ width: '100%', height: '100%' }}>
      <Card shadow>
        <iframe
          ref={iframeRef}
          style={{ padding: '0', width: '100%', height: '45rem ' }}
          height="100%"
          width="100%"
          src="https://dynamicos.netlify.app/"
        />
        <div style={{ display: 'flex', margin: '15px' }}>
          <Button shadow type="success" margin="auto" onClick={fullScreen}>
            Full Screen
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default preview;
