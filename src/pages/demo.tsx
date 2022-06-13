import { Button, Card, Modal, Text, useModal } from '@geist-ui/core';
import dynamicWidth from '@/lib/dynamic-width';

import { useRef } from 'react';
const preview = () => {
  const iframeRef = useRef<HTMLIFrameElement>();
  const minWidthNeeded = 1200;
  const { setVisible, bindings } = useModal();

  const fullScreen = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.requestFullscreen();
    }
  };

  dynamicWidth((width) => {
    if (width < minWidthNeeded) {
      setVisible(true);
    }
  });

  return (
    <>
      <div className="mx-auto" style={{ width: '100%', height: '100%' }}>
        <Text className="header text-center" h1 style={{ marginTop: '25px' }}>
          Try in your browser.
        </Text>
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
      <Modal {...bindings}>
        <Modal.Title>Unsupported device</Modal.Title>
        <Modal.Content>
          <p>Your screen is small to view the desktop environment. Please use your PC.</p>
        </Modal.Content>
        <Modal.Action passive onClick={() => setVisible(false)}>
          Proceed
        </Modal.Action>
        <Modal.Action onClick={() => location.replace('/')}>Back to home page</Modal.Action>
      </Modal>
    </>
  );
};

export default preview;
