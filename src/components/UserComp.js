import React, { useState } from "react";
// import RewardsSlider from "../../components/RewardsSlider";
// import LeaderboardComponent from "../../components/LeaderboardComponent";
// import { userOverall, userWeekly } from "../../api";
import Daily from "./Daily";
import './User.css'

const UserSection = () => {
  const [rewTabs, setRewTabs] = useState({
    daily: true,
    weekly: false,
    overall: false,
  });

  const [lbTabs, setLbTabs] = useState({
    daily: true,
    weekly: false,
    overall: false,
  });

  const toggleRewTabs = (name) => {
    if (name === "daily") {
      setRewTabs({
        daily: true,
        weekly: false,
        overall: false,
      });
    } else if (name === "weekly") {
      setRewTabs({
        daily: false,
        weekly: true,
        overall: false,
      });
    } else if (name === "overall") {
      setRewTabs({
        daily: false,
        weekly: false,
        overall: true,
      });
    }
  };

  const toggleLbTabs = (name) => {
    if (name === "daily") {
      setLbTabs({
        daily: true,
        weekly: false,
        overall: false,
      });
    } else if (name === "weekly") {
      setLbTabs({
        daily: false,
        weekly: true,
        overall: false,
      });
    } else if (name === "overall") {
      setLbTabs({
        daily: false,
        weekly: false,
        overall: true,
      });
    }
  };
  return (
    <div className="user-sec">
      <div className="rew-tabs">
        <button
          className={`daily ${!rewTabs.daily && "hide"}`}
          onClick={() => toggleRewTabs("daily")}
        />
        <button
          className={`weekly ${!rewTabs.weekly && "hide"}`}
          onClick={() => toggleRewTabs("weekly")}
        />

        <button
          className={`overall ${!rewTabs.overall && "hide"}`}
          onClick={() => toggleRewTabs("overall")}
        />
      </div>
      <div className="rewards">
        {rewTabs.daily ? (
          <p className="static-rew">
            The rewards will be distributed to TOP 7 users in the ratio of the
            Baskets scored by the users during the day.
          </p>
        ) : rewTabs.weekly ? (
          <>
            {/* <RewardsSlider rewards={userWeekly} showRanks={true}/> */}
            <Daily />
          </>
        ) : (
          <>
            {/* <RewardsSlider rewards={userOverall} showRanks={true} /> */}
            <Daily />
          </>
        )}
      </div>

      <div className="rew-tabs">
        <button
          className={`daily ${!lbTabs.daily && "hide"}`}
          onClick={() => toggleLbTabs("daily")}
        />
        <button
          className={`weekly ${!lbTabs.weekly && "hide"}`}
          onClick={() => toggleLbTabs("weekly")}
        />

        <button
          className={`overall ${!lbTabs.overall && "hide"}`}
          onClick={() => toggleLbTabs("overall")}
        />
      </div>
      {/* <LeaderboardComponent isTalent={false} selTabs={lbTabs} /> */}
    </div>
  );
};

export default UserSection;
