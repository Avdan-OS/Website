import { Button, Text, Spacer } from '@geist-ui/core';
import Link from 'next/link';
import { TranslatableText } from '@/components/translation/TranslatableText';
import SlideshowExplainer from '@/components/slideshowExplainer';

// Creates small presentation of AvdanOS features called `miniFeatures()`
const MiniFeatures = () => {
  return (
    <>
      <div className="center">
        <Text h1 className="text-center">
          <TranslatableText>Workflow redefined</TranslatableText>
        </Text>

        <Text p className="text-center" style={{ fontSize: '1.2rem', padding: '0 30px' }}>
          <TranslatableText>
            Time is priceless, and there is so little time. With right tools and professional workspace, every task is
            simple as pie for the least amount of time!
          </TranslatableText>
        </Text>

        <Spacer h="15px" />
        <SlideshowExplainer />

        <Spacer h="15px" />
        <div className="text-center">
          <Text p className="text-center" style={{ fontSize: '1.2rem' }}>
            <TranslatableText>Check what AvdanOS offers to you.</TranslatableText>
          </Text>

          <Link href="/features-beta">
            <Button shadow type="success" color="primary">
              <TranslatableText>See here</TranslatableText>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MiniFeatures;
