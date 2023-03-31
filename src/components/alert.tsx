import { Link, Grid, Card, useTheme } from '@geist-ui/core';
import style from '../styles/components/cards.module.css';
import { Translatable } from './translation/Translatable';

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
                <strong style={{ fontWeight: 400 }}>AvdanOS</strong>{' '}
                <Translatable>is still in development.</Translatable>
              </strong>{' '}
              <Link style={{ pointerEvents: 'stroke' }} block underline href="https://avdanos.org/discord">
                <Translatable>Join our Discord!</Translatable>
              </Link>
            </p>
          </Card>
        </Grid>
      </div>
    </>
  );
};

export default Alert;
