import { Spacer, Card, Button, Text, Divider, useToasts } from '@geist-ui/core';
import { useEffect, useState } from 'react';
import NextLink from 'next/link';
import Media from '@/components/media';

const Features = () => {
  const { setToast, removeAll } = useToasts();
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    removeAll();
    const videoElement: HTMLVideoElement = document.getElementById('video') as HTMLVideoElement;
    setToast({ text: 'Video is loading...', delay: 60000, id: 'loading' });
    videoElement.addEventListener('canplay', () => {
      removeAll();
      console.log('Video Loaded');
    });
    window.addEventListener('scroll', () => {
      setScrollPosition(window.scrollY);
      if (videoElement.seeking) return;
      if (window.scrollY + 300 < window.innerHeight) {
        videoElement.currentTime = 0;
        return;
      }
      videoElement.currentTime = (window.scrollY - window.innerHeight + 300) / 80;
    });
  }, []);
  return (
    <>
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
        <div className="slide-background">
          <video
            preload=""
            id="video"
            muted
            disablePictureInPicture
            disableRemotePlayback
            style={{ width: '100%', height: '100%' }}
          >
            <source type="video/webm" src="https://cdn.avdanos.com/features.webm" height="100%" width="100%" />
          </video>
        </div>
        <div className="slide-page">
          <Card className="slide-card slide-card-left">
            This concept video is made by Avdan <Spacer />
            <NextLink href="https://youtu.be/tXFEiw1aJTw">
              <Button type="error">Watch on YouTube</Button>
            </NextLink>
          </Card>
          <Spacer h="700px" />
          <Card className="slide-card slide-card-left">
            <div className="slide-topic">
              <h2>Familiar dock, ultimate form</h2>
            </div>
            <div className="slide-info">
              <Text>Everyone know dock/task bar. We got a brand new dock, with more features than ever before. </Text>
            </div>
          </Card>
          <Spacer h="1000px" />
          <Card className="slide-card slide-card-left">
            <h2>Brand new launch menu</h2>
            <Text>With everything in one place, do anything anywhere at anytime.</Text>
          </Card>
          <Spacer h="600px" />
          <Card className="slide-card slide-card-right">
            <h2>Easily apply layout</h2>
            <Text>
              With a list of presets determined from you apps, easily get to work with the perfect window layout. Not
              enough? Change it in the settings.
            </Text>
          </Card>
          <Spacer h="500px" />
          <Card className="slide-card slide-card-left">
            <h2>Overpowerd Dock</h2>
            <Text>Your dock can do more than ever. It's your ultimate manager to get you organised.</Text>
          </Card>
          <Spacer h="800px" />
          <Card className="slide-card slide-card-right">
            <h2>New way to manage files</h2>
            <Text>This file manager keeps you organised and productive. Find your files the instant you need it.</Text>
          </Card>
          <Spacer h="1300px" />
          <Card className="slide-card slide-card-left">
            <h2>Drag & drop made easy</h2>
            <Text>
              Drag and drop is the easiest way to transfer anything on your computer. We make it intuitive and easy to
              use.
            </Text>
          </Card>
          <Spacer h="1300px" />
          <Card className="slide-card slide-card-left">
            <h2>More than multitask</h2>
            <Text>
              Want to do many tasks at a time? We know you and we got you. It's now not only multitasking, it's
              organised multitasking.
            </Text>
          </Card>
          <Spacer h="600px" />
          <Card className="slide-card slide-card-right">
            <h2>TabOS!</h2>
            <Text>
              Browsers have proven how powerful tabs are, so why not use them to make your OS even more powerful?
            </Text>
          </Card>
          <Spacer h="900px" />
          <Card className="slide-card slide-card-left">
            <h2>New context menu</h2>
            <Text>
              Context menu didn't change for multiple decades now. We are tired of a long list of items, and hey why not
              make it a circle? Don't like it? You can switch it back in settings!
            </Text>
          </Card>
          <Spacer h="900px" />
          <Card className="slide-card slide-card-right">
            <h2>Your OS, your preference</h2>
            <Text>
              We give you control over your system. Theme is just an important one of them, and you can get more if you
              don't like ours.
            </Text>
          </Card>
          <Spacer h="600px" />
          <Card className="slide-card slide-card-left">
            <h2>Day & Night</h2>
            <Text>
              Let different themes tell you what time it is. Hey, you can even make it reversed. Can you do it on Window
              and MacOS?
            </Text>
          </Card>
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
      </div>
      <style jsx global>{`
        .slide-background {
          position: sticky;
          padding-top: 45px;
          top: 0;
          z-index: 0;
        }
        .slide-page {
          margin-top: -80vh !important;
        }
        .slide-content {
          z-index: 1;
        }
        #__next {
          overflow-x: visible;
        }
        html {
          scrollbar-width: none;
        }
        .under-development {
          position: sticky;
          top: 0;
          height: 100px;
        }
        .slide-card {
          margin: 20px !important;
          padding: 10px !important;
          width: 40% !important;
        }
        .slide-card-left {
          float: left;
        }
        .slide-card-right {
          float: right;
        }
        .slide-topic {
          display: inline-flex;
        }
        .slide-info {
          display: flex;
        }
        .breath {
          animation: breath 4s ease-out infinite normal;
        }
        @keyframes breath {
          0% {
            transform: translateY(0) size(1);
          }

          25% {
            transform: translateY(-4px) size(1);
          }

          60% {
            transform: translateY(-6px) scale(1.02);
          }

          100% {
            transform: translateY(0) size(1);
          }
        }
      `}</style>
    </>
  );
};

export default Features;
