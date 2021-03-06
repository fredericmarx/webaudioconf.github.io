import React from 'react';

export function breakParts(parts, seperator) {
  const l = parts.length;
  return parts.map((a, i) => {
    return <span key={`${i}${a}`} style={{ display: 'inline-block' }}>{`${a}${i < l - 1 ? seperator : ''}`}</span>;
  });
}
