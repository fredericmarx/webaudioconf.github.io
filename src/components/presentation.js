import { withPrefix } from 'gatsby-link';
import React from 'react';

export default function Presentation({ pathContext }) {
  return (
    <div>
      <h1>{ pathContext.title }</h1>
      <p>{ pathContext.abstract }</p>
      { pathContext.type === 'paper' && (
        <a download={`${ pathContext.slug }.pdf`} href={withPrefix(`papers/${ pathContext.slug }.pdf`)}>Paper as PDF</a>
      )}
    </div>
  );
}
