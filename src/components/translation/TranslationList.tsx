import { Select, Text } from '@geist-ui/core';
import { setLocale } from './Chiislate';
import { useState, useEffect } from 'react';
const TranslationList = () => {
  // This array controls what languages shows up as available in the website.
  const data = [
    {
      lang: 'ar-SA',
      available: true,
      icon: '🇸🇦',
      langName: 'العربية'
    },
    {
      lang: 'cs-CZ',
      available: false,
      icon: '🇨🇿',
      langName: 'čeština'
    },
    {
      lang: 'da-DK',
      available: true,
      icon: '🇩🇰',
      langName: 'Dansk'
    },
    {
      lang: 'de-DE',
      available: true,
      icon: '🇩🇪',
      langName: 'Deutsch'
    },
    {
      lang: 'el-GR',
      available: true,
      icon: '🇬🇷',
      langName: 'Ελληνικά'
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
      langName: 'Español'
    },
    {
      lang: 'fr-FR',
      available: true,
      icon: '🇫🇷',
      langName: 'Français'
    },
    {
      lang: 'ga-IE',
      available: true,
      icon: '🇮🇪',
      langName: 'Gaeilge'
    },
    {
      lang: 'hi-IN',
      available: true,
      icon: '🇮🇳',
      langName: 'हिन्दी'
    },
    {
      lang: 'id-ID',
      available: true,
      icon: '🇮🇩',
      langName: 'Bahasa Indonesia'
    },
    {
      lang: 'it-IT',
      available: true,
      icon: '🇮🇹',
      langName: 'Italiano'
    },
    {
      lang: 'nl-NL',
      available: true,
      icon: '🇳🇱',
      langName: 'Nederlands'
    },
    {
      lang: 'pl',
      available: true,
      icon: '🇵🇱',
      langName: 'polski'
    },
    {
      lang: 'pt-BR',
      available: true,
      icon: '🇵🇹',
      langName: 'Português'
    },
    {
      lang: 'ru',
      available: true,
      icon: '🇷🇺',
      langName: 'Русский'
    },
    {
      lang: 'sr-SP',
      available: true,
      icon: '🇷🇸',
      langName: 'Српски'
    },
    {
      lang: 'sv-SE',
      available: true,
      icon: '🇸🇪',
      langName: 'Svenska'
    },
    {
      lang: 'tr-TR',
      available: true,
      icon: '🇹🇷',
      langName: 'Türkçe'
    },
    {
      lang: 'uz-UZ',
      available: false,
      icon: '🇺🇿',
      langName: 'اوزبیک'
    },
    {
      lang: 'zh-CN',
      available: true,
      icon: '🇨🇳',
      langName: '简体中文'
    },
    {
      lang: 'zh-TW',
      available: true,
      icon: '🇹🇼',
      langName: '繁體中文'
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
  const [defaultLang, setDfltLang] = useState('en-GB');
  useEffect(() => {
    let locale = window.localStorage.getItem('locale');
    if (locale) {
      setDfltLang(locale);
    }
  });
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
