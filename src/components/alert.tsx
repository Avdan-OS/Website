import { Link, useTheme, Grid, Card } from '@geist-ui/core';

export const Alert = () => {
  const theme = useTheme();
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: `<!--googleoff: index-->` }} />
      <Grid style={{ paddingInline: 50, pointerEvents: 'none', display: 'block' }}>
        <Card style={{ background: theme.palette.accents_1 }} hoverable>
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
      <div dangerouslySetInnerHTML={{ __html: `<!--googleon: index-->` }} />
    </div>
  );
};
