import React from "react";
import "./Guide.css";
import guideHeader from "../assests/Guide bannr.png";
import basketball from "../assests/gift-basketball.gif";
import skBillionare from "../assests/skBillionare.png";
import lootChest from "../assests/loot-chest.png";
import cheerleader from "../assests/cheerleader.png";
import closeBtn from "../assests/close-btn.png";
import beanIcon from "../assests/bean.png";

const Guide = ({ onClose }) => {
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
            <button class="howToPlay false" name="howToPlay">
              HOW TO PLAY
            </button>
            <button class="rewardInfo unactive" name="rewardInfo">
              Reward Info
            </button>
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
