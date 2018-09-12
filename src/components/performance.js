import { withPrefix } from 'gatsby-link';
import React from 'react';
import Abstract from './abstract';
import Authors from './authors';

export default function Performance({ pathContext }) {
  return (
    <div>
      <h1>{ pathContext.title }</h1>
      <Authors authors={pathContext.authors}></Authors>
      <Abstract abstract={pathContext.abstract}></Abstract>
    </div>
  );
}
