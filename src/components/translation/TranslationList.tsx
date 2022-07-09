import { Select } from '@geist-ui/core';
import { setLocale } from './TranslatableText';
import { useState, useEffect } from 'react';
import Image from 'next/image'

const TranslationList = () => {
  // This array controls what languages shows up as available in the website.
  const data = [
    {
      lang: 'da-DK',
      available: true,
      icon: '/flags/dk.svg'
    },
    {
      lang: 'de-DE',
      available: true,
      icon: '/flags/de.svg'
    },
    {
      lang: 'el-GR',
      available: true,
      icon: '/flags/gr.svg'
    },
    {
      lang: 'en-GB',
      available: true,
      icon: '/flags/gb.svg'
    },
    {
      lang: 'en-US',
      available: true,
      icon: '/flags/us.svg'
    },
    {
      lang: 'es-ES',
      available: true,
      icon: '/flags/es.svg'
    },
    {
      lang: 'fr-FR',
      available: true,
      icon: '/flags/fr.svg'
    },
    {
      lang: 'hin-IND',
      available: true,
      icon: '/flags/ind.svg'
    },
    {
      lang: 'id-ID',
      available: true,
      icon: '/flags/id.svg'
    },
    {
      lang: 'it-IT',
      available: true,
      icon: '/flags/it.svg'
    },
    {
      lang: 'nl-NL',
      available: false,
      icon: '/flags/nl.svg'
    },
    {
      lang: 'pl',
      available: true,
      icon: '/flags/pl.svg'
    },
    {
      lang: 'ru',
      available: false,
      icon: '/flags/ru.svg'
    },
    {
      lang: 'sr-SP',
      available: true,
      icon: '/flags/sr.svg'
    },
    {
      lang: 'zh-CN',
      available: true,
      icon: '/flags/cn.svg'
    },
    {
      lang: 'zh-TW',
      available: true,
      icon: '/flags/tw.svg'
    },
    {
      lang: 'ar-SA',
      available: true,
      icon: '/flags/sa.svg'
    }
  ];
  const listItems = data.map((element) => {
    return (
      <Select.Option font="1.5" key={element.lang} value={element.lang} disabled={!element.available}>
        <Image src={element.icon} height="30" width="30" />
      </Select.Option>
    );
  });
  const [defaultLang, setDfltLang] = useState('en-GB');
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      if (window.localStorage.getItem('locale')) {
        setDfltLang(window.localStorage.getItem('locale'));
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
      width="24px"
      style={{ minWidth: '0', padding: '10' }}
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
