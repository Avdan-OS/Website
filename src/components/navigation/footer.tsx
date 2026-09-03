import { useState } from 'react';
import Link from 'next/link';
import { useTheme, Tag, Spacer } from '@geist-ui/core';
import Logo from '../logo';
import dynamicWidth from '@/lib/dynamic-width';
import { Chiislate } from '../translation/Chiislate';

const Footer: React.FC = () => {
  const theme = useTheme();
  const [useMobileFooter, setMobileFooter] = useState(false);
  const [useFeaturesBeta, setFeaturesBeta] = useState(false);

  dynamicWidth((width) => {
    setMobileFooter(width < 768);
    setFeaturesBeta(width >= 575);
  });

  return (
    <footer id="global-footer" className="footer-dark">
      <div className="footer-container">
        <div className="footer-column">
          <h4><Chiislate>Overview</Chiislate></h4>
          <ul>
            <li><Link href="/"><Chiislate>Home</Chiislate></Link></li>
            <li><Link href={/features\}><Chiislate>Features</Chiislate></Link></li>
            <li><Link href="/downloads"><Chiislate>Downloads</Chiislate></Link></li>
            <li><Link href="/support"><Chiislate>Support</Chiislate></Link></li>
            <li><Link href="/docs"><Chiislate>Documentation</Chiislate></Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4><Chiislate>Community</Chiislate></h4>
          <ul>
            <li><Link href="https://github.com/Avdan-OS/" target="_blank" rel="noreferrer"><Chiislate>GitHub</Chiislate></Link></li>
            <li><Link href="https://avdanos.org/discord" target="_blank" rel="noreferrer"><Chiislate>Discord</Chiislate></Link></li>
            <li><Link href="https://twitter.com/avdan_os" target="_blank" rel="noreferrer"><Chiislate>Twitter</Chiislate></Link></li>
            <li><Link href="https://www.reddit.com/r/AvdanOS/" target="_blank" rel="noreferrer"><Chiislate>Reddit</Chiislate></Link></li>
            <li><Link href="https://www.youtube.com/channel/UCHLCBj83J7bR82HwjhCJusA" target="_blank" rel="noreferrer"><Chiislate>YouTube</Chiislate></Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4><Chiislate>Legal & Credits</Chiislate></h4>
          <ul>
            <li><Link href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank" rel="noreferrer"><Chiislate>License (GPL-3.0)</Chiislate></Link></li>
            <li><Link href="/privacy-security"><Chiislate>Privacy & Security</Chiislate></Link></li>
            <li><Link href="https://youtube.com/avdan" target="_blank" rel="noreferrer"><Chiislate>Inspired by Avdan</Chiislate></Link></li>
          </ul>
        </div>
      </div>

      <div className="copyright-bar text-center">
        <p className="copyright">
          © {new Date().getFullYear()} <strong>AvdanOS Contributors</strong> under{' '}
          <strong><Link href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank" rel="noreferrer">GPL-3.0</Link></strong>
        </p>
      </div>

      <style jsx>{
        #global-footer {
          border-top: 1px solid \;
          background-color: \;
          color: \;
          padding: 48px 24px 24px 24px;
        }
        .footer-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 32px;
          max-width: 1040px;
          margin: 0 auto 32px auto;
        }
        .footer-column h4 {
          font-size: 0.95rem;
          font-weight: 500;
          margin-bottom: 12px;
        }
        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
          line-height: 1.8;
          font-size: 0.875rem;
        }
        .footer-column ul a {
          color: inherit;
          opacity: 0.7;
          text-decoration: none;
          transition: opacity 0.15s ease;
        }
        .footer-column ul a:hover {
          opacity: 1;
        }
        .copyright-bar {
          border-top: 1px solid \;
          padding-top: 24px;
        }
        .copyright {
          font-size: 0.8rem;
          opacity: 0.6;
          margin: 0;
        }
      }</style>
    </footer>
  );
};

export default Footer;