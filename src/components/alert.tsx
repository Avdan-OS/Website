import { Link, Grid, Card, useTheme } from '@geist-ui/core';
import style from '../styles/components/cards.module.css';
import { Chiislate } from './translation/Chiislate';

const Alert = () => {
  const theme = useTheme();
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', zIndex: 4, position: 'relative' }}>
        <Grid
          style={{
            paddingInline: 50,
            pointerEvents: 'none',
            display: 'block',
            width: '100%'
          }}
        >
          <Card className={style.card + ' ' + (theme.type == 'dark' ? style.card__dark : style.card__white)}>
            <p style={{ fontSize: 14, margin: -10, marginLeft: 0 }}>
              <strong>
                <Chiislate>
                  <strong style={{ fontWeight: 400 }}>AvdanOS</strong> is still in development.
                </Chiislate>
              </strong>{' '}
              <Link style={{ pointerEvents: 'stroke' }} block underline href="https://avdanos.org/discord">
                <Chiislate>Join our Discord!</Chiislate>
              </Link>
            </p>
          </Card>
        </Grid>
      </div>
    </>
  );
};

export default Alert;
