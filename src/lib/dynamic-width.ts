/**
 * @file Dynamic window dimension subscriber hook
 * @author AvdanOS
 * @license GPL-3.0
 */

import { useEffect } from 'react';

/**
 * Hook for subscribing to window resize events with safe teardown
 * @param callback Callback invoked with current innerWidth
 */
const hook = (callback: (width: number) => void) => {
  useEffect(() => {
    const handleResize = () => {
      callback(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [callback]);
};

export default hook;