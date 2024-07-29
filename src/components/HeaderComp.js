import React, { useState } from 'react';
import './Header.css';
import LangDropDownComp from './LangDropDownComp';
import infoLangMark from '../assests/infoQuestionMark.gif';
import Guide from '../popup/Guide';  // Import the Guide component
import TickerTape from './TickerTape';
import GameComp from './GameComp';
import { RewardHistory } from '../popup/RewardHistory';
import GuideComp from './GuideComp';



const HeaderComp = () => {
  const [showGuide, setShowGuide] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showRewardHistory, setShowRewardHistory] = useState(0);
  const [rewardHistory, setRewardHistory] = useState([]);

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
        <GameComp />
        {/* <LangDropDownComp /> */}
        <div className="infoAndRewards">
          <div>
            <button className='guideBtn' onClick={toggleGuide}>
              <img src={infoLangMark} alt='infoLangMark' />
            </button>
          </div>
          <div>
            <button
              className="rewardBtn"
              onClick={() => setShowRewardHistory(1)}
              disabled={isDisabled}
            ></button>
          </div>

        </div>

        {showGuide && <GuideComp toggleGuide={toggleGuide} />} {/* Conditionally render the Guide component */}
        {showRewardHistory ? <RewardHistory toggleRewardsHistory={toggleRewardsHistory} rewardHistory={rewardHistory} /> : ""}
      </div>
    </>

  );
};

export default HeaderComp;
