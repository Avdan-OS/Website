import { Button, Card, Text, Image, Grid, useToasts, Spacer, useTheme, Link } from '@geist-ui/core';
import { useEffect, useState } from 'react';

const index = () => {
  const theme = useTheme();
  let { setToast } = useToasts();

  const noDownloadCb = () => {
    setToast({ text: 'This download is not available, yet', delay: 2000 });
  };

  const [gridDirection, setGridDirection] = useState<'row' | 'column' | 'row-reverse' | 'column-reverse'>('row');
  const [gridWidth, setGridWidth] = useState(6);

  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth < 1050) {
      setGridDirection('column');
      setGridWidth(12);
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth < 1050) {
        setGridDirection('column');
        setGridWidth(15);
      } else {
        setGridDirection('row');
        setGridWidth(6);
      }
    });
  }, []);

  return (
    <>
      <div className="text-center" id="overview">
        <Spacer h={3} />
        <Text className="header" h1>
          Give your PC an Upgrade.
        </Text>
        <Spacer h={1} />
        <Grid.Container gap={3} direction={gridDirection} alignItems="center" justify="center">
          <Grid xs={gridWidth}>
            <Card
              style={{ background: theme.palette.accents_1 }}
              hoverable
              paddingTop="40px"
              padding="15px"
              width="100%"
            >
              <Image draggable="false" src="/assets/icons/ARM.png" height="100%" width="170px" />
              <Spacer h={2} />
              <Button type="success" shadow onClick={noDownloadCb} margin="10px">
                Direct Download
              </Button>
              <Button onClick={noDownloadCb} margin="10px">
                Torrent Download
              </Button>
            </Card>
          </Grid>
          <Grid xs={gridWidth}>
            <Card
              style={{ background: theme.palette.accents_1 }}
              shadow
              hoverable
              paddingTop="40px"
              padding="15px"
              width="100%"
            >
              <Image draggable="false" src="/assets/icons/x64.png" height="100%" width="170px" />
              <Spacer h={2} />
              <Button type="success" shadow onClick={noDownloadCb} margin="10px">
                Direct Download
              </Button>
              <Button onClick={noDownloadCb} margin="10px">
                Torrent Download
              </Button>
            </Card>
          </Grid>
          <Grid xs={gridWidth}>
            <Card
              style={{ background: theme.palette.accents_1 }}
              hoverable
              paddingTop="40px"
              padding="15px"
              width="100%"
            >
              <Image draggable="false" src="/assets/icons/ARM64.png" height="100%" width="170px" />
              <Spacer h={2} />
              <Button type="success" shadow onClick={noDownloadCb} margin="10px">
                Direct Download
              </Button>
              <Button onClick={noDownloadCb} margin="10px">
                Torrent Download
              </Button>
            </Card>
          </Grid>
        </Grid.Container>
        <div className="mx-auto" style={{ width: '40%', margin: '40px' }}>
          <Card style={{ border: theme.palette.background + ' 5px' }} hoverable className="text-center trouble">
            Having trouble? Click{' '}
            <Link block href="/support">
              here
            </Link>{' '}
            to get help!
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
        .trouble {
          background: ${theme.palette.background} !important;
        }
        .trouble:hover {
          background: ${theme.palette.accents_2} !important;
        }
        .header {
          font-size: 72px;
          background: -webkit-linear-gradient(#eee, #333);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </>
  );
};
export default index;
