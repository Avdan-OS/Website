import { useState } from 'react';
import dynamicWidth from '@/lib/dynamic-width';
import { Card, Text, Image } from '@geist-ui/core';

const FeaturesCard = ({ cardImg, cardTitle, cardDescription, isInverted }) => {
  const [useMobileCard, setMobileCard] = useState(false);

  dynamicWidth((width) => {
    width <= 425 ? setMobileCard(true) : setMobileCard(false);
  });

  return (
    <article className="features-group">
      <div className={isInverted ? 'inverse' : ''}>
        <Image src={cardImg} alt={cardTitle} />
      </div>
      <div className="features-text">
        <Text h2>{cardTitle}</Text>
        <Text p>{cardDescription}</Text>
      </div>
      <style jsx>
        {`
          .features-grid {
            margin: 1rem;

            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
            justify-content: center;
            max-width: 1200px;
            margin: auto;
          }
          .features-group {
            margin: 2rem;
          }

          @media (min-width: 650px) {
            .features-group {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 2rem;
              align-items: center;
            }
          }

          @media (min-width: 650px) {
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
