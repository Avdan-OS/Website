import useWindowDimensions from '@/components/hooks/useWindowDimensions';
import { Button, Card, Modal, Text, useModal, useToasts } from '@geist-ui/core';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
const preview = () => {
  const router = useRouter();
  const iframeRef = useRef<HTMLIFrameElement>();

  const minWidthNeeded = 1255;
  const { height, width } = useWindowDimensions();

  const { visible, setVisible, bindings } = useModal();

  const fullScreen = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.requestFullscreen();
    }
  };
  useEffect(() => {
    if (width <= minWidthNeeded) {
      setVisible(true);

      setTimeout(() => {
        router.push('/');
      }, 10000);
    }
  }, []);

  return (
    <>
      <Modal {...bindings}>
        <Modal.Title>Unsupported device</Modal.Title>
        <Modal.Subtitle>Going to home page in 10 seconds</Modal.Subtitle>
        <Modal.Content>
          <p>Your screen is small to view the desktop environment. Please use your PC ..</p>
        </Modal.Content>
        <Modal.Action
          onClick={() => {
            router.push('/');
          }}
        >
          Submit
        </Modal.Action>
      </Modal>

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
    </>
  );
};

export default preview;
