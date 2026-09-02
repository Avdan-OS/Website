import { Button, useTheme, Tabs } from '@geist-ui/core';
import { Sun, Moon, Download } from 'react-feather';
import { usePrefers } from '@/lib/use-prefers';
import { useRouter } from 'next/router';
import Logo from '../logo';
import Link from 'next/link';
import Submenu from '@/components/navigation/submenu';
import TranslationList from '../translation/TranslationList';
import dynamicWidth from '@/lib/dynamic-width';
import { useState } from 'react';
import { Chiislate } from '../translation/Chiislate';

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

  const isDark = theme.type === 'dark' && router.pathname === '/';

  const renderNavTabs = () => (
    <div id="navcol-1" className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto" style={{ margin: 0, padding: 0, listStyle: 'none' }}>
        <Tabs
          className={isDark ? 'header-dark-tabs' : ''}
          value={router.asPath}
          hideDivider
          onChange={(route) => router.push(route)}
        >
          <Tabs.Item label={<Chiislate>Home</Chiislate>} value="/" />
          <Tabs.Item label={<Chiislate>Features</Chiislate>} value={/features\} />
          <Tabs.Item label={<Chiislate>Downloads</Chiislate>} value="/downloads" />
          <Tabs.Item label={<Chiislate>Support</Chiislate>} value="/support" />
          <Tabs.Item label={<Chiislate>Documentation</Chiislate>} value="/docs" />
          {!useMobileBar && <Tabs.Item label={<Chiislate>Demo</Chiislate>} value="/demo" />}
        </Tabs>
      </ul>
    </div>
  );

  return (
    <>
      <nav
        className={
avbar \ navbar-expand-md navigation-clean}
        style={{ background: 'transparent' }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-1" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Logo />
          {!useAltMenuPosition && renderNavTabs()}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Button
              aria-label="Toggle dark mode"
              className="theme-button"
              auto
              scale={0.88}
              iconRight={theme.type === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              type="abort"
              onClick={changeTheme}
            />
            <TranslationList />
            <Link href="/downloads" passHref legacyBehavior>
              <Button
                aria-label="Open Download page"
                className="theme-button"
                auto
                scale={0.88}
                type="secondary"
                iconRight={<Download className="theme-buttonicon" size={16} />}
              />
            </Link>
          </div>
          {useAltMenuPosition && renderNavTabs()}
        </div>
      </nav>
      <Submenu />
      <style jsx global>{
        .theme-button {
          margin: 0 4px;
        }
        .header-dark-tabs {
          border-radius: 8px;
          color: #ededed;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(18, 18, 20, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding-right: 6px;
        }
      }</style>
    </>
  );
};

export default Menu;