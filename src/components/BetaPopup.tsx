import dynamicWidth from '@/lib/dynamic-width';
import { Text, Button, Card, ButtonGroup, useTheme } from '@geist-ui/core';
import Link from 'next/link';
import { useRef } from 'react';
import { Chiislate } from './translation/Chiislate';

const BetaCard = ({ href }: { href: string }) => {
  const betaContainerRef = useRef<HTMLDivElement>(null);
  const Theme = useTheme();
  dynamicWidth((width) => {
    if (width < 500) {
      if (!betaContainerRef.current) return;
      betaContainerRef.current.style.display = 'none';
    }
  });
  return (
    <div id="beta-container" ref={betaContainerRef}>
      <Card className="beta-popup">
        <Text>
          <Chiislate>Hey look! A new testing version of this page is available!</Chiislate>
        </Text>
        <ButtonGroup style={{ width: '100%' }}>
          <Button
            shadow
            onClick={() => {
              if (!betaContainerRef.current) return;
              betaContainerRef.current.style.display = 'none';
            }}
          >
            <Chiislate>Close</Chiislate>
          </Button>
          <Link href={href} legacyBehavior>
            <Button shadow>
              <Chiislate>Check it out</Chiislate>
            </Button>
          </Link>
        </ButtonGroup>
      </Card>
      <style jsx>
        {`
          #beta-container {
            position: fixed;
            left: 20px;
            bottom: 10px;
            width: 270px;
            z-index: 6;
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

export default BetaCard;
