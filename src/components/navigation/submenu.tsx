import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Tabs, useTheme } from '@geist-ui/core';
import dynamicWidth from '@/lib/dynamic-width';
import { Chiislate } from '../translation/Chiislate';

const Submenu = () => {
  const theme = useTheme();
  const router = useRouter();
  const [sticky, setSticky] = useState(false);
  const [useMobileBar, setMobileBar] = useState(false);
  const [useFeaturesBeta, setFeaturesBeta] = useState(false);
  const [useLogo, setLogo] = useState(false);

  dynamicWidth((width) => {
    setMobileBar(width < 600);
    setFeaturesBeta(width >= 575);
    setLogo(width > 800);
  });

  useEffect(() => {
    const scrollHandler = () => setSticky(document.documentElement.scrollTop > 54);
    window.addEventListener('scroll', scrollHandler, { passive: true });
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  const bannerImage = theme.type === 'light' ? '/assets/logo/banner.svg' : '/assets/logo/banner-dark.svg';

  if (!sticky) return null;

  return (
    <nav className="submenu__wrapper">
      <div className={`submenu ${sticky ? 'submenu--sticky' : ''}`}>
        <div className="submenu__inner">
          {useLogo && (
            <div className="submenu__highlight" style={{ display: 'flex', alignItems: 'center' }}>
              <img height="18" alt="AvdanOS" src={bannerImage} style={{ pointerEvents: 'none' }} />
            </div>
          )}
          <Tabs hideDivider value={router.asPath} onChange={(route) => router.push(route)}>
            <Tabs.Item label={<Chiislate>Home</Chiislate>} value="/" />
            <Tabs.Item label={<Chiislate>Features</Chiislate>} value={`/features${useFeaturesBeta ? '-beta' : ''}`} />
            <Tabs.Item label={<Chiislate>Downloads</Chiislate>} value="/downloads" />
            <Tabs.Item label={<Chiislate>Support</Chiislate>} value="/support" />
            <Tabs.Item label={<Chiislate>Docs</Chiislate>} value="/docs" />
          </Tabs>
        </div>
      </div>
    </nav>
  );
};

export default Submenu;
