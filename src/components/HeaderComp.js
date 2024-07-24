import React, { useState } from 'react';
import './Header.css';
import LangDropDownComp from './LangDropDownComp';
import infoLangMark from '../assests/infoQuestionMark.gif';
import Guide from '../popup/Guide';  // Import the Guide component
import TickerTape from './TickerTape';
import GameComp from './GameComp';
import GuideRewardComp from './GuideRewardComp';

const HeaderComp = () => {
  const [showGuide, setShowGuide] = useState(false);

  const toggleGuide = () => {
    setShowGuide(!showGuide);
  };

  const closeGuide = () => {
    setShowGuide(false);
  };

  return (
    <>
    {/* <TickerTape /> */}
      <div className='Header'>
        <LangDropDownComp />
        <TickerTape />
        {/* chances section */}
        {/* <div className='chance-container'>
          <div className='throws-left'>
            <span>Throw Left :</span>
            <span>99</span>
          </div>
          <div className='chances'>
            <span>Chances :</span>
            <input type='number' max="999" placeholder='TYPE HERE' />
          </div>
        </div> */}

        <GameComp />


        {/* <LangDropDownComp /> */}
        {/* <button className='guideBtn' onClick={toggleGuide}>
          <img src={infoLangMark} alt='infoLangMark' />
        </button> */}
        {/* {showGuide && <Guide onClose={closeGuide} />} Conditionally render the Guide component */}

        {/* new ways guide reward component popup */}
        <GuideRewardComp />
      </div>
    </>

  );
};

export default HeaderComp;
