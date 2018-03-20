import React from 'react';
import 'font-awesome/less/font-awesome.less';

// https://fontawesome.com/icons

export default function ({ name, color }) {
  if (!color) {
    switch(name) {
      case 'twitter':
      color = '#1ea1f2';
    }
  }
  return <i className={`fa fa-${name}`} style={{ color }}></i>;
}
