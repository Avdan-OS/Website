import { Grid, Card } from '@geist-ui/core';
import { RiTwitterFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub } from 'react-icons/ai';
import { FaRedditAlien, FaDiscord } from 'react-icons/fa';

const Media = () => {
  return (
    <Grid.Container gap={1} justify="center">
      <Grid>
        <a href="https://twitter.com/avdan_os" target="_blank">
          <Card shadow>
            <RiTwitterFill size={26} />
          </Card>
        </a>
      </Grid>
      <Grid>
        <a href="https://github.com/Avdan-OS/" target="_blank">
          <Card shadow>
            <AiFillGithub size={26} />
          </Card>
        </a>
      </Grid>
      <Grid>
        <a href="https://www.youtube.com/c/AvdanOSDeveloper" target="_blank">
          <Card shadow>
            <AiFillYoutube size={26} />
          </Card>
        </a>
      </Grid>
      <Grid>
        <a href="https://discord.gg/avdanos" target="_blank">
          <Card shadow>
            <FaDiscord size={26} />
          </Card>
        </a>
      </Grid>
      <Grid>
        <a href="https://www.reddit.com/r/AvdanOS/" target="_blank">
          <Card shadow>
            <FaRedditAlien size={26} />
          </Card>
        </a>
      </Grid>
    </Grid.Container>
  );
};

export default Media;
