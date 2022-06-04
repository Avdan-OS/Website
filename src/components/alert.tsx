import { Link, useTheme, Grid, Card } from '@geist-ui/core';
export const Alert = () => {
  const theme = useTheme();
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: `<!--googleoff: index-->` }} />
      <Grid style={{ paddingInline: 50, pointerEvents: 'none', marginTop: '6px' }} height="34px">
        <Card style={{ background: theme.palette.accents_1, height: '100%' }} hoverable>
          <p style={{ fontSize: 14, marginTop: -13, height: '100%' }}>
            <strong>Join the Community</strong> — AvdanOS is in development.{' '}
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
