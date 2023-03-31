import { Button, Text, Spacer } from '@geist-ui/core';
import Link from 'next/link';
import { Translatable } from '@/components/translation/Translatable';
import SlideshowExplainer from '@/components/slideshowExplainer';

// Creates small presentation of AvdanOS features called `miniFeatures()`
const MiniFeatures = () => {
  return (
    <>
      <div className="center">
        <Text h1 className="text-center">
          <Translatable>Workflow redefined</Translatable>
        </Text>

        <Text p className="text-center" style={{ fontSize: '1.2rem', padding: '0 30px' }}>
          <Translatable>
            Time is priceless, and there is so little time. With right tools and professional workspace, every task is
            simple as pie for the least amount of time!
          </Translatable>
        </Text>

        <Spacer h="15px" />
        <SlideshowExplainer />

        <Spacer h="15px" />
        <div className="text-center">
          <Text p className="text-center" style={{ fontSize: '1.2rem' }}>
            <Translatable>Check what AvdanOS offers to you.</Translatable>
          </Text>

          <Link href="/features-beta">
            <Button shadow type="success" color="primary">
              <Translatable>See here</Translatable>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MiniFeatures;
