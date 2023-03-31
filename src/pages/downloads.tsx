// prettier-ignore
import { Button, Card, Text, Image, Grid, useToasts, Spacer, useTheme, useModal, Modal, Snippet, Tag, Checkbox } from '@geist-ui/core';
import dynamicWidth from '@/lib/dynamic-width';
import Link from 'next/link';
import { useState } from 'react';
import { Translatable } from '@/components/translation/Translatable';

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
      text: <Translatable>This download is not available yet.</Translatable>,
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
          <Translatable>Give your PC an Upgrade.</Translatable>
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
                  <Translatable>Try in your Browser</Translatable>
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
                  <Translatable>Open Demo</Translatable>
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
                <Translatable>For most people</Translatable>
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
                <Translatable>Download</Translatable>
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
                <Translatable>For Pi, Pine, and Mac</Translatable>
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
                <Translatable>Download</Translatable>
              </Button>
              <Spacer h={0} />
            </Card>
          </Grid>
        </Grid.Container>
        <div className="mx-auto" style={{ width: '40%', margin: '40px' }}>
          <Card hoverable className="text-center trouble" style={{ background: theme.palette.accents_1 }}>
            <Translatable>
              Having trouble? Click <Link href="/support">here</Link> to get help!
            </Translatable>
          </Card>
        </div>
      </div>
      <Modal {...downloadModal.bindings}>
        <Modal.Title>
          <Translatable>Before you Download</Translatable>
        </Modal.Title>
        <Modal.Subtitle>
          <Translatable>Please read this before you continue</Translatable>
        </Modal.Subtitle>
        <Modal.Content>
          <p>
            <Translatable>
              Below is the shasum of the download. You can use it to check download's integrity
            </Translatable>
            :
          </p>
          <Snippet symbol="" text={shasum}></Snippet>
          <Spacer />
          <Translatable>
            Warning: Software that we provided is licensed under GNU GPL 3.0. We provide absolutely no liability what so
            ever, etc...
          </Translatable>
          <br />
          <Checkbox
            onChange={(e) => {
              setCanDownload(e.target.checked);
            }}
          >
            <Translatable>Yes, I understand</Translatable>
          </Checkbox>
          <br />
          <Checkbox
            onChange={(e) => {
              setTorrent(e.target.checked);
            }}
          >
            <Translatable>Use torrent download</Translatable>
          </Checkbox>
        </Modal.Content>
        <Modal.Action passive onClick={() => downloadModal.setVisible(false)}>
          <Translatable>Cancel</Translatable>
        </Modal.Action>
        <Modal.Action
          disabled={!canDownload}
          onClick={() => {
            downloadHandler();
          }}
        >
          <Translatable>Continue</Translatable>
        </Modal.Action>
      </Modal>
      <Modal {...webviewModal.bindings}>
        <Modal.Title>
          <Translatable>Web preview</Translatable>
        </Modal.Title>
        <Modal.Content>
          <p>
            <Translatable>
              You're about to visit the web demo version of AvdanOS, which is only a proof of concept. Trying the live
              system is strongly recommended to getting the full experience from the operating system.
            </Translatable>
            <br />*
            <Translatable>
              Live system is currently not available because the system is still under development
            </Translatable>
          </p>
        </Modal.Content>
        <Modal.Action passive onClick={() => webviewModal.setVisible(false)}>
          <Translatable>cancel</Translatable>
        </Modal.Action>
        <Modal.Action onClick={() => window.location.replace('/demo')}>
          <Translatable>Yes, take me there</Translatable>
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
