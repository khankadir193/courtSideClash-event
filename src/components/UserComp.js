import React, { useState } from "react";
import RewardsSlider from "./RewardSlider";
import LeaderboardComponent from "./LeaderboardComp";
import { userOverall, userWeekly } from "../ApiCall/ApiComp";
import "./User.css";

// UserSection component
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

  // Function to toggle reward tabs
  const toggleRewTabs = (name) => {
    setRewTabs({
      daily: name === "daily",
      weekly: name === "weekly",
      overall: name === "overall",
    });
  };

  // Function to toggle leaderboard tabs
  const toggleLbTabs = (name) => {
    setLbTabs({
      daily: name === "daily",
      weekly: name === "weekly",
      overall: name === "overall",
    });
  };

  return (
    <div className="user-sec">
      {/* Reward Tabs */}
      <div className="rew-tabs">
        {["daily", "weekly", "overall"].map((tab) => (
          <button
            key={tab}
            className={`${tab} ${!rewTabs[tab] && "hide"}`}
            onClick={() => toggleRewTabs(tab)}
          />
        ))}
      </div>

      {/* Rewards Section */}
      <div className="rewards">
        {rewTabs.daily ? (
          <p className="static-rew">
            The rewards will be distributed to TOP 7 users in the ratio of the
            Baskets scored by the users during the day.
          </p>
        ) : (
          <RewardsSlider
            rewards={rewTabs.weekly ? userWeekly : userOverall}
            showRanks={true}
          />
        )}
      </div>

      {/* Leaderboard Tabs */}
      <div className="rew-tabs">
        {["daily", "weekly", "overall"].map((tab) => (
          <button
            key={tab}
            className={`${tab} ${!lbTabs[tab] && "hide"}`}
            onClick={() => toggleLbTabs(tab)}
          />
        ))}
      </div>

      {/* Leaderboard Section */}
      <LeaderboardComponent isTalent={false} selTabs={lbTabs} />
    </div>
  );
};

export default UserSection;
