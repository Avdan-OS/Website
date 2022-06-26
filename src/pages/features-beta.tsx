import { Spacer, Card, Button, Text, Divider, useToasts, useTheme } from '@geist-ui/core';
import { useEffect, useState } from 'react';
import NextLink from 'next/link';
import Media from '@/components/media';
import FeaturesBetaCard from '@/components/FeaturesBetaCard';
import WidthRequirement from '@/components/WidthRequirement';

const Features = () => {
  const theme = useTheme();
  const { setToast, removeAll } = useToasts();
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    removeAll();
    const videoElement: HTMLVideoElement = document.getElementById('video') as HTMLVideoElement;
    setToast({ text: 'Video is loading...', delay: 60000, id: 'loading' });
    videoElement.addEventListener('canplay', () => {
      removeAll();
    });
    window.addEventListener('scroll', () => {
      setScrollPosition(window.scrollY);
      if (window.scrollY + 300 < window.innerHeight) {
        videoElement.currentTime = 0;
        return;
      }
      videoElement.currentTime = (window.scrollY - window.innerHeight + 300) / 80;
    });
  }, []);

  return (
    <>
      <WidthRequirement width={575} redirect="/features" />
      <div className="text-center" style={{ height: 'calc(100vh - 146px)' }}>
        <div style={{ height: `calc(40vh - ${100 - scrollPosition / 5}px)` }}></div>
        <Text className="header" h1>
          Avdan's concept, we're making it real
        </Text>
        <div style={{ height: `${50 - scrollPosition / 25}px` }}></div>
        <div className="breath">
          <Text>Scroll down to see what we got here</Text>
        </div>
      </div>
      <Divider />
      <div>
        <div className="slide-background text-white">
          <video
            preload="auto"
            id="video"
            muted
            disablePictureInPicture
            disableRemotePlayback
            style={{ width: '100%', height: '100%' }}
          >
            {/* 
              The video source should have 100% i-frame and no p/b-frame and consistent frame rate, or the video will lag
              20fps 720p vp9 webm is recommended when serving the video over cdn
            */}
            <source type="video/webm" src="/assets/clips/features.webm" height="100%" width="100%" />
          </video>
        </div>
        <div className="slide">
          <Card className="slide__card text-white slide__card-left">
            This concept video is made by Avdan <Spacer />
            <NextLink href="https://youtu.be/tXFEiw1aJTw">
              <Button type="error">Watch on YouTube</Button>
            </NextLink>
          </Card>

          <Spacer h="700px" />
          <FeaturesBetaCard
            isCardOnRight={false}
            title="Familiar dock, ultimate form"
            description="Everyone know dock/task bar. We got a brand new dock, with more features than ever before. "
          />
          <Spacer h="1000px" />
          <FeaturesBetaCard
            isCardOnRight={true}
            title="Brand new launch menu"
            description="With everything in one place, do anything anywhere at anytime."
          />
          <Spacer h="600px" />
          <FeaturesBetaCard
            isCardOnRight={false}
            title="Easily apply layout"
            description="With a list of presets determined from you apps, easily get to work with the perfect window layout. Not enough? Change it in the settings."
          />
          <Spacer h="500px" />
          <FeaturesBetaCard
            isCardOnRight={true}
            title="Overpowered Dock"
            description="Your dock can do more than ever. It's your ultimate manager to get you organized."
          />
          <Spacer h="800px" />
          <FeaturesBetaCard
            isCardOnRight={false}
            title="New way to manage files"
            description="This file manager keeps you organized and productive. Find your files the instant you need it."
          />
          <Spacer h="1300px" />
          <FeaturesBetaCard
            isCardOnRight={true}
            title="Drag & drop made easy"
            description="Drag and drop is the easiest way to transfer anything on your computer. We make it intuitive and easy to use."
          />
          <Spacer h="1300px" />
          <FeaturesBetaCard
            isCardOnRight={false}
            title="More than multitask"
            description="Want to do many tasks at a time? We know you and we got you. It's now not only multitasking, it's organized multitasking."
          />
          <Spacer h="600px" />
          <FeaturesBetaCard
            isCardOnRight={true}
            title="TabOS!"
            description="Browsers have proven how powerful tabs are, so why not use them to make your OS even more powerful?"
          />
          <Spacer h="900px" />
          <FeaturesBetaCard
            isCardOnRight={false}
            title="New context menu"
            description="Context menu didn't change for multiple decades now. We are tired of a long list of items, and hey why not make it a circle? Don't like it? You can switch it back in settings!"
          />
          <Spacer h="900px" />
          <FeaturesBetaCard
            isCardOnRight={true}
            title="Your OS, your preference"
            description="We give you control over your system. Theme is just an important one of them, and you can get more if you don't like ours."
          />
          <Spacer h="600px" />
          <FeaturesBetaCard
            isCardOnRight={false}
            title="Day & Night"
            description="Let different themes tell you what time it is. Hey, you can even make it reversed. Can you do it on Windows or MacOS?"
          />
          <Spacer h="600px" />
        </div>
      </div>
      <div className="text-center" style={{ height: '80vh' }}>
        <Spacer h="calc(40vh - 150px)" />
        <Text className="header" h1>
          Under development
        </Text>
        <Spacer h="35px" />
        <Text>We are working really hard to make it real. Join us and help!</Text>
        <Spacer h="20px" />
        <Media />
        <style jsx global>
          {`
            #__next {
              overflow-x: visible;
            }
            html {
              scrollbar-width: none;
            }
            .slide__card {
              margin: 20px !important;
              padding: 10px !important;
              width: 40% !important;
              background-color: ${theme.palette.background + theme.palette.background.replace('#', '')}60 !important;
              backdrop-filter: blur(2em);
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Features;
