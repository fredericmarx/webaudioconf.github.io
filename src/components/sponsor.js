import React from 'react';
import ExternalLink from './link';

import './sponsor.css';

export default function Sponsor({ link, image, name, type }) {
  return (
    <ExternalLink href={link} className={`sponsor m-${type}`}>
      { image && (
        <img src={image.src} alt={image.alt} className={`sponsor__image ${image.className ? image.className : ''}`} />
      )}
      { name && (
        <span>{name}</span>
      )}
    </ExternalLink>
  )
}
