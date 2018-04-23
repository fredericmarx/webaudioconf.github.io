import React from 'react';
import { withPrefix } from 'gatsby-link';
import Badge from './badge';
import './person.css';

export default function ({
  givenName,
  familyName,
  imagePath,
  role,
  children
}) {
  const keynoteBadge = role ? <Badge style={{ marginLeft: '10px' }}>{ role }</Badge> : null;
  const text = (
    <div className='person__content'>
      {children}
    </div>
  );
  const image = imagePath ? (
    <div className='person__photo'>
      <img src={withPrefix(imagePath)} alt={`photo of ${givenName} ${familyName}`} className='img-responsive img-rounded' itemProp="image" />
    </div>
  ) : null;

  return (
    <div className='row person' itemScope itemType="http://schema.org/Person">
      <div className='person__textContent'>
        <h2>
          <span itemProp="givenName">{givenName}</span> <span itemProp="familyName">{familyName}</span>{keynoteBadge}
        </h2>
        {text}
      </div>
      {image}
    </div>
  );
}
