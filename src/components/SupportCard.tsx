import { Button, Card, useTheme, Text, Grid } from '@geist-ui/core';
import { Chiislate } from './translation/Chiislate';
import { FaDiscord, FaInstagram, FaTwitter, FaReddit } from 'react-icons/fa';
import { AiFillYoutube, AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';

interface SupportCardProps {
  icon: string;
  title: string;
  link: string;
  mobileLayout?: boolean;
}

const SupportCard = ({ icon, title, link }: SupportCardProps) => {
  const theme = useTheme();

  const iconSelector = () => {
    const iconStyle = { margin: '0 auto', color: theme.palette.foreground };
    switch (icon) {
      case 'Twitter':
        return <FaTwitter size={36} style={iconStyle} />;
      case 'GitHub':
        return <AiFillGithub size={36} style={iconStyle} />;
      case 'YouTube':
        return <AiFillYoutube size={36} style={iconStyle} />;
      case 'Discord':
        return <FaDiscord size={36} style={iconStyle} />;
      case 'Reddit':
        return <FaReddit size={36} style={iconStyle} />;
      case 'Instagram':
        return <FaInstagram size={36} style={iconStyle} />;
      default:
        return null;
    }
  };

  return (
    <Grid xs={24} sm={12} md={8}>
      <Card
        className="support-card"
        style={{
          background: theme.type === 'dark' ? '#19191b' : '#ffffff',
          border: 1px solid \,
          borderRadius: '12px',
          padding: '24px 16px',
          textAlign: 'center',
          width: '100%'
        }}
      >
        <div style={{ height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {iconSelector()}
        </div>
        <Text h4 style={{ margin: '12px 0 16px 0', fontWeight: 500 }}>
          <Chiislate>{title}</Chiislate>
        </Text>
        <Link href={link} target="_blank" rel="noreferrer" passHref legacyBehavior>
          <Button type="default" scale={0.9} width="100%">
            <Chiislate>Open</Chiislate>
          </Button>
        </Link>
      </Card>
    </Grid>
  );
};

export default SupportCard;