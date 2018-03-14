import React from 'react';

export default function ({ style, children }) {
  return <span style={{
    color: '#fff',
    backgroundColor: '#1eaedb',
    display: 'inline-block',
    padding: '.25em .4em',
    fontSize: '45%',
    fontWeight: 600,
    lineHeight: 1,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'text-top',
    borderRadius: '.25rem',
    ...style
  }}>{ children }</span>;
}
