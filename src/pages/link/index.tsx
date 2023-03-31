import Logo from '@/components/logo';
import Media from '@/components/media';
import { Translatable } from '@/components/translation/Translatable';
import { Spacer, Text } from '@geist-ui/core';

const index = () => {
  return (
    <div className="text-center" style={{ height: '80vh' }}>
      <Spacer h="calc(40vh - 150px)" />
      <Text className="header" h1>
        <Logo />
        <Translatable>Under development</Translatable>
      </Text>
      <Spacer h="15px" />
      <Text>
        <Translatable>
          This project wouldn't be possible without the community's contributions. Join us and help!
        </Translatable>
      </Text>
      <Spacer h="20px" />
      <Media />
    </div>
  );
};

export default index;
