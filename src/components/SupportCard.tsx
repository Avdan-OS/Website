import { Button, Card, Image, Spacer, useTheme, Tag, Grid } from '@geist-ui/core';
import { TranslatableText } from './locale/TranslatableText';

interface SupportCardProps {
  icon: string;
  title: string;
  link: string;
  mobileLayout: boolean;
}

const SupportCard = ({ icon, title, link, mobileLayout }: SupportCardProps) => {
  const theme = useTheme();
  return (
    <Grid xs={mobileLayout ? 15 : 8} style={{ width: '60%' }}>
      <Card
        style={{ background: theme.palette.background }}
        hoverable
        paddingTop="40px"
        paddingBottom="9px"
        width="95%"
      >
        <Image
          alt={title}
          draggable="false"
          src={`/assets/icons/${icon}${theme.type === 'light' ? '_light' : ''}.png`}
          height="90%"
          width="150px"
        />
        <Tag>
          <TranslatableText>{title}</TranslatableText>
        </Tag>
        <Spacer />
        <a href={link} target="_blank" rel="noreferrer">
          <Button type="success" width={0.7} shadow margin="9px">
            <TranslatableText>Visit</TranslatableText>
            {mobileLayout}
          </Button>
        </a>
        <Spacer h={3} />
      </Card>
    </Grid>
  );
};

export default SupportCard;
