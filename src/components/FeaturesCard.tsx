import dynamicWidth from '@/lib/dynamic-width';
import { Text } from '@geist-ui/core';
import { useState } from 'react';

interface FeaturesCardProps {
  cardVideo: string;
  cardTitle: string;
  cardDescription: string;
  isInverted: boolean;
}

const FeaturesCard = ({ cardVideo, cardTitle, cardDescription, isInverted }: FeaturesCardProps) => {
  const [isSmallDevice, setIsSmallDevice] = useState(false);
  dynamicWidth((width) => {
    if (width < 768) {
      setIsSmallDevice(true);
    }
  });
  return (
    <article className={isSmallDevice ? 'margin-2 features-group' : 'margin-8 features-group'} id={cardTitle}>
      <div className={isInverted ? 'inverse' : ''}>
        <video autoPlay={true} loop preload="none" muted style={{ width: '100%', height: '100%' }}>
          <source type="video/mp4" src={cardVideo} height="100%" width="100%" />
        </video>
      </div>
      <div>
        <Text h3>{cardTitle}</Text>
        <Text type="secondary">{cardDescription}</Text>
      </div>
      <style jsx>
        {`
          .margin-8 {
            margin: 2.5rem 1rem 8rem 1rem;
          }
          .margin-2 {
            margin: 2.5rem 1rem 2rem 1rem;
          }
          @media (min-width: 650px) {
            .features-group {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 2rem;
              align-items: center;
            }
            .inverse {
              order: 2;
            }
          }
        `}
      </style>
    </article>
  );
};

export default FeaturesCard;
