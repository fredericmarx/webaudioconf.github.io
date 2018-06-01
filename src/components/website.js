import React from 'react';
import shortenUrl from 'shorten-url';
import Icon from './icon';
import Link from './link';

export default function ({ url }) {
  const truncatedUrl = shortenUrl(url, 60);
  return (
    <Link href={url}>
      <span><Icon name='globe'/>{truncatedUrl}</span>
    </Link>
  );
}
