import { Avatar, Button, Card, Text, useTheme, Image, Display, Grid } from '@geist-ui/core';
import NextLink from 'next/link';

const index = () => {
  const theme = useTheme();
  return (
    <>
      <div className="text-center" id="overview">
        <Text className="header" h1 style={{ marginTop: '50px', marginBottom: '50px' }}>
          Get your PC an Upgrade.
        </Text>
        <Grid.Container gap={2} justify="center">
          <Grid xs={6}>
            <Card shadow hoverable width="100%" paddingTop="40px">
              <Image draggable="false" src="/assets/icons/x64.png" height="100%" width="170px" paddingBottom="40px" />
              <Button className="downloadBtn">Direct Download</Button>
              <Button>Torrent Download</Button>
            </Card>
          </Grid>
          <Grid xs={6}>
            <Card shadow hoverable width="100%" paddingTop="40px">
              <Image draggable="false" src="/assets/icons/arm.png" height="100%" width="170px" paddingBottom="40px" />
              <Button className="downloadBtn">Direct Download</Button>
              <Button>Torrent Download</Button>
            </Card>
          </Grid>
          <Grid xs={6}>
            <Card shadow hoverable width="100%" paddingTop="40px">
              <Image draggable="false" src="/assets/icons/arm64.png" height="100%" width="170px" paddingBottom="40px" />
              <Button className="downloadBtn">Direct Download</Button>
              <Button>Torrent Download</Button>
            </Card>
          </Grid>
        </Grid.Container>
        <div className="mx-auto" style={{ width: '40%', margin: '40px' }}>
          <Card shadow hoverable className="text-center">
            Having trouble? Click <a href="/support">here</a> to get help!
          </Card>
        </div>
      </div>
      <style jsx>{`
        .card-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          max-width: 500%;
          padding: 0;
          border-top: none !important;
        }
        .header {
          font-size: 72px;
          background: -webkit-linear-gradient(#eee, #333);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .downloadBtn {
          margin: 60px;
        }
      `}</style>
    </>
  );
};
export default index;
