import React, { useState } from 'react';
import './Header.css';
import LangDropDownComp from './LangDropDownComp';
import infoLangMark from '../assests/infoQuestionMark.gif';
import Guide from '../popup/Guide';  // Import the Guide component
import TickerTape from './TickerTape';
import GameComp from './GameComp';
import { RewardHistory } from '../popup/RewardHistory';



const HeaderComp = () => {
  const [showGuide, setShowGuide] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showRewardHistory, setShowRewardHistory] = useState(0);

  const toggleGuide = () => {
    setShowGuide(!showGuide);
  };

  const closeGuide = () => {
    setShowGuide(false);
  };

  const toggleRewardsHistory = () => {
    setShowRewardHistory(0);
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
        <button className='guideBtn' onClick={toggleGuide}>
          <img src={infoLangMark} alt='infoLangMark' />
        </button>
        <button
          className="rewardBtn"
          onClick={() => setShowRewardHistory(1)}
          disabled={isDisabled}
        ></button>
        {showGuide && <Guide onClose={closeGuide} />} {/* Conditionally render the Guide component */}
        {showRewardHistory ? <RewardHistory /> : ""}
      </div>
    </>

  );
};

export default HeaderComp;
