import { Text, Image } from '@geist-ui/core';

const FeaturesCard = ({ cardImg, cardTitle, cardDescription, isInverted }) => {
  return (
    <article className="featuresGroup">
      <div className={isInverted ? 'inverse' : ''}>
        <Image style={{ marginBlock: '2rem' }} src={cardImg} alt={cardTitle} />
      </div>
      <div style={{}}>
        <Text h3>{cardTitle}</Text>
        <Text type="secondary">{cardDescription}</Text>
      </div>
      <style jsx>
        {`
          .featuresImg {
            margin-bottom: 2rem;
          }
          .featuresGroup {
            margin: 4rem;
          }
          @media (min-width: 650px) {
            .featuresGroup {
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
