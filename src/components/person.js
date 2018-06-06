import React from 'react';
import { withPrefix } from 'gatsby-link';
import Badge from './badge';
import { breakParts } from '../helpers/break-parts';
import './person.css';

export default function ({
  givenName,
  familyName,
  imagePath,
  role,
  tag,
  children
}) {
  const badge = tag ? <Badge style={{ marginLeft: '10px' }}>{ tag }</Badge> : null;
  const roleHeading = role ? <h4>{ breakParts(role.split('/'), '/') }</h4> : null;
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
        <h2 style={{ marginBottom: role ? 0 : undefined }}>
          <span itemProp="givenName">{givenName}</span> <span itemProp="familyName">{familyName}</span>{badge}
        </h2>
        {roleHeading}
        {text}
      </div>
      {image}
    </div>
  );
}
