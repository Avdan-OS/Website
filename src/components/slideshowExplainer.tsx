import { Text, Spacer } from '@geist-ui/core';
import dynamicWidth from '@/lib/dynamic-width';
import { useState, useEffect, useRef } from 'react';
import { TranslatableText } from '@/components/translation/TranslatableText';
import preview1 from './slideshowAssets/preview1.jpg';
import preview2 from './slideshowAssets/preview2.jpg';
import preview3 from './slideshowAssets/preview3.jpg';
import preview4 from './slideshowAssets/preview4.jpg';
import preview5 from './slideshowAssets/preview5.jpg';

// Creates slideshow of images and text
const SlideshowExplainer = () => {
  const [isScreenTooSmall, setIsScreenTooSmall] = useState(false);
  const [Width, setWidth] = useState(1920);

  // Determines if device is mobile (950 and 1120 or less) or a PC
  dynamicWidth((width) => {
    setIsScreenTooSmall(width <= 1120 ? true : false);
    setWidth(width);
  });

  // Texts to talk about images
  const [titles, setTitles] = useState([
    'Brand new launch menu',
    'Easily apply layout',
    'New way to manage files',
    'TabOS!',
    'Your OS, your preference'
  ]);

  const [paragraphs, setParagraphs] = useState([
    'With everything in one place, do anything anywhere at anytime.',
    'With a list of presets determined from your apps, easily get to work with the perfect window layout. Not enough? Change it in the settings.',
    'this file manager keeps you organised and productive. Find your files the instant you need it.',
    'Browsers have proven how powerful tabs are, so why not use them to make your OS even more powerful?',
    "We give you control over your system. Theme is just an important one of them, and you can get more if you don't like ours."
  ]);

  // Images array
  const previews = [preview1.src, preview2.src, preview3.src, preview4.src, preview5.src];

  // Variables and functinons for slideshow

  // Index for image looping
  const [index, setIndex] = useState(0);

  // Timing functions and variables
  const timeoutReference = useRef(null);

  function resetTimeout() {
    if (timeoutReference.current) clearTimeout(timeoutReference.current);
  }

  useEffect(() => {
    resetTimeout();

    timeoutReference.current = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex === previews.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // change index after every 5 seconds

    return () => {}; // Demount to reduce memory on web page closed;
  }, [index]);

  // Returns its content
  return (
    <>
      <div className="container" style={{ display: 'flex', flexDirection: `${isScreenTooSmall ? 'column' : 'row'}` }}>
        <div style={{ width: `${isScreenTooSmall ? 'auto' : '500px'}`, paddingRight: '15px' }}>
          <Spacer h="15px" />
          <div className="breathe_5s">
            <Text h2 className="greenbg text-center" style={{ height: '87px' }}>
              <TranslatableText key={index}>{titles[index]}</TranslatableText>
            </Text>
            {isScreenTooSmall ? '' : <Spacer h="15px" />}
            <Text p className="greenbg text-center" style={{ height: '104px' }}>
              <TranslatableText key={index}>{paragraphs[index]}</TranslatableText>
            </Text>
          </div>
        </div>

        <div className="slideshow_alt">
          <div className="slideshow_slider_alt" style={{ transform: `translateX(${-index * 100}% )` }}>
            {previews.map((bgSrc, i) => (
              <div
                key={i}
                style={{ backgroundImage: 'url(' + bgSrc + ')', height: Width < 600 ? (Width / 16) * 9 : '350px' }}
                className="slide_alt"
              >
                <span style={{ opacity: 0 }}>.</span>
              </div>
            ))}
          </div>

          <div className="slideshow_dots">
            {previews.map((_, idx) => (
              <div
                key={idx}
                className={`slideshow_dot${index === idx ? ' active' : ''}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideshowExplainer;

/*
  Note:
  This component is explicitly purposed for 1 time use.
  If you want to re-use it, it must be reprogrammed.
                                                        */
