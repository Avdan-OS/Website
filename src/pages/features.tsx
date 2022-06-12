import FeaturesCard from '@/components/FeaturesCard';
import NextLink from 'next/link';
import { Button } from '@geist-ui/core';
const features = () => {
  return (
    <main>
      <FeaturesCard
        cardImg="/assets/marketing/header.png"
        cardTitle="Lorem ipsum dolor sit"
        cardDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic adipisci asperiores temporibus, optio illo saepe iusto, repellendus, rem beatae distinctio quidem. Praesentium voluptas alias, cumque tempora repellendus excepturi sint cupiditate!"
      />
      <FeaturesCard
        cardImg="/assets/marketing/header.png"
        cardTitle="Lorem ipsum dolor sit"
        cardDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic adipisci asperiores temporibus, optio illo saepe iusto, repellendus, rem beatae distinctio quidem. Praesentium voluptas alias, cumque tempora repellendus excepturi sint cupiditate!"
      />
      <FeaturesCard
        cardImg="/assets/marketing/header.png"
        cardTitle="Lorem ipsum dolor sit"
        cardDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic adipisci asperiores temporibus, optio illo saepe iusto, repellendus, rem beatae distinctio quidem. Praesentium voluptas alias, cumque tempora repellendus excepturi sint cupiditate!"
      />{' '}
      <FeaturesCard
        cardImg="/assets/marketing/header.png"
        cardTitle="Lorem ipsum dolor sit"
        cardDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic adipisci asperiores temporibus, optio illo saepe iusto, repellendus, rem beatae distinctio quidem. Praesentium voluptas alias, cumque tempora repellendus excepturi sint cupiditate!"
      />{' '}
      <FeaturesCard
        cardImg="/assets/marketing/header.png"
        cardTitle="Lorem ipsum dolor sit"
        cardDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic adipisci asperiores temporibus, optio illo saepe iusto, repellendus, rem beatae distinctio quidem. Praesentium voluptas alias, cumque tempora repellendus excepturi sint cupiditate!"
      />{' '}
      <FeaturesCard
        cardImg="/assets/marketing/header.png"
        cardTitle="Lorem ipsum dolor sit"
        cardDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic adipisci asperiores temporibus, optio illo saepe iusto, repellendus, rem beatae distinctio quidem. Praesentium voluptas alias, cumque tempora repellendus excepturi sint cupiditate!"
      />{' '}
      <FeaturesCard
        cardImg="/assets/marketing/header.png"
        cardTitle="Lorem ipsum dolor sit"
        cardDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic adipisci asperiores temporibus, optio illo saepe iusto, repellendus, rem beatae distinctio quidem. Praesentium voluptas alias, cumque tempora repellendus excepturi sint cupiditate!"
      />{' '}
      <FeaturesCard
        cardImg="/assets/marketing/header.png"
        cardTitle="Lorem ipsum dolor sit"
        cardDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic adipisci asperiores temporibus, optio illo saepe iusto, repellendus, rem beatae distinctio quidem. Praesentium voluptas alias, cumque tempora repellendus excepturi sint cupiditate!"
      />
      <span style={{ display: 'flex', justifyContent: 'center' }}>
        <NextLink href="/download">
          <Button shadow type="success" marginBottom="15px">
            What are you waiting for? Download now!
          </Button>
        </NextLink>
      </span>
      <style jsx>
        {`
          :nth-child(2) {
            flex-direction: row-reverse;
          }
        `}
      </style>
    </main>
  );
};

export default features;
// invent CSS4
