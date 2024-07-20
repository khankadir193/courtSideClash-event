import React, { useContext } from "react";
import PopUp from "../popup/Popup";
import bg from "../assests/Info-popup-bg.png"
import titleBanner from "../assests/Info-banner.png";
// import { AppContext } from "../App";
import { useApi } from "../ApiCall/AppContext";
import "../Style/popup.css";
import { baseUrl, milestoneRewards } from '../ApiCall/ApiComp'
// import ball from "../assets/images/basket-ball-icon.png";
import { rewGet } from "../ApiCall/imageContext";
const MilestonePopUp = () => {
  const { toggleMilestonePopUp } = useApi();
  return (
    <PopUp
      bg={bg}
      title={titleBanner}
      popUpHandler={toggleMilestonePopUp}
      // isAccPopUp={true}
      isMilestone={true}
    >
      <div className="milestone">
        <div className="milestone-content">
          <div className="milestone-title">
            <span className="span1">Milestone</span>
            <span className="span2">Rewards</span>
          </div>
          {/* <table className="milestone-table">
            <tr>
              <td>100</td>
              <td>3 days Raging Bull Profile Frame</td>
              <td>
                <img
                  src={`${baseUrl}/streamkar/rewards/valentineFrameUser.png`}
                />
              </td>
            </tr>
            <tr>
              <td>200</td>
              <td>3 days Spaceship Entrance</td>
              <td>
                <img src={`${baseUrl}/streamkar/rewards/spaceship.png`} />
              </td>
            </tr>
            <tr>
              <td className="color-yellow">500</td>
              <td className="color-yellow">5 days Brave Heart Profile Frame</td>
              <td>
                <img src={`${baseUrl}/streamkar/rewards/braveHeart.png`} />
              </td>
            </tr>

            <tr>
              <td className="color-yellow">1000</td>
              <td className="color-yellow">7 days Ballpark Audio Theme</td>
              <td>
                <img src={`${baseUrl}/streamkar/rewards/ballParkTheme.png`} />
              </td>
            </tr>

            <tr>
              <td className="color-yellow" style={{ borderBottom: "none" }}>
                2000
              </td>
              <td className="color-yellow" style={{ borderBottom: "none" }}>
                7 days Hero Entrance
              </td>
              <td style={{ borderBottom: "none" }}>
                <img src={`${baseUrl}/streamkar/rewards/heroEntrance.png`} />
              </td>
            </tr>
          </table> */}
          {
            <div className="milestone-contents">
              {milestoneRewards.map((item) => (
                <div className="rew-item">
                  <span className="count">{item.count}</span>
                  <div className="rew">
                    <div className="rew-with-bg">
                      <img src={rewGet(item.name)} />
                    </div>
                    <span>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          }
        </div>
      </div>
    </PopUp>
  );
};

export default MilestonePopUp;
