import { Image } from '@geist-ui/core';
import { useTheme } from '@geist-ui/core';

const Logo = ({ ...imgProps }) => {
  return (
    <a href="/">
      <Image src={renderElement()} style={{ width: 50, height: 50, pointerEvents: 'none' }} alt="AvdanOS Logo" />
    </a>
  );
};

const renderElement = () => {
  const theme = useTheme();
  if (theme.type == 'light') return '/assets/logo/render.svg';
  else return '/assets/logo/render-dark.svg';
};

export default Logo;
