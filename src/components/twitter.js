import React from 'react';

export default function ({ account = 'webaudioconf' }) {
  return <a href={`https://twitter.com/${account}`} target="_blank" rel="noopener">{`@${account}`}</a>;
}