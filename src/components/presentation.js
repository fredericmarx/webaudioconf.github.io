import { withPrefix } from 'gatsby-link';
import React from 'react';
import Abstract from './abstract';
import Link from './link';

export default function Presentation({ pathContext }) {
  const authors = pathContext.authors
    .map(({ link, name }) => link ? <Link href={link} key={name}>{name}</Link> : name)
    .reduce((accumulator, author, index, array) => {
      if (index === 0) {
        return author;
      }

      return [ ...accumulator, ...((index === array.length - 1) ? [ ' and ', author ] : [ ', ', author ]) ];
    }, '');

  return (
    <div>
      <h1>{ pathContext.title }</h1>
      <h2>{ authors }</h2>
      <Abstract abstract={pathContext.abstract}></Abstract>
      { pathContext.type === 'paper' && (
        <a download={`${ pathContext.slug }.pdf`} href={withPrefix(`papers/${ pathContext.slug }.pdf`)}>Paper as PDF</a>
      )}
    </div>
  );
}
