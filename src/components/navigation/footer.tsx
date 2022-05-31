import React from 'react';
import { Link, useTheme, Tag, Spacer } from '@geist-ui/core';
import Status from '../status';
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
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="/products">Features</a>
                </li>
                <li>
                  <a target="_blank" href="/download">
                    Downloads
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h3>Documentation</h3>
              <ul>
                <li>
                  <a href="/downloads">Download</a>
                </li>
                <li>
                  <a href="/cloud#hosting">Hosting</a>
                </li>
                <li>
                  <a href="/cloud">Cloud</a>
                </li>
              </ul>
            </div>
            <div className="col col-md item">
              <h3>Guides</h3>
              <ul>
                <li>
                  <a target="_blank" href="/docs">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#">Examples</a>
                </li>
              </ul>
            </div>
            <div className="col-md item text">
              <h2 style={{ fontFamily: 'Poppins', marginTop: 30, fontWeight: 500, textAlign: 'center' }}>
                <Logo />
              </h2>
            </div>
            <div className="col-md">
              <ul>
                <ol>
                  <a href="/privacy">Privacy</a>
                </ol>
                <ol>
                  <a href="/security">Security</a>
                </ol>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item" style={{ marginTop: 15 }}>
              <Status></Status>
              <Spacer h={0.5} />
              <Tag type="success">
                Join our{' '}
                <strong>
                  <Link underline icon color href="https://discord.gg/3TEbHG8hcP">
                    Discord
                  </Link>
                </strong>
              </Tag>
              <Spacer h={0.5} />
              <Tag type="secondary" style={{ color: colorSwitch() }}>
                Subscribe to the{' '}
                <strong>
                  <Link underline href="https://" icon>
                    Youtube channel
                  </Link>
                </strong>
              </Tag>

              <Tag type="secondary" style={{ color: colorSwitch() }}>
                Inspired by{' '}
                <strong>
                  <Link underline href="https://youtube.com/avdan">
                    Avdan
                  </Link>
                </strong>
              </Tag>
            </div>
          </div>
          <p className="copyright">
            Made by the{' '}
            <Link underline color href="https://github.com/Avdan-OS">
              AvdanOS Contributors
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
          opacity: 0.6;
        }
      `}</style>
    </>
  );
};

export default Footer;
