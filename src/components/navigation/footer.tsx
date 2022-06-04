import { useTheme, Tag, Spacer, Link } from '@geist-ui/core';
import NextLink from 'next/link';
import Logo from '../logo';

const Footer: React.FC = () => {
  const theme = useTheme();
  const colorSwitch = () => {
    const theme = useTheme();
    if (theme.type == 'light') return 'black';
    else return 'white';
  };
  return (
    <>
      <footer className="footer-dark">
        <div className="container">
          <div className="row" style={{ marginTop: 40 }}>
            <div className="col">
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
            <div className="col" style={{ marginTop: '0' }}>
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
            <div className="col-md item text">
              <h3 style={{ marginTop: 30, textAlign: 'center' }}>
                <Logo />
              </h3>
            </div>
            <div className="col-md item">
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
            <div className="col-sm-6 col-md-3 item" style={{ marginTop: 15 }}>
              <Tag type="secondary" style={{ color: colorSwitch() }}>
                View the{' '}
                <strong>
                  <Link target="_blank" href="https://dns.avdanos.com">
                    History of Incidents
                  </Link>
                </strong>
              </Tag>
              <Spacer h={0.5} />
              <Tag type="secondary" style={{ color: colorSwitch() }}>
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
            </strong>,{' '}
            2021-{new Date().getFullYear()}
          </p>
        </div>
      </footer>
      <style jsx>{`
        footer {
          border-top: 1px solid ${theme.palette.border};
          padding: ${theme.layout.gapQuarter} ${theme.layout.gap};
          background-color: ${theme.palette.accents_1};
          z-index: 99;
          color: ${theme.palette.foreground};
        }
        .copyright {
          margin-top: 14px;
          margin-bottom: 0;
          font-size: 13px;
          opacity: 0.7;
        }
      `}</style>
    </>
  );
};

export default Footer;
