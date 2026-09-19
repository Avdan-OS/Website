import FeaturesCard from '@/components/FeaturesCard';
import { Text } from '@geist-ui/core';
import Media from '@/components/media';
import { Chiislate } from '@/components/translation/Chiislate';

const Features = () => {
  return (
    <>
      <div className="features-header text-center">
        <Text h1 style={{ letterSpacing: '-0.03em', fontWeight: 500, marginBottom: '12px' }}>
          <Chiislate>Designed around how you think</Chiislate>
        </Text>
        <Text p type="secondary" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
          <Chiislate>
            Explore the core interactions, windowing models, and desktop concepts that define AvdanOS.
          </Chiislate>
        </Text>
      </div>

      <FeaturesCard
        isInverted={false}
        cardTitle="Unified ribbon dock"
        cardDescription="Dock and task manager combined into a single contextual strip that prioritizes your active tools without clutter."
        cardVideo="/assets/clips/dock.mp4"
      />
      <FeaturesCard
        isInverted={true}
        cardTitle="Centralized launcher"
        cardDescription="Access applications, recent documents, and global system search from one responsive quick surface."
        cardVideo="/assets/clips/launch-menu.mp4"
      />
      <FeaturesCard
        isInverted={false}
        cardTitle="Preset window layouts"
        cardDescription="Snap and arrange application windows with layout presets optimized for ultra-wide and laptop displays."
        cardVideo="/assets/clips/layout.mp4"
      />
      <FeaturesCard
        isInverted={true}
        cardTitle="Contextual status dock"
        cardDescription="Monitor running background tasks, media controls, and priority notifications right from the edge of your screen."
        cardVideo="/assets/clips/overpowered-dock.mp4"
      />
      <FeaturesCard
        isInverted={false}
        cardTitle="Streamlined file browser"
        cardDescription="A clean file navigation experience featuring spatial breadcrumbs, instant indexing, and quick previews."
        cardVideo="/assets/clips/new-files.mp4"
      />
      <FeaturesCard
        isInverted={true}
        cardTitle="Fluid drag and drop"
        cardDescription="Move assets, content, and files across split workspaces and background windows in a single gesture."
        cardVideo="/assets/clips/drag-and-drop.mp4"
      />
      <FeaturesCard
        isInverted={false}
        cardTitle="Workspace multitasking"
        cardDescription="Organize distinct projects into isolated virtual workspaces without sacrificing immediate window accessibility."
        cardVideo="/assets/clips/multitask.mp4"
      />
      <FeaturesCard
        isInverted={true}
        cardTitle="Tabbed application windows"
        cardDescription="Group multiple instances or related application views together into tabs, bringing browser ergonomics to native software."
        cardVideo="/assets/clips/tab-os.mp4"
      />
      <FeaturesCard
        isInverted={false}
        cardTitle="Radial context menus"
        cardDescription="Quick contextual action rings designed for immediate mouse and pen input, with fallback to standard lists."
        cardVideo="/assets/clips/context-menu.mp4"
      />
      <FeaturesCard
        isInverted={true}
        cardTitle="System personalization"
        cardDescription="Tailor interface accents, typography sizing, contrast themes, and behavior to fit your workstation setup."
        cardVideo="/assets/clips/personalize.mp4"
      />
      <FeaturesCard
        isInverted={false}
        cardTitle="Dynamic day and night cycles"
        cardDescription="Interface luminance and color balance synchronize automatically with your ambient environment across sunrise, daytime, and night."
        cardVideo="/assets/clips/day-and-night.mp4"
      />

      <section className="community-cta text-center">
        <Text h2 style={{ letterSpacing: '-0.02em', fontWeight: 500, marginBottom: '12px' }}>
          <Chiislate>Open development</Chiislate>
        </Text>
        <Text p type="secondary" style={{ maxWidth: '520px', margin: '0 auto 32px auto' }}>
          <Chiislate>
            AvdanOS is community driven and open source. Contribute code, design concepts, or join the discussion.
          </Chiislate>
        </Text>
        <Media />
      </section>

      <style jsx>{`
        .features-header {
          padding: 80px 24px 32px 24px;
          max-width: 900px;
          margin: 0 auto;
        }
        .community-cta {
          padding: 96px 24px 128px 24px;
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
};

export default Features;
