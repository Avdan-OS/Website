// prettier-ignore
import { Button, Card, Text, Image, Grid, useToasts, Spacer, useTheme, useModal, Link, Modal, Snippet, Tag } from '@geist-ui/core';
import dynamicWidth from '@/lib/dynamic-width';
import { useState } from 'react';
import NextLink from 'next/link';

const Download = () => {
  const [hasX64, useX64] = useState(false);
  const theme = useTheme();
  const { setToast } = useToasts();
  const downloadModal = useModal();
  const integrityModal = useModal();
  const webviewModal = useModal();

  const arch = (type: 'x64' | 'arm' | 'web') => {
    switch (type) {
      case 'x64':
        useX64(true);
        downloadModal.setVisible(true);
        break;
      case 'arm':
        useX64(false);
        downloadModal.setVisible(true);
        break;
      case 'web':
        webviewModal.setVisible(true);
        break;
    }
  };

  const download = (type: 'direct' | 'torrent') => {
    integrityModal.setVisible(true);
    setToast({ text: 'Download is not available yet', delay: 5000, type: 'error' })
    switch(type) {
      case 'direct':
        if (hasX64) {
          setShasum('testing-x64-shasum');
          break;
        }
        setShasum('testing-arm-shasum');
        break;
      case 'torrent':
        if (hasX64) {
          setShasum('testing-x64-torrent-shasum');
          break;
        }
        setShasum('testing-arm-torrent-shasum');
        break;
    }
  }

  const [gridDirection, setGridDirection] = useState<'row' | 'column' | 'row-reverse' | 'column-reverse'>('row');
  const [gridWidth, setGridWidth] = useState(6);
  const [shasum, setShasum] = useState('');
  const [useMobileMode, setMobileMode] = useState(false);

  dynamicWidth((width) => {
    width < 1200 ? setMobileMode(true) : setMobileMode(false);
    if (width < 950) {
      setGridDirection('column');
      setGridWidth(14);
    } else {
      setGridDirection('row');
      setGridWidth(6);
    }
  });

  return (
    <>
      <div className="text-center" id="overview">
        <Spacer h={3} />
        <Text className="header" h1>
          Give your PC an Upgrade.
        </Text>
        <Spacer />
        <Grid.Container gap={3} direction={gridDirection} alignItems="center" justify="center">
          {useMobileMode ? null : (
            <Grid xs={gridWidth}>
              <Card
                style={{ background: theme.palette.background }}
                hoverable
                paddingTop="40px"
                paddingBottom="10px"
                width="100%"
              >
                <Tag type="success">Try in your Browser</Tag>
                <Image
                  draggable="false"
                  src="/assets/icons/WEB.png"
                  height="100%"
                  width="170px"
                  alt="Test The OS in Website"
                />
                <Spacer h={0.4} />
                <Button
                  type="success"
                  shadow
                  onClick={() => {
                    arch('web');
                  }}
                  margin="10px"
                >
                  Open Demo
                </Button>
                <Spacer h={0} />
              </Card>
            </Grid>
          )}
          <Grid xs={gridWidth}>
            <Card
              style={{ background: theme.palette.background }}
              hoverable
              paddingTop="40px"
              paddingBottom="10px"
              width="100%"
            >
              <Tag type="success">For most people</Tag>
              <Spacer h={0.4} />
              <Image draggable="false" src="/assets/icons/x64.png" height="100%" width="170px" alt="Download for x64" />
              <Button
                type="success"
                shadow
                onClick={() => {
                  arch('x64');
                }}
                margin="10px"
              >
                Download
              </Button>
              <Spacer h={0} />
            </Card>
          </Grid>
          <Grid xs={gridWidth}>
            <Card
              style={{ background: theme.palette.background }}
              hoverable
              paddingTop="40px"
              paddingBottom="10px"
              width="100%"
            >
              <Tag type="success">For Pi, Pine, and Mac</Tag>
              <Spacer h={0.4} />
              <Image draggable="false" src="/assets/icons/ARM.png" height="100%" width="170px" alt="Download for arm" />
              <Button
                type="success"
                shadow
                onClick={() => {
                  arch('arm');
                }}
                margin="10px"
              >
                Download
              </Button>
              <Spacer h={0} />
            </Card>
          </Grid>
        </Grid.Container>
        <div className="mx-auto" style={{ width: '40%', margin: '40px' }}>
          <Card hoverable className="text-center trouble" style={{ background: theme.palette.accents_1 }}>
            Having trouble? Click{' '}
            <NextLink href="/support">
              <>
                <Link block>here</Link> to get help!
              </>
            </NextLink>
          </Card>
        </div>
      </div>
      <Modal {...downloadModal.bindings}>
        <Modal.Title>Download Choice</Modal.Title>
        <Modal.Content style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
          <p>Choose your installation method</p>
        </Modal.Content>
        <span style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '10px' }}>
          <Button onClick={() => { download('direct'); downloadModal.setVisible(false); }}>Direct Download</Button>
          <Button onClick={() => { download('torrent'); downloadModal.setVisible(false); }}>Torrent Download</Button>
        </span>
        <Spacer h={.65} />
        <Button onClick={() => downloadModal.setVisible(false)}>Close</Button>
      </Modal>
      <Modal {...integrityModal.bindings}>
        <Modal.Title>Integrity check</Modal.Title>
        <Modal.Subtitle>Check your download's shasum</Modal.Subtitle>
        <Modal.Content>
          <p>This is optional. You can check your download's integrity by comparing with our shasum:</p>
          <Snippet symbol="" text={shasum}></Snippet>
        </Modal.Content>
        <Button onClick={() => integrityModal.setVisible(false)}>Close</Button>
      </Modal>
      <Modal {...webviewModal.bindings}>
        <Modal.Title>Web preview</Modal.Title>
        <Modal.Content>
          <p>
            You're about to visit the web demo version of AvdanOS, which is only a proof of concept. Trying the live
            system (no installation required) is strongly recommended to getting the full experience from the operating
            system.
            <br />
            *Live system is currently not available because the system is still under development
          </p>
        </Modal.Content>
        <span>
          <Button mr={1} onClick={() => webviewModal.setVisible(false)}>
            Cancel
          </Button>
          <Button onClick={() => window.location.replace('/demo')} type="success">
            Yes, take me there
          </Button>
        </span>
      </Modal>
      <style jsx>{`
        .trouble {
          background: ${theme.palette.background} !important;
        }
        .trouble:hover {
          background: ${theme.palette.accents_2} !important;
        }
      `}</style>
    </>
  );
};
export default Download;
