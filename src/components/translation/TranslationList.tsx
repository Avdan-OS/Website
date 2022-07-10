import { Select, Text } from '@geist-ui/core';
import { setLocale } from './TranslatableText';
import { useState, useEffect } from 'react';
const TranslationList = () => {
  // This array controls what languages shows up as available in the website.
  const data = [
    {
      lang: 'ar-SA',
      available: true,
      icon: '🇸🇦',
      langName: 'Arabic'
    },
    {
      lang: 'da-DK',
      available: true,
      icon: '🇩🇰',
      langName: 'Danish'
    },
    {
      lang: 'de-DE',
      available: true,
      icon: '🇩🇪',
      langName: 'German'
    },
    {
      lang: 'el-GR',
      available: true,
      icon: '🇬🇷',
      langName: 'Greek'
    },
    {
      lang: 'en-GB',
      available: true,
      icon: '🇬🇧',
      langName: 'English-UK'
    },
    {
      lang: 'en-US',
      available: true,
      icon: '🇺🇸',
      langName: 'English-US'
    },
    {
      lang: 'es-ES',
      available: true,
      icon: '🇪🇸',
      langName: 'Spanish'
    },
    {
      lang: 'fr-FR',
      available: true,
      icon: '🇫🇷',
      langName: 'French'
    },
    {
      lang: 'hi',
      available: true,
      icon: '🇮🇳',
      langName: 'Hindi'
    },
    {
      lang: 'id-ID',
      available: true,
      icon: '🇮🇩',
      langName: 'Indonesian'
    },
    {
      lang: 'it-IT',
      available: true,
      icon: '🇮🇹',
      langName: 'Italian'
    },
    {
      lang: 'nl-NL',
      available: false,
      icon: '🇳🇱',
      langName: 'Dutch'
    },
    {
      lang: 'pl',
      available: true,
      icon: '🇵🇱',
      langName: 'Polish'
    },
    {
      lang: 'ru',
      available: false,
      icon: '🇷🇺',
      langName: 'Russian'
    },
    {
      lang: 'sr-SP',
      available: true,
      icon: '🇷🇸',
      langName: 'Serbian'
    },
    {
      lang: 'sv-SE',
      available: true,
      icon: '🇸🇪',
      langName: 'Swedish'
    },
    {
      lang: 'zh-CN',
      available: true,
      icon: '🇨🇳',
      langName: 'Chinese-Simplified'
    },
    {
      lang: 'zh-TW',
      available: true,
      icon: '🇹🇼',
      langName: 'Chinese-Traditional'
    }
  ];
  const listItems = data.map((element) => {
    return (
      <Select.Option font="1.5" key={element.lang} value={element.lang} disabled={!element.available}>
        {element.icon}{' '}
        <Text style={{ display: 'inline', font: 'caption', fontSize: '0.6rem' }}>{element.langName}</Text>
      </Select.Option>
    );
  });
  const [defaultLang, setDfltLang] = useState('en-GB');
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      if (window.localStorage.getItem('locale')) {
        setDfltLang(window.localStorage.getItem('locale'));
        setLocale(window.localStorage.getItem('locale'));
      } else {
        if (data.filter((locale) => locale.lang === navigator.language && locale.available).length != 0) {
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
      width="19px"
      marginRight=" 20px"
      paddingLeft="8px"
      paddingRight="8px"
      style={{ minWidth: '0', minHeight: '0' }}
      disableMatchWidth
      font={0}
      onChange={setLocale}
    >
      {listItems}
    </Select>
  );
};

export default TranslationList;
