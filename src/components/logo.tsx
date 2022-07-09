import { Image } from '@geist-ui/core';
import { useTheme } from '@geist-ui/core';
import NextLink from 'next/link';
const Logo = () => {
  return (
    <NextLink href="/">
      <a>
        <Image src={renderElement()} style={{ width: 50, height: 50, pointerEvents: 'none' }} alt="AvdanOS Logo" />
      </a>
    </NextLink>
  );
};

const renderElement = () => {
  const theme = useTheme();
  if (theme.type == 'light') return '/logo/render.svg';
  else return '/logo/render-dark.svg';
};

export default Logo;
