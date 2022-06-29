import { Button, Card, Text, Image, Grid, Spacer, useTheme, Tag, useToasts } from '@geist-ui/core';
import dynamicWidth from '@/lib/dynamic-width';
import { useState } from 'react';
import { TranslatableText } from '@/components/locale/TranslatableText';

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
          <TranslatableText>Read the features in detail.</TranslatableText>
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
                <TranslatableText>I'm a User</TranslatableText>
              </Tag>
              <Spacer />
              <Button
                type="success"
                shadow
                margin="10px"
                onClick={() => {
                  window.location.replace('/manual');
                }}
              >
                <TranslatableText>Open manual</TranslatableText>
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
                <TranslatableText>I'm a Developer</TranslatableText>
              </Tag>
              <Spacer />
              <Button
                type="success"
                shadow
                margin="10px"
                onClick={() => {
                  setToast({ text: 'Doc is not available yet.', delay: 5000, type: 'error' });
                }}
              >
                <TranslatableText>Open documentation</TranslatableText>
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
export default Docs;
