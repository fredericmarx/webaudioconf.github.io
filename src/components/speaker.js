import React from 'react';
import { withPrefix } from 'gatsby-link';
import Badge from './badge';
import './speaker.css';

export default function({
  givenName,
  familyName,
  imagePath,
  keynote=false,
  children
}) {
  const keynoteBadge = keynote ? <Badge style={{ marginLeft: '10px' }}>Keynote</Badge> : null;
  const text = (
    <div className={imagePath ? 'eight columns' : 'twelve columns'}>
      <h2><span itemProp="givenName">{ givenName }</span> <span itemProp="familyName">{ familyName }</span>{ keynoteBadge }</h2>
      { children }
    </div>
  );
  const image = imagePath ? (
    <div className='four columns'>
      <img src={withPrefix(imagePath)} alt={`photo of ${givenName} ${familyName}`} className='img-responsive img-rounded' itemProp="image" />
    </div>
  ) : null;

  return (
    <div className='row speaker' itemScope itemType="http://schema.org/Person">
      { text }
      { image }
    </div>
  );
}
