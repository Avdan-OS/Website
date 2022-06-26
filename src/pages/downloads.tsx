// prettier-ignore
import { Button, Card, Text, Image, Grid, useToasts, Spacer, useTheme, useModal, Link, Modal, Snippet, Tag, Checkbox } from '@geist-ui/core';
import dynamicWidth from '@/lib/dynamic-width';
import { useState } from 'react';
import NextLink from 'next/link';

const Download = () => {
  const downloadInfo = {
    x64: {
      link: '/download/x64',
      shasum: 'testing-x64-shasum',
      torrent: '/download/x64-torrent'
    },
    arm: {
      link: '/download/arm',
      shasum: 'testing-arm-shasum',
      torrent: '/download/arm-torrent'
    }
  };

  const theme = useTheme();
  const { setToast } = useToasts();
  const downloadModal = useModal();
  const webviewModal = useModal();

  let [useTorrent, setTorrent] = useState(false);
  let [arch, setArch] = useState<'x64' | 'arm'>();

  const showDownload = (type: 'x64' | 'arm' | 'web') => {
    switch (type) {
      case 'x64':
        setArch('x64');
        console.log(arch);
        setShasum(downloadInfo.x64.shasum);
        downloadModal.setVisible(true);
        break;
      case 'arm':
        setArch('arm');
        console.log(arch);
        setShasum(downloadInfo.arm.shasum);
        downloadModal.setVisible(true);
        break;
      case 'web':
        webviewModal.setVisible(true);
        break;
    }
  };

  const downloadHandler = () => {
    downloadModal.setVisible(false);
    setToast({ text: 'This download is not available yet.', delay: 5000, type: 'error' });
    if (arch === 'x64') {
      if (useTorrent) {
        window.open(downloadInfo.x64.torrent, '_blank');
      } else {
        window.open(downloadInfo.x64.link, '_blank');
      }
    } else if (arch === 'arm') {
      if (useTorrent) {
        window.open(downloadInfo.arm.torrent, '_blank');
      } else {
        window.open(downloadInfo.arm.link, '_blank');
      }
    } else {
      console.log(arch);
    }
  };

  const [gridDirection, setGridDirection] = useState<'row' | 'column' | 'row-reverse' | 'column-reverse'>('row');
  const [gridWidth, setGridWidth] = useState(6);
  const [useMobileMode, setMobileMode] = useState(false);
  const [canDownload, setCanDownload] = useState(false);
  const [shasum, setShasum] = useState(downloadInfo.x64.shasum);

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
                    showDownload('web');
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
                  showDownload('x64');
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
                  showDownload('arm');
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
        <Modal.Title>Before you Download</Modal.Title>
        <Modal.Subtitle>Please read this before you continue</Modal.Subtitle>
        <Modal.Content>
          <p>Below is the shasum of the download. You can use it to check download's integrity:</p>
          <Snippet symbol="" text={shasum}></Snippet>
          <Spacer />
          Warning: Software that we provided is licensed under GNU GPL 3.0. We provide absolutely no liability what so
          ever, etc...
          <br />
          <Checkbox
            onChange={(e) => {
              setCanDownload(e.target.checked);
            }}
          >
            Yes, I understand
          </Checkbox>
          <br />
          <Checkbox
            onChange={(e) => {
              setTorrent(e.target.checked);
            }}
          >
            Use torrent download
          </Checkbox>
        </Modal.Content>
        <Modal.Action passive onClick={() => downloadModal.setVisible(false)}>
          cancel
        </Modal.Action>
        <Modal.Action
          disabled={!canDownload}
          onClick={() => {
            downloadHandler();
          }}
        >
          Continue
        </Modal.Action>
      </Modal>
      <Modal {...webviewModal.bindings}>
        <Modal.Title>Web preview</Modal.Title>
        <Modal.Content>
          <p>
            You're about to visit the web demo version of AvdanOS, which is only a proof of concept. Trying the live
            system is strongly recommended to getting the full experience from the operating system.
            <br />
            *Live system is currently not available because the system is still under development
          </p>
        </Modal.Content>
        <Modal.Action passive onClick={() => webviewModal.setVisible(false)}>
          Cancel
        </Modal.Action>
        <Modal.Action onClick={() => window.location.replace('/demo')}>Yes, take me there</Modal.Action>
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
