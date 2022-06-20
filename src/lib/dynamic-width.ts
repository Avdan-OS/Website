/**
 * @file An easy to use react library for dynamically updating web view
 * @author AvdanOS
 * @license GPL-3.0
 */

import { useEffect } from 'react';

/**
 * An easy hook for dynamically changing DOM based on window size, fires on page load and resize
 * @param {hookCallback} callback - Callback function for hook
 */
const hook = (callback: (width: number) => void) => {
  useEffect(() => {
    window.addEventListener('resize', () => {
      callback(window.innerWidth);
    });
    callback(window.innerWidth);
  }, []);
};

/**
 * @callback hookCallback
 * @param {number} width - Width of the current screen, in pixels
 */

export default hook;
