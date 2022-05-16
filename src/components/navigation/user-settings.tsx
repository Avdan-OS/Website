import React from 'react';
import { Popover, Link, Badge, Keyboard } from '@geist-ui/core';
import { useTheme } from '@geist-ui/core';
import * as Icon from '@geist-ui/icons'
import { usePrefers } from '@/lib/use-prefers';


const UserSettings: React.FC = () => {
  const theme = useTheme();
  return ( <>
    {/* <Popover.Item title>
      <span>User Settings</span>
    </Popover.Item> */}
    {/* <Popover.Item>
      <Link href="#">Teams</Link>
    </Popover.Item>
    <Popover.Item>
      <Link href="https://github.com/ofekashery/react-dashboard-design">Settings</Link>
    </Popover.Item>
    <Popover.Item line />
    <Popover.Item>
      <Link href="#">Logout</Link>
      <Icon.LogOut size={16} color={theme.palette.accents_5}/>
    </Popover.Item> */}

    {/* <Popover.Item title>
        <span>User Settings</span>
    </Popover.Item> */}

  <Popover.Item>
    <Link href="/">Dashboard</Link>
  </Popover.Item>

  <Popover.Item line />

  <Popover.Item>
  <Link href="#">New Team</Link>
    <Icon.Plus size={18} style={{marginLeft: 60, alignItems: "left"}} />
  </Popover.Item>

  <Popover.Item>
    <Link href="#">Settings</Link>
  </Popover.Item>

  <Popover.Item line />

  <Popover.Item>
    <Link href="#">Settings</Link>  <Keyboard style={{marginLeft: 60, alignItems: "left"}} command>s</Keyboard>
  </Popover.Item>

  <Popover.Item>
    <span>Logout</span>
  </Popover.Item>
  </>);
}

export default UserSettings;
