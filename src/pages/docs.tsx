// prettier-ignore
import { Button, Card, Text, Image, Grid, Spacer, useTheme, Tag, useToasts } from '@geist-ui/core';
import dynamicWidth from '@/lib/dynamic-width';
import { useState } from 'react';

const Download = () => {
  const theme = useTheme();

  const [gridDirection, setGridDirection] = useState<'row' | 'column' | 'row-reverse' | 'column-reverse'>('row');
  const [gridWidth, setGridWidth] = useState(6);
  const { setToast } = useToasts();

  dynamicWidth((width) => {
    if (width < 950) {
      setGridDirection('column');
      setGridWidth(14);
    } else {
      setGridDirection('row');
      setGridWidth(8);
    }
  });

  return (
    <>
      <div className="text-center" id="overview">
        <Spacer h={3} />
        <Text className="header" h1>
          Read the features in detail.
        </Text>
        <Spacer />
        <Grid.Container gap={3} direction={gridDirection} alignItems="center" justify="center">
          <Grid xs={gridWidth}>
            <Card
              style={{ background: theme.palette.background }}
              hoverable
              paddingTop="40px"
              paddingBottom="10px"
              width="100%"
            >
              <Image draggable="false" src="/assets/icons/user.png" height="100%" width="200px" />
              <Tag type="success">I'm a User</Tag>
              <Spacer />
              <Button
                type="success"
                shadow
                margin="10px"
                onClick={() => {
                  setToast({ text: 'Manual is not available yet.', delay: 5000, type: 'error' });
                }}
              >
                Open manual
              </Button>
              <Spacer h={1} />
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
              <Image draggable="false" src="/assets/icons/developer.png" height="100%" width="200px" />
              <Tag type="success">I'm a Developer</Tag>
              <Spacer />
              <Button
                type="success"
                shadow
                margin="10px"
                onClick={() => {
                  setToast({ text: 'Doc is not available yet.', delay: 5000, type: 'error' });
                }}
              >
                Open documentation
              </Button>
              <Spacer h={1} />
            </Card>
          </Grid>
        </Grid.Container>
        <Spacer h={5} />
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
export default Download;
// github copilet is basically copy and paste from stacksoverflow but automatic
// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa what to type there
// what should i type there?!?!?! ^
