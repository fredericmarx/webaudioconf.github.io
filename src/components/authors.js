import React from "react";
import Link from './link';

import "./sponsor.css";

export default function Authors({ authors }) {
  const authorsWithLinks = authors
    .map(({ link, name }) => link ? <Link href={link} key={name}>{name}</Link> : name)
    .reduce((accumulator, author, index, array) => {
      if (index === 0) {
        return author;
      }

      return [ ...accumulator, ...((index === array.length - 1) ? [ ' and ', author ] : [ ', ', author ]) ];
    }, '');

  return (
    <h2>{ authorsWithLinks }</h2>
  );
}
