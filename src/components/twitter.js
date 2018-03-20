import React from 'react';
import Icon from './icon';
import Link from './link';

export default function ({ account = 'webaudioconf' }) {
  return (
    <Link href={`https://twitter.com/${account}`}>
      <span style={{ whiteSpace: 'nowrap' }}><Icon name='twitter'/>{`@${account}`}</span>
    </Link>
  );
}
