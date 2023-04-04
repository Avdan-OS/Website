import Logo from '@/components/logo';
import Media from '@/components/media';
import { Chiislate } from '@/components/translation/Chiislate';
import { Spacer, Text } from '@geist-ui/core';

const index = () => {
  return (
    <div className="text-center" style={{ height: '80vh' }}>
      <Spacer h="calc(40vh - 150px)" />
      <Text className="header" h1>
        <Logo />
        <Chiislate>Under development</Chiislate>
      </Text>
      <Spacer h="15px" />
      <Text>
        <Chiislate>
          This project wouldn't be possible without the community's contributions. Join us and help!
        </Chiislate>
      </Text>
      <Spacer h="20px" />
      <Media />
    </div>
  );
};

export default index;
