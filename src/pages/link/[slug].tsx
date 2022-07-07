import { useEffect } from 'react';

const socialMediaRedirect = () => {
  useEffect(() => {
    const url = window.location.href;
    if (url.includes('discord')) {
      window.location.href = 'https://discord.gg/avdanos';
    } else if (url.includes('twitter')) {
      window.location.href = 'https://twitter.com/avdan_os';
    } else if (url.includes('instagram')) {
      window.location.href = 'https://www.instagram.com/avdanos_';
    } else if (url.includes('youtube')) {
      window.location.href = 'https://www.youtube.com/channel/UCHLCBj83J7bR82HwjhCJusA';
    } else if (url.includes('reddit')) {
      window.location.href = 'https://www.reddit.com/r/AvdanOS/';
    } else if (url.includes('github')) {
      window.location.href = 'https://github.com/Avdan-OS/';
    }
  }, []);
  return <></>;
};

export default socialMediaRedirect;
