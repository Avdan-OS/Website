import { Select, Text } from '@geist-ui/core';
import { setLocale } from './TranslatableText';
import { useState, useEffect } from 'react';
const TranslationList = () => {
  // This array controls what languages shows up as available in the website.
  const data = [
    {
      lang: 'ar_SA',
      available: true,
      icon: '🇸🇦',
      langName: 'Arabic'
    },
    {
      lang: 'da_DK',
      available: true,
      icon: '🇩🇰',
      langName: 'Danish'
    },
    {
      lang: 'de_DE',
      available: true,
      icon: '🇩🇪',
      langName: 'German'
    },
    {
      lang: 'el_GR',
      available: true,
      icon: '🇬🇷',
      langName: 'Greek'
    },
    {
      lang: 'en_GB',
      available: true,
      icon: '🇬🇧',
      langName: 'English-UK'
    },
    {
      lang: 'en_US',
      available: true,
      icon: '🇺🇸',
      langName: 'English-US'
    },
    {
      lang: 'es_ES',
      available: true,
      icon: '🇪🇸',
      langName: 'Spanish'
    },
    {
      lang: 'fr_FR',
      available: true,
      icon: '🇫🇷',
      langName: 'French'
    },
    {
      lang: 'ga_IE',
      available: true,
      icon: '🇮🇪',
      langName: 'Irish'
    },
    {
      lang: 'hi_IN',
      available: true,
      icon: '🇮🇳',
      langName: 'Hindi'
    },
    {
      lang: 'id_ID',
      available: true,
      icon: '🇮🇩',
      langName: 'Indonesian'
    },
    {
      lang: 'it_IT',
      available: true,
      icon: '🇮🇹',
      langName: 'Italian'
    },
    {
      lang: 'nl_NL',
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
      available: true,
      icon: '🇷🇺',
      langName: 'Russian'
    },
    {
      lang: 'sr_SP',
      available: true,
      icon: '🇷🇸',
      langName: 'Serbian'
    },
    {
      lang: 'sv_SE',
      available: true,
      icon: '🇸🇪',
      langName: 'Swedish'
    },
    {
      lang: 'uz_UZ',
      available: false,
      icon: '🇺🇿',
      langName: 'Uzbek'
    },
    {
      lang: 'zh_CN',
      available: true,
      icon: '🇨🇳',
      langName: 'Chinese-Simplified'
    },
    {
      lang: 'zh_TW',
      available: true,
      icon: '🇹🇼',
      langName: 'Chinese-Traditional'
    }
  ];
  const listItems = data.map((element) => {
    return (
      <Select.Option
        font="1.5"
        key={element.lang}
        value={element.lang}
        disabled={!element.available}
        style={{ opacity: element.available ? 1 : 0.5 }}
      >
        {element.icon}{' '}
        <Text
          style={{
            display: 'inline',
            font: 'caption',
            fontSize: '0.6rem',
            top: '-3px',
            position: 'relative'
          }}
        >
          {element.langName}
        </Text>
      </Select.Option>
    );
  });
  const [defaultLang, setDfltLang] = useState('en_GB');
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      if (window.localStorage.getItem('locale')) {
        if (
          data.filter((locale) => locale.available && locale.lang === window.localStorage.getItem('locale')).length != 0
        ) {
          setLocale(window.localStorage.getItem('locale'));
          setDfltLang(window.localStorage.getItem('locale'));
        } else {
          setLocale('en_GB');
          setDfltLang('en_GB');
        }
        setDfltLang(window.localStorage.getItem('locale'));
        setLocale(window.localStorage.getItem('locale'));
      } else {
        if (data.filter((locale) => locale.lang === navigator.language && locale.available).length != 0) {
          setLocale(navigator.language);
          setDfltLang(navigator.language);
        } else {
          setLocale('en_GB');
          setDfltLang('en_GB');
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
      dropdownStyle={{ scrollbarWidth: 'none' }}
    >
      {listItems}
    </Select>
  );
};

export default TranslationList;
