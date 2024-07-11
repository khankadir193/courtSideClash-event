import React from 'react';
import './Guide.css';

const Guide = ({ onClose }) => {
  return (
    <div className='guide-overlay'>
      <div className='guide-modal'>
        <div className='guide-header'>
          <h3>Guide</h3>
          <button className='guide-close-button' onClick={onClose}>✕</button>
        </div>
        <div className='guide-content'>
          <p>This is the guide content...</p>
        </div>
      </div>
    </div>
  );
};

export default Guide;
