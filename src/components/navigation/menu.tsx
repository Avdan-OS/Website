import { Button, useTheme, Tabs } from '@geist-ui/core';
import { Sun, Moon, Download } from 'react-feather';
import { usePrefers } from '@/lib/use-prefers';
import { useRouter } from 'next/router';
import Logo from '../logo';
import Link from 'next/link';
import Submenu from '@/components/navigation/submenu';
import TranslationList from '../translation/TranslationList';
import dynamicWidth from '@/lib/dynamic-width';
import { useState, Component } from 'react';
import { Translatable } from '../translation/Translatable';

const Menu = () => {
  const theme = useTheme();
  const prefers = usePrefers();
  const router = useRouter();

  const [useMobileBar, setMobileBar] = useState(false);
  const [useFeaturesBeta, setFeaturesBeta] = useState(false);
  const [useAltMenuPosition, setAltMenuPosition] = useState(false);

  dynamicWidth((width) => {
    width < 1200 ? setMobileBar(true) : setMobileBar(false);
    width < 750 ? setAltMenuPosition(true) : setAltMenuPosition(false);
    width < 575 ? setFeaturesBeta(false) : setFeaturesBeta(true);
  });
  const changeTheme = () => {
    prefers.switchTheme(theme.type === 'dark' ? 'light' : 'dark');
    document.documentElement.classList.toggle('scroll-dark', theme.type === 'light');
    document.documentElement.classList.toggle('scroll-light', theme.type === 'dark');
  };

  const themeDark = () => {
    if (theme.type === 'dark' && router.pathname == '/') return true;
    else return false;
  };

  class MenuBar extends Component {
    render() {
      return useMobileBar ? (
        <div id="navcol-1" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <Tabs
              className={`${themeDark() ? 'header-dark-tabs' : null}`}
              value={router.asPath}
              hideDivider
              onChange={(route) => router.push(route)}
            >
              <Tabs.Item label={<Translatable>Home</Translatable>} value="/" />
              <Tabs.Item
                label={<Translatable>Features</Translatable>}
                value={`/features${useFeaturesBeta ? '-beta' : ''}`}
              />
              <Tabs.Item label={<Translatable>Downloads</Translatable>} value="/downloads" />
              <Tabs.Item label={<Translatable>Support</Translatable>} value="/support" />
              <Tabs.Item label={<Translatable>Docs</Translatable>} value="/docs" />
            </Tabs>
          </ul>
        </div>
      ) : (
        <div id="navcol-1" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <Tabs
              className={`${themeDark() ? 'header-dark-tabs' : null}`}
              value={router.asPath}
              hideDivider
              onChange={(route) => router.push(route)}
            >
              <Tabs.Item label={<Translatable>Home</Translatable>} value="/" />
              <Tabs.Item
                label={<Translatable>Features</Translatable>}
                value={`/features${useFeaturesBeta ? '-beta' : ''}`}
              />
              <Tabs.Item label={<Translatable>Downloads</Translatable>} value="/downloads" />
              <Tabs.Item label={<Translatable>Support</Translatable>} value="/support" />
              <Tabs.Item label={<Translatable>Documentation</Translatable>} value="/docs" />
              <Tabs.Item label={<Translatable>Demo</Translatable>} value="/demo" />
            </Tabs>
          </ul>
        </div>
      );
    }
  }
  return (
    <>
      <nav
        className={`navbar ${theme.type === 'dark' ? 'navbar-dark' : 'navbar-light'} navbar-expand-md navigation-clean`}
        style={{ fontFamily: 'Roboto, sans-serif', background: 'rgba(255,255,255,0)' }}
      >
        <div className="container">
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-1">
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <Logo />
          {useAltMenuPosition ? null : <MenuBar />}
          <Button
            aria-label="Toggle dark mode"
            className="theme-button"
            auto
            iconRight={theme.type === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            type="abort"
            onClick={() => changeTheme()}
          ></Button>
          <TranslationList />
          <Link href="/downloads" passHref>
            <Button
              aria-label="Open Download page"
              className="theme-button theme-button-cyan"
              auto
              shadow
              type="success"
              iconRight={<Download className="theme-buttonicon" size={16} />}
            ></Button>
          </Link>
          {!useAltMenuPosition ? null : <MenuBar />}
        </div>
      </nav>
      <Submenu />
      <style>{`
      .theme-button {
        margin: 0 ${theme.layout.gapHalf};
        
      }
      .theme-button-cyan {
        background-color: ${theme.palette.cyan} !important;
      }
  
      .header-dark-tabs {
        border-radius: 6px;
        color: #fff;
        border: 1px solid #333;
        backdrop-filter: blur(2rem);
        background: rgba(0, 0, 0, 0.2) !important;
        -webkit-backdrop-filter: blur(2rem);
        padding-right: 6px !important;
    `}</style>
    </>
  );
};

export default Menu;
