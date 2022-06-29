import { TranslatableText } from '@/components/locale/TranslatableText';
import Media from '@/components/media';
import SupportCardBeta from '@/components/SupportCardBeta';
import { Text, Input, Divider, Spacer } from '@geist-ui/core';
import { Search } from 'react-feather';

const Support = () => {
  return (
    <div style={{ margin: '1.5rem' }}>
      <Text className="text-center" h1>
        <TranslatableText>AvdanOS Support Articles</TranslatableText>
      </Text>
      <Input scale={4 / 3} className="text-center" icon={<Search />} placeholder="Search Support Articles" />
      <Divider h="1px" mb={5} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <SupportCardBeta
          title="Lorem Ipsum dolor sit"
          urlToPost="/"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, laborum expedita ipsa alias enim possimus, iure magnam maiores, eveniet deleniti praesentium sapiente neque fuga? Adipisci modi debitis sapiente ipsum corrupti."
        />
        <SupportCardBeta
          title="Lorem Ipsum dolor sit"
          urlToPost="/"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, laborum expedita ipsa alias enim possimus, iure magnam maiores, eveniet deleniti praesentium sapiente neque fuga? Adipisci modi debitis sapiente ipsum corrupti."
        />
        <SupportCardBeta
          title="Lorem Ipsum dolor sit"
          urlToPost="/"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, laborum expedita ipsa alias enim possimus, iure magnam maiores, eveniet deleniti praesentium sapiente neque fuga? Adipisci modi debitis sapiente ipsum corrupti."
        />
        <SupportCardBeta
          title="Lorem Ipsum dolor sit"
          urlToPost="/"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, laborum expedita ipsa alias enim possimus, iure magnam maiores, eveniet deleniti praesentium sapiente neque fuga? Adipisci modi debitis sapiente ipsum corrupti."
        />
        <SupportCardBeta
          title="Lorem Ipsum dolor sit"
          urlToPost="/"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, laborum expedita ipsa alias enim possimus, iure magnam maiores, eveniet deleniti praesentium sapiente neque fuga? Adipisci modi debitis sapiente ipsum corrupti."
        />
        <SupportCardBeta
          title="Lorem Ipsum dolor sit"
          urlToPost="/"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, laborum expedita ipsa alias enim possimus, iure magnam maiores, eveniet deleniti praesentium sapiente neque fuga? Adipisci modi debitis sapiente ipsum corrupti."
        />
        <SupportCardBeta
          title="Lorem Ipsum dolor sit"
          urlToPost="/"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, laborum expedita ipsa alias enim possimus, iure magnam maiores, eveniet deleniti praesentium sapiente neque fuga? Adipisci modi debitis sapiente ipsum corrupti."
        />
        <SupportCardBeta
          title="Lorem Ipsum dolor sit"
          urlToPost="/"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, laborum expedita ipsa alias enim possimus, iure magnam maiores, eveniet deleniti praesentium sapiente neque fuga? Adipisci modi debitis sapiente ipsum corrupti."
        />
      </div>
      <Spacer h={5} />
      <Text className="text-center" h4>
        <TranslatableText>Ask Our Community</TranslatableText>
      </Text>
      <Spacer h={1} />

      <Media />
    </div>
  );
};
export default Support;
