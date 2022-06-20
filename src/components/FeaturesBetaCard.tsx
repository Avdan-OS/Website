import { Card, Text } from '@geist-ui/core';

interface FeaturesBetaCardProps {
  title: string;
  description: string;
  isCardOnRight: boolean;
}

const FeaturesBetaCard = ({ isCardOnRight, title, description }: FeaturesBetaCardProps) => {
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
