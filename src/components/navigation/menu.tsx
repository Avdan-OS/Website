import { Button, useTheme, Tabs } from '@geist-ui/core';
import { Sun, Moon, Download } from 'react-feather';
import { usePrefers } from '@/lib/use-prefers';
import { useRouter } from 'next/router';
import Logo from '../logo';
import NextLink from 'next/link';
import Submenu from '@/components/navigation/submenu';
import dynamicWidth from '@/lib/dynamic-width';
import { useState, Component } from 'react';

const Menu = () => {
  const theme = useTheme();
  const prefers = usePrefers();
  const router = useRouter();

  const [useMobileBar, setMobileBar] = useState(false);
  const [useAltMenuPosition, setAltMenuPosition] = useState(false);
  dynamicWidth((width) => {
    width < 1200 ? setMobileBar(true) : setMobileBar(false);
    width < 750 ? setAltMenuPosition(true) : setAltMenuPosition(false);
  });
  const fireClick = () => {
    prefers.switchTheme(theme.type === 'dark' ? 'light' : 'dark');
  };

  class MenuBar extends Component {
    render() {
      return useMobileBar ? (
        <div id="navcol-1" className="collapse navbar-collapse" style={{}}>
          <ul className="navbar-nav ms-auto">
            <Tabs value={router.asPath} hideDivider onChange={(route) => router.push(route)}>
              <Tabs.Item label="Home" value="/" />
              <Tabs.Item label="Features" value="/features" />
              <Tabs.Item label="Downloads" value="/downloads" />
              <Tabs.Item label="Support" value="/support" />

              <Tabs.Item label="Docs" value="/docs" />
            </Tabs>
          </ul>
        </div>
      ) : (
        <div id="navcol-1" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <Tabs value={router.asPath} hideDivider onChange={(route) => router.push(route)}>
              <Tabs.Item label="Home" value="/" />
              <Tabs.Item label="Features" value="/features" />
              <Tabs.Item label="Downloads" value="/downloads" />
              <Tabs.Item label="Support" value="/support" />
              <Tabs.Item label="Documentation" value="/docs" />
              <Tabs.Item label={'Demo'} value="/demo" />
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
            className="themebutton"
            auto
            iconRight={theme.type === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            type="abort"
            onClick={() => fireClick()}
          ></Button>
          <NextLink href="/downloads" passHref>
            <a>
              <Button
                aria-label="Open docs"
                className="themebutton themebutttoncyan"
                auto
                shadow
                type="success"
                iconRight={<Download className="themebuttonicon" size={16} />}
              ></Button>
            </a>
          </NextLink>
          {!useAltMenuPosition ? null : <MenuBar />}
        </div>
      </nav>
      <Submenu />
      <style>{`
        .themebutton {
          margin: 0 ${theme.layout.gapHalf};
          
        }
        .themebutttoncyan {
          background-color: ${theme.palette.cyan} !important;
        }
    
      `}</style>
    </>
  );
};

export default Menu;
