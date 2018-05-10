import React from 'react';
import Icon from './icon';
import Link from './link';

export default function ({ account }) {
  return (
    <Link href={`https://www.linkedin.com/in/${account}`}>
      <span style={{ whiteSpace: 'nowrap' }}><Icon name='linkedin'/>{account}</span>
    </Link>
  );
}
