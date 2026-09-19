import { Text, Grid } from '@geist-ui/core';
import SupportCard from '@/components/SupportCard';
import Link from 'next/link';
import { Chiislate } from '@/components/translation/Chiislate';

const Support = () => {
  return (
    <div className="support-page" id="overview">
      <div className="text-center" style={{ maxWidth: '720px', margin: '0 auto 48px auto' }}>
        <Text h1 style={{ letterSpacing: '-0.03em', fontWeight: 500, marginBottom: '12px' }}>
          <Chiislate>Community and support</Chiislate>
        </Text>
        <Text p type="secondary" style={{ fontSize: '1.05rem', margin: 0 }}>
          <Chiislate>Connect with the development team and community members across platforms.</Chiislate>
        </Text>
      </div>

      <Grid.Container gap={2} justify="center" style={{ maxWidth: '960px', margin: '0 auto' }}>
        <SupportCard icon="GitHub" title="GitHub" link="https://github.com/Avdan-OS" />
        <SupportCard icon="Discord" title="Discord" link="https://avdanos.org/discord" />
        <SupportCard icon="Twitter" title="Twitter" link="https://twitter.com/avdan_os" />
        <SupportCard icon="Reddit" title="Reddit" link="https://www.reddit.com/r/AvdanOS/" />
        <SupportCard icon="YouTube" title="YouTube" link="https://www.youtube.com/channel/UCHLCBj83J7bR82HwjhCJusA" />
        <SupportCard icon="Instagram" title="Instagram" link="https://instagram.com/avdanos_" />
      </Grid.Container>

      <div className="text-center" style={{ marginTop: '64px' }}>
        <Text p type="secondary">
          <Chiislate>
            Have ideas or suggestions for AvdanOS? Share feedback on our{' '}
            <Link href="https://github.com/Avdan-OS/suggestions" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>
              suggestions repository
            </Link>.
          </Chiislate>
        </Text>
      </div>

      <style jsx>{`
        .support-page {
          padding: 80px 24px 100px 24px;
        }
      `}</style>
    </div>
  );
};

export default Support;
