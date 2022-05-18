import React from 'react';
import { Grid, Card } from '@geist-ui/core';
import { GitHub, Linkedin, Youtube } from 'react-feather';
import { RiTwitterFill, RiTwitterLine } from 'react-icons/ri';
import { AiOutlineWindows, AiOutlineReddit, AiOutlineGithub } from 'react-icons/ai';
function Media() {
  return (
    <Grid.Container style={{ marginBottom: -40 }} gap={2} justify="center">
      <Grid>
        <a href="https://twitter.com/az_software">
          <Card shadow>
            <RiTwitterLine size={26}></RiTwitterLine>
          </Card>
        </a>
      </Grid>
      <Grid>
        <a href="https://twitter.com/TeamAZSoftware">
          <Card shadow>
            <RiTwitterFill size={26}></RiTwitterFill>
          </Card>
        </a>
      </Grid>
      <Grid>
        <a href="https://www.linkedin.com/company/azsoftware-org/">
          <Card shadow>
            <Linkedin></Linkedin>
          </Card>
        </a>
      </Grid>
      <Grid>
        <a href="https://github.com/azproductions">
          <Card shadow>
            <AiOutlineGithub size={26}></AiOutlineGithub>
          </Card>
        </a>
      </Grid>
      <Grid>
        <a href="https://www.youtube.com/channel/UCGsb29I0qJD_iry1C92r2ww">
          <Card shadow>
            <Youtube></Youtube>
          </Card>
        </a>
      </Grid>
      <Grid>
        <a href="https://www.microsoft.com/en-us/p/kookaburra/9pcq0dhdtzpm#activetab=pivot:overviewtab">
          <Card shadow>
            <AiOutlineWindows size={26}></AiOutlineWindows>
          </Card>
        </a>
      </Grid>
      <Grid>
        <a href="https://reddit.com/r/azsoftware">
          <Card shadow>
            <AiOutlineReddit size={26}></AiOutlineReddit>
          </Card>
        </a>
      </Grid>
    </Grid.Container>
  );
}

export default Media;
