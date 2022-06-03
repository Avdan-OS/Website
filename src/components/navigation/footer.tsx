import { useTheme, Tag, Spacer, Link } from '@geist-ui/core';
import NextLink from 'next/link';
import Status from '../status';
import Logo from '../logo';
import Media from '../media';
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
            <div className="col">
              <h3>Documentation</h3>
              <ul>
                <li>
                  <NextLink href="/downloads">
                    <a>Download</a>
                  </NextLink>
                </li>
                <li>
                  <NextLink href="/cloud#hosting">
                    <a>Hosting</a>
                  </NextLink>
                </li>
                <li>
                  <NextLink href="/cloud">
                    <a>Cloud</a>
                  </NextLink>
                </li>
              </ul>
            </div>
            <div className="col col-md item">
              <h3>Guides</h3>
              <ul>
                <li>
                  <NextLink href="/docs">
                    <a>Documentation</a>
                  </NextLink>
                </li>
                <li>
                  <NextLink href="#">
                    <a>Examples</a>
                  </NextLink>
                </li>
              </ul>
            </div>
            <div className="col-md item text">
              <h2 style={{ fontFamily: 'Poppins', marginTop: 30, fontWeight: 500, textAlign: 'center' }}>
                <Logo />
              </h2>
            </div>
            <div className="col-md item">
              <ul>
                <ol>
                  <NextLink href="/privacy">
                    <a>Privacy</a>
                  </NextLink>
                </ol>
                <ol>
                  <NextLink href="/security">
                    <a>Security</a>
                  </NextLink>
                </ol>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item" style={{ marginTop: 15 }}>
              <Status />
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
          <p>Social Media Links</p>
          <Media />
          <p className="copyright">
            Made by the{' '}
            <Link underline color href="https://github.com/Avdan-OS">
              AvdanOS Contributors.
            </Link>{' '}
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
