import React from 'react';
import NextLink from 'next/link';
import { Code, Download, FileText, Github } from '@geist-ui/icons';
import { Button, Card, Grid, Link, Text, useTheme } from '@geist-ui/core';
export default function Discover() {
  const theme = useTheme();
  return (
    <>
      <div className="center text-center">
        {/* <Text h5>Discover our products.</Text> */}
        <div className="page__content">
          <Grid.Container gap={2} justify="center" wrap="wrap">
            <Grid xs={12} sm={12}>
              <Card shadow height="550px" width="100%">
                <Text h3 style={{ marginTop: 10, marginBottom: 20 }}>
                  Join our community and build with us.
                </Text>
                <Card height="450px" style={{ background: theme.palette.accents_1 }}>
                  <iframe
                    src="https://discord.com/widget?id=964457482586034186&theme=dark"
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                    width={'100%'}
                    height={'425px'}
                    style={{marginBottom: 20}}
                    frameBorder={0}
                  />
                </Card>
              </Card>
            </Grid>
            <Grid xs={12} sm={12}>
              <Card style={{ background: theme.palette.accents_1 }} height="500px" width="100%">
                <Grid.Container gap={1.5}>
                  <Grid xs={12} justify="center">
                    <Card width="100%" hoverable>
                      <Text h4 my={0}>
                        AvdanOS
                      </Text>
                      <Text>
                        Modern and minimalist <strong>command line tool</strong>.
                      </Text>
                      <Card.Footer>
                        <Link color target="_blank" href="https://github.com/azproductions/kookaburra">
                          Visit source code on GitHub.
                        </Link>
                      </Card.Footer>
                    </Card>
                  </Grid>
                  <Grid xs={12} justify="center">
                    <Card width="100%" hoverable>
                      <Text h4 my={0}>
                        UpRelease
                      </Text>
                      <Text>Release software in seconds.</Text>
                      <Card.Footer>
                        <Link color target="_blank" href="https://uprelease.net/?from=azs">
                          Visit the website, and join the waiting list.
                        </Link>
                      </Card.Footer>
                    </Card>
                  </Grid>
                  <Grid xs={12} justify="center">
                    <Card width="100%" hoverable>
                      <Text h4 my={0}>
                        KookaburraSDK
                      </Text>
                      <Text>Software development kit for Kookaburra's CLI.</Text>
                      <Card.Footer>
                        <Link color target="_blank" href="https://github.com/azproductions/KookaburraSDK">
                          Visit source code on GitHub.
                        </Link>
                      </Card.Footer>
                    </Card>
                  </Grid>
                  <Grid xs={12} justify="center">
                    <Card width="100%" hoverable>
                      <Text h4 my={0}>
                        TexturePig
                      </Text>
                      <Text>Texturepack marketplace for Minecraft™.</Text>
                      <Card.Footer>
                        <Link color target="_blank" href="https://texturepig.com">
                          Visit the website, and signup.
                        </Link>
                      </Card.Footer>
                    </Card>
                  </Grid>
                </Grid.Container>
                <div className="text-left" style={{ marginTop: 20, marginBottom: 25 }}>
                  <Link href="/products" underline style={{ textAlign: 'left' }}>
                    Browse all products -&gt;
                  </Link>
                </div>
              </Card>
            </Grid>
          </Grid.Container>
        </div>
      </div>
      <style jsx>{`
        .page__content {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: ${theme.layout.pageWidthWithMargin};
          max-width: 100%;
          margin: 0 auto;
          padding: calc(${theme.layout.unit} * 2) ${theme.layout.pageMargin};
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
