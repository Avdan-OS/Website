import { useState } from 'react';
import NextLink from 'next/link';

import { useTheme, Tag, Spacer } from '@geist-ui/core';

import Logo from '../logo';
import dynamicWidth from '@/lib/dynamic-width';

const Footer: React.FC = () => {
  const theme = useTheme();
  const colorSwitch = () => {
    return useTheme().type == 'light' ? 'black' : 'white';
  };

  const [useMobileFooter, setMobileFooter] = useState(false);
  dynamicWidth((width) => {
    width < 970 ? setMobileFooter(true) : setMobileFooter(false);
  });

  return (
    <>
      <footer className="footer-dark">
        <div className="container" style={{ marginTop: 30 }}>
          <div className="footer-item footer-item-1">
            <div>
              <h3>Overview</h3>
              <ul>
                <li>
                  <NextLink href="#">
                    <a>Home</a>
                  </NextLink>
                </li>
                <li>
                  <NextLink href="/products">
                    <a>Features</a>
                  </NextLink>
                </li>
                <li>
                  <NextLink href="/downloads">
                    <a>Downloads</a>
                  </NextLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-item footer-item-2">
            <div>
              <h3>External Links</h3>
              <ul>
                <li>
                  <a href="https://twitter.com/avdan_os" target="_blank">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Avdan-OS/" target="_blank">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/c/AvdanOSDeveloper" target="_blank">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/avdanos" target="_blank">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="https://www.reddit.com/r/AvdanOS/" target="_blank">
                    Reddit
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
              <h3>Legal</h3>
              <ul>
                <li>
                  <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">License</a>
                </li>
                <li>
                  <a href="/eula">EULA</a>
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
                  History of Incidents
                </a>
              </strong>
            </Tag>
            <Spacer h={0.5} />
            <Tag type="secondary" style={{ color: colorSwitch() }}>
              <strong>
                <a href="/privacy-security" style={{ color: colorSwitch() }}>
                  Privacy and Security
                </a>
              </strong>
            </Tag>
            <Spacer h={0.5} />
            <Tag type="secondary" style={{ color: colorSwitch() }}>
              Inspired by{' '}
              <strong>
                <a target="_blank" style={{ color: colorSwitch() }} href="https://youtube.com/avdan">
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
              AvdanOS Contributors
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
        <style jsx>{`
          footer {
            border-top: 1px solid ${theme.palette.border};
            background-color: ${theme.palette.accents_1};
            color: ${theme.palette.foreground};
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
