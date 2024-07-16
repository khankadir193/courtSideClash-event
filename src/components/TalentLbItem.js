import React, { useContext, useEffect, useState } from "react";
import frame1 from "../assests/Gold-frame.png";
import frame2 from "../assests/Silver-frame.png";
import frame3 from "../assests/Bronze-frame.png";
import unknow from "../assests/default.png";
import { getLevelImage, gotoProfile } from "../ApiCall/functions";
import { rewGet } from "../ApiCall/imageContext";
import scoreIcon from "../assests/score-icon.png";
import teamFrame from "../assests/Team-1.png";
import { useApi } from "../ApiCall/AppContext";
import '../Style/leaderBoard.css';

// TalentLbItem component to display leaderboard items
const TalentLbItem = ({ user, index, isTalent, showTeams, isOverall }) => {
  const [showTeamsPopup, setShowTeamsPopup] = useState(false); // State to toggle team popup
  const [selectedData, setSelectedData] = useState([]); // State for selected team data

  // Destructure necessary data from context
  const { weeklyTeamUserRanking, overallTeamUsersRanking, lbData } = useApi();

  // Toggle team popup visibility
  const togglePopup = () => {
    setShowTeamsPopup((prev) => !prev);
  };

  // Update selected data based on isOverall flag
  useEffect(() => {
    if (isOverall) {
      setSelectedData(overallTeamUsersRanking);
    } else {
      setSelectedData(weeklyTeamUserRanking);
    }
  }, [isOverall, lbData]);

  // Render user frame based on index
  const renderUserFrame = (index) => {
    switch (index) {
      case 0: return frame1;
      case 1: return frame2;
      case 2: return frame3;
      default: return "";
    }
  };

  // Render user nickname based on userId
  const renderUserNickname = (userId, nickname) => {
    const nicknames = {
      1: 'Thunder Dunkers',
      2: 'Gravity Defiers',
      3: 'Airborne Assassins',
      4: 'Court Conquerors',
      5: 'Swish Squad',
      6: 'Backboard Bandits',
      7: 'Hoops Havoc',
      8: 'Dunk Dynasty',
    };
    return nicknames[userId] || nickname;
  };

  return (
    <div className="talentLb-item">
      <div className="left-div">
        <div className="index">{index + 1}</div>
        <div className="user-images" onClick={() => gotoProfile(user.userId)}>
          <img src={renderUserFrame(index)} className="frame" />
          <img src={user.portrait || unknow} className="user-img" />
        </div>
        <div className="nameNLevel">
          <span className="name">
            {renderUserNickname(user.userId, user.nickname)}
          </span>
          <img
            src={getLevelImage(isTalent ? user.actorLevel : user.userLevel, isTalent)}
            style={{ width: isTalent && "8vw" }}
          />
        </div>
      </div>
      <div className="middle-div">
        {showTeams && (
          <div className="teams-area" onClick={togglePopup}>
            {selectedData?.slice(0, 3).map((item, idx) => (
              <div key={idx} className={`team-user index-${idx}`}>
                <img className="team-frame" src={teamFrame} />
                <img src={item?.portrait || unknow} className="user-portrait" />
              </div>
            ))}
          </div>
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
