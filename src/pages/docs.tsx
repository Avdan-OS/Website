import { Button, Card, Text, Image, Grid, Spacer, useTheme, Tag, useToasts, Link } from '@geist-ui/core';
import dynamicWidth from '@/lib/dynamic-width';
import { useState } from 'react';
import { Translatable } from '@/components/translation/Translatable';

const Docs = () => {
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
          <Translatable>Read the features in detail.</Translatable>
        </Text>
        <Spacer h={2} />
        <Grid.Container gap={3} direction={gridDirection} alignItems="center" justify="center">
          <Grid xs={gridWidth}>
            <Card
              style={{ background: theme.palette.background }}
              hoverable
              paddingTop="40px"
              paddingBottom="10px"
              width="100%"
            >
              <Image
                alt="User Documentation"
                draggable="false"
                src="/assets/icons/user.png"
                height="100%"
                width="200px"
              />
              <Tag>
                <Translatable>I'm a User</Translatable>
              </Tag>
              <Spacer />
              <Button
                type="success"
                shadow
                margin="10px"
                onClick={() => {
                  setToast({
                    text: <Translatable>Manual is not available yet</Translatable>,
                    delay: 5000,
                    type: 'error'
                  });
                }}
              >
                <Translatable>Open manual</Translatable>
              </Button>
              <Spacer h={3} />
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
              <Image
                draggable="false"
                src="/assets/icons/developer.png"
                height="100%"
                width="200px"
                alt="Developer Documentation"
              />
              <Tag>
                <Translatable>I'm a Developer</Translatable>
              </Tag>
              <Spacer />
              <Link href="https://docs.avdanos.com/">
                <Button type="success" shadow margin="10px">
                  <Translatable>Open documentation</Translatable>
                </Button>
              </Link>
              <Spacer h={3} />
            </Card>
          </Grid>
        </Grid.Container>
        <Spacer h={5} />
      </div>
    </>
  );
};
export default Docs;
