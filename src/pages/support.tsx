import { Button, Card, Text, Image, Grid, Spacer, useTheme, Tag } from '@geist-ui/core';
import dynamicWidth from '@/lib/dynamic-width';
import { useState } from 'react';

const Support = () => {
  const theme = useTheme();

  const [mobileLayout, useMobileLayout] = useState(false);

  dynamicWidth((width) => {
    width < 950 ? useMobileLayout(true) : useMobileLayout(false);
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
        <Grid.Container
          gap={3}
          marginLeft="calc(0.5% - 10px)"
          direction={mobileLayout ? 'column' : 'row'}
          alignItems="center"
          justify="center"
        >
          <Grid xs={mobileLayout ? 15 : 8} style={{ width: '60%' }}>
            <Card
              style={{ background: theme.palette.background }}
              hoverable
              paddingTop="40px"
              paddingBottom="9px"
              width="95%"
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
                Visit{mobileLayout}
              </Button>
              <Spacer h={3} />
            </Card>
          </Grid>
          <Grid xs={mobileLayout ? 15 : 8} style={{ width: '60%' }}>
            <Card
              style={{ background: theme.palette.background }}
              hoverable
              paddingTop="40px"
              paddingBottom="9px"
              width="95%"
            >
              <Image
                draggable="false"
                src={`/assets/icons/Github${theme.type === 'light' ? '_light' : ''}.png`}
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
          <Grid xs={mobileLayout ? 15 : 8} style={{ width: '60%' }}>
            <Card
              style={{ background: theme.palette.background }}
              hoverable
              paddingTop="40px"
              paddingBottom="9px"
              width="95%"
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
          <Grid xs={mobileLayout ? 15 : 8} style={{ width: '60%' }}>
            <Card
              style={{ background: theme.palette.background }}
              hoverable
              paddingTop="40px"
              paddingBottom="9px"
              width="95%"
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
          <Grid xs={mobileLayout ? 15 : 8} style={{ width: '60%' }}>
            <Card
              style={{ background: theme.palette.background }}
              hoverable
              paddingTop="40px"
              paddingBottom="9px"
              width="95%"
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
