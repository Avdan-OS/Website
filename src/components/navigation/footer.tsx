import { useState } from 'react';
import Link from 'next/link';
import { useTheme, Tag, Spacer } from '@geist-ui/core';
import Logo from '../logo';
import dynamicWidth from '@/lib/dynamic-width';
import { TranslatableText } from '../translation/TranslatableText';

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
                <TranslatableText>Overview</TranslatableText>
              </h3>
              <ul>
                <li>
                  <Link href="/">
                    <TranslatableText>Home</TranslatableText>
                  </Link>
                </li>
                <li>
                  <Link href={`/features${useFeaturesBeta ? '-beta' : ''}`}>
                    <TranslatableText>Features</TranslatableText>
                  </Link>
                </li>
                <li>
                  <Link href="/downloads">
                    <TranslatableText>Downloads</TranslatableText>
                  </Link>
                </li>
                <li>
                  <Link href="/support">
                    <TranslatableText>Support</TranslatableText>
                  </Link>
                </li>
                <li>
                  <Link href="/docs">
                    <TranslatableText>Documentation</TranslatableText>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-item footer-item-2">
            <div>
              <h3>
                <TranslatableText>External Links</TranslatableText>
              </h3>
              <ul>
                <li>
                  <Link href="https://twitter.com/avdan_os" target="_blank" rel="noreferrer">
                    <TranslatableText>Twitter</TranslatableText>
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/Avdan-OS/" target="_blank" rel="noreferrer">
                    <TranslatableText>GitHub</TranslatableText>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/channel/UCHLCBj83J7bR82HwjhCJusA"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TranslatableText>YouTube</TranslatableText>
                  </Link>
                </li>
                <li>
                  <Link href="https://avdanos.org/discord" target="_blank" rel="noreferrer">
                    <TranslatableText>Discord</TranslatableText>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.reddit.com/r/AvdanOS/" target="_blank" rel="noreferrer">
                    <TranslatableText>Reddit</TranslatableText>
                  </Link>
                </li>
                <li>
                  <Link href="https://instagram.com/avdanos_" target="_blank" rel="noreferrer">
                    <TranslatableText>Instagram</TranslatableText>
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
                <TranslatableText>Legal</TranslatableText>
              </h3>
              <ul>
                <li>
                  <Link href="https://www.gnu.org/licenses/gpl-3.0.en.html">
                    <TranslatableText>License</TranslatableText>
                  </Link>
                </li>
                <li>
                  <Link href="/eula">
                    <TranslatableText>EULA</TranslatableText>
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
                  <TranslatableText>History of Incidents</TranslatableText>
                </Link>
              </strong>
            </Tag>
            <Spacer h={0.5} />
            <Tag type="secondary" style={{ color: colorSwitch() }}>
              <strong>
                <Link href="/privacy-security" style={{ color: colorSwitch() }}>
                  <TranslatableText>Privacy and Security</TranslatableText>
                </Link>
              </strong>
            </Tag>
            <Spacer h={0.5} />
            <Tag type="secondary" style={{ color: colorSwitch() }}>
              <TranslatableText link="https://youtube.com/avdan" linkStyle={{ color: colorSwitch() }}>
                Inspired by [%a][%b]Avdan[%b][%a]
              </TranslatableText>
            </Tag>
          </div>
        </div>
        <p className="copyright" style={{ marginTop: '-10px', marginBottom: '0', fontSize: '13px', opacity: '0.7' }}>
          ©{' '}
          <strong>
            <Link style={{ color: colorSwitch() }} href="https://github.com/Avdan-OS">
              <TranslatableText>AvdanOS Contributors</TranslatableText>
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
