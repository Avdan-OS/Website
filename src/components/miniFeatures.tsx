import { Button, Text, Spacer } from '@geist-ui/core';
import Link from 'next/link';
import { Chiislate } from '@/components/translation/Chiislate';
import SlideshowExplainer from '@/components/slideshowExplainer';

const MiniFeatures = () => {
  return (
    <div className="center" style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px' }}>
      <Text h2 className="text-center" style={{ letterSpacing: '-0.02em', marginBottom: '8px' }}>
        <Chiislate>Intuitive workflow by design</Chiislate>
      </Text>

      <Text p className="text-center" type="secondary" style={{ fontSize: '1.05rem', margin: '0 auto 32px auto', maxWidth: '640px' }}>
        <Chiislate>
          Gestures, unified window grouping, and an adaptable ribbon dock built for how you actually work.
        </Chiislate>
      </Text>

      <SlideshowExplainer />

      <Spacer h={2} />
      <div className="text-center">
        <Link href="/features" passHref legacyBehavior>
          <Button auto scale={0.95} type="secondary">
            <Chiislate>Explore all features</Chiislate>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MiniFeatures;