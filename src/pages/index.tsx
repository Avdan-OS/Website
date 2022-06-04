import { Button, Card, Text, Image } from '@geist-ui/core';
import NextLink from 'next/link';

const index = () => {
  return (
    <>
      <div className="text-center">
        <Text className="header" h1 style={{ marginTop: '25px' }}>
          Your PC but even better.
        </Text>
        <div className="mx-auto" style={{ width: '60%' }}>
          <Card shadow hoverable>
            <Image draggable="false" src="/assets/marketing/header.png" height="100%" width="100%" />
          </Card>
        </div>
      </div>
      <div className="center card-container">
        <Card hoverable>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <NextLink href="/downloads">
              <Button style={{ marginLeft: 12 }} shadow type="success">
                Download Now
              </Button>
            </NextLink>
          </div>
        </Card>
      </div>
      <style jsx>{`
        .card-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          max-width: 500%;
          padding: 0;
          border-top: none !important;
        }
        .header {
          font-size: 72px;
          background: -webkit-linear-gradient(#eee, #333);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </>
  );
};
export default index;
