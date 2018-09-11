import { withPrefix } from 'gatsby-link';
import React from 'react';

export default function Presentation({ pathContext }) {
  const authorLinksAsEntries = (pathContext.authorLinks === undefined) ? [ ] : Object.entries(pathContext.authorLinks);
  const authorsWithLinks = authorLinksAsEntries
    .reduce((authorsWithLinks, [ name, link ]) => {
      return authorsWithLinks.replace(name, `<a href="${ link }" rel="noopener" target="_blank">${ name }</a>`);
    }, pathContext.authors);

  return (
    <div>
      <h1>{ pathContext.title }</h1>
      <h2 dangerouslySetInnerHTML={{ __html: authorsWithLinks }}></h2>
      <p>{ pathContext.abstract }</p>
      { pathContext.type === 'paper' && (
        <a download={`${ pathContext.slug }.pdf`} href={withPrefix(`papers/${ pathContext.slug }.pdf`)}>Paper as PDF</a>
      )}
    </div>
  );
}
