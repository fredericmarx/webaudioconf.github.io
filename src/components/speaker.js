import React from 'react';
import { withPrefix } from 'gatsby-link';
import './speaker.css';

export default function({
  givenName,
  familyName,
  imagePath,
  children
}) {
  const text = (
    <div className={imagePath ? 'eight columns' : 'twelve columns'}>
      <h2><span itemProp="givenName">{ givenName }</span> <span itemProp="familyName">{ familyName }</span></h2>
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
