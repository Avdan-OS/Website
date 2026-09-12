import { Button, Card, Text, Image, Grid, useTheme, Tag } from '@geist-ui/core';
import Link from 'next/link';
import { Chiislate } from '@/components/translation/Chiislate';

const Docs = () => {
  const theme = useTheme();

  return (
    <div className="docs-page text-center">
      <div style={{ maxWidth: '800px', margin: '0 auto 48px auto' }}>
        <Text h1 style={{ letterSpacing: '-0.03em', fontWeight: 500, marginBottom: '12px' }}>
          <Chiislate>Documentation and guides</Chiislate>
        </Text>
        <Text p type="secondary" style={{ fontSize: '1.05rem', margin: 0 }}>
          <Chiislate>
            Learn about the AvdanOS desktop concept, interface ergonomics, and developer architecture.
          </Chiislate>
        </Text>
      </div>

      <Grid.Container gap={2} justify="center" style={{ maxWidth: '880px', margin: '0 auto' }}>
        <Grid xs={24} md={12}>
          <Card className="doc-card" width="100%">
            <div className="doc-icon">
              <Image
                alt="User Documentation"
                draggable="false"
                src="/assets/icons/user.png"
                height="100px"
                width="100px"
              />
            </div>
            <Tag type="default" style={{ marginBottom: '16px' }}>
              <Chiislate>User Guide</Chiislate>
            </Tag>
            <Text h4 style={{ marginBottom: '8px', fontWeight: 500 }}>
              <Chiislate>Concept manual</Chiislate>
            </Text>
            <Text p type="secondary" style={{ fontSize: '0.9rem', marginBottom: '24px' }}>
              <Chiislate>
                Understand desktop interactions, gesture navigation, window layouts, and daily usage.
              </Chiislate>
            </Text>
            <Link href="/manual" passHref legacyBehavior>
              <Button type="default" auto width="100%">
                <Chiislate>Read manual</Chiislate>
              </Button>
            </Link>
          </Card>
        </Grid>

        <Grid xs={24} md={12}>
          <Card className="doc-card" width="100%">
            <div className="doc-icon">
              <Image
                alt="Developer Documentation"
                draggable="false"
                src="/assets/icons/developer.png"
                height="100px"
                width="100px"
              />
            </div>
            <Tag type="default" style={{ marginBottom: '16px' }}>
              <Chiislate>Developer Docs</Chiislate>
            </Tag>
            <Text h4 style={{ marginBottom: '8px', fontWeight: 500 }}>
              <Chiislate>Architecture reference</Chiislate>
            </Text>
            <Text p type="secondary" style={{ fontSize: '0.9rem', marginBottom: '24px' }}>
              <Chiislate>
                Explore GitHub specifications, component standards, Nadva DE APIs, and contribute code.
              </Chiislate>
            </Text>
            <Link href="https://github.com/Avdan-OS" target="_blank" rel="noreferrer" passHref legacyBehavior>
              <Button type="secondary" auto width="100%">
                <Chiislate>Browse repositories</Chiislate>
              </Button>
            </Link>
          </Card>
        </Grid>
      </Grid.Container>

      <style jsx>{
        .docs-page {
          padding: 80px 24px 100px 24px;
        }
        :global(.doc-card) {
          padding: 32px 24px !important;
          border-radius: 12px !important;
          border: 1px solid \ !important;
          background: \ !important;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .doc-icon {
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
      }</style>
    </div>
  );
};

export default Docs;