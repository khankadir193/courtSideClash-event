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

  const closeGuide = () => {
    setShowGuide(false);
  };

  return (
    <div className='Header'>
      {/* <LangDropDownComp /> */}
      <button onClick={toggleGuide}>
        <img src={infoLangMark} alt='infoLangMark' />
      </button>
      {showGuide && <Guide onClose={closeGuide} />} {/* Conditionally render the Guide component */}
      <div className='chance-container'>
          <div className='throws-left'>
            Throws Left:{}
          </div>
          <div className='throws-sent'>

          </div>
        </div>
    </div>
  );
};

export default HeaderComp;
