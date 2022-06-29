import { Select } from '@geist-ui/core';
import React from 'react';
import { setLocale } from '../locale/TranslatableText';

const TranslationList = () => {
  const data = [
    {
      lang: 'de-DE',
      icon: '🇩🇪'
    },
    {
      lang: 'en-GB',
      icon: '🇬🇧'
    },
    {
      lang: 'en-US',
      icon: '🇺🇸'
    },
    {
      lang: 'hi',
      icon: '🇮🇳'
    },
    {
      lang: 'ru',
      icon: '🇷🇺'
    },
    {
      lang: 'zh-CN',
      icon: '🇨🇳'
    },
    {
      lang: 'zn-TW',
      icon: '🇹🇼'
    }
  ];
  const listItems = data.map((element) => {
    return (
      <Select.Option font="1.5" value={element.lang}>
        {element.icon}
      </Select.Option>
    );
  });
  const [defaultLang, setDfltLang] = React.useState('en-GB');
  React.useEffect(() => {
    setDfltLang(navigator.language);
  }, []);
  return (
    <Select
      type="default"
      initialValue={defaultLang}
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
