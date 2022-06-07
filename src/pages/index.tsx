import { Button, Card, Text, Spacer, Image, ButtonGroup } from '@geist-ui/core';
import NextLink from 'next/link';

const index = () => {
  return (
    <>
      <div className="text-center">
        <Text className="header" h1 style={{ marginTop: '25px' }}>
          Your PC but even better.
        </Text>
        <div className="mx-auto" style={{ width: '80%', height: '100%' }}>
          <Card shadow>
            <Image draggable="false" src="/assets/marketing/header.png" height="100%" width="100%" />
          </Card>
        </div>
      </div>
      <Spacer h={2} />
      <div className="center card-container">
        <Card hoverable>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <ButtonGroup>
              <NextLink href="/demo">
                <Button shadow type="secondary" margin="10px">
                  Try in your browser
                </Button>
              </NextLink>
              <NextLink href="/downloads">
                <Button shadow type="success" margin="10px">
                  Download Now
                </Button>
              </NextLink>
            </ButtonGroup>
          </div>{' '}
        </Card>
      </div>
      <Spacer h={2} />
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
