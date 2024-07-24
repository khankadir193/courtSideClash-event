import React, { useState } from "react";
import "./Guide.css";
import RewardInfo from "../popup/RewardInfo";
import guideHeader from "../assests/Guide bannr.png";
import howToPlay from "../assests/howToPlay.png";
import rewardInfoTab from "../assests/rewardInfo.png";
import basketball from "../assests/gift-basketball.gif";
import skBillionare from "../assests/skBillionare.png";
import lootChest from "../assests/loot-chest.png";
import cheerleader from "../assests/cheerleader.png";
import closeBtn from "../assests/close-btn.png";
import beanIcon from "../assests/bean.png";
import HowToPlay from "./HowToPlay";




const Guide = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("howToPlay");
  const items = [
    {
      title: 'Daily  Leaderboard',
      src:"",
      content: 'This is dailyLeaderboard.',
    },
    {
      title: 'Weekly Leaderboard',
      content: 'This is Weekly LeaderBoard',
    },
    {
      title: 'Overall Leaderboard',
      content: 'This is Overall Leaderboard',
    },
    {
      title: 'Dunk-Milestone Leaderboard',
      content: 'This is Dunk-milestone Leaderboard',
    }
  ];
  return (
    <div className="guide-overlay">
      <div className="guide-modal">
        <div className="guide-header">
          <img src={guideHeader} alt="guideHeader" />
        </div>
        <div className="guide-content">
          <div style={{ margin: "45px 0 0 0" }}>
            <div className="event-gifts">
              <span className="title">Event Gifts</span>

              <img className="gift1" src={cheerleader} alt="cheerleader-gift" />
              <div className="gift1Detail">
                <p>cheerleader</p>
                <div>
                  <p>30,000</p>
                  <img src={beanIcon} alt="bean" />
                </div>
              </div>
              <img className="gift2" src={skBillionare} alt="skBillionare" />
              <div className="gift2Detail">
                <p>skBillionare</p>
                <div>
                  <p>200,000</p>
                  <img src={beanIcon} alt="bean" />
                </div>
              </div>
              <img className="gift3" src={lootChest} alt="loot-gift" />
              <div className="gift3Detail">
                <p>lootChest</p>
                <div>
                  <p>1000</p>
                  <img src={beanIcon} alt="bean" />
                </div>
              </div>
            </div>
            <div className="gifts">
              <img src={basketball} alt="basketball-gif" />
            </div>
          </div>
          <div class="tabs">
            <button
              className={`howtoPlay ${
                activeTab === "howToPlay" ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => setActiveTab("howToPlay")}
            >
              <span>How To Play</span>

              <img src={howToPlay} alt="howtoPlay Tab" />
            </button>

            <button
              className={`rewardInfo ${
                activeTab === "rewardInfo" ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => setActiveTab("rewardInfo")}
            >
              <span>Reward Info</span>

              <img src={rewardInfoTab} alt="Reward Tab" />
            </button>
          </div>
          <div className="Tabcontent">
            {activeTab === "howToPlay" ? (
              <HowToPlay/>
            ) : (
              <RewardInfo items={items}/>
            )}
          </div>
        </div>
      </div>
      <button className="guide-close-button" onClick={onClose}>
        <img src={closeBtn} alt="closeBtn" />
      </button>
    </div>
  );
};

export default Guide;
