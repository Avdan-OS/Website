import { Select } from '@geist-ui/core';
import React from 'react';
import { setLocale } from './TranslatableText';

const TranslationList = () => {
  // This array controls what languages shows up as available in the website.
  const data = [
    {
      lang: 'de-DE',
      available: false,
      icon: '🇩🇪'
    },
    {
      lang: 'el-GR',
      available: false,
      icon: '🇬🇷'
    },
    {
      lang: 'en-GB',
      available: true,
      icon: '🇬🇧'
    },
    {
      lang: 'en-US',
      available: true,
      icon: '🇺🇸'
    },
    {
      lang: 'es-ES',
      available: true,
      icon: '🇪🇸'
    },
    {
      lang: 'fr-FR',
      available: true,
      icon: '🇫🇷'
    },
    {
      lang: 'hi',
      available: false,
      icon: '🇮🇳'
    },
    {
      lang: 'id-ID',
      available: true,
      icon: '🇮🇩'
    },
    {
      lang: 'it-IT',
      available: false,
      icon: '🇮🇹'
    },
    {
      lang: 'nl-NL',
      available: false,
      icon: '🇳🇱'
    },
    {
      lang: 'pl',
      available: false,
      icon: '🇵🇱'
    },
    {
      lang: 'ru',
      available: false,
      icon: '🇷🇺'
    },
    {
      lang: 'sr-SP',
      available: false,
      icon: '🇷🇸'
    },
    {
      lang: 'zh-CN',
      available: true,
      icon: '🇨🇳'
    },
    {
      lang: 'zh-TW',
      available: true,
      icon: '🇹🇼'
    }
  ];
  const listItems = data.map((element) => {
    return (
      <Select.Option font="1.5" key={element.lang} value={element.lang} disabled={!element.available}>
        {element.icon}
      </Select.Option>
    );
  });
  const [defaultLang, setDfltLang] = React.useState('en-GB');
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      if (window.localStorage.getItem('locale')) {
        setDfltLang(window.localStorage.getItem('locale'));
      } else {
        if (data.filter((locale) => locale.lang === navigator.language).length != 0) {
          setLocale(navigator.language);
          setDfltLang(navigator.language);
        } else {
          setLocale('en-GB');
          setDfltLang('en-GB');
        }
      }
    }
  }, []);
  return (
    <Select
      type="default"
      value={defaultLang}
      width="24px"
      style={{ minWidth: '0' }}
      marginRight="20px"
      disableMatchWidth
      font={0}
      onChange={setLocale}
    >
      {listItems}
    </Select>
  );
};

export default TranslationList;
