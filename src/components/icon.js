import React from 'react';
import 'font-awesome/less/font-awesome.less';

// https://fontawesome.com/icons

export default function ({ name, color }) {
  if (!color) {
    switch(name) {
      case 'twitter':
        color = '#1ea1f2';
        break;
      default:
        color = '#000000';
        break;
    }
  }
  return <i className={`fa fa-${name}`} style={{ color, marginRight: '0.15em' }}></i>;
}
