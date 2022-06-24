import { Text, Card, Divider } from '@geist-ui/core';
import NextLink from 'next/link';
interface SupportCardProps {
  title: string;
  description: string;
  urlToPost: string;
}

const SupportCard = ({ title, description, urlToPost }: SupportCardProps) => {
  return (
    <Card width="400px" mx={1} my={1}>
      <Card.Content>
        <Text b my={0}>
          {title}
        </Text>
      </Card.Content>
      <Divider h="1px" my={0} />
      <Card.Content>
        <Text>
          {description.substring(0, 150)} {''}
          {<NextLink href={urlToPost}>read more</NextLink>}
        </Text>
      </Card.Content>
    </Card>
  );
};

export default SupportCard;
