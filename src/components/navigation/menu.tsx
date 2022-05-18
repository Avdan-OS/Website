import React, { useState } from 'react';
import { Button, useTheme, Popover, Tabs, useToasts, Link } from '@geist-ui/core';
import * as Icons from 'react-feather';
import { usePrefers } from '@/lib/use-prefers';
import { useRouter } from 'next/router';
import Logo from '../logo';
import NextLink from 'next/link';
import Submenu from '@/components/navigation/submenu';

function Menu({}) {
  const theme = useTheme();
  const prefers = usePrefers();
  const [value, setValue] = useState('');
  const router = useRouter();
  const { setToast } = useToasts();
  function setInvertTheme() {
    if (theme.type === 'dark') {
      prefers.switchTheme('light');
    } else {
      prefers.switchTheme('dark');
    }
  }
  const action = {
    name: 'Undo',
    handler: () => setInvertTheme()
  };
  const click = () =>
    setToast({
      text: 'Theme changed',
      actions: [action]
    });
  function fireClick() {
    click();
    prefers.switchTheme(theme.type === 'dark' ? 'light' : 'dark');
  }
  return (
    <>
      {theme.type === 'dark' ? (
        <>
          <nav
            className="navbar navbar-dark navbar-expand-md navigation-clean"
            style={{ fontFamily: 'Roboto, sans-serif', background: 'rgba(255,255,255,0)' }}
          >
            <div className="container">
              <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-1">
                <span className="visually-hidden">Toggle navigation</span>
                <span className="navbar-toggler-icon"></span>
              </button>
              <Logo />
              <div id="navcol-1" className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto">
                  <Tabs value={router.asPath} hideDivider onChange={(route) => router.push(route)}>
                    <Tabs.Item label="Home" value="/" />
                    <Tabs.Item label="Features" value="/features" />
                    <Tabs.Item label="Getting Started" value="/download" />
                    <Tabs.Item label="Support" value="/support" />
                    <Tabs.Item label="Documentation" value="/docs" />
                  </Tabs>
                </ul>
              </div>
              <Button
                aria-label="Toggle Dark mode"
                className="themebutton"
                auto
                iconRight={theme.type === 'dark' ? <Icons.Sun size={16} /> : <Icons.Moon size={16} />}
                type="abort"
                onClick={() => fireClick()}
              ></Button>
              <NextLink href="/docs" passHref>
                <a>
                  <Button
                    aria-label="Open Docs"
                    className="themebutton themebutttoncyan"
                    auto
                    shadow
                    type="success"
                    iconRight={<Icons.Download className="themebuttonicon" size={16} />}
                  ></Button>
                </a>
              </NextLink>
            </div>
          </nav>
        </>
      ) : (
        <>
          <nav
            className="navbar navbar-light navbar-expand-md navigation-clean"
            style={{ fontFamily: 'Roboto, sans-serif', background: 'rgba(255,255,255,0)' }}
          >
            <div className="container">
              <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-1">
                <span className="visually-hidden">Toggle navigation</span>
                <span className="navbar-toggler-icon"></span>
              </button>
              <Logo />
              <div id="navcol-1" className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto">
                  <Tabs value={router.asPath} hideDivider onChange={(route) => router.push(route)}>
                    <Tabs.Item label="Home" value="/" />
                    <Tabs.Item label="Features" value="/features" />
                    <Tabs.Item label="Getting Started" value="/download" />
                    <Tabs.Item label="Support" value="/support" />
                    <Tabs.Item label="Documentation" value="/docs" />
                  </Tabs>
                </ul>
              </div>
              <Button
                aria-label="Toggle Dark mode"
                className="themebutton"
                auto
                iconRight={theme.type === 'dark' ? <Icons.Sun size={16} /> : <Icons.Moon size={16} />}
                type="abort"
                onClick={() => fireClick()}
              ></Button>
              <NextLink href="/docs" passHref>
                <a>
                  <Button
                    aria-label="Open Docs"
                    className="themebutton themebutttoncyan"
                    auto
                    shadow
                    type="success"
                    iconRight={<Icons.Download size={16} />}
                  ></Button>
                </a>
              </NextLink>
            </div>
          </nav>
        </>
      )}
      <Submenu />
      <style>{`
        .themebutton {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          padding: 0;
          background: green;
          margin: 0 ${theme.layout.gapHalf};
        }
        .themebutttoncyan
        {
          background-color: ${theme.palette.cyan} !important;
          border: 1px solid #00eab5 !important;  
        }
        .themebuttonicon
        {
          color: #000 !important;
        }
      `}</style>
    </>
  );
}

export default Menu;
