import FeaturesCard from '@/components/FeaturesCard';
import BetaPopup from '@/components/BetaPopup';
import { Spacer, Text } from '@geist-ui/core';
import Media from '@/components/media';
import dynamicWidth from '@/lib/dynamic-width';

const features = () => {
  dynamicWidth((width) => {
    if (width > 575) {
      location.replace('/features-beta');
    }
  });
  return (
    <>
      <FeaturesCard
        isInverted={false}
        cardTitle="Familiar dock, ultimate form"
        cardDescription="Everyone know dock/task bar. We got a brand new dock, with more features than ever before. "
        cardVideo="/assets/clips/dock.mp4"
      />
      <FeaturesCard
        isInverted={true}
        cardTitle="Brand new launch menu"
        cardDescription="With everything in one place, do anything anywhere at anytime."
        cardVideo="/assets/clips/launch-menu.mp4"
      />
      <FeaturesCard
        isInverted={false}
        cardTitle="Easily apply layout"
        cardDescription="With a list of presets determined from you apps, easily get to work with the perfect window layout. Not enough? Change it in the settings."
        cardVideo="/assets/clips/layout.mp4"
      />
      <FeaturesCard
        isInverted={true}
        cardTitle="Overpowered Dock"
        cardDescription="Your dock can do more than ever. It's your ultimate manager to get you organized."
        cardVideo="/assets/clips/overpowered-dock.mp4"
      />
      <FeaturesCard
        isInverted={false}
        cardTitle="New way to manage files"
        cardDescription="This file manager keeps you organized and productive. Find your files the instant you need it."
        cardVideo="/assets/clips/new-files.mp4"
      />
      <FeaturesCard
        isInverted={true}
        cardTitle="Drag & drop made easy"
        cardDescription="Drag and drop is the easiest way to transfer anything on your computer. We make it intuitive and easy to use."
        cardVideo="/assets/clips/drag-and-drop.mp4"
      />
      <FeaturesCard
        isInverted={false}
        cardTitle="More than multitask"
        cardDescription="Want to do many tasks at a time? We know you and we got you. It's now not only multitasking, it's organized multitasking."
        cardVideo="/assets/clips/multitask.mp4"
      />
      <FeaturesCard
        isInverted={true}
        cardTitle="TabOS!"
        cardDescription="Browsers have proven how powerful tabs are, so why not use them to make your OS even more powerful?"
        cardVideo="/assets/clips/tab-os.mp4"
      />
      <FeaturesCard
        isInverted={false}
        cardTitle="New context menu"
        cardDescription="Context menu didn't change for multiple decades now. We are tired of a long list of items, and hey why not make it a circle? Don't like it? You can switch it back in settings!"
        cardVideo="/assets/clips/context-menu.mp4"
      />
      <FeaturesCard
        isInverted={true}
        cardTitle="Your OS, your preference"
        cardDescription="We give you control over your system. Theme is just an important one of them, and you can get more if you don't like ours."
        cardVideo="/assets/clips/personalize.mp4"
      />
      <FeaturesCard
        isInverted={false}
        cardTitle="Day & Night"
        cardDescription="Let different themes tell you what time it is. Hey, you can even make it reversed. Can you do it on Windows or MacOS?"
        cardVideo="/assets/clips/day-and-night.mp4"
      />

      <div className="text-center" style={{ height: '80vh' }}>
        <Spacer h="calc(40vh - 150px)" />
        <Text className="header" h1>
          Under development
        </Text>
        <Spacer h="35px" />
        <Text>We are working really hard to make it real. Join us and help!</Text>
        <Spacer h="20px" />
        <Media />
      </div>
      <BetaPopup Link="/features-beta" />
      <Spacer h={3} />
    </>
  );
};

export default features;
