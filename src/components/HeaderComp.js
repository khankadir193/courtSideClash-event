import React, { useState } from "react";
import "./Header.css";
import LangDropDownComp from "./LangDropDownComp";
import infoLangMark from "../assests/infoQuestionMark.gif";
import basketball from "../assests/throw-button.gif"
import disabledBasketball from "../assests/throw-button.png"
import headerGif from "../assests/header-basketball.gif";
import Guide from "../popup/Guide"; // Import the Guide component
import { useApi } from "../ApiCall/AppContext";

const HeaderComp = () => {
  const [showGuide, setShowGuide] = useState(false);
  const [throwgif,setThrowGif]=useState(false);
  const [chance, setChance] = useState(0);
  const { handleChances } = useApi();
  

  const toggleGuide = () => {
    setShowGuide(!showGuide);
  };

  const closeGuide = () => {
    setShowGuide(false);
  };

  return (
    <div className="Header">
      <LangDropDownComp />
      {/* chances section */}
      <div className="chance-container">
        <div className="throws-left">
          <span>Throw Left :</span>
          <span>99</span>
        </div>
        {/* <img src={basketball} alt="throw-gif"/> */}
        
        <div className="chances">
          <span>Chances :</span>
          <input
            onChange={(e) => handleChances(e.target.value)}
            type="number"
            max="999"
            placeholder="TYPE HERE"
          />
        </div>
      </div>

      {
        throwgif ? (<button disabled> <img src={disabledBasketball} alt="disabled button"/> </button>): (<button> <img src={basketball} alt="throw-btn"/> </button>)
      }
    
      <img className="playerHeader" src={headerGif} alt="header-gif" />
      {/* <LangDropDownComp /> */}
      <button className="guideBtn" onClick={toggleGuide}>
        <img src={infoLangMark} alt="infoLangMark" />
      </button>
      {showGuide && <Guide onClose={closeGuide} />}{" "}
      {/* Conditionally render the Guide component */}
    </div>
  );
};

export default HeaderComp;
