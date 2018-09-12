import React from "react";
import ExternalLink from "./link";

import "./sponsor.css";

export default function Abstract({ abstract }) {
  const abstractWithLineBreaks = abstract
    .split(/\n/)
    .map((paragraph) => [ paragraph, <br/> ])
    .reduce((paragraphs, paragraphAndLineBreak) => [ ...paragraphs, ...paragraphAndLineBreak ], [ ])
    .slice(0, -1);

  return (
    <p>{ abstractWithLineBreaks }</p>
  );
}
