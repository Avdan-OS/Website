import { Text, Button, Card, useTheme } from '@geist-ui/core';
import { useRef } from 'react';
import { Translatable } from './translation/Translatable';

const TestingPopup = () => {
  const betaContainerRef = useRef<HTMLDivElement>(null);
  const Theme = useTheme();
  return (
    <div id="beta-container" ref={betaContainerRef}>
      <Card className="beta-popup">
        <Text>
          You're viewing an unstable branch of this website where the "TranslatableText" library is getting replaced by
          a more flexible "Translatable" library. There are a LOT of known issues, and help will be greatly appreciated.
          Only zh-TW (🇹🇼) is updated for testing reasons and it's the only locale that currently works. I will fix all
          the other locale files with release of a stable version. Meanwhile you can noodle things around and see what
          is new.
          <br />- Frox
          <img
            style={{
              width: '30px'
            }}
            src="https://user-images.githubusercontent.com/51555391/176177206-ec3f9dce-8780-4fe8-b6ac-5eeeac2038d4.gif"
          ></img>
        </Text>
        <Button
          shadow
          style={{ width: '100%' }}
          onClick={() => {
            if (!betaContainerRef.current) return;
            betaContainerRef.current.style.display = 'none';
          }}
        >
          <Translatable>Close</Translatable>
        </Button>
      </Card>
      <style jsx>
        {`
          #beta-container {
            position: fixed;
            right: 20px;
            bottom: 10px;
            width: 290px;
            z-index: 3;
            font-size: 12px;
          }
          .beta-popup {
            padding: 10px;
            background: ${Theme.palette.accents_3};
          }
        `}
      </style>
    </div>
  );
};

export default TestingPopup;
