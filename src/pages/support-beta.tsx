import { Chiislate } from '@/components/translation/Chiislate';
import SupportCardBeta from '@/components/SupportCardBeta';
import { Text, Input, Divider } from '@geist-ui/core';
import { Search } from 'react-feather';

const Support = () => {
  return (
    <div style={{ maxWidth: '1040px', margin: '48px auto', padding: '0 24px' }}>
      <Text className="text-center" h1 style={{ letterSpacing: '-0.03em', fontWeight: 500, marginBottom: '16px' }}>
        <Chiislate>Knowledge base and frequently asked questions</Chiislate>
      </Text>
      <div style={{ maxWidth: '480px', margin: '0 auto 32px auto' }}>
        <Input width="100%" scale={1.1} icon={<Search size={16} />} placeholder="Search articles..." />
      </div>
      <Divider mb={3} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        <SupportCardBeta
          title="What is AvdanOS?"
          urlToPost="/"
          description="AvdanOS is an open-source concept operating system designed around fluid windowing and a unified dock."
        />
        <SupportCardBeta
          title="When will an installable ISO be available?"
          urlToPost="/downloads"
          description="Architecture design and desktop environment builds are ongoing. Track progress in the official repo."
        />
        <SupportCardBeta
          title="How do I run the Web Demo?"
          urlToPost="/demo"
          description="Visit the /demo page directly in Chrome, Firefox, Safari, or Edge to experience the interactive prototype."
        />
        <SupportCardBeta
          title="Is AvdanOS open source under GPL?"
          urlToPost="/docs"
          description="All official repositories are licensed under the GNU General Public License v3.0."
        />
        <SupportCardBeta
          title="Can I contribute code or translations?"
          urlToPost="https://github.com/Avdan-OS/Website"
          description="We welcome community contributions for features, UI refinements, and localizations."
        />
        <SupportCardBeta
          title="How does window grouping work?"
          urlToPost="/features"
          description="AvdanOS allows multiple application windows to snap and merge into tabbed workspaces."
        />
      </div>
    </div>
  );
};

export default Support;