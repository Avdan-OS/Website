import Media from '@/components/media';
import { TranslatableText } from '@/components/translation/TranslatableText';
import { Spacer, Text } from '@geist-ui/core';

const index = () => {
  return (
    <div className="text-center" style={{ height: '80vh' }}>
      <Spacer h="calc(40vh - 150px)" />
      <Text className="header" h1>
        <TranslatableText>Under development</TranslatableText>
      </Text>
      <Spacer h="35px" />
      <Text>
        <TranslatableText>
          This project wouldn't be possible without the community's contributions. Join us and help!
        </TranslatableText>
      </Text>
      <Spacer h="20px" />
      <Media />
    </div>
  );
};

export default index;
