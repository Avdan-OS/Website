// prettier-ignore
import { Button, Card, Text, Image, Grid, useToasts, Spacer, useTheme, useModal, Link, Modal, Snippet, Tag, Checkbox } from '@geist-ui/core';
import dynamicWidth from '@/lib/dynamic-width';
import { useState } from 'react';
import NextLink from 'next/link';
import { TranslatableText } from '@/components/translation/TranslatableText';

const Download = () => {
  // Insert download link here (and read line 53)
  const downloadInfo = {
    x64: {
      link: '',
      shasum: 'testing-x64-shasum',
      torrent: ''
    },
    arm: {
      link: '',
      shasum: 'testing-arm-shasum',
      torrent: ''
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
    setToast({
      text: <TranslatableText>This download is not available yet.</TranslatableText>,
      delay: 5000,
      type: 'error'
    });
    // Uncomment the following when download becomes available
    /*if (arch === 'x64') {
      if (useTorrent) {
        window.open(downloadInfo.x64.torrent);
      } else {
        window.open(downloadInfo.x64.link);
      }
    } else if (arch === 'arm') {
      if (useTorrent) {
        window.open(downloadInfo.arm.torrent);
      } else {
        window.open(downloadInfo.arm.link);
      }
    } else {
      console.log(arch);
    }*/
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
          <TranslatableText>Give your PC an Upgrade.</TranslatableText>
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
                <Tag type="success">
                  <TranslatableText>Try in your Browser</TranslatableText>
                </Tag>
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
                  <TranslatableText>Open Demo</TranslatableText>
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
              <Tag type="success">
                <TranslatableText>For most people</TranslatableText>
              </Tag>
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
                <TranslatableText>Download</TranslatableText>
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
              <Tag type="success">
                <TranslatableText>For Pi, Pine, and Mac</TranslatableText>
              </Tag>
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
                <TranslatableText>Download</TranslatableText>
              </Button>
              <Spacer h={0} />
            </Card>
          </Grid>
        </Grid.Container>
        <div className="mx-auto" style={{ width: '40%', margin: '40px' }}>
          <Card hoverable className="text-center trouble" style={{ background: theme.palette.accents_1 }}>
            <TranslatableText>download.tsx/having-trouble</TranslatableText>
          </Card>
        </div>
      </div>
      <Modal {...downloadModal.bindings}>
        <Modal.Title>
          <TranslatableText>Before you Download</TranslatableText>
        </Modal.Title>
        <Modal.Subtitle>
          <TranslatableText>Please read this before you continue</TranslatableText>
        </Modal.Subtitle>
        <Modal.Content>
          <p>
            <TranslatableText>
              Below is the shasum of the download. You can use it to check download's integrity:
            </TranslatableText>
          </p>
          <Snippet symbol="" text={shasum}></Snippet>
          <Spacer />
          <TranslatableText>
            Warning: Software that we provided is licensed under GNU GPL 3.0. We provide absolutely no liability what so
            ever, etc...
          </TranslatableText>
          <br />
          <Checkbox
            onChange={(e) => {
              setCanDownload(e.target.checked);
            }}
          >
            <TranslatableText>Yes, I understand</TranslatableText>
          </Checkbox>
          <br />
          <Checkbox
            onChange={(e) => {
              setTorrent(e.target.checked);
            }}
          >
            <TranslatableText>Use torrent download</TranslatableText>
          </Checkbox>
        </Modal.Content>
        <Modal.Action passive onClick={() => downloadModal.setVisible(false)}>
          <TranslatableText>Cancel</TranslatableText>
        </Modal.Action>
        <Modal.Action
          disabled={!canDownload}
          onClick={() => {
            downloadHandler();
          }}
        >
          <TranslatableText>Continue</TranslatableText>
        </Modal.Action>
      </Modal>
      <Modal {...webviewModal.bindings}>
        <Modal.Title>
          <TranslatableText>Web preview</TranslatableText>
        </Modal.Title>
        <Modal.Content>
          <p>
            <TranslatableText>
              You're about to visit the web demo version of AvdanOS, which is only a proof of concept. Trying the live
              system is strongly recommended to getting the full experience from the operating system.
            </TranslatableText>
            <br />
            <TranslatableText>
              *Live system is currently not available because the system is still under development
            </TranslatableText>
          </p>
        </Modal.Content>
        <Modal.Action passive onClick={() => webviewModal.setVisible(false)}>
          <TranslatableText>cancel</TranslatableText>
        </Modal.Action>
        <Modal.Action onClick={() => window.location.replace('/demo')}>
          <TranslatableText>Yes, take me there</TranslatableText>
        </Modal.Action>
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
