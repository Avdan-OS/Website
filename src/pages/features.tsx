import FeaturesCard from '@/components/FeaturesCard';
import BetaPopup from '@/components/BetaPopup';
import NextLink from 'next/link';
import { Button, Spacer } from '@geist-ui/core';

const features = () => {
  return (
    <>
      <FeaturesCard
        cardTitle="A New Way to Manage Your Files"
        cardDescription="With the improved File Manager, you can easily navigate your files with tabs, pinned folders, and tags, all in a beautiful UI with modern but recognizable icons inspired by Avdan's designs."
        cardVideo="/assets/clips/files.mp4"
        isInverted={false}
      />
      <FeaturesCard
        cardTitle="Next Level Drag and Drop Experience "
        cardDescription="With the new improved Drag And Drop feature in AvdanOS it will make using AvdanOS easier with managing open windows and running tasks."
        cardVideo="/assets/clips/drag-drop.mp4"
        isInverted={true}
      />
      <FeaturesCard
        cardTitle="Personalize the Way You Want"
        cardDescription="Avdan OS is an open-source operating system based on Arch Linux. For developers, this means easy and limitless customizability for everything. For regular users, Avdan OS is built in with different presets and allows for free customization using Settings."
        cardVideo="/assets/clips/multitask.mp4"
        isInverted={false}
      />
      <FeaturesCard
        cardTitle="Brand new context menu"
        cardDescription="With the brand new context menu in AvdanOS you can choose from multiple commands such as searching a selected word,copy a selected word,paste a selected or even cut a selected word"
        cardVideo="/assets/clips/context.mp4"
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
      <BetaPopup Link="/features-beta" />
      <Spacer h={3} />
    </>
  );
};

export default features;
