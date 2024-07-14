import React, { useContext, useEffect, useState } from "react";
import frame1 from "../assests/Gold-frame.png";
import frame2 from "../assests/Silver-frame.png";

import frame3 from "../assests/Bronze-frame.png";
import unknow from "../assests/default.png";
import { getLevelImage, gotoProfile } from "../ApiCall/functions";
import { rewGet } from "../ApiCall/imageContext";
import scoreIcon from "../assests/score-icon.png";
import teamFrame from "../assests/Team-1.png";
import { milestoneRankingData } from "../ApiCall/ApiComp";
// import Teams from "../popups/Teams";
import { AppContext } from "../App";

const TalentLbItem = ({ user, index, isTalent, showTeams, isOverall }) => {
  const [showTeamsPopup, setShowTeamsPopup] = useState(false);
  const { lbData } = useContext(AppContext);
  const {
    weeklyTeamUserRanking,

    overallTeamUsersRanking,
  } = lbData;
  const [selectedData, setSelectedData] = useState([]);
  const togglePopup = () => {
    setShowTeamsPopup((prev) => !prev);
  };

  useEffect(() => {
    if (isOverall) {
      setSelectedData(overallTeamUsersRanking);
    } else {
      setSelectedData(weeklyTeamUserRanking);
    }
  }, [isOverall, lbData]);

  return (
    <div className="talentLb-item">
      <div className="left-div">
        <div className="index">{index + 1}</div>
        <div className="user-images" onClick={() => gotoProfile(user.userId)}>
          <img
            src={
              index === 0
                ? frame1
                : index === 1
                ? frame2
                : index === 2
                ? frame3
                : ""
            }
            className="frame"
          />
          <img src={user.portrait?user.portrait:unknow} className="user-img" />
        </div>
        <div className="nameNLevel">
          <span className="name">{user.userId == 1?'Thunder Dunkers':user.userId == 2?'Gravity Defiers':user.userId == 3?'Airborne Assasians':user.userId == 4?'Court Conquerors':
          user.userId == 5?'Swish Squad':user.userId == 6?'Backboard Bandits':user.userId == 7?'Hoops Havoc':user.userId == 8?'Dunk Dynasty':user.nickname}</span>
          <img
            src={getLevelImage(
              isTalent ? user.actorLevel : user.userLevel,
              isTalent
            )}
            style={{ width: isTalent && "8vw" }}
          />
        </div>
      </div>
      <div className="middle-div">
        {showTeams ? (
          <div className="teams-area" onClick={togglePopup}>
            {selectedData?.slice(0, 3).map((item, index) => (
              <div
                className={`team-user ${
                  index === 0 ? "index-0" : index === 1 ? "index-1" : "index-2"
                }`}
              >
                <img className="team-frame" src={teamFrame} />
                <img
                  src={item?.portrait ? item?.portrait : unknow}
                  className="user-portrait"
                />
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="right-div">
        <img src={isTalent ? rewGet("gems") : scoreIcon} />
        <span>{user.userScore}</span>
      </div>
      {/* {showTeamsPopup && (
        <Teams
          toggleTeams={togglePopup}
          isOverall={isOverall}
          selectedData={selectedData}
        />
      )} */}
    </div>
  );
};

export default TalentLbItem;
