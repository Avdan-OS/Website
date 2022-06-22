import {Link, Grid, Card, useTheme} from '@geist-ui/core';
import style from '../styles/components/cards.module.css';
import {useRouter} from "next/router";

const Alert = () => {
  const theme = useTheme();
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Grid style={{ paddingInline: 50, pointerEvents: 'none', display: 'block', width: (useRouter().route == "/" ? '60vw' : "100%") }}>
          <Card className={style.card + " " + (theme.type == "dark" ? style.card__dark: style.card__dark)}>
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
