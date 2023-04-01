import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Tabs, useTheme } from '@geist-ui/core';
import dynamicWidth from '@/lib/dynamic-width';
import Alert from '@/components/alert';
import { Chiislate } from '../translation/Chiislate';

const Submenu = () => {
  const theme = useTheme();
  const router = useRouter();
  const [sticky, setSticky] = useState(false);

  const [useMobileBar, setMobileBar] = useState(false);
  const [useFeaturesBeta, setFeaturesBeta] = useState(false);

  dynamicWidth((width) => {
    width < 600 ? setMobileBar(true) : setMobileBar(false);
    width < 575 ? setFeaturesBeta(false) : setFeaturesBeta(true);
  });

  const [useLogo, setLogo] = useState(false);
  dynamicWidth((width) => (width > 800 ? setLogo(true) : setLogo(false)));
  useEffect(() => {
    const scrollHandler = () => setSticky(document.documentElement.scrollTop > 54);
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  }, [setSticky]);
  const renderBannerImage = () => {
    if (theme.type == 'light') return '/assets/logo/banner.svg';
    else return '/assets/logo/banner-dark.svg';
  };
  return (
    <>
      {sticky ? (
        <nav className="submenu__wrapper">
          <div className={`submenu ${sticky ? 'submenu--sticky' : ''}`}>
            <div className="submenu__inner">
              {useMobileBar ? (
                <div className="submenu__inner">
                  <Tabs hideDivider value={router.asPath} onChange={(route) => router.push(route)}>
                    <Tabs.Item label={<Chiislate>Home</Chiislate>} value="/" />
                    <Tabs.Item
                      label={<Chiislate>Features</Chiislate>}
                      value={`/features${useFeaturesBeta ? '-beta' : ''}`}
                    />
                    <Tabs.Item label={<Chiislate>Downloads</Chiislate>} value="/downloads" />
                    <Tabs.Item label={<Chiislate>Support</Chiislate>} value="/support" />
                    <Tabs.Item label={<Chiislate>Docs</Chiislate>} value="/docs" />
                  </Tabs>
                </div>
              ) : (
                <div className="submenu__inner submenu__desktop">
                  {useLogo ? (
                    <h4 className="submenu__highlight">
                      <img
                        height={'19px'}
                        alt="avdan-os"
                        style={{ overflow: 'initial', pointerEvents: 'none' }}
                        src={renderBannerImage()}
                      />
                    </h4>
                  ) : null}
                  <Tabs hideDivider value={router.asPath} onChange={(route) => router.push(route)}>
                    <Tabs.Item label={<Chiislate>Home</Chiislate>} value="/" />
                    <Tabs.Item
                      label={<Chiislate>Features</Chiislate>}
                      value={`/features${useFeaturesBeta ? '-beta' : ''}`}
                    />
                    <Tabs.Item label={<Chiislate>Downloads</Chiislate>} value="/downloads" />
                    <Tabs.Item label={<Chiislate>Support</Chiislate>} value="/support" />
                    <Tabs.Item label={<Chiislate>Documentation</Chiislate>} value="/docs" />
                    <Tabs.Item label={<Chiislate>Demo</Chiislate>} value="/demo" />
                  </Tabs>
                </div>
              )}
            </div>
          </div>
        </nav>
      ) : (
        <Alert />
      )}
      <style jsx>{`
        .submenu__wrapper {
          background: ${theme.palette.background} !important;
        }
        .submenu--sticky {
          background: ${theme.palette.accents_1}B2; // accent_1 + opacity
          box-shadow: ${theme.type === 'dark' ? `none` : 'rgba(0, 0, 0, 0.1) 0 0 15px 0'};
          border-top: 1px solid ${theme.palette.border};
          border-bottom: 1px solid ${theme.palette.border};
        }
        .submenu__inner {
          padding: 0;
          width: ${theme.layout.pageWidthWithMargin};
        }
        
        .submenu__inner.submenu__desktop {
          display: flex;
          justify-content: center;
        }
  
        .submenu__inner :global(.tab) {
          color: ${theme.palette.accents_6};
        }
        .submenu__inner :global(.tab):hover {
          color: ${theme.palette.foreground};
        }
        .submenu__inner :global(.active) {
          color: ${theme.palette.foreground};
        }
        }
      `}</style>
    </>
  );
};

export default Submenu;
