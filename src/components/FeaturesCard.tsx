import { Text, useTheme } from '@geist-ui/core';
import { Chiislate } from './translation/Chiislate';

interface FeaturesCardProps {
  cardVideo: string;
  cardTitle: string;
  cardDescription: string;
  isInverted: boolean;
}

const FeaturesCard = ({ cardVideo, cardTitle, cardDescription, isInverted }: FeaturesCardProps) => {
  const theme = useTheme();

  return (
    <article className="features-group" id={cardTitle.toLowerCase().replace(/\s+/g, '-')}>
      <div className={`video-container ${isInverted ? 'inverse' : ''}`}>
        <video autoPlay loop muted playsInline preload="metadata" className="feature-video">
          <source type="video/mp4" src={cardVideo} />
        </video>
      </div>
      <div className="content-container">
        <Text h3 style={{ letterSpacing: '-0.02em', marginBottom: '8px', fontSize: '1.5rem', fontWeight: 500 }}>
          <Chiislate>{cardTitle}</Chiislate>
        </Text>
        <Text type="secondary" style={{ fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
          <Chiislate>{cardDescription}</Chiislate>
        </Text>
      </div>
      <style jsx>{`
        .features-group {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          align-items: center;
          max-width: 1040px;
          margin: 64px auto;
          padding: 0 24px;
        }
        .video-container {
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          background: ${theme.type === 'dark' ? '#19191b' : '#f4f4f5'};
          border: 1px solid ${theme.type === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'};
          line-height: 0;
        }
        .feature-video {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }
        .content-container {
          padding: 8px 0;
        }
        @media (min-width: 768px) {
          .features-group {
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            margin: 96px auto;
          }
          .inverse {
            order: 2;
          }
        }
      `}</style>
    </article>
  );
};

export default FeaturesCard;
