import React, { useContext } from "react";
import PopUp from "./Popup";
import bg from '../assests/task-game-bg2.png';
import titleBanner from "../assests/Info-banner-imp.gif";
import { useApi } from "../ApiCall/AppContext";

const SuccessAttemptPopUp = () => {
  const { toggleSuccessAttemptPopUp, selectedLanguage } = useApi() ;

  return (
    <PopUp
      bg={bg}
      popUpHandler={toggleSuccessAttemptPopUp}
      isAccPopUp={true}
      title={titleBanner}
    >
      <div className="successfull-attempts-popup">
        <div className="succesfull-attempt-content">
          {selectedLanguage === 0 ? (
            <p>
              <span className="yellow-text">Successful attempts</span> are those
              attempts in which the Basketball successfully enters the basket.
              It is known as a <span className="yellow-text">Field Goal.</span>
              &nbsp;These Field Goals will be counted towards &nbsp;
              <span className="yellow-text">Dunk Milestones</span>. The
              progress indicator for the same is shown below.
            </p>
          ) : (
            <p>
              <span className="yellow-text">Successful attempts</span> vo
              attempts hai jisme Basketball successfully basket me enter karta
              hain.Use <span className="yellow-text">Field Goal</span> kehte
              hain.Inn Field Goals ko{" "}
              <span className="yellow-text">Dunk Milestones </span>mein
              count kiya jayega.Iska progress bar niche dikhaya gaya hai.
            </p>
          )}
        </div>
      </div>
    </PopUp>
  );
};

export default SuccessAttemptPopUp;
