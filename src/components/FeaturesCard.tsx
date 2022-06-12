import { useState } from 'react';
import dynamicWidth from '@/lib/dynamic-width';
import { Card, Text, Image } from '@geist-ui/core';

const FeaturesCard = ({ cardImg, cardTitle, cardDescription }) => {
  const [useMobileCard, setMobileCard] = useState(false);

  dynamicWidth((width) => {
    width <= 425 ? setMobileCard(true) : setMobileCard(false);
  });

  return (
    <Card
      style={{ width: '-webkit-fill-available', flexDirection: useMobileCard ? 'column' : 'row' }}
      margin={2}
      padding={1}
    >
      <Image src={cardImg} height="200px" width="400px" draggable={false} />
      <Text h4 mb={0}>
        {cardTitle}
      </Text>
      <Text type="secondary" small>
        {cardDescription}
      </Text>
      <style>
        
      </style>
    </Card>
  );
};

export default FeaturesCard;
