import { Dot, Image, Link, Tag } from '@geist-ui/core';
import { ComponentProps, FC, useState } from 'react';
import { useTheme } from '@geist-ui/core';
// import axios from 'axios';

// interface Request {
//   dot: string;
//   status: number;
// }

// let getSystemStatus = async () => {
//   const response = await axios.get('https://www.azsoftware.eu.org/cdn/status.json', { transformResponse: (r) => r });
//   let obj: Request = JSON.parse(response.data);
//   console.log(obj.dot);
//   console.log(obj.status);
// }

function Status({}) {
  // getSystemStatus();
  return (
    <Tag type="secondary" style={{ color: colorSwitch() }}>
      Status:{' '}
      <Link target="_blank" underline color href="https://dns.azsoftware.org"> {/* style={{ color: '#f5a623'}} */}
        <Dot type="success" id="status" /> {/* type="warning" */}
        All systems online
      </Link>
    </Tag>
  );
}

function colorSwitch() {
  const theme = useTheme();
  if (theme.type == 'light') return 'black';
  else return 'white';
}

export default Status;
