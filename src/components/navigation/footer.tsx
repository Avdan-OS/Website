import { useState } from 'react';
import Link from 'next/link';
import { useTheme, Tag, Spacer } from '@geist-ui/core';
import Logo from '../logo';
import dynamicWidth from '@/lib/dynamic-width';
import { Chiislate } from '../translation/Chiislate';

const Footer: React.FC = () => {
  const theme = useTheme();
  const colorSwitch = () => {
    return useTheme().type == 'light' ? 'black' : 'white';
  };

  const [useMobileFooter, setMobileFooter] = useState(false);
  const [useFeaturesBeta, setFeaturesBeta] = useState(false);

  dynamicWidth((width) => {
    width < 970 ? setMobileFooter(true) : setMobileFooter(false);
    width < 575 ? setFeaturesBeta(false) : setFeaturesBeta(true);
  });
  return (
    <>
      <footer id="global-footer" className="footer-dark">
        <div className="container" style={{ marginTop: 30 }}>
          <div className="footer-item footer-item-1">
            <div>
              <h3>
                <Chiislate>Overview</Chiislate>
              </h3>
              <ul>
                <li>
                  <Link href="/">
                    <Chiislate>Home</Chiislate>
                  </Link>
                </li>
                <li>
                  <Link href={`/features${useFeaturesBeta ? '-beta' : ''}`}>
                    <Chiislate>Features</Chiislate>
                  </Link>
                </li>
                <li>
                  <Link href="/downloads">
                    <Chiislate>Downloads</Chiislate>
                  </Link>
                </li>
                <li>
                  <Link href="/support">
                    <Chiislate>Support</Chiislate>
                  </Link>
                </li>
                <li>
                  <Link href="/docs">
                    <Chiislate>Documentation</Chiislate>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-item footer-item-2">
            <div>
              <h3>
                <Chiislate>External Links</Chiislate>
              </h3>
              <ul>
                <li>
                  <Link href="https://twitter.com/avdan_os" target="_blank" rel="noreferrer">
                    <Chiislate>Twitter</Chiislate>
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/Avdan-OS/" target="_blank" rel="noreferrer">
                    <Chiislate>GitHub</Chiislate>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/channel/UCHLCBj83J7bR82HwjhCJusA"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Chiislate>YouTube</Chiislate>
                  </Link>
                </li>
                <li>
                  <Link href="https://avdanos.org/discord" target="_blank" rel="noreferrer">
                    <Chiislate>Discord</Chiislate>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.reddit.com/r/AvdanOS/" target="_blank" rel="noreferrer">
                    <Chiislate>Reddit</Chiislate>
                  </Link>
                </li>
                <li>
                  <Link href="https://instagram.com/avdanos_" target="_blank" rel="noreferrer">
                    <Chiislate>Instagram</Chiislate>
                  </Link>
                </li>
                <li>
                  <Link href="https://mastodon.social/@avdan_os" target="_blank" rel="me">
                    <Chiislate>Mastodon</Chiislate>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {useMobileFooter ? null : (
            <div
              className="footer-item"
              style={{
                flexGrow: 0,
                textAlign: 'center',
                justifyContent: 'center',
                display: 'flex',
                width: 30,
                paddingTop: 50,
                opacity: 0.8
              }}
            >
              <h3 style={{ position: 'absolute', textAlign: 'center', width: 50, height: 50 }}>
                <Logo />
              </h3>
            </div>
          )}
          <div className="footer-item footer-item-3">
            <div>
              <h3>
                <Chiislate>Legal</Chiislate>
              </h3>
              <ul>
                <li>
                  <Link href="https://www.gnu.org/licenses/gpl-3.0.en.html">
                    <Chiislate>License</Chiislate>
                  </Link>
                </li>
                <li>
                  <Link href="/eula">
                    <Chiislate>EULA</Chiislate>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="footer-item-4"
            style={{
              width: useMobileFooter ? '100%' : '20%',
              marginTop: 5,
              paddingLeft: useMobileFooter ? 'calc(35% - 50px)' : 0
            }}
          >
            <Tag type="secondary" style={{ color: colorSwitch() }}>
              <strong>
                <Link style={{ color: colorSwitch() }} href="https://dns.avdanos.com">
                  <Chiislate>History of Incidents</Chiislate>
                </Link>
              </strong>
            </Tag>
            <Spacer h={0.5} />
            <Tag type="secondary" style={{ color: colorSwitch() }}>
              <strong>
                <Link href="/privacy-security" style={{ color: colorSwitch() }}>
                  <Chiislate>Privacy and Security</Chiislate>
                </Link>
              </strong>
            </Tag>
            <Spacer h={0.5} />
            <Tag type="secondary" style={{ color: colorSwitch() }}>
              <Chiislate>
                Inspired by{' '}
                <strong>
                  <Link href="https://youtube.com/avdan">Avdan</Link>
                </strong>
              </Chiislate>
            </Tag>
          </div>
        </div>
        <p className="copyright" style={{ marginTop: '-10px', marginBottom: '0', fontSize: '13px', opacity: '0.7' }}>
          ©{' '}
          <strong>
            <Link style={{ color: colorSwitch() }} href="https://github.com/Avdan-OS">
              <Chiislate>AvdanOS Contributors</Chiislate>
            </Link>
          </strong>{' '}
          under{' '}
          <strong>
            <Link style={{ color: colorSwitch() }} href="https://www.gnu.org/licenses/gpl-3.0.en.html">
              GPL-3.0
            </Link>
          </strong>
          , {new Date().getFullYear()}
        </p>
        <style global jsx>{`
          #__next {
            min-height: 100vh;
          }
          #global-footer {
            border-top: 1px solid ${theme.palette.border};
            background-color: ${theme.palette.accents_1};
            color: ${theme.palette.foreground};
            position: sticky;
            top: 100vh;
          }
          .container {
            display: ${useMobileFooter ? 'grid' : 'flex'};
            ${useMobileFooter ? 'margin-bottom: 20px;' : null}
          }
          .footer-item {
            width: ${useMobileFooter ? '70%' : '20%'};
          }
        `}</style>
      </footer>
    </>
  );
};

export default Footer;
