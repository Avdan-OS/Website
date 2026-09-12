import { Text, Card, Grid, useTheme } from '@geist-ui/core';
import Head from 'next/head';
import Link from 'next/link';
import { Chiislate } from '@/components/translation/Chiislate';

const Manual = () => {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>System Manual - AvdanOS</title>
      </Head>
      <div className="manual-page">
        <div className="text-center" style={{ maxWidth: '720px', margin: '0 auto 48px auto' }}>
          <Text h1 style={{ letterSpacing: '-0.03em', fontWeight: 500, marginBottom: '12px' }}>
            <Chiislate>AvdanOS System Manual</Chiislate>
          </Text>
          <Text p type="secondary" style={{ fontSize: '1.05rem', margin: 0 }}>
            <Chiislate>
              Architecture documentation, window management, gesture controls, gesture reference, and setup guides.
            </Chiislate>
          </Text>
        </div>

        <Grid.Container gap={2} justify="center" style={{ maxWidth: '960px', margin: '0 auto' }}>
          <Grid xs={24} md={12}>
            <Card className="manual-card" width="100%">
              <Text h4 style={{ marginBottom: '8px', fontWeight: 500 }}>
                <Chiislate>Window Management & Layouts</Chiislate>
              </Text>
              <Text p type="secondary" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                <Chiislate>
                  Learn how to snap windows into preset configurations, group related applications into tabs, and switch workspaces using multi-touch gestures.
                </Chiislate>
              </Text>
              <Link href="/features#preset-window-layouts" style={{ fontSize: '0.875rem' }}>
                <Chiislate>View layout presets</Chiislate> →
              </Link>
            </Card>
          </Grid>

          <Grid xs={24} md={12}>
            <Card className="manual-card" width="100%">
              <Text h4 style={{ marginBottom: '8px', fontWeight: 500 }}>
                <Chiislate>Unified Ribbon Dock</Chiislate>
              </Text>
              <Text p type="secondary" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                <Chiislate>
                  Understand the dock status indicators, notification hub integration, and application pinning ergonomics.
                </Chiislate>
              </Text>
              <Link href="/features#unified-ribbon-dock" style={{ fontSize: '0.875rem' }}>
                <Chiislate>Explore dock features</Chiislate> →
              </Link>
            </Card>
          </Grid>

          <Grid xs={24} md={12}>
            <Card className="manual-card" width="100%">
              <Text h4 style={{ marginBottom: '8px', fontWeight: 500 }}>
                <Chiislate>Keyboard & Gesture Shortcuts</Chiislate>
              </Text>
              <Text p type="secondary" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                <Chiislate>
                  Comprehensive shortcut map for quick launching, workspace navigation, split-view arrangement, and radial context menus.
                </Chiislate>
              </Text>
              <Link href="/demo" style={{ fontSize: '0.875rem' }}>
                <Chiislate>Test shortcuts in demo</Chiislate> →
              </Link>
            </Card>
          </Grid>

          <Grid xs={24} md={12}>
            <Card className="manual-card" width="100%">
              <Text h4 style={{ marginBottom: '8px', fontWeight: 500 }}>
                <Chiislate>System Architecture & Nadva DE</Chiislate>
              </Text>
              <Text p type="secondary" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                <Chiislate>
                  Developer documentation for Nadva desktop environment modules, theme engines, and open-source contribution guidelines.
                </Chiislate>
              </Text>
              <Link href="https://github.com/Avdan-OS/Desktop-Environment" target="_blank" rel="noreferrer" style={{ fontSize: '0.875rem' }}>
                <Chiislate>Browse Nadva repository</Chiislate> →
              </Link>
            </Card>
          </Grid>
        </Grid.Container>
      </div>
      <style jsx>{
        .manual-page {
          padding: 80px 24px 100px 24px;
        }
        :global(.manual-card) {
          padding: 24px !important;
          border-radius: 12px !important;
          border: 1px solid \ !important;
          background: \ !important;
        }
      }</style>
    </>
  );
};

export default Manual;