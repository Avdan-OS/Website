import React from 'react';
import { Avatar, Button, Card, Text, useTheme } from '@geist-ui/core';
import NextLink from 'next/link';
export default function index() {
  const theme = useTheme();
  return (
    <>
      <div className="text-center" id="overview">
        <Text h1 style={{ marginTop: '25px' }}>
          Your PC but even Better.
        </Text>
      </div>
      <div className="center card-container">
        <Card hoverable>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            {theme.type === 'dark' ? (
              <Avatar
                isSquare
                height="50px"
                width="50px"
                style={{ pointerEvents: 'none' }}
                src="assets/logo/render-dark.svg"
              />
            ) : (
              <Avatar
                isSquare
                height="50px"
                width="50px"
                style={{ pointerEvents: 'none' }}
                src="assets/logo/render.svg"
              />
            )}
            <NextLink href="/download">
              <Button style={{ marginLeft: 12 }} shadow type="success">
                Get Started
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
        }
      `}</style>
    </>
  );
}
