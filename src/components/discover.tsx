import dynamicWidth from '@/lib/dynamic-width';
import { Card, Grid, Link, Spacer, useTheme, Text, Divider } from '@geist-ui/core';
import { useState } from 'react';
import DiscoverCard from './discoverCard';
import style from '../styles/components/cards.module.css';
import { TranslatableText } from '@/components/translation/TranslatableText';

export default function Discover() {
  const theme = useTheme();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  dynamicWidth((width) => {
    width <= 950 ? setIsSmallScreen(true) : setIsSmallScreen(false);
  });

  return (
    <>
      <div className="center text-center">
        <div className="page__content">
          <Grid.Container gap={2} justify="center" id={isSmallScreen ? 'stacked' : ''}>
            <Grid xs={12} sm={12} id={isSmallScreen ? 'smallDeviceGrid' : ''}>
              <Card
                height={isSmallScreen ? 'auto' : '550px'}
                width="100%"
                className={style.card + ' ' + (theme.type == 'dark' ? style.card__dark : style.card__white)}
              >
                <iframe
                  src={`https://discord.com/widget?id=993464434855002163&theme=${theme.type}`}
                  sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                  width={'100%'}
                  height={'520px%'}
                  frameBorder={0}
                />
              </Card>
            </Grid>
            <Grid
              style={{ padding: 'var(--grid-gap-unit)' }}
              xs={12}
              sm={12}
              id={isSmallScreen ? 'smallDeviceGrid' : ''}
            >
              <Card
                height={isSmallScreen ? 'auto' : '550px'}
                className={style.card + ' ' + (theme.type == 'dark' ? style.card__dark : style.card__white)}
              >
                <Grid.Container gap={1}>
                  <Grid xs={24} justify="center">
                    <Text h2 style={{ fontSize: '30px' }}>
                      <TranslatableText>Open source on GitHub</TranslatableText>
                    </Text>
                  </Grid>
                  <DiscoverCard
                    title="AvdanOS"
                    description="Meet AvdanOS, refining the way we think about operating systems."
                    link="https://github.com/Avdan-OS"
                  />
                  <DiscoverCard
                    title="Official Website"
                    description="All the new Updates and Information about AvdanOS and Support."
                    link="https://github.com/Avdan-OS/Website"
                  />
                  <DiscoverCard
                    title="Desktop Environment"
                    description="Meet Nadva, the official Desktop Environment for AvdanOS."
                    link="https://github.com/Avdan-OS/Desktop-Environment"
                  />
                  <DiscoverCard
                    title="Tinan"
                    description="A Discord Bot Made for the AvdanOS Community Discord server."
                    link="https://github.com/Avdan-OS/Tinan"
                  />
                </Grid.Container>
                <Spacer h={0.5} />
                <Divider />
                <div>
                  <Link href="https://github.com/orgs/Avdan-OS/repositories" underline>
                    <Spacer h={1} />
                    <TranslatableText>Browse all repos</TranslatableText>-&gt;
                  </Link>
                </div>
              </Card>
            </Grid>
          </Grid.Container>
        </div>
      </div>
      <style jsx>{`
        .page__content {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: ${theme.layout.pageWidthWithMargin};
          max-width: 100%;
          margin: 0 auto;
          padding: calc(${theme.layout.unit} * 2) ${theme.layout.pageMargin};
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
