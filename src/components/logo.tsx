import { Image } from '@geist-ui/core';
import { ComponentProps, FC, useState } from 'react';
import { useTheme } from '@geist-ui/core';

function Logo({ ...imgProps }) {
  return <Image src={renderElement()} style={{ width: 50, height: 50, pointerEvents: 'none' }} alt="AvdanOS Logo" />;
}

function renderElement() {
  const theme = useTheme();
  if (theme.type == 'light') return '/assets/logo/render.svg';
  else return '/assets/logo/render-dark.svg';
}

export default Logo;
