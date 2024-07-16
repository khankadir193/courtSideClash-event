import React, { useState } from "react";
import RewardsSlider from "../components/RewardSlider";
import LeaderboardComponent from "../components/LeaderboardComp";

import { talentDaily, talentWeekly } from "../ApiCall/ApiComp";
import rewardsHeading from '../assests/Rewards-banner.png';
const TalentSection = () => {
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
      <div style={{ textAlign:'center',position:'relative',zIndex:'1'}}><img style={{width:'65%'}} src={rewardsHeading} alt="" /></div>
      <div className="rewards">
        
        {rewTabs.daily ? (
          <>
            <RewardsSlider rewards={talentDaily} showRanks={true} />
          </>
        ) : rewTabs.weekly ? (
          <>
            <RewardsSlider rewards={talentWeekly} showRanks={true} />
          </>
        ) : (
          <div className="static-rew">
            <ol>
              <li>
                This leaderboard will be based on the gems recieved during the
                entire event duration
              </li>

              <li>
                0.1% of the beans spent during the event will be collected in
                the beanspot for distribution and will be distributed to top 5
                talents in the ratio of Gems recieved by them during the event
                tenure.
              </li>
            </ol>
          </div>
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
      <LeaderboardComponent isTalent={true} selTabs={lbTabs} />
    </div>
  );
};

export default TalentSection;
