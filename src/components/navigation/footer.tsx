import { useState } from 'react';
import NextLink from 'next/link';
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
                  <NextLink href="#">
                    <a>
                      <TranslatableText>Home</TranslatableText>
                    </a>
                  </NextLink>
                </li>
                <li>
                  <NextLink href={`/features${useFeaturesBeta ? '-beta' : ''}`}>
                    <a>
                      <TranslatableText>Features</TranslatableText>
                    </a>
                  </NextLink>
                </li>
                <li>
                  <NextLink href="/downloads">
                    <a>
                      <TranslatableText>Downloads</TranslatableText>
                    </a>
                  </NextLink>
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
                  <a href="https://twitter.com/avdan_os" target="_blank" rel="noreferrer">
                    <TranslatableText>Twitter</TranslatableText>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Avdan-OS/" target="_blank" rel="noreferrer">
                    <TranslatableText>GitHub</TranslatableText>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/c/AvdanOSDeveloper" target="_blank" rel="noreferrer">
                    <TranslatableText>YouTube</TranslatableText>
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/avdanos" target="_blank" rel="noreferrer">
                    <TranslatableText>Discord</TranslatableText>
                  </a>
                </li>
                <li>
                  <a href="https://www.reddit.com/r/AvdanOS/" target="_blank" rel="noreferrer">
                    <TranslatableText>Reddit</TranslatableText>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/avdanos_" target="_blank" rel="noreferrer">
                    <TranslatableText>Instagram</TranslatableText>
                  </a>
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
                  <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">
                    <TranslatableText>License</TranslatableText>
                  </a>
                </li>
                <li>
                  <a href="/eula">
                    <TranslatableText>EULA</TranslatableText>
                  </a>
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
                <a style={{ color: colorSwitch() }} href="https://dns.avdanos.com">
                  <TranslatableText>History of Incidents</TranslatableText>
                </a>
              </strong>
            </Tag>
            <Spacer h={0.5} />
            <Tag type="secondary" style={{ color: colorSwitch() }}>
              <strong>
                <a href="/privacy-security" style={{ color: colorSwitch() }}>
                  <TranslatableText>Privacy and Security</TranslatableText>
                </a>
              </strong>
            </Tag>
            <Spacer h={0.5} />
            <Tag type="secondary" style={{ color: colorSwitch() }}>
              <TranslatableText>Inspired by</TranslatableText>{' '}
              <strong>
                <a target="_blank" style={{ color: colorSwitch() }} href="https://youtube.com/avdan" rel="noreferrer">
                  Avdan
                </a>
              </strong>
            </Tag>
          </div>
        </div>
        <p className="copyright" style={{ marginTop: '-10px', marginBottom: '0', fontSize: '13px', opacity: '0.7' }}>
          ©{' '}
          <strong>
            <a style={{ color: colorSwitch() }} href="https://github.com/Avdan-OS">
              <TranslatableText>AvdanOS Contributors</TranslatableText>
            </a>
          </strong>{' '}
          under{' '}
          <strong>
            <a style={{ color: colorSwitch() }} href="https://www.gnu.org/licenses/gpl-3.0.en.html">
              GPL-3.0
            </a>
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
