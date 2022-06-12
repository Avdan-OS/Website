import FeaturesCard from '@/components/FeaturesCard';
import NextLink from 'next/link';
import { Button, Spacer } from '@geist-ui/core';

const features = () => {
  return (
    <>
      <FeaturesCard
        cardTitle="A new way to manage your files"
        cardDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ad fugiat nostrum autem, est veritatis adipisci eum provident quia minus minima tenetur pariatur. Quidem laudantium iure magnam quam mollitia quos."
        cardImg="/features/files.jpg"
        isInverted={false}
      />
      <FeaturesCard
        cardTitle="Next level drag and drop experience "
        cardDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ad fugiat nostrum autem, est veritatis adipisci eum provident quia minus minima tenetur pariatur. Quidem laudantium iure magnam quam mollitia quos."
        cardImg="/features/drag-and-drop.jpg"
        isInverted={true}
      />
      <FeaturesCard
        cardTitle="Personalize the way you want"
        cardDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ad fugiat nostrum autem, est veritatis adipisci eum provident quia minus minima tenetur pariatur. Quidem laudantium iure magnam quam mollitia quos."
        cardImg="/features/personalize.jpg"
        isInverted={false}
      />
      <FeaturesCard
        cardTitle="Limitless possibilities for multitasking"
        cardDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ad fugiat nostrum autem, est veritatis adipisci eum provident quia minus minima tenetur pariatur. Quidem laudantium iure magnam quam mollitia quos."
        cardImg="/features/multitasking.jpg"
        isInverted={true}
      />

      <span style={{ display: 'flex', justifyContent: 'center', verticalAlign: 'middle' }}>
        <p>What Are You waiting for?</p>
        <NextLink href="/downloads">
          <Button shadow type="success" margin="10px">
            Download now!
          </Button>
        </NextLink>
      </span>
      <Spacer h={3} />
    </>
  );
};

export default features;
