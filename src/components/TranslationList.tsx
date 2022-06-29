import { Select } from '@geist-ui/core';
import React from 'react';
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
  return (
    <Select
      type="default"
      initialValue="en-GB"
      width="24px"
      style={{ minWidth: '0' }}
      marginRight="20px"
      disableMatchWidth
      font={0}
    >
      {listItems}
    </Select>
  );
};

export default TranslationList;
