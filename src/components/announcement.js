import React from 'react';
import './announcement.css';

export default function ({ children }) {
  return (
    <div className="announcement">
      {children}
    </div>
  );
}