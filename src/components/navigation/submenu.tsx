import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Tabs, useTheme, Image } from '@geist-ui/core';
import { Alert } from '../alert';

const Submenu = () => {
  const theme = useTheme();
  const router = useRouter();
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const scrollHandler = () => setSticky(document.documentElement.scrollTop > 54);
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  }, [setSticky]);
  const renderBannerImage = () => {
    if (theme.type == 'light') return '/assets/logo/banner.png';
    else return '/assets/logo/banner-dark.png';
  };
  return (
    <>
      {sticky ? (
        <nav className="submenu__wrapper">
          <div className={`submenu ${sticky ? 'submenu_sticky' : ''}`}>
            <div className="submenu__inner">
              <h4 className="submenu__highlight">
                <img
                  height={'19px'}
                  style={{ overflow: 'initial', pointerEvents: 'none' }}
                  src={renderBannerImage()}
                ></img>
              </h4>
              <Tabs hideDivider value={router.asPath} onChange={(route) => router.push(route)}>
                <Tabs.Item label="Home" value="/" />
                <Tabs.Item label="Features" value="/features" />
                <Tabs.Item label="Downloads" value="/downloads" />
                <Tabs.Item label="Support" value="/support" />
                <Tabs.Item label="Documentation" value="/docs" />
              </Tabs>
            </div>
          </div>
        </nav>
      ) : (
        <Alert />
      )}
      <style jsx>{`
        .submenu__wrapper {
          // border-top: 1px solid ${theme.palette.border};
          height: 48px;
          position: relative;
          overflow: hidden;
          background: ${theme.palette.background} !important;
        }
        .submenu_sticky {
          transition: box-shadow 0s ease;
        }
        .submenu_sticky {
          position: fixed;
          border-top: 1px solid ${theme.palette.border};
          border-bottom: 1px solid ${theme.palette.border};
          z-index: 1100;
          top: 0;
          right: 0;
          left: 0;
          background: ${theme.palette.background};
          box-shadow: ${theme.type === 'dark' ? `none` : 'rgba(0, 0, 0, 0.1) 0 0 15px 0'};
        }
        .submenu__inner {
          display: flex;
          width: ${theme.layout.pageWidthWithMargin};
          max-width: 100%;
          margin: 0 auto;
          padding: 0 ${theme.layout.pageMargin};
          height: 48px;
          box-sizing: border-box;
          overflow-y: hidden;
          overflow-x: auto;
          overflow: -moz-scrollbars-none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          box-sizing: border-box;
        }
        .submenu__inner::-webkit-scrollbar {
          // display: none;
        }
        .submenu__inner :global(.content) {
          // display: none;
        }
        .submenu__inner :global(.tabs),
        .submenu__inner :global(header) {
          height: 100%;
          border: none;
        }
        .submenu__inner :global(.tab) {
          height: calc(100% - 2px);
          padding-top: 0;
          padding-bottom: 0;
          // color: ${theme.palette.accents_5};
          font-size: 0.875rem;
        }
        .submenu__inner :global(.tab):hover {
          color: ${theme.palette.foreground};
        }
        .submenu__inner :global(.active) {
          color: ${theme.palette.foreground};
        }
        .submenu__highlight {
            font-weight: 700;
            padding-top: .3125rem;
            padding-bottom: .3125rem;
            margin-right: 1rem;
            font-size: 1.25rem;
            text-decoration: none;
            white-space: nowrap;
            margin-top: 7px;
          }
        }
      `}</style>
    </>
  );
};

export default Submenu;
