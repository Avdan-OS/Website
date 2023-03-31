import { Text, Grid, Spacer } from '@geist-ui/core';
import dynamicWidth from '@/lib/dynamic-width';
import { useState } from 'react';
import SupportCard from '@/components/SupportCard';
import BetaPopup from '@/components/BetaPopup';
import { TranslatableText } from '@/components/translation/TranslatableText';

const Support = () => {
  const [mobileLayout, useMobileLayout] = useState(false);

  dynamicWidth((width) => {
    width < 950 ? useMobileLayout(true) : useMobileLayout(false);
  });

  return (
    <>
      <div className="text-center" id="overview">
        <Spacer h={3} />
        <Text className="header" h1>
          <TranslatableText>AvdanOS Support</TranslatableText>
        </Text>
        <Text h4>
          <TranslatableText>Contact Us On Social Media</TranslatableText>
        </Text>
        <Spacer h={2} />
        <Grid.Container
          gap={3}
          marginLeft="calc(0.5% - 10px)"
          direction={mobileLayout ? 'column' : 'row'}
          alignItems="center"
          justify="center"
        >
          <SupportCard icon="Twitter" title="Twitter" link="https://twitter.com/avdan_os" mobileLayout={mobileLayout} />
          <SupportCard icon="GitHub" title="GitHub" link="https://github.com/Avdan-OS" mobileLayout={mobileLayout} />
          <SupportCard
            icon="YouTube"
            title="YouTube"
            link="https://www.youtube.com/channel/UCHLCBj83J7bR82HwjhCJusA"
            mobileLayout={mobileLayout}
          />
          <SupportCard icon="Discord" title="Discord" link="https://avdanos.org/discord" mobileLayout={mobileLayout} />
          <SupportCard
            icon="Reddit"
            title="Reddit"
            link="https://www.reddit.com/r/AvdanOS/"
            mobileLayout={mobileLayout}
          />
          <SupportCard
            icon="Instagram"
            title="Instagram"
            link="https://instagram.com/avdanos_"
            mobileLayout={mobileLayout}
          />
        </Grid.Container>
        <Spacer h={5} />
        <Text h4>
          <TranslatableText link="https://github.com/Avdan-OS/suggestions">
            Want to suggest anything to us? We always want to listen to the community. Present your ideas [%a]here[%a].
          </TranslatableText>
        </Text>
        <Spacer h={5} />
        <BetaPopup href="/support-beta" />
      </div>
    </>
  );
};
export default Support;
