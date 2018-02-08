import React from 'react';

export default function ({ name = 'info' }) {
  const address = `${name}@webaudioconf.com`;
  return <a href={`mailto:${address}`}>{address}</a>;
}