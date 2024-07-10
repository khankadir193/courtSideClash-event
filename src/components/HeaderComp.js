import React, { useState } from 'react';
import './Header.css';
import LangDropDownComp from './LangDropDownComp';
import infoLangMark from '../assests/infoQuestionMark.gif';
import Guide from '../popup/Guide';  // Import the Guide component

const HeaderComp = () => {
  const [showGuide, setShowGuide] = useState(false);

  const toggleGuide = () => {
    setShowGuide(!showGuide);
  };

  return (
    <div className='Header'>
      <LangDropDownComp />
      <button onClick={toggleGuide}>
        <img src={infoLangMark} alt='infoLangMark' />
      </button>
      {showGuide && <Guide />} {/* Conditionally render the Guide component */}
    </div>
  );
};

export default HeaderComp;
