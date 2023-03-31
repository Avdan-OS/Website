import { Button, Card, Spacer, useTheme, Tag, Grid } from '@geist-ui/core';
import { Translatable } from './translation/Translatable';
import { FaDiscord, FaInstagram, FaTwitter, FaReddit } from 'react-icons/fa';
import { AiFillYoutube, AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';

interface SupportCardProps {
  icon: string;
  title: string;
  link: string;
  mobileLayout: boolean;
}

const SupportCard = ({ icon, title, link, mobileLayout }: SupportCardProps) => {
  const iconSelector = () => {
    switch (icon) {
      case 'Twitter':
        return <FaTwitter display="block" size={150} style={{ margin: 'auto' }} />;
      case 'GitHub':
        return <AiFillGithub display="block" size={150} style={{ margin: 'auto' }} />;
      case 'YouTube':
        return <AiFillYoutube display="block" size={150} style={{ margin: 'auto' }} />;
      case 'Discord':
        return <FaDiscord display="block" size={150} style={{ margin: 'auto' }} />;
      case 'Reddit':
        return <FaReddit display="block" size={150} style={{ margin: 'auto' }} />;
      case 'Instagram':
        return <FaInstagram display="block" size={150} style={{ margin: 'auto' }} />;
    }
  };
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
        {iconSelector()}
        <Spacer />
        <Tag>
          <Translatable>{title}</Translatable>
        </Tag>
        <Spacer />
        <Link href={link} target="_blank" rel="noreferrer">
          <Button type="success" width={0.7} shadow margin="9px">
            <Translatable>Visit</Translatable>
            {mobileLayout}
          </Button>
        </Link>
        <Spacer h={3} />
      </Card>
    </Grid>
  );
};

export default SupportCard;
