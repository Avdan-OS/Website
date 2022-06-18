import { Button, Card, Text, Image, Grid, Spacer, useTheme, Tag, useToasts } from '@geist-ui/core';
import dynamicWidth from '@/lib/dynamic-width';
import { useState } from 'react';

const Support = () => {
  const theme = useTheme();

  const [gridDirection, setGridDirection] = useState<'row' | 'column' | 'row-reverse' | 'column-reverse'>('row');
  const [gridWidth, setGridWidth] = useState(6);

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
          AvdanOS Support
          <h4>Contact Us On Social Media</h4>
        </Text>
        <Spacer h={2} />
        <Grid.Container gap={3} direction={gridDirection} alignItems="center" justify="center">
          <Grid xs={gridWidth}>
            <Card
              style={{ background: theme.palette.background }}
              hoverable
              paddingTop="40px"
              paddingBottom="9px"
              width="90%"
            >
              <Image
                draggable="false"
                src={`/assets/icons/Twitter${theme.type === 'light' ? '_light' : ''}.png`}
                height="90%"
                width="150px"
              />
              <Tag>Twitter</Tag>
              <Spacer />
              <Button
                type="success"
                width={0.7}
                shadow
                margin="9px"
                onClick={() => {
                  window.location.replace('https://twitter.com/avdan_os');
                }}
              >
                Visit
              </Button>
              <Spacer h={3} />
            </Card>
          </Grid>
          <Grid xs={gridWidth}>
            <Card
              style={{ background: theme.palette.background }}
              hoverable
              paddingTop="40px"
              paddingBottom="9px"
              width="90%"
            >
              <Image
                draggable="false"
                src={`/assets/icons/GitHub${theme.type === 'light' ? '_light' : ''}.png`}
                height="90%"
                width="150px"
              />
              <Tag>GitHub</Tag>
              <Spacer />
              <Button
                type="success"
                width={0.7}
                shadow
                margin="9px"
                onClick={() => {
                  window.location.replace('https://github.com/Avdan-OS');
                }}
              >
                Visit
              </Button>
              <Spacer h={3} />
            </Card>
          </Grid>
          <Grid xs={gridWidth}>
            <Card
              style={{ background: theme.palette.background }}
              hoverable
              paddingTop="40px"
              paddingBottom="9px"
              width="90%"
            >
              <Image
                draggable="false"
                src={`/assets/icons/YouTube${theme.type === 'light' ? '_light' : ''}.png`}
                height="90%"
                width="150px"
              />
              <Tag>YouTube</Tag>
              <Spacer />
              <Button
                type="success"
                width={0.7}
                shadow
                margin="9px"
                onClick={() => {
                  window.location.replace('https://www.youtube.com/c/AvdanOSDeveloper');
                }}
              >
                Visit
              </Button>
              <Spacer h={3} />
            </Card>
          </Grid>
          <Grid xs={gridWidth}>
            <Card
              style={{ background: theme.palette.background }}
              hoverable
              paddingTop="40px"
              paddingBottom="9px"
              width="90%"
            >
              <Image
                draggable="false"
                src={`/assets/icons/Discord${theme.type === 'light' ? '_light' : ''}.png`}
                height="90%"
                width="150px"
              />
              <Tag>Discord</Tag>
              <Spacer />
              <Button
                type="success"
                width={0.7}
                shadow
                margin="9px"
                onClick={() => {
                  window.location.replace('https://discord.gg/avdanos');
                }}
              >
                Visit
              </Button>
              <Spacer h={3} />
            </Card>
          </Grid>
          <Grid xs={gridWidth}>
            <Card
              style={{ background: theme.palette.background }}
              hoverable
              paddingTop="40px"
              paddingBottom="9px"
              width="90%"
            >
              <Image
                draggable="false"
                src={`/assets/icons/Reddit${theme.type === 'light' ? '_light' : ''}.png`}
                height="90%"
                width="150px"
              />
              <Tag>Reddit</Tag>
              <Spacer />
              <Button
                type="success"
                width={0.7}
                shadow
                margin="9px"
                onClick={() => {
                  window.location.replace('https://www.reddit.com/r/AvdanOS/');
                }}
              >
                Visit
              </Button>
              <Spacer h={3} />
            </Card>
          </Grid>
        </Grid.Container>
        <Spacer h={5} />
      </div>
    </>
  );
};
export default Support;
