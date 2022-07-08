import { Link, Grid, Card, useTheme } from '@geist-ui/core';
import style from '../styles/components/cards.module.css';
import { TranslatableText } from './translation/TranslatableText';

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
                <TranslatableText>is still in development.</TranslatableText>
              </strong>{' '}
              <Link style={{ pointerEvents: 'stroke' }} block underline href="https://discord.gg/avdanos">
                <TranslatableText>Join our Discord</TranslatableText>
              </Link>
            </p>
          </Card>
        </Grid>
      </div>
    </>
  );
};

export default Alert;
