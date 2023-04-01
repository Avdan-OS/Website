import dynamicWidth from '@/lib/dynamic-width';
import { Text, Button, Card, ButtonGroup, useTheme } from '@geist-ui/core';
import Link from 'next/link';
import { useRef } from 'react';
import { Translatable } from './translation/Translatable';

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
          <Translatable>Hey look! A new testing version of this page is available!</Translatable>
        </Text>
        <ButtonGroup style={{ width: '100%' }}>
          <Button
            shadow
            onClick={() => {
              if (!betaContainerRef.current) return;
              betaContainerRef.current.style.display = 'none';
            }}
          >
            <Translatable>Close</Translatable>
          </Button>
          <Link href={href} legacyBehavior>
            <Button shadow>
              <Translatable>Check it out</Translatable>
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
