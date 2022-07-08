import { useEffect } from 'react';

const redditRedirect = () => {
  useEffect(() => {
    window.location.replace('https://www.reddit.com/r/AvdanOS/');
  });

  return <></>;
};

export default redditRedirect;
