import React from 'react';
import './SectionDivider.css';

const SectionDivider = ({ variant = 'default' }) => {
  return (
    <div className={`section-divider ${variant !== 'default' ? `variant-${variant}` : ''}`}></div>
  );
};

export default SectionDivider;
