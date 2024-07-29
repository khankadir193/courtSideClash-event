import React, { useState } from "react";
import "../popup/Guide.css";
import PopUp from "../popup/Popup.js";
import guidBg from "../assests/guide-bg.png";
import titleBanner from "../assests/Guide-banner.png";
import Accordion from "../popup/Accordion.js";
// import { AppContext } from "../App";
import { useApi } from "../ApiCall/AppContext.js";
import { baseUrl } from "../ApiCall/ApiComp.js";
import beans from "../assests/bean.png";
import giftBasketBall from "../assests/gift-basketball.gif";

const GuideComp = (props) => {
  const { selectedLanguage } = props;
  const { toggleGuide } = useApi();
  const [tabs, setTabs] = useState({
    howToPlay: true,
    rewardsInfo: false,
  });
  const [userTalent, setUserTalent] = useState({
    user: 1,
    talent: 0,
  });
  const [userTalent2, setUserTalent2] = useState({
    user: true,
    talent: false,
  });
  const [userTalent3, setUserTalent3] = useState({
    user: true,
    talent: false,
  });

  const toggleTabs = (event) => {
    if (event.target.name === "howToPlay") {
      setTabs({
        howToPlay: true,
        rewardsInfo: false,
      });
    } else {
      setTabs({
        howToPlay: false,
        rewardsInfo: true,
      });
    }
  };

  const toggleUserTalent = () => {
    setUserTalent({
      user: !userTalent.user,
      talent: !userTalent.talent,
    });
  };

  const toggleUserTalent2 = () => {
    setUserTalent2({
      user: !userTalent2.user,
      talent: !userTalent2.talent,
    });
  };

  const toggleUserTalent3 = () => {
    setUserTalent3({
      user: !userTalent3.user,
      talent: !userTalent3.talent,
    });
  };

  return (
    <div>
      <PopUp
        bg={guidBg}
        title={titleBanner}
        popUpHandler={toggleGuide}
        guide={true}
      >
        <div className="guidePopUp">
          <div>
            <div className="event-gifts">
              <span className="e-title">EVENT GIFTS</span>
              <img
                src={`${baseUrl}/streamkar/gifts/40001618.png`}
                className="gift1"
              />

              <div className="gift1Detail">
                <p style={{ color: "#64686b" }}>Cheerleader</p>
                <span style={{ color: "#64686b", marginLeft: "2vw" }}>
                  30,000
                </span>
                <img src={beans} className="beans" />
              </div>

              <img
                src={`${baseUrl}/streamkar/gifts/40001627.png`}
                className="gift2"
              />
              <div className="gift2Detail">
                <p style={{ color: "#64686b" }}>SK Billionaire</p>
                <span style={{ color: "#64686b", marginLeft: "2vw" }}>
                  200,000
                </span>
                <img src={beans} className="beans" />
              </div>
              <img
                src={`${baseUrl}/streamkar/gifts/40001299.png`}
                className="gift3"
              />
              <div className="gift3Detail">
                <p style={{ color: "#64686b" }}>Loot Chest</p>
                <span style={{ color: "#64686b", marginLeft: "2vw" }}>
                  1000{" "}
                </span>
                <img src={beans} className="beans" />
              </div>
            </div>

            <div className="gifts">
              <img src={giftBasketBall} />
            </div>
          </div>
          <div className="tabs">
            <button
              className={`howToPlay ${!tabs.howToPlay && "unactive"}`}
              onClick={(event) => toggleTabs(event)}
              name="howToPlay"
            >
              HOW TO PLAY
            </button>
            <button
              className={`rewardInfo ${!tabs.rewardsInfo && "unactive"}`}
              onClick={(event) => toggleTabs(event)}
              name="rewardInfo"
            >
              Reward Info
            </button>
          </div>
          <div className="guideContent">
            {tabs.howToPlay ? (
              selectedLanguage === 0 ? (
                <div className="tab1-content">
               
                  <h4 className="yellow-text">Courtside Clash</h4>
                  <div style={{ paddingLeft: "4vw" }}>
                    <ul>
                      <li>
                      To get one opportunity to play in this game, you spend 25,000 beans on event gifts.{" "}
                        <span className="yellow-text">
                          ( one chance = 25,000 Beans)
                        </span>
                      </li>
                      <li>
                      After you send 1 gift, you will automatically get placed in any one of the eight teams in this event.
                      </li>
                      <li>
                      On the event webpage, you will see 6 baskets, and to utilize your chance, you will be required to press the {" "}
                        <span className="yellow-text">THROW</span> button on the webpage.
                      </li>
                      <li>
                      After you click the <span className="yellow-text">THROW</span> button, the ball will be hurled into the net, and you will receive appealing prizes if it successfully makes its way through.
                      </li>
                      <li>The number of baskets you score will not only contribute towards your daily leaderboard but will also
                         contribute to your team,
                         which will help them rank higher on the weekly leaderboard, which in turn can benefit you with amazing
                          rewards if you are the top contributor to your team.</li>
                      <li>Depending on the amount of beans spent on event gifts, you may type up to 
                        <span className="yellow-text">x999</span> chances to play at a time.</li>
                    </ul>
                  </div>
                  <h4 className="yellow-text">What are Dunk Milestones?</h4>
                  <div style={{ paddingLeft: "4vw" }}>
                    <ul>
                      <li>
                      These Dunk Milestones will be attained with each successful basket you score.
                      </li>
                      <li>
                      When you complete the Dunk Milestones, you'll receive additional gifts.
                      </li>

                    
                    </ul>
                  </div>
                  <h4 className="yellow-text">Weekly Leaderboard</h4>
                  <div style={{ paddingLeft: "4vw" }}>
                    <ul>
                      <li>
                      In the weekly leaderboard, teams will be ranked on the basis of the number of total baskets scored by the entire team during the week. 
                      </li>
                      <li>
                      The Trophies that the teams received from the Weekly Leaderboard helps them to rank higher on the Overall Leaderboard.
                      </li>
                      <li>
                      The teams ranked on the Weekly leaderboard will receive Trophies as per the below mentioned table:
                      </li>
                    
                    </ul>
                    <table style={{width:'80%',margin:'auto',textAlign:'center',border:'1px solid white'}}>
                      <tr >
                        <th style={{borderBottom:'1px solid white',borderRight:'1px solid white'}}>Team Weekly Rank</th>
                        <th style={{borderBottom:'1px solid white'}}>TROPHIES</th>
                      </tr>
                        <tr>
                          <td className="colored" style={{borderBottom:'1px solid white',borderRight:'1px solid white'}}>
                            1st
                          </td>
                          <td className="colored" style={{borderBottom:'1px solid white'}}>
                            10
                          </td>
                        </tr>
                        <tr>
                          <td className="colored" style={{borderBottom:'1px solid white',borderRight:'1px solid white'}}>
                            2nd
                          </td>
                          <td className="colored" style={{borderBottom:'1px solid white'}}>
                            7
                          </td>
                        </tr>
                        <tr>
                          <td className="colored" style={{borderBottom:'1px solid white',borderRight:'1px solid white'}}>
                            3rd
                          </td>
                          <td className="colored" style={{borderBottom:'1px solid white'}}>
                            5
                          </td>
                        </tr>
                        <tr>
                          <td className="colored" style={{borderBottom:'1px solid white',borderRight:'1px solid white'}}>
                            4th - 6th
                          </td>
                          <td className="colored" style={{borderBottom:'1px solid white'}}>
                            3
                          </td>
                        </tr>
                        <tr>
                          <td className="colored"  style={{borderRight:'1px solid white'}}>
                            7th & 8th
                          </td>
                          <td className="colored">
                            1
                          </td>
                        </tr>
                      </table>
                  </div>
                </div>
              ) : (
                <div className="tab1-content">
                
                  <h4 className="yellow-text">Courtside Clash</h4>
                  <div style={{ paddingLeft: "4vw" }}>
                    <ul>
                      <li>
                      Is event me 1 chance khelne ke liye, aapko event gifts par 25,000 beans spend karne honge.
                        <span className="yellow-text">
                          (Ek chance = 25,000 beans).
                        </span>
                      </li>
                      <li>
                      Iss event me 1 gift send karne ke baad, aap autmotically kisi ek team me place kiye jaoge. 
                      </li>
                      <li>
                      Event webpage par aapko 6 baskets dikhenge, aur apna chance utilize karne ke liye aapko <span className="yellow-text">THROW</span>{" "} button press karna hoga.
                      </li>
                      <li>
                      <span className="yellow-text">THROW</span>{" "} button press karte he, ball net me throw hoga, aur aapko attractive rewards milenge, if ball successfully basket me jata hai. 
                      </li>
                      <li>Aapne jo baskets score karoge wo naa he sirf aapke daily leaderboard me contribute karenge, balki wo aapke team ko bhi contribute kiye jayenge, jo unhe help karenge leaderboard me higher rank achieve karne, aur jo in turn aapko help karega amazing rewards jeetne me agar aap apne team me top contributor bante ho to. </li>
                      <li>Aapne event gifts par kitne beans spend kiye hai, uske basis par aap iss event me up to <span className="yellow-text">x999</span> chances ek time me khel sakte ho. </li>
                    </ul>
                  </div>
                  <h4 className="yellow-text">Dunk Milestones kya hai?</h4>
                  <div style={{ paddingLeft: "4vw" }}>
                    <ul>
                      <li>
                      Aapka har successful attempt, aapko Dunk Milestone ki taraf leke jayega.
                      </li>
                      <li>
                      Aap Dunk Milestones achieve karke extra rewards jeet sakte ho.
                      </li>
                    </ul>
                  </div>
                  <h4 className="yellow-text">Weekly Leaderboard</h4>
                  <div style={{ paddingLeft: "4vw" }}>
                    <ul>
                      <li>
                      Weekly leaderboard me teams rank ki jayegi on the basis of total baskets scored by the entire team during the week. 
                      </li>
                      <li>
                      Weekly Leaderboard ke ranking ke basis par team ko jo Trophies receive hongi wo unhe further help karegi Overall Leaderboard me higher rank achieve karne me. 
                      </li>
                      <li>
                      Weekly leaderboard par teams ko Trophies receive hongi unke ranks ke basis par as show in the below mentioned table:
                      </li>
                    
                    </ul>
                    <table style={{width:'80%',margin:'auto',textAlign:'center',border:'1px solid white'}}>
                      <tr >
                        <th style={{borderBottom:'1px solid white',borderRight:'1px solid white'}}>Team Weekly Rank</th>
                        <th style={{borderBottom:'1px solid white'}}>TROPHIES</th>
                      </tr>
                        <tr>
                          <td className="colored" style={{borderBottom:'1px solid white',borderRight:'1px solid white'}}>
                            1st
                          </td>
                          <td className="colored" style={{borderBottom:'1px solid white'}}>
                            10
                          </td>
                        </tr>
                        <tr>
                          <td className="colored" style={{borderBottom:'1px solid white',borderRight:'1px solid white'}}>
                            2nd
                          </td>
                          <td className="colored" style={{borderBottom:'1px solid white'}}>
                            7
                          </td>
                        </tr>
                        <tr>
                          <td className="colored" style={{borderBottom:'1px solid white',borderRight:'1px solid white'}}>
                            3rd
                          </td>
                          <td className="colored" style={{borderBottom:'1px solid white'}}>
                            5
                          </td>
                        </tr>
                        <tr>
                          <td className="colored" style={{borderBottom:'1px solid white',borderRight:'1px solid white'}}>
                            4th - 6th
                          </td>
                          <td className="colored" style={{borderBottom:'1px solid white'}}>
                            3
                          </td>
                        </tr>
                        <tr>
                          <td className="colored"  style={{borderRight:'1px solid white'}}>
                            7th & 8th
                          </td>
                          <td className="colored">
                            1
                          </td>
                        </tr>
                      </table>
                  </div>
                </div>
              )
            ) : (
              selectedLanguage === 0 ?  <div className="tab2-content">
                {/* Daily Accordion */}
                <Accordion
                  title="Daily Leaderboard"
                  toggleUserTalent={toggleUserTalent}
                  hasTabs={1}
                  defaultOpen={true}
                  userTalent={userTalent}
                >
                  {userTalent.user ? (
                    <div className="userContent">
                      <div className="beanBag">
                        <img src={baseUrl + "/streamkar/rewards/beanbag.png"} />
                      </div>
                     <ul>
                      <li>This leaderboard will be based on the number of baskets scored by the user during the entire day. </li>
                      <li>Further rewards will be distributed to TOP 7 users in the ratio of the Baskets scored by them during the day.</li>
                     </ul>
                    </div>
                  ) : (
                    <div className="talentContent">
                   <ul>
                      <li>This leaderboard will be based on the gems received by the talents during the entire day.</li>
                      <li>The talents will be rewarded with the following accessories on the basis of their ranks:</li>
                     </ul>
                      <table>
                        <tr>
                          <td className="colored">
                            1st Rank - 3 Days X (Water Splash Profile Frame +
                            Royal Carriage)
                          </td>
                        </tr>

                        <tr>
                          <td className="colored">
                            2nd Rank - 2 Days X (Water Splash Profile Frame +
                            Royal Carriage)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            3rd Rank - 1 Day X (Water Splash Profile Frame +
                            Royal Carriage)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            4th Rank - 1 Day X (Water Splash Profile Frame +
                            Royal Carriage)
                          </td>
                        </tr>
                        <tr>
                          <td className="last">
                            5th Rank - 1 Day X (Water Splash Profile Frame +
                            Royal Carriage)
                          </td>
                        </tr>
                      </table>
                    </div>
                  )}
                </Accordion>
                {/* Overall Accordion */}
                <Accordion
                  title="Weekly Leaderboard"
                  toggleUserTalent={toggleUserTalent3}
                  hasTabs={1}
                  defaultOpen={false}
                  userTalent={userTalent3}
                >
                  {userTalent3.user ? (
                    <div className="talentContent">
                       <ul>
                    <li>Beans collected in the Bean’s pot will be distributed among Top 2 users from Teams ranked 1,2 & 3.</li>
                    <li>Further distribution of beans in the team will be as on the basis of the baskets scored by the user during the weekly cycle.</li>
                  </ul>

                      <table>
                        <tr>
                          <td className="colored">
                            1st Rank - 10 TROPHIES
                          </td>
                        </tr>

                        <tr>
                          <td className="colored">
                          2nd Rank - 7 TROPHIES
                          </td>
                        </tr>
                        <tr>
                          <td> 3rd Rank - 5 TROPHIES</td>
                        </tr>
                        <tr>
                          <td>4th - 6th Rank -  3 TROPHIES</td>
                        </tr>
                        <tr>
                          <td className="last">
                          7th & 8th Rank -  1 TROPHY
                          </td>
                        </tr>
                      </table>
                    </div>
                  ): (
                    <div className="userContent">
                    
                      <p>
                        {/* 0.30% of the beans will be collected in the beans pot. */}
                        {/* Estimated rewards to be shown on top 5 rankings */}
                        A combination of different accessories will be distributed randomly to the top 5 talents in the weekly ranking.
                      </p>
                      <table>
                        <tr>
                          <td className="colored">
                          7 days x Thunder audio theme
                          </td>
                        </tr>

                        <tr>
                          <td className="colored">
                          7 days x Rusty Ranger entrance
                          </td>
                        </tr>
                        <tr>
                          <td className="colored">7 days x Fish World audio theme</td>
                        </tr>
                        <tr>
                          <td>7 days x Gold Luxury Entrance</td>
                        </tr>
                        <tr>
                          <td>7 days x King of Road audio theme</td>
                        </tr>
                        <tr>
                          <td> 7 days x Kingpin entrance</td>
                        </tr>
                        <tr>
                          <td>7 days x Bunny profile frame</td>
                        </tr>
                        <tr>
                          <td>7 days x Fury profile frame</td>
                        </tr>
                        <tr>
                          <td>7 days x Rider entrance</td>
                        </tr>
                        <tr>
                          <td className="last">
                          7 days x SVIP
                          </td>
                        </tr>
                      </table>
                    </div>
                  ) }
                </Accordion>
                <Accordion
                  title="Overall Leaderboard"
                  toggleUserTalent={toggleUserTalent2}
                  hasTabs={1}
                  defaultOpen={false}
                  userTalent={userTalent2}
                >
                  {userTalent2.user ? (
                    <div className="userContent">
                      <div className="beanBag">
                        <img src={baseUrl + "/streamkar/rewards/beanbag.png"} />
                      </div>
                    <ul>
                      <li>This leaderboard will be based on trophies earned by the team from the weekly rankings. </li>
                      <li>At the end of the event, the teams with the most trophies will be the winners, and rewards will be distributed from the bean pot.</li>
                      <li>The rewards will be distributed among the top 2 ranked teams in the event, and internally, the top 3 contributors from both teams will receive the rewards in the following ratio: </li>
                    </ul>
                      <table>
                        <tr>
                          <td className="colored">
                          Top 1 from the winning team: 30% of the beans pot + Fury Profile Frame x 15 days
                          </td>
                        </tr>

                        <tr>
                          <td className="colored">
                          Rank 2 from the winning team: 20% of the beans pot + Fury Profile Frame x 10 days
                          </td>
                        </tr>
                        <tr>
                          <td className="colored">Rank 3 from the winning team: 10% of the beans pot + Fury Profile Frame x 7 days </td>
                        </tr>
                        <tr>
                          <td>Rank 1 from runner-up team: 20% of the beans pot + Fury Profile Frame x 15 days</td>
                        </tr>
                        <tr>
                          <td>Rank 2nd from runner-up team: 15% of the beans pot + Fury Profile Frame x 10 days</td>
                        </tr>
                        <tr>
                          <td className="last">
                          Rank 3rd from runner-up team: 5% of the beans pot + Fury Profile Frame x 7 days 
                          </td>
                        </tr>
                      </table>
                    </div>
                  ) : (
                    <div className="talentContent">
                      <div className="beanBag">
                        <img src={baseUrl + "/streamkar/rewards/beanbag.png"} />
                      </div>
                      <ul>
                     <li> This leaderboard will be based on the gems received by the talents during the entire event duration.</li>
                    <li> The top 5 talents will receive beans from the beans pot in the ratio of the gems collected by them during the event duration.</li> 
                      </ul>

                      {/* <table>
                        <tr>
                          <td className="colored">
                            1st Rank - 40% of the beans Pot
                          </td>
                        </tr>

                        <tr>
                          <td className="colored">
                            2nd Rank - 30% of the beans Pot
                          </td>
                        </tr>
                        <tr>
                          <td>3rd Rank - 15% of the beans Pot</td>
                        </tr>
                        <tr>
                          <td>4th Rank - 10% of the beans Pot</td>
                        </tr>
                        <tr>
                          <td className="last">
                            5th Rank - 5% of the beans Pot
                          </td>
                        </tr>
                      </table> */}
                    </div>
                  )}
                </Accordion>
                {/* FieldGoal Accordion */}
                <Accordion
                  title="Dunk Milestone Leaderboard"
                  // toggleUserTalent={toggleUserTalent}
                  hasTabs={0}
                  defaultOpen={false}
                >
                  <div className="fieldGoalContent">
                    <ul className="bullets">
                      <li>
                       These Dunk Milestones will be attained with each successful basket you score.
                      </li>
                      <li>
                       When you complete the Dunk Milestones, you'll receive additional gifts.
                      </li>
                     
                    </ul>

                    <table>
                      <tr>
                        <th>Milestone No</th>
                        <th style={{ borderRight: "none" }}>Rewards</th>
                        <th style={{ borderLeft: "none" }}></th>
                      </tr>
                      <tr>
                        <td>100</td>
                        <td className="colored">
                        3 days ignite Profile Frame.
                        </td>
                        <td>
                          <img
                            src={`${baseUrl}/streamkar/rewards/igniteFrame.png`}
                            className="rewardImg"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>200</td>
                        <td className="colored"> 3 days Ballpark Audio Theme.</td>
                        <td>
                          <img
                            src={`${baseUrl}/streamkar/rewards/ballParkTheme.png`}
                            className="rewardImg"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>500</td>
                        <td >5 days Spaceship Entrance.</td>
                        <td>
                          <img
                            src={`${baseUrl}/streamkar/rewards/spaceship.png`}
                            className="rewardImg"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>1000</td>
                        <td> 5 days Brave Heart Profile Frame.</td>
                        <td>
                          <img
                            src={`${baseUrl}/streamkar/rewards/braveHeart.png`}
                            className="rewardImg"
                          />
                        </td>
                      </tr>

                     

                      <tr>
                        <td>2000</td>
                        <td>7 days x HERO Entrance </td>
                        <td>
                          <img
                            src={`${baseUrl}/streamkar/rewards/heroEntrance.png`}
                            className="rewardImg"
                          />
                        </td>
                      </tr>
                    </table>
                  </div>
                </Accordion>
              </div>:<div className="tab2-content">
                {/* Daily Accordion */}
                <Accordion
                  title="Daily Leaderboard"
                  toggleUserTalent={toggleUserTalent}
                  hasTabs={1}
                  defaultOpen={true}
                  userTalent={userTalent}
                >
                  {userTalent.user ? (
                    <div className="userContent">
                      <div className="beanBag">
                        <img src={baseUrl + "/streamkar/rewards/beanbag.png"} />
                      </div>
                     <ul>
                      <li>Ye leaderboard user ke dwara pure din mein score kiye gaye Baskets ke basis par hoga. </li>
                      <li> Leaderboard par ranked TOP 7 players ko Beans rewards distribute honge, unke Baskets scored ke basis par. </li>
                     </ul>
                    </div>
                  ) : (
                    <div className="talentContent">
                     <ul>
                      <li>Ye leaderboard pure din mein talents dwara receive kiye gaye gems ke basis par hoga. </li>
                      <li>Talents ko following accessories reward ki jayegi unke ranks ke basis par: </li>
                      </ul>
                      <table>
                        <tr>
                          <td className="colored">
                            1st Rank - 3 Days X (Water Splash Profile Frame +
                            Royal Carriage)
                          </td>
                        </tr>

                        <tr>
                          <td className="colored">
                            2nd Rank - 2 Days X (Water Splash Profile Frame +
                            Royal Carriage)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            3rd Rank - 1 Day X (Water Splash Profile Frame +
                            Royal Carriage)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            4th Rank - 1 Day X (Water Splash Profile Frame +
                            Royal Carriage)
                          </td>
                        </tr>
                        <tr>
                          <td className="last">
                            5th Rank - 1 Day X (Water Splash Profile Frame +
                            Royal Carriage)
                          </td>
                        </tr>
                      </table>
                    </div>
                  )}
                </Accordion>
                {/* Overall Accordion */}
                <Accordion
                  title="Weekly Leaderboard"
                  toggleUserTalent={toggleUserTalent3}
                  hasTabs={1}
                  defaultOpen={false}
                  userTalent={userTalent3}
                >
                  {userTalent3.user ? (
                    <div className="talentContent">
                      
                      <ul>
                     <li>Beans pot mein collect kiye gaye Beans ko Teams jo 1, 2, aur 3 rank par hain, unke Top 2 users mein distribute kiye jayenge</li>
                    <li>Team mein internally Beans ka distribution user ke dwara weekly cycle me score kiye gaye Baskets ke basis par hoga.</li> 
                      </ul>

                      <table>
                        <tr>
                          <td className="colored">
                            1st Rank - 10 TROPHIES
                          </td>
                        </tr>

                        <tr>
                          <td className="colored">
                          2nd Rank - 7 TROPHIES
                          </td>
                        </tr>
                        <tr>
                          <td> 3rd Rank - 5 TROPHIES</td>
                        </tr>
                        <tr>
                          <td>4th - 6th Rank -  3 TROPHIES</td>
                        </tr>
                        <tr>
                          <td className="last">
                          7th & 8th Rank -  1 TROPHY
                          </td>
                        </tr>
                      </table>
                    </div>
                  ): (
                    <div className="userContent">
                    
                      <p>
                        {/* 0.30% of the beans will be collected in the beans pot. */}
                        {/* Estimated rewards to be shown on top 5 rankings */}
                        Weekly Ranking me se Top 5 talents ko neeche diye gaye accesories me se randomly distribute kiye jayenge. 
                      </p>
                      <table>
                        <tr>
                          <td className="colored">
                          7 days x Thunder audio theme
                          </td>
                        </tr>

                        <tr>
                          <td className="colored">
                          7 days x Rusty Ranger entrance
                          </td>
                        </tr>
                        <tr>
                          <td className="colored">7 days x Fish World audio theme</td>
                        </tr>
                        <tr>
                          <td>7 days x Gold Luxury Entrance</td>
                        </tr>
                        <tr>
                          <td>7 days x King of Road audio theme</td>
                        </tr>
                        <tr>
                          <td> 7 days x Kingpin entrance</td>
                        </tr>
                        <tr>
                          <td>7 days x Bunny profile frame</td>
                        </tr>
                        <tr>
                          <td>7 days x Fury profile frame</td>
                        </tr>
                        <tr>
                          <td>7 days x Rider entrance</td>
                        </tr>
                        <tr>
                          <td className="last">
                          7 days x SVIP
                          </td>
                        </tr>
                      </table>
                    </div>
                  ) }
                </Accordion>
                <Accordion
                  title="Overall Leaderboard"
                  toggleUserTalent={toggleUserTalent2}
                  hasTabs={1}
                  defaultOpen={false}
                  userTalent={userTalent2}
                >
                  {userTalent2.user ? (
                    <div className="userContent">
                      <div className="beanBag">
                        <img src={baseUrl + "/streamkar/rewards/beanbag.png"} />
                      </div>
                    <ul>
                      <li>Ye leaderboard team ke dwara weekly rankings se jeete gaye trophies par based hoga.</li>
                      <li>Event ke end mein, sabse zyada trophies wali teams winner hongi, aur bean’s pot me se rewards distribute kiye jayenge.</li>
                      <li>Rewards event mein top 2 ranked teams ke beech distribute kiye jayenge, aur internally, dono teams ke top 3 contributors ko following ratio mein rewards milenge:</li>
                    </ul>
                      <table>
                        <tr>
                          <td className="colored">
                          Top 1 from the winning team: 30% of the beans pot + Fury Profile Frame x 15 days
                          </td>
                        </tr>

                        <tr>
                          <td className="colored">
                          Rank 2 from the winning team: 20% of the beans pot + Fury Profile Frame x 10 days
                          </td>
                        </tr>
                        <tr>
                          <td className="colored">Rank 3 from the winning team: 10% of the beans pot + Fury Profile Frame x 7 days </td>
                        </tr>
                        <tr>
                          <td>Rank 1 from runner-up team: 20% of the beans pot + Fury Profile Frame x 15 days</td>
                        </tr>
                        <tr>
                          <td>Rank 2nd from runner-up team: 15% of the beans pot + Fury Profile Frame x 10 days</td>
                        </tr>
                        <tr>
                          <td className="last">
                          Rank 3rd from runner-up team: 5% of the beans pot + Fury Profile Frame x 7 days 
                          </td>
                        </tr>
                      </table>
                    </div>
                  ) : (
                    <div className="talentContent">
                      <div className="beanBag">
                        <img src={baseUrl + "/streamkar/rewards/beanbag.png"} />
                      </div>
                      <ul>
                     <li> Ye leaderboard pure event ke dauran talents dwara receive kiye gaye Gems par based hoga.</li>
                    <li> Top 5 talents ko Beans pot se unke dwara event ke duration me receive kiye gaye gems ke basis par Beans milenge.</li> 
                      </ul>

                   
                    </div>
                  )}
                </Accordion>
                {/* FieldGoal Accordion */}
                <Accordion
                  title="Dunk Milestone Leaderboard"
                  // toggleUserTalent={toggleUserTalent}
                  hasTabs={0}
                  defaultOpen={false}
                >
                  <div className="fieldGoalContent">
                    <ul className="bullets">
                      <li>
                      Aapka har successful attempt, aapko Dunk Milestone ki taraf leke jayega.
                      </li>
                      <li>
                      Aap Dunk Milestones achieve karke extra rewards jeet sakte ho.
                      </li>
                     
                    </ul>

                    <table>
                      <tr>
                        <th>Milestone No</th>
                        <th style={{ borderRight: "none" }}>Rewards</th>
                        <th style={{ borderLeft: "none" }}></th>
                      </tr>
                      <tr>
                        <td>100</td>
                        <td className="colored">
                        3 days ignite Profile Frame.
                        </td>
                        <td>
                          <img
                            src={`${baseUrl}/streamkar/rewards/igniteFrame.png`}
                            className="rewardImg"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>200</td>
                        <td className="colored"> 3 days Ballpark Audio Theme.</td>
                        <td>
                          <img
                            src={`${baseUrl}/streamkar/rewards/ballParkTheme.png`}
                            className="rewardImg"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>500</td>
                        <td >5 days Spaceship Entrance.</td>
                        <td>
                          <img
                            src={`${baseUrl}/streamkar/rewards/spaceship.png`}
                            className="rewardImg"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>1000</td>
                        <td> 5 days Brave Heart Profile Frame.</td>
                        <td>
                          <img
                            src={`${baseUrl}/streamkar/rewards/braveHeart.png`}
                            className="rewardImg"
                          />
                        </td>
                      </tr>

                     

                      <tr>
                        <td>2000</td>
                        <td>7 days x HERO Entrance </td>
                        <td>
                          <img
                            src={`${baseUrl}/streamkar/rewards/heroEntrance.png`}
                            className="rewardImg"
                          />
                        </td>
                      </tr>
                    </table>
                  </div>
                </Accordion>
              </div>
            )}
          </div>
        </div>
      </PopUp>
    </div>
  );
};

export default GuideComp;
