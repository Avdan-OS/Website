import { Card, Text, useTheme } from '@geist-ui/core';
import { Chiislate } from './translation/Chiislate';

interface FeaturesBetaCardProps {
  title: string;
  description: string;
  isCardOnRight: boolean;
}

const FeaturesBetaCard = ({ isCardOnRight, title, description }: FeaturesBetaCardProps) => {
  const theme = useTheme();
  return (
    <Card className={`slide__card ${isCardOnRight ? 'slide__card--right' : 'slide__card--left'}`}>
      <div className="slide-topic">
        <h2 style={{ fontSize: '1.5rem', margin: '0', color: theme.type === 'light' ? 'black' : 'white' }}>
          <Chiislate>{title}</Chiislate>
        </h2>
      </div>
      <div className="slide-info">
        <Text style={{ fontSize: '1rem', color: theme.type === 'light' ? 'black' : 'white' }}>
          <Chiislate>{description}</Chiislate>
        </Text>
      </div>
    </Card>
  );
};

export default FeaturesBetaCard;
