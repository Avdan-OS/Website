import { Link, useTheme, Grid, Card } from '@geist-ui/core';
export function Alert({ ...imgProps }) {
  const theme = useTheme();
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: `<!--googleoff: index-->` }} />
      <Grid style={{ paddingInline: 50, pointerEvents: 'none', marginTop: '6px' }} height="34px">
        <Card style={{ background: theme.palette.accents_2, height: '100%' }} hoverable>
          <p style={{ fontSize: 14, marginTop: -13, height: '100%' }}>
            <strong>Build with us</strong> — A UI-framework, built for speed and ease-of-use.{' '}
            <Link style={{ pointerEvents: 'stroke' }} block underline href="/vacaro">
              Vacaro
            </Link>
          </p>
        </Card>
      </Grid>
      <div dangerouslySetInnerHTML={{ __html: `<!--googleon: index-->` }} />
    </div>
  );
}
