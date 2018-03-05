import React from 'react';

export default function ({ href, className, children }) {
  return <a className={className} target="_blank" href={href} rel="noopener">{children}</a>;
}
