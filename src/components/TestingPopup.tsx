import { Text, Button, Card, useTheme } from '@geist-ui/core';
import { useRef } from 'react';
import { Chiislate } from './translation/Chiislate';

const TestingPopup = () => {
  const betaContainerRef = useRef<HTMLDivElement>(null);
  const Theme = useTheme();
  return (
    <div id="branch-container" ref={betaContainerRef}>
      <Card
        style={{
          backgroundColor: '#00000069',
          backdropFilter: 'blur(8px)'
        }}
      >
        <Text>
          You're viewing an unstable branch of this website where the "TranslatableText" library is getting replaced by
          a more flexible "Translatable" library. There are a LOT of known issues, and help will be greatly appreciated.
          Only zh-TW (🇹🇼) is updated for testing reasons and it's the only locale that currently works. I will fix all
          the other locale files with release of a stable version. Meanwhile you can noodle things around and see what
          is new.
          <br />- Frox, Website contributor
          <img
            style={{
              width: '23px',
              marginBottom: '7px'
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
          <Chiislate>Close</Chiislate>
        </Button>
      </Card>
      <style jsx>
        {`
          #branch-container {
            z-index: 6;
            position: fixed;
            right: 20px;
            bottom: 10px;
            width: 290px;
            font-size: 12px;
          }
        `}
      </style>
    </div>
  );
};

export default TestingPopup;
