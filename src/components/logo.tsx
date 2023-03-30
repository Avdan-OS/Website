import { Image } from '@geist-ui/core';
import { useTheme } from '@geist-ui/core';
import Link from 'next/link';
const Logo = () => {
  return (
    <Link href="/" legacyBehavior>
      <Image src={renderElement()} style={{ width: 50, height: 50, pointerEvents: 'none' }} alt="AvdanOS Logo" />
    </Link>
  );
};

const renderElement = () => {
  const theme = useTheme();
  if (theme.type == 'light') return '/assets/logo/render.svg';
  else return '/assets/logo/render-dark.svg';
};

export default Logo;
