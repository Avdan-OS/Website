import { Card, Text } from '@geist-ui/core';

const FeaturesBetaCard = ({ isCardOnRight, title, description }) => {
  return (
    <Card className={`slide-card text-white ${isCardOnRight ? 'slide-card-right' : 'slide-card-left'}`}>
      <div className="slide-topic">
        <h2 style={{ fontSize: '1.5rem', margin: '0' }}>{title}</h2>
      </div>
      <div className="slide-info">
        <Text style={{ fontSize: '1rem' }}>{description}</Text>
      </div>
    </Card>
  );
};

export default FeaturesBetaCard;
