import dynamicWidth from '@/lib/dynamic-width';
import { Card, Grid, Link, Spacer, useTheme, Text, Divider } from '@geist-ui/core';
import { useState } from 'react';
import DiscoverCard from './discoverCard';
import style from '../styles/components/cards.module.css';
import { Chiislate } from '@/components/translation/Chiislate';

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
            <Grid xs={24} md={12} id={isSmallScreen ? 'smallDeviceGrid' : ''}>
              <Card
                height={isSmallScreen ? 'auto' : '550px'}
                width="100%"
                className={style.card + ' ' + (theme.type == 'dark' ? style.card__dark : style.card__white)}
              >
                <iframe
                  src={https://discord.com/widget?id=993464434855002163&theme=\}
                  sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                  width="100%"
                  height="500px"
                  frameBorder={0}
                  title="Discord community widget"
                />
              </Card>
            </Grid>
            <Grid
              style={{ padding: 'var(--grid-gap-unit)' }}
              xs={24}
              md={12}
              id={isSmallScreen ? 'smallDeviceGrid' : ''}
            >
              <Card
                height={isSmallScreen ? 'auto' : '550px'}
                className={style.card + ' ' + (theme.type == 'dark' ? style.card__dark : style.card__white)}
              >
                <Grid.Container gap={1}>
                  <Grid xs={24} justify="center">
                    <Text h3 style={{ fontSize: '24px', letterSpacing: '-0.02em', marginBottom: '8px' }}>
                      <Chiislate>Open source repositories</Chiislate>
                    </Text>
                  </Grid>
                  <DiscoverCard
                    title="AvdanOS"
                    description="The core operating system concept and architecture specifications."
                    link="https://github.com/Avdan-OS"
                  />
                  <DiscoverCard
                    title="Official Website"
                    description="Documentation, download portals, and community hub."
                    link="https://github.com/Avdan-OS/Website"
                  />
                  <DiscoverCard
                    title="Desktop Environment"
                    description="Nadva, the official modular desktop environment concept."
                    link="https://github.com/Avdan-OS/Desktop-Environment"
                  />
                  <DiscoverCard
                    title="Tinan"
                    description="Discord community management bot for real-time updates."
                    link="https://github.com/Avdan-OS/Tinan"
                  />
                </Grid.Container>
                <Spacer h={0.5} />
                <Divider />
                <div style={{ paddingTop: '8px' }}>
                  <Link href="https://github.com/orgs/Avdan-OS/repositories" target="_blank" rel="noreferrer" underline>
                    <Chiislate>Browse all repositories</Chiislate> →
                  </Link>
                </div>
              </Card>
            </Grid>
          </Grid.Container>
        </div>
      </div>
      <style jsx>{
        .page__content {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: \;
          max-width: 100%;
          margin: 0 auto;
          padding: calc(\ * 2) \;
          box-sizing: border-box;
        }
      }</style>
    </>
  );
}