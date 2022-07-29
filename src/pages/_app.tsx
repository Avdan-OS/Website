import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { GeistProvider, CssBaseline } from '@geist-ui/core';
import { PrefersContext, themes, ThemeType } from '@/lib/use-prefers';
import Menu from '@/components/navigation/menu';
import Footer from '@/components/navigation/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/components/navbar.css';
import '../styles/components/footer.css';
import '../styles/features-beta.css';
import '../styles/index.css';

import '../styles/animations.css';
import '../styles/slideshow_styles.css';
// Sadly I couldn't find other solutions without importing component stylings here...

const App = ({ Component, pageProps }: AppProps) => {
  const [themeType, setThemeType] = useState<ThemeType>('dark');
  useEffect(() => {
    document.documentElement.removeAttribute('style');
    document.body.removeAttribute('style');
    const theme = window.localStorage.getItem('theme') as ThemeType;
    if (themes.includes(theme)) setThemeType(theme);
    document.documentElement.classList.toggle('scroll-light', theme === 'light');
    document.documentElement.classList.toggle('scroll-dark', theme === 'dark');
  }, []);

  const switchTheme = useCallback((theme: ThemeType) => {
    setThemeType(theme);
    if (typeof window !== 'undefined' && window.localStorage) window.localStorage.setItem('theme', theme);
  }, []);

  return (
    <>
      <Head>
        <meta name="theme-color" content="#000000" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://Avdan.com/" />
        <title>AvdanOS - It's not only a desktop environment; It's a new OS.</title>
        <meta name="twitter:description" content="AvdanOS - The desktop you know and love. Read more..." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AvdanOS - The desktop you know and love." />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="AvdanOS - The desktop you know and love." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </Head>
      <GeistProvider themeType={themeType}>
        <CssBaseline />
        <PrefersContext.Provider value={{ themeType, switchTheme }}>
          <Menu />
          <Component {...pageProps} />
          <Footer />
        </PrefersContext.Provider>
      </GeistProvider>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.min.js"
        integrity="sha512-OvBgP9A2JBgiRad/mM36mkzXSXaJE9BEIENnVEmeZdITvwT09xnxLtT4twkCa8m/loMbPHsvPl0T8lRGVBwjlQ=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      ></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    </>
  );
};

export default App;
