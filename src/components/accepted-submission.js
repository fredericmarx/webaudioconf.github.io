import { withPrefix } from 'gatsby-link';
import React from 'react';
import Abstract from './abstract';
import Authors from './authors';

export default function AcceptedSubmission({ pathContext }) {
  return (
    <div>
      <h1>{ pathContext.title }</h1>
      <Authors authors={pathContext.authors}></Authors>
      <Abstract abstract={pathContext.abstract}></Abstract>
      { (pathContext.type === 'paper' || pathContext.type === 'poster') && (
        <a download={`${ pathContext.slug }.pdf`} href={withPrefix(`papers/${ pathContext.slug }.pdf`)}>Paper as PDF</a>
      )}
    </div>
  );
}
