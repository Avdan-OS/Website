import { Card, Grid, Link, Text } from '@geist-ui/core';

interface DiscoverCardProps {
  title: string;
  description: string;
  link: string;
}

const discoverCard = ({ title, description, link }: DiscoverCardProps) => {
  return (
    <Grid xs={12} justify="center">
      <Card width="100%" hoverable>
        <Text h4>{title}</Text>
        <Text>{description}</Text>
        <Card.Footer>
          <Link color target="_blank" href={link}>
            Visit source code on GitHub.
          </Link>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default discoverCard;
