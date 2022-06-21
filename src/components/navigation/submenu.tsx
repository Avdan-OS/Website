import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Tabs, useTheme } from '@geist-ui/core';
import dynamicWidth from '@/lib/dynamic-width';
import Alert from '@/components/alert';

const Submenu = () => {
  const theme = useTheme();
  const router = useRouter();
  const [sticky, setSticky] = useState(false);

  const [useMobileBar, setMobileBar] = useState(false);
  dynamicWidth((width) => (width < 600 ? setMobileBar(true) : setMobileBar(false)));

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
          <div className={`submenu ${sticky ? 'submenu_sticky' : ''}`}>
            <div className="submenu__inner">
              {useMobileBar ? (
                <div className="submenu__inner">
                  <Tabs hideDivider value={router.asPath} onChange={(route) => router.push(route)}>
                    <Tabs.Item label="Home" value="/" />
                    <Tabs.Item label="Features" value="/features" />
                    <Tabs.Item label="Downloads" value="/downloads" />
                    <Tabs.Item label="Support" value="/support" />
                    <Tabs.Item label="Docs" value="/docs" />
                  </Tabs>
                </div>
              ) : (
                <div className="submenu__inner submenu__dektop">
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
                    <Tabs.Item label="Home" value="/" />
                    <Tabs.Item label="Features" value="/features" />
                    <Tabs.Item label="Downloads" value="/downloads" />
                    <Tabs.Item label="Support" value="/support" />
                    <Tabs.Item label="Documentation" value="/docs" />
                    <Tabs.Item label="Demo" value="/demo" />
                  </Tabs>
                </div>
              )}
            </div>
          </div>
        </nav>
      ) : useRouter().route != '/' ? (
        <Alert />
      ) : null}
      <style jsx>{`
        .submenu__wrapper {
          background: ${theme.palette.background} !important;
        }
        .submenu_sticky {
          background: ${theme.palette.accents_1}B2; // accent_1 + opacity
          box-shadow: ${theme.type === 'dark' ? `none` : 'rgba(0, 0, 0, 0.1) 0 0 15px 0'};
          border-top: 1px solid ${theme.palette.border};
          border-bottom: 1px solid ${theme.palette.border};
        }
        .submenu__inner {
          padding: 0;
          width: ${theme.layout.pageWidthWithMargin};
        }
        
        .submenu__inner.submenu__dektop {
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
