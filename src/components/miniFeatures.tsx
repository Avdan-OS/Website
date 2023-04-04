import { Button, Text, Spacer } from '@geist-ui/core';
import Link from 'next/link';
import { Chiislate } from '@/components/translation/Chiislate';
import SlideshowExplainer from '@/components/slideshowExplainer';

// Creates small presentation of AvdanOS features called `miniFeatures()`
const MiniFeatures = () => {
  return (
    <>
      <div className="center">
        <Text h1 className="text-center">
          <Chiislate>Workflow redefined</Chiislate>
        </Text>

        <Text p className="text-center" style={{ fontSize: '1.2rem', padding: '0 30px' }}>
          <Chiislate>
            Time is priceless, and there is so little time. With right tools and professional workspace, every task is
            simple as pie for the least amount of time!
          </Chiislate>
        </Text>

        <Spacer h="15px" />
        <SlideshowExplainer />

        <Spacer h="15px" />
        <div className="text-center">
          <Text p className="text-center" style={{ fontSize: '1.2rem' }}>
            <Chiislate>Check what AvdanOS offers to you.</Chiislate>
          </Text>

          <Link href="/features-beta">
            <Button shadow type="success" color="primary">
              <Chiislate>See here</Chiislate>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MiniFeatures;
