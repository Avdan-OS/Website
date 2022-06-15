import { Page, Spacer, Card, Button, Text, Divider } from '@geist-ui/core';
import { useEffect, useState } from 'react';
import NextLink from 'next/link';
import Media from '@/components/media';

const Features = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const videoElement: HTMLVideoElement = document.getElementById('video') as HTMLVideoElement;
    window.addEventListener('scroll', () => {
      setScrollPosition(window.scrollY);
      if (videoElement.seeking) return;
      if (window.scrollY < window.innerHeight) {
        videoElement.currentTime = 0;
        return;
      }
      videoElement.currentTime = (window.scrollY - window.innerHeight) / 80;
    });
  }, []);
  return (
    <>
      <div className="text-center" style={{ height: 'calc(100vh - 146px)' }}>
        <div style={{ height: `calc(40vh - ${100 - scrollPosition / 4}px)` }}></div>
        <Text className="header" h1>
          Avdan's concept, we're making it real
        </Text>
        <div style={{ height: `${40 - scrollPosition / 25}px` }}></div>
        <Text>Scroll down to see what we got here</Text>
      </div>
      <Divider />
      <div>
        <div className="slide-background">
          <video preload="auto" id="video" muted loop style={{ width: '100%', height: '100%' }}>
            <source type="video/webm" src="https://cdn.avdanos.com/features.webm" height="100%" width="100%" />
          </video>
        </div>
        <div className="slide-page">
          <Page>
            <Card className="slide-card slide-card-left">
              This concept video is made by Avdan <Spacer />
              <NextLink href="https://youtu.be/tXFEiw1aJTw">
                <Button type="error">Watch on YouTube</Button>
              </NextLink>
            </Card>
          </Page>
          <Page marginTop="400px">
            <Card className="slide-card slide-card-left">
              <div className="slide-topic">
                <h2>Familiar dock, ultimate form</h2>
              </div>
              <div className="slide-info">
                <Text>Everyone know dock/task bar. We got a brand new dock, with more features than ever before</Text>
              </div>
            </Card>
          </Page>
          <Page marginTop="500px">
            <Card className="slide-card slide-card-right">
              <h2>Brand new launch menu</h2>
              With everything that you need in one place, launch anything anywhere at anytime.
            </Card>
          </Page>
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
          top: 50px;
          z-index: 0;
          height: 100vh;
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
        .under-development {
          position: sticky;
          top: 0;
          height: 100px;
        }
        .slide-card {
          float: left;
          padding: 20px !important;
          width: 40% !important;
        }
        .slide-topic {
          display: inline-flex;
        }
        .slide-info {
          display: flex;
        }
      `}</style>
    </>
  );
};

export default Features;
