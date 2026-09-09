import {
  Button,
  Card,
  Text,
  Image,
  Grid,
  useToasts,
  useTheme,
  useModal,
  Modal,
  Snippet,
  Tag,
  Checkbox
} from '@geist-ui/core';
import dynamicWidth from '@/lib/dynamic-width';
import Link from 'next/link';
import { useState } from 'react';
import { Chiislate } from '@/components/translation/Chiislate';

const Download = () => {
  const downloadInfo = {
    x64: {
      link: '',
      shasum: 'sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      torrent: ''
    },
    arm: {
      link: '',
      shasum: 'sha256:ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb',
      torrent: ''
    }
  };

  const theme = useTheme();
  const { setToast } = useToasts();
  const downloadModal = useModal();
  const webviewModal = useModal();

  const [useTorrent, setTorrent] = useState(false);
  const [arch, setArch] = useState<'x64' | 'arm' | 'web'>('x64');
  const [canDownload, setCanDownload] = useState(false);
  const [shasum, setShasum] = useState(downloadInfo.x64.shasum);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  dynamicWidth((width) => {
    setIsSmallScreen(width < 768);
  });

  const showDownload = (type: 'x64' | 'arm' | 'web') => {
    setArch(type);
    if (type === 'web') {
      webviewModal.setVisible(true);
    } else {
      setShasum(downloadInfo[type].shasum);
      downloadModal.setVisible(true);
    }
  };

  const downloadHandler = () => {
    downloadModal.setVisible(false);
    setToast({
      text: <Chiislate>Installable ISO images are under active development. Try the Web Demo in the meantime.</Chiislate>,
      delay: 5000,
      type: 'warning'
    });
  };

  return (
    <>
      <div className="downloads-page" id="overview">
        <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 48px auto' }}>
          <Text h1 style={{ letterSpacing: '-0.03em', fontWeight: 500, marginBottom: '12px' }}>
            <Chiislate>Concept downloads and demo</Chiislate>
          </Text>
          <Text p type="secondary" style={{ fontSize: '1.1rem', margin: 0 }}>
            <Chiislate>
              Try the interactive web prototype or follow progress toward installable system images.
            </Chiislate>
          </Text>
        </div>

        <Grid.Container gap={2} justify="center" style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <Grid xs={24} sm={12} md={8}>
            <Card className="download-card" width="100%">
              <div className="card-badge">
                <Tag type="default">
                  <Chiislate>Interactive prototype</Chiislate>
                </Tag>
              </div>
              <div className="card-icon">
                <Image
                  draggable="false"
                  src="/assets/icons/WEB.png"
                  height="120px"
                  width="120px"
                  alt="Web preview"
                />
              </div>
              <Text h4 style={{ marginTop: '16px', marginBottom: '4px', fontWeight: 500 }}>
                <Chiislate>Browser demo</Chiislate>
              </Text>
              <Text p type="secondary" style={{ fontSize: '0.9rem', marginBottom: '20px' }}>
                <Chiislate>Run the interface prototype directly in any modern desktop browser.</Chiislate>
              </Text>
              <Button
                type="secondary"
                auto
                width="100%"
                onClick={() => showDownload('web')}
              >
                <Chiislate>Launch demo</Chiislate>
              </Button>
            </Card>
          </Grid>

          <Grid xs={24} sm={12} md={8}>
            <Card className="download-card" width="100%">
              <div className="card-badge">
                <Tag type="default">
                  <Chiislate>x86_64 architecture</Chiislate>
                </Tag>
              </div>
              <div className="card-icon">
                <Image
                  draggable="false"
                  src="/assets/icons/x64.png"
                  height="120px"
                  width="120px"
                  alt="x64 architecture"
                />
              </div>
              <Text h4 style={{ marginTop: '16px', marginBottom: '4px', fontWeight: 500 }}>
                <Chiislate>x64 build</Chiislate>
              </Text>
              <Text p type="secondary" style={{ fontSize: '0.9rem', marginBottom: '20px' }}>
                <Chiislate>Targeted for Intel and AMD 64-bit hardware workstations.</Chiislate>
              </Text>
              <Button
                type="default"
                auto
                width="100%"
                onClick={() => showDownload('x64')}
              >
                <Chiislate>Download ISO</Chiislate>
              </Button>
            </Card>
          </Grid>

          <Grid xs={24} sm={12} md={8}>
            <Card className="download-card" width="100%">
              <div className="card-badge">
                <Tag type="default">
                  <Chiislate>AArch64 architecture</Chiislate>
                </Tag>
              </div>
              <div className="card-icon">
                <Image
                  draggable="false"
                  src="/assets/icons/ARM.png"
                  height="120px"
                  width="120px"
                  alt="ARM architecture"
                />
              </div>
              <Text h4 style={{ marginTop: '16px', marginBottom: '4px', fontWeight: 500 }}>
                <Chiislate>ARM64 build</Chiislate>
              </Text>
              <Text p type="secondary" style={{ fontSize: '0.9rem', marginBottom: '20px' }}>
                <Chiislate>Designed for Raspberry Pi, PineBook, and ARM-based platforms.</Chiislate>
              </Text>
              <Button
                type="default"
                auto
                width="100%"
                onClick={() => showDownload('arm')}
              >
                <Chiislate>Download ISO</Chiislate>
              </Button>
            </Card>
          </Grid>
        </Grid.Container>

        <div className="help-box text-center">
          <Text p type="secondary" style={{ margin: 0, fontSize: '0.95rem' }}>
            <Chiislate>
              Looking for documentation or need assistance? Visit the <Link href="/support">Support Hub</Link> or join our community.
            </Chiislate>
          </Text>
        </div>
      </div>

      <Modal {...downloadModal.bindings}>
        <Modal.Title>
          <Chiislate>Verification and terms</Chiislate>
        </Modal.Title>
        <Modal.Subtitle>
          <Chiislate>Release checksum and software license</Chiislate>
        </Modal.Subtitle>
        <Modal.Content>
          <p style={{ fontSize: '0.9rem', marginBottom: '8px' }}>
            <Chiislate>Cryptographic hash for package integrity verification</Chiislate>:
          </p>
          <Snippet symbol="" text={shasum} />
          <p style={{ fontSize: '0.85rem', color: '#85858b', marginTop: '16px' }}>
            <Chiislate>
              AvdanOS is released under the GNU General Public License v3.0. Software is provided as-is without warranty.
            </Chiislate>
          </p>
          <Checkbox
            onChange={(e) => {
              setCanDownload(e.target.checked);
            }}
          >
            <Chiislate>I acknowledge and understand</Chiislate>
          </Checkbox>
        </Modal.Content>
        <Modal.Action passive onClick={() => downloadModal.setVisible(false)}>
          <Chiislate>Cancel</Chiislate>
        </Modal.Action>
        <Modal.Action
          disabled={!canDownload}
          onClick={() => {
            downloadHandler();
          }}
        >
          <Chiislate>Continue</Chiislate>
        </Modal.Action>
      </Modal>

      <Modal {...webviewModal.bindings}>
        <Modal.Title>
          <Chiislate>Interactive web prototype</Chiislate>
        </Modal.Title>
        <Modal.Content>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
            <Chiislate>
              You are launching the browser-based prototype of the AvdanOS desktop environment. This demonstration illustrates interactive concepts, menus, and window management directly in your web browser.
            </Chiislate>
          </p>
        </Modal.Content>
        <Modal.Action passive onClick={() => webviewModal.setVisible(false)}>
          <Chiislate>Cancel</Chiislate>
        </Modal.Action>
        <Modal.Action onClick={() => window.location.replace('/demo')}>
          <Chiislate>Open prototype</Chiislate>
        </Modal.Action>
      </Modal>

      <style jsx>{
        .downloads-page {
          padding: 80px 24px 100px 24px;
        }
        :global(.download-card) {
          padding: 32px 24px !important;
          border-radius: 12px !important;
          border: 1px solid \ !important;
          background: \ !important;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .card-badge {
          margin-bottom: 24px;
        }
        .card-icon {
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .help-box {
          max-width: 600px;
          margin: 48px auto 0 auto;
          padding: 16px 24px;
          border-radius: 8px;
          background: \;
          border: 1px solid \;
        }
      }</style>
    </>
  );
};

export default Download;