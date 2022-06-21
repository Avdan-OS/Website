import { Link, Grid, Card } from '@geist-ui/core';
import style from '../styles/components/cards.module.css';

const Alert = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Grid style={{ paddingInline: 50, pointerEvents: 'none', display: 'block', width: '60vw' }}>
          <Card className={style.alert__card}>
            <p style={{ fontSize: 14, margin: -10, marginLeft: 0 }}>
              <strong>
                <strong style={{ fontWeight: 400 }}>AvdanOS</strong> is still in development.
              </strong>{' '}
              <Link style={{ pointerEvents: 'stroke' }} block underline href="https://discord.gg/avdanos">
                Join our Discord
              </Link>
            </p>
          </Card>
        </Grid>
      </div>
    </>
  );
};

export default Alert;
