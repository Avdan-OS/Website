import { Card, Text } from '@geist-ui/core';

const FeaturesBetaCard = ({ isCardOnRight, title, description }) => {
  return (
    <Card className={`slide-card ${isCardOnRight ? 'slide-card-right' : 'slide-card-left'}`}>
      <div className="slide-topic">
        <h2>{title}</h2>
      </div>
      <div className="slide-info">
        <Text>{description}</Text>
      </div>
    </Card>
  );
};

export default FeaturesBetaCard;
