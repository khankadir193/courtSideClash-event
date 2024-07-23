import React, { useContext, useEffect, useState } from "react";
import ibBtn from "../assests/INfo-icon2.png";
import iaBtn from "../assests/Info-icon1.png";
import currentPos from "../assests/current-position.gif";
import completed from "../assests/completed.png";
import unknowUser from "../assests/default.png";
// import beans from "../../assets/images/bean.png";
import "../Style/fieldGoal.css";
// import { AppContext } from "../../App";
import { useApi } from "../ApiCall/AppContext";
// import PopUp from "../../components/PopUp";
// import SuccessAttemptPopUp from "../../popups/SuccessAttemptPopUp";
// import MilestonePopUp from "../../popups/MilestonePopUp";
import Marquee from "react-fast-marquee";
import { baseUrl } from "../ApiCall/ApiComp";
import Timer from "./Timer";
import TabComponent from "./TabComponent";
import SuccessAttemptPopUp from "../popup/SuccessAttemptPopUp";
import MilestonePopUp from "../popup/MilestonePopUp";
import PopUp from "../popup/Popup";
// import userBtn from "../../assets/images/usersBtn.png";
// import talentBtn from "../../assets/images/talentBtn.png";
// import UserSection from "./UserSection";
// import TalentSection from "./TalentSection";
export const FieldGoalMilestone = () => {
  let [targetTimestamp , setTargetTimestamp] = React.useState();
  const { milesStoneMarquee } = useApi();
  const {
    userInfo,
    toggleProgressPopUp,
    progressPopUp,
    toggleSuccessAttemptPopUp,
    showSuccessAttemptPopUp,
    milestonePopUp,
    toggleMilestonePopUp,
    isDisabled,
  } = useApi();
  const { weeklyScore } = userInfo;
  // console.log('userInfo...??weeklyScore...',weeklyScore);
  const [currentAttempts, setCurrentAttempts] = useState("0vw");
  const test = 2000;

  const [tabs, setTabs] = useState({
    user: true,
    talent: false,
  });

  const toggleTabs = (btn) => {
    if (btn === "user") {
      setTabs({ user: true, talent: false });
    } else {
      setTabs({ user: false, talent: true });
    }
  };

  useEffect(() => {
    if (weeklyScore < 100) {
      setCurrentAttempts("1vw"); //50
    } else if (weeklyScore < 200 && weeklyScore >= 100) {
      setCurrentAttempts("15vw"); //100
    } else if (weeklyScore < 500 && weeklyScore >= 200) {
      setCurrentAttempts("28vw"); //200
    } else if (weeklyScore < 1000 && weeklyScore >= 500) {
      setCurrentAttempts("41vw"); //500
    } else if (weeklyScore >= 1000 && weeklyScore < 2000) {
      setCurrentAttempts("55vw"); //1000
    } else if (weeklyScore >= 2000) {
      setCurrentAttempts("68vw"); //2000
    }
  });

  useEffect(()=>{
    let times = [{"index":1,"startTime":"2024-07-05 00:00:00","endTime":"2024-07-15 00:00:00"},
      {"index":2,"startTime":"2024-07-15 00:00:00","endTime":"2024-07-16 00:00:00"},
      {"index":3,"startTime":"2024-07-16 00:00:00","endTime":"2024-07-17 00:00:00"},
      {"index":4,"startTime":"2024-07-17 00:00:00","endTime":"2024-07-18 00:00:00"},
      {"index":5,"startTime":"2024-07-17 00:00:00","endTime":"2024-07-20 00:00:00"},
      {"index":6,"startTime":"2024-07-20 00:00:00","endTime":"2024-07-25 00:00:00"},
      {"index":7,"startTime":"2024-07-25 00:00:00","endTime":"2024-07-30 00:00:00"}]
      let weekendDate = 0 ;
      for (let i = 0; i < times.length; i++) {
      if (new Date(times[i].startTime) < new Date() && new Date() < new Date(times[i].endTime)) {
        weekendDate = times[i].endTime;
      }
        
      }
    let endDate = new Date(weekendDate).getTime();
    setTargetTimestamp(endDate);
  },[])
  return (
    <div className="fieldGoalSection">
      <div className="marquee" style={{    position: 'absolute',top: '43vw',width:'100%',overlowX:'hidden'}}>
        <Marquee speed={70}>
          {milesStoneMarquee?.map((item, index) => (
            <div className={`field-marq-item ${index % 2 != 0 ? 'field-marq-item-odd' : 'field-marq-item-even'}`} key={index}>
              <img
                className="user-img"
                src={item.portrait ? item.portrait : unknowUser}
              />

              <div className="user-details">
                <span className="name">
                  {`${item.nickname.slice(0, 6)}...`} &nbsp;{" "}
                </span>
                <span>has won &nbsp;</span>

                <span>
                  {" "}
                  {item.userScore === 1
                    ? " Ignite Profile Frame"
                    : item.userScore === 2
                     ? " Ballpark Audio"
                     : item.userScore === 3
                    ? "Spaceship Entrance"
                    : item.userScore === 4
                    ? "Brave Heart Profile Frame"
                    : " HERO Entrance"}{" "}
                    &nbsp;
                </span>
                <img
                  src={`${baseUrl}/streamkar/rewards/${
                    item.userScore === 1
                      ? "igniteFrame.png"
                      : item.userScore === 2
                       ? "ballParkTheme.png"
                       : item.userScore === 3
                      ? "spaceship.png"
                      : item.userScore === 4
                      ? "braveHeart.png"
                      : "heroEntrance.png"
                  }`}
                  className="rew-img"
                />
                 <span>
                  {" "}
                  {item.userScore === 1
                    ? "for 3 days."
                    : item.userScore === 2
                     ? "for 3 days."
                     : item.userScore === 3
                    ? "for 5 days."
                    : item.userScore === 4
                    ? "for 5 days."
                    : "for 7 days."}{" "}
                    &nbsp;
                </span>
                <span>{`Congratulations!`}</span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="timer-sec">
        <span className="title">Days Left:</span>
        <Timer targetTimestamp={targetTimestamp}/>
      </div>

      <div className="successfull-attempts">
        <p>MY BASKET SCORE: &nbsp;{weeklyScore}</p>

        <img
          src={ibBtn}
          className="ibBtn"
          onClick={() => {
            if (isDisabled) {
              return;
            } else {
              toggleSuccessAttemptPopUp();
            }
          }}
        />
        <div className="progressBarSection">
          <img
            src={iaBtn}
            className="iaBtn"
            onClick={() => {
              if (isDisabled) {
                return;
              } else {
                toggleMilestonePopUp();
              }
            }}
          />

          <div className="progressBar">
            <div className="innerProgress">
              <div className="line">
                <img
                  src={currentPos}
                  className="currPosition animate"
                  style={{ transform: `translateX(${currentAttempts})` }}
                />
                <img
                  src={completed}
                  className="completed"
                  style={{
                    filter: weeklyScore < 50 ? "grayScale(100)" : "",
                  }}
                />
                <img
                  src={completed}
                  className="completed100"
                  style={{
                    filter: weeklyScore < 100 ? "grayScale(100)" : "",
                  }}
                />
                <img
                  src={completed}
                  className="completed200"
                  style={{
                    filter: weeklyScore < 200 ? "grayScale(100)" : "",
                  }}
                />
                <img
                  src={completed}
                  className="completed500"
                  style={{
                    filter: weeklyScore < 500 ? "grayScale(100)" : "",
                  }}
                />
                <img
                  src={completed}
                  className="completed1k"
                  style={{
                    filter: weeklyScore < 1000 ? "grayScale(100)" : "",
                  }}
                />
                <img
                  src={completed}
                  className="completed2k"
                  style={{
                    filter: weeklyScore < 2000 ? "grayScale(100)" : "",
                  }}
                />
              </div>
            </div>
            <div className="progressLabel"></div>
          </div>
        </div>
      </div>
      <TabComponent />
      <p className="rights">All Rights Reserved</p>
      {progressPopUp ? <PopUp>My popup</PopUp> : ""}
      {showSuccessAttemptPopUp ? <SuccessAttemptPopUp /> : ""}
      {milestonePopUp ? <MilestonePopUp /> : ""}
    </div>
  );
};
