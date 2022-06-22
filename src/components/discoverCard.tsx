import { Card, Grid, Link, Text, useTheme } from '@geist-ui/core';
import style from '../styles/components/cards.module.css';

interface DiscoverCardProps {
  title: string;
  description: string;
  link: string;
}

const discoverCard = ({ title, description, link }: DiscoverCardProps) => {
  const theme = useTheme();
  return (
    <Grid xs={12} justify="center">
      <Link color target="_blank" href={link}>
        <Card width="100%" className={style.card + ' ' + (theme.type == 'dark' ? style.card__dark : style.card__white)}>
          <Text h4>{title}</Text>
          <Text>{description}</Text>
        </Card>
      </Link>
    </Grid>
  );
};

export default discoverCard;
