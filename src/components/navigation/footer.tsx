import { useTheme, Tag, Spacer, Link } from '@geist-ui/core';
import NextLink from 'next/link';
import Logo from '../logo';
import dynamicWidth from '@/lib/dynamic-width';
import { useState } from 'react';

const Footer: React.FC = () => {
  const theme = useTheme();
  const colorSwitch = () => {
    const theme = useTheme();
    if (theme.type == 'light') return 'black';
    else return 'white';
  };

  const [useMobileFooter, setMobileFooter] = useState(false);
  dynamicWidth((width) => {
    if (width < 970) {
      setMobileFooter(true);
    } else {
      setMobileFooter(false);
    }
  });
  return (
    <>
      <footer className="footer-dark">
        <div className="container" style={{ marginTop: 40 }}>
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
                  <NextLink href="/download">
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
              style={{ flexGrow: 0, textAlign: 'center', justifyContent: 'center', display: 'flex', width: 70 }}
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
                  <NextLink href="https://www.gnu.org/licenses/gpl-3.0.en.html">
                    <a>License</a>
                  </NextLink>
                </li>
                <li>
                  <NextLink href="/eula">
                    <a>EULA</a>
                  </NextLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-item-4" style={{ marginTop: 5, paddingLeft: 0 }}>
            <Tag type="secondary" style={{ color: colorSwitch() }}>
              View the{' '}
              <strong>
                <Link target="_blank" href="https://dns.avdanos.com">
                  History of Incidents
                </Link>
              </strong>
            </Tag>
            <Spacer h={0.5} />
            <Tag type="secondary" style={{ color: colorSwitch(), display: 'inline-block' }}>
              Check out our{' '}
              <strong>
                <Link target="_blank" href="/privacy-security">
                  Privacy and Security
                </Link>
              </strong>
            </Tag>
            <Spacer h={0.5} />
            <Tag type="secondary" style={{ color: colorSwitch() }}>
              Inspired by{' '}
              <strong>
                <Link target="_blank" href="https://youtube.com/avdan">
                  Avdan
                </Link>
              </strong>
            </Tag>
          </div>
        </div>
        <p className="copyright" style={{ marginTop: '-10px' }}>
          ©{' '}
          <strong>
            <Link underline href="https://github.com/Avdan-OS">
              AvdanOS Contributors
            </Link>
          </strong>{' '}
          under{' '}
          <strong>
            <Link underline href="https://www.gnu.org/licenses/gpl-3.0.en.html">
              GPL-3.0
            </Link>
          </strong>
          , 2021-{new Date().getFullYear()}
        </p>
        <style jsx>{`
          footer {
            border-top: 1px solid ${theme.palette.border};
            padding: ${theme.layout.gapQuarter} ${theme.layout.gap};
            background-color: ${theme.palette.accents_1};
            z-index: 99;
            color: ${theme.palette.foreground};
          }
          .footer-item-1 {
            grid-area: a;
          }
          .footer-item-2 {
            grid-area: b;
          }
          .footer-item-3 {
            grid-area: c;
          }
          .footer-item-4 {
            grid-area: d;
          }
          .container {
            display: ${useMobileFooter ? 'grid' : 'flex'};
            ${useMobileFooter ? 'margin-bottom: 20px;' : null}
            grid-template-columns: 50% 50%;
            grid-template-rows: auto auto;
            grid-template-areas:
              'a b'
              'c d';
            align-items: stretch;
            justify-content: space-between;
            flex-direction: row;
          }
          .copyright {
            margin-top: 14px;
            margin-bottom: 0;
            font-size: 13px;
            opacity: 0.7;
          }
          .footer-item {
            width: ${useMobileFooter ? '40%' : '20%'};
            display: flex;
            justify-content: center;
          }
        `}</style>
      </footer>
    </>
  );
};

export default Footer;
