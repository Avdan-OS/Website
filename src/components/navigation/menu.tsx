import { Button, useTheme, Tabs, Select } from '@geist-ui/core';
import { Sun, Moon, Download } from 'react-feather';
import { usePrefers } from '@/lib/use-prefers';
import { useRouter } from 'next/router';
import Logo from '../logo';
import NextLink from 'next/link';
import Submenu from '@/components/navigation/submenu';
import TranslationList from '../translation/TranslationList';
import dynamicWidth from '@/lib/dynamic-width';
import { useState, Component } from 'react';
import { TranslatableText } from '../translation/TranslatableText';

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
  const fireClick = () => {
    prefers.switchTheme(theme.type === 'dark' ? 'light' : 'dark');
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
              <Tabs.Item label={<TranslatableText>Home</TranslatableText>} value="/" />
              <Tabs.Item
                label={<TranslatableText>Features</TranslatableText>}
                value={`/features${useFeaturesBeta ? '-beta' : ''}`}
              />
              <Tabs.Item label={<TranslatableText>Downloads</TranslatableText>} value="/downloads" />
              <Tabs.Item label={<TranslatableText>Support</TranslatableText>} value="/support" />
              <Tabs.Item label={<TranslatableText>Docs</TranslatableText>} value="/docs" />
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
              <Tabs.Item label={<TranslatableText>Home</TranslatableText>} value="/" />
              <Tabs.Item
                label={<TranslatableText>Features</TranslatableText>}
                value={`/features${useFeaturesBeta ? '-beta' : ''}`}
              />
              <Tabs.Item label={<TranslatableText>Downloads</TranslatableText>} value="/downloads" />
              <Tabs.Item label={<TranslatableText>Support</TranslatableText>} value="/support" />
              <Tabs.Item label={<TranslatableText>Documentation</TranslatableText>} value="/docs" />
              <Tabs.Item label={<TranslatableText>Demo</TranslatableText>} value="/demo" />
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
            onClick={() => fireClick()}
          ></Button>
          <TranslationList />
          <NextLink href="/downloads" passHref>
            <a>
              <Button
                aria-label="Open docs"
                className="theme-button theme-button-cyan"
                auto
                shadow
                type="success"
                iconRight={<Download className="theme-buttonicon" size={16} />}
              ></Button>
            </a>
          </NextLink>
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
