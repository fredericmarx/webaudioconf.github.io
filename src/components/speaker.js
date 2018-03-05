import React from 'react';
import { withPrefix } from 'gatsby-link';
import './speaker.css';

export default function({
  name,
  imagePath,
  children
}) {
  const text = (
    <div className={imagePath ? 'eight columns' : 'twelve columns'}>
      <h2>{ name }</h2>
      { children }
    </div>
  );
  const image = imagePath ? (
    <div className='four columns'>
      <img src={withPrefix(imagePath)} alt={name} className='img-responsive img-rounded' />
    </div>
  ) : null;

  return (
    <div className='row speaker'>
      { text }
      { image }
    </div>
  );
}
