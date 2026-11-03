/**
 * @file An easy to use react library for dynamically updating web view
 * @author AvdanOS
 * @license GPL-3.0
 */

import { useEffect, useRef } from 'react';

/**
 * An easy to use hook for dynamically changing DOM based on window size, fires on page load and resize
 * @param {hookCallback} callback - Callback function for hook
 */
const hook = (callback: (width: number) => void) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const handleResize = () => {
      savedCallback.current(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
};

/**
 * @callback hookCallback
 * @param {number} width - Width of the current screen, in pixels
 */

export default hook;
