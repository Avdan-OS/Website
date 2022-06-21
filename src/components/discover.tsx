import dynamicWidth from '@/lib/dynamic-width';
import { Card, Grid, Link, Spacer, useTheme } from '@geist-ui/core';
import { useState } from 'react';
import DiscoverCard from './discoverCard';
import style from '../styles/components/cards.module.css';

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
              <Card height={isSmallScreen ? 'auto' : '550px'} width="100%" className={style.info__card}>
                <iframe
                  src={`https://discord.com/widget?id=964457482586034186&theme=${theme.type}`}
                  sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                  width={'100%'}
                  height={'520px%'}
                  frameBorder={0}
                />
              </Card>
            </Grid>
            <Grid xs={12} sm={12} id={isSmallScreen ? 'smallDeviceGrid' : ''}>
              <Card height={isSmallScreen ? 'auto' : '550px'} className={style.info__card}>
                <Grid.Container gap={1.5}>
                  <DiscoverCard
                    title="AvdanOS"
                    description="Meet AvdanOS, refining the way we think about operating systems."
                    link="https://github.com/Avdan-OS/AvdanOS"
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
                <div className="text-left">
                  <Link href="https://github.com/orgs/Avdan-OS/repositories" underline style={{ textAlign: 'left' }}>
                    <Spacer h={2} />
                    Browse all repos -&gt;
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
