import React, { useContext, useState } from "react";
import "../styles/popup.scss";
import PopUp from "../components/PopUp";
import guidBg from "../assests/Beans pot banner.pn/";
import titleBanner from "../assets/images/Guide-banner.png";
import Accordion from "../components/Accordion";
import { AppContext } from "../App";
import { baseUrl } from "../api";
const Guide = (props) => {
  const { selectedLanguage } = props;
  const { toggleGuide } = useContext(AppContext);
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

  return (
    <div>
      <PopUp bg={guidBg} title={titleBanner} popUpHandler={toggleGuide}>
        <div className="guidePopUp">
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
                  This event is divided into 3 parts:
                  <div style={{ paddingLeft: "4vw" }}>
                    <ul>
                      <li>
                        Send the event gifts and earn a chance to play the
                        Basket Brawlers game. (for user)
                      </li>
                      <li>
                        Do tasks and accelerate growth on the Growth
                        Acceleration leaderboard. (for talent)
                      </li>
                      <li>
                        Collect the Acceleration card from the game and send it
                        to your favorite talent. (for the user)
                      </li>
                    </ul>
                  </div>
                  <h4 className="yellow-text">Basket Brawlers</h4>
                  <div style={{ paddingLeft: "4vw" }}>
                    <ul>
                      <li>
                        To participate in the game, you need to spend 25,000
                        beans on event gifts, which will give you one chance to
                        play.{" "}
                        <span className="yellow-text">
                          (25,000 Beans=1 chance )
                        </span>
                      </li>
                      <li>
                        You can type up to x99 chances to play in one go based
                        on the beans spent on the event gifts.
                      </li>
                      <li>
                        Once you click on the{" "}
                        <span className="yellow-text">THROW</span> button. The
                        ball will be thrown into the net, if it passes through
                        the net successfully, you will be winning attractive
                        rewards.
                      </li>
                      <li>
                        You will see a section on the web page that will show
                        the number of chances you have to play.
                      </li>
                    </ul>
                  </div>
                  <h4 className="yellow-text">Dunk Milestones:</h4>
                  <div style={{ paddingLeft: "4vw" }}>
                    <ul>
                      <li>
                        Each
                        <span className="yellow-text"> successful</span> attempt
                        will be counted towards these Landmarks.
                      </li>
                      <li>
                        You will get extra rewards for reaching the Landmarks.
                      </li>

                      <li>
                        In a situation of a tie, the successful attempts done in
                        less time will be given priority and will be ranked on
                        the leaderboard.
                      </li>
                      <li>
                        You will receive Beans rewards only if you are in the
                        top 3 users with the most successful attempts.
                      </li>
                      <li>
                        You will earn Beans rewards only after a minimum of{" "}
                        <span className="yellow-text">1000</span>
                        successful attempts or more.
                      </li>
                    </ul>
                  </div>
                  <div className="growthAcceleration">
                    <h4 className="yellow-text">
                      Tasks for talent to Accelerate growth on the leaderboard.
                      (for talent)
                    </h4>

                    <div style={{ paddingLeft: "4vw" }}>
                      <ul>
                        <li>
                          When you receive 100 beans through event gifts, it
                          will give you 1{" "}
                          <span className="yellow-text">POWER POINT</span>.
                        </li>
                        <li>
                          You need to complete the daily tasks to accelerate the
                          <span className="yellow-text">POWER POINT</span> on
                          the leaderboard.
                        </li>
                        <li>
                          To receive the Tokens you need to perform the
                          mentioned tasks daily as the status of the task will
                          reset daily.
                        </li>
                      </ul>
                    </div>

                    <div className="accTable">
                      <table>
                        <thead>
                          <th>Sr</th>
                          <th>Task</th>
                          <th>Tokens</th>
                        </thead>
                        <tr>
                          <td>1</td>
                          <td className="t-left">Win 2X PK daily</td>
                          <td>50</td>
                        </tr>

                        <tr>
                          <td>2</td>
                          <td className="t-left">
                            Receive at least 10k beans through event gift
                          </td>
                          <td>50</td>
                        </tr>
                      </table>

                      <div style={{ paddingLeft: "4vw", marginTop: "2vw" }}>
                        <ul>
                          <li>
                            If you win only 1 pk in a day, and couldn't win 2nd
                            PK before 23:59:59 GMT, you will not receive Tokens
                            from that day.
                          </li>
                          <li>
                            These Tokens will be considered for growth
                            Acceleration.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <h4 className="yellow-text">
                      WHAT IS GROWTH ACCELERATION?
                    </h4>
                    <div style={{ paddingLeft: "4vw" }}>
                      <ul>
                        <li>
                          When you collect the required Tokens by doing the
                          tasks, your{" "}
                          <span className="yellow-text">POWER POINTS</span> on
                          the webpage will be multiplied as and when you receive
                          the beans through event gifts post the Acceleration.
                        </li>
                        <li>
                          By default the Acceleration rate will be 1x,
                          therefore, the{" "}
                          <span className="yellow-text">POWER POINTS</span> will
                          be calculated according to the 1x Acceleration rate,
                          later as you increase your Acceleration rate further
                          by receiving Tokens, the POWER POINTS collected after
                          that will be multiplied by the current Acceleration
                          rate.
                        </li>
                      </ul>
                    </div>

                    <div className="accTable mt">
                      <table>
                        <thead>
                          <th>Tokens required</th>
                          <th>Minimum days required to collect</th>
                          <th>Acceleration Rate</th>
                        </thead>
                        <tr>
                          <td>200</td>
                          <td>2nd Day</td>
                          <td>1.2x</td>
                        </tr>
                        <tr>
                          <td>400</td>
                          <td>4th Day</td>
                          <td>1.5x</td>
                        </tr>
                        <tr>
                          <td>800</td>
                          <td>8th Day</td>
                          <td>2x</td>
                        </tr>
                      </table>
                    </div>

                    <div style={{ paddingLeft: "4vw" }}>
                      <ul>
                        <li>
                          You can see a Landmark for the Acceleration rate on
                          the webpage which will update in real-time.
                        </li>
                        <li>
                          You can collect the Tokens in instalments but doing
                          the tasks in instalments is not allowed.
                        </li>
                        <li>
                          Your Tokens are auto-credited after the completion of
                          tasks and the Acceleration rate will be automatically
                          upgraded once the required Token criteria are met.
                        </li>
                      </ul>
                    </div>
                    <h4 className="mt yellow-text">
                      Collect the ACCELERATION CARDS from the game and send it
                      to your favorite talent. (for the user)
                    </h4>

                    <div style={{ paddingLeft: "4vw" }}>
                      <ul>
                        <li>
                          After every 2000 chances are played, the system can
                          distribute the{" "}
                          <span className="yellow-text">
                            ACCELERATION CARDS
                          </span>{" "}
                          randomly.
                        </li>
                        <li>
                          You will get a free{" "}
                          <span className="yellow-text">
                            ACCELERATION CARDS
                          </span>{" "}
                          which can be sent to only 1 talent ID at a time during
                          the event.
                        </li>
                        <li>
                          If you receive multiple{" "}
                          <span className="yellow-text">
                            ACCELERATION CARDS
                          </span>
                          , you need to send them to a different talent ID.
                        </li>
                        <li>
                          When talent receives this card that you have sent, the
                          Acceleration rate will be increased by 1x than the
                          existing rate.
                        </li>
                      </ul>
                    </div>
                    <div className="accTable">
                      <table>
                        <thead>
                          <th>If the existing rate is at:</th>
                          <th>After receiving the ACCELERATION CARD</th>
                        </thead>
                        <tr>
                          <td>1x</td>
                          <td>2x</td>
                        </tr>

                        <tr>
                          <td>1.2x</td>
                          <td>2.2x</td>
                        </tr>

                        <tr>
                          <td>1.5x</td>
                          <td>2.5x</td>
                        </tr>

                        <tr>
                          <td>2x</td>
                          <td>3x</td>
                        </tr>
                      </table>

                      <div style={{ paddingLeft: "4vw", marginTop: "2vw" }}>
                        <ul>
                          <li>
                            You need to enter the talent ID in the search
                            section on the web page, after which the talent ID
                            will appear with an “ACCELERATE” button as soon as
                            you click on this button, the talent's account will
                            be automatically credited with the new Acceleration
                            rate.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="tab1-content">
                  Iss event ko 3 parts mein divide kiya hai.
                  <div style={{ paddingLeft: "4vw" }}>
                    <ul>
                      <li>
                        Event gifts send karke Basket Brawlers game ke liye
                        chances jeetiye.( user ke liye)
                      </li>
                      <li>
                        Tasks complete karke leaderboard pe growth accelerate
                        karo.( talent ke liye)
                      </li>
                      <li>
                        <span className="yellow-text">ACCELERATION CARDS</span>{" "}
                        game se collect karo aur talent ko send karo.(user ke
                        liye)
                      </li>
                    </ul>
                  </div>
                  <h4 className="yellow-text">Basket Brawlers</h4>
                  <div style={{ paddingLeft: "4vw" }}>
                    <ul>
                      <li>
                        Game mein participate karne ke liye aapko 25,000 Beans
                        event gifts pe spend karne honge, usase aapko khelneka
                        ek mauka milega.
                        <span className="yellow-text">
                          (25,000 Beans=1 chance)
                        </span>
                      </li>
                      <li>
                        Aap x99 chances tak aapko kitne chance khelne hai woh
                        type kar sakte ho.
                      </li>
                      <li>
                        Aap jaise hi <span className="yellow-text">THROW</span>{" "}
                        button pe click karoge ball ko net ki taraf throw kiya
                        jayega, aur agar ball net se successfully pass ho gai
                        toh, aap ko attractive rewards jeetoge.
                      </li>
                      <li>
                        Aapke pass kitne chance bache hue hai woh aap web page
                        par dekh sakte hai.
                      </li>
                    </ul>
                  </div>
                  <h4 className="yellow-text">Dunk Milestones:</h4>
                  <div style={{ paddingLeft: "4vw" }}>
                    <ul>
                      <li>
                        Aapka har successful attempt aapko Landmark ki taraf
                        leke jayega.
                      </li>
                      <li>
                        Aap Landmarks achieve karke extra rewards jeet sakte ho.{" "}
                      </li>
                      <li>
                        Agar leaderboard pe tie jaisi situation aa gai toh kam
                        se kam samay mein successful attempts pure karne vale
                        player ko leaderboard pe rank kiya jaayega.
                      </li>
                      <li>
                        Aap Beans rewards jeet sakte ho agar aap top 3 user mein
                        count hue toh , top 3 users woh honge jo sabse jyada
                        successful attempts denge.
                      </li>
                      <li>
                        Aap minimum <span className="yellow-text">1000</span>{" "}
                        successful attempts ke baad hi Beans rewards jeet paoge.
                      </li>
                    </ul>
                  </div>
                  <div className="growthAcceleration">
                    <h4 className="yellow-text">
                      Tasks complete karke leaderboard pe growth accelerate
                      karo. ( talent ke liye)
                    </h4>

                    <div style={{ paddingLeft: "4vw" }}>
                      <ul>
                        <li>
                          Aapko agar 100 beans event gift ke jariye se receive
                          hue hai, tab aapko 1{" "}
                          <span className="yellow-text">POWER POINT</span>{" "}
                          milega.
                        </li>
                        <li>
                          Aapko aapke{" "}
                          <span className="yellow-text">POWER POINTS</span>{" "}
                          leaderboard pe accelerate karneke liye daily task
                          complete karne honge.
                        </li>
                        <li>
                          Niche diye gaye tasks pure karke aap Tokens receive
                          kar sakte ho.Ye task har din reset kar diye jayenge.
                        </li>
                      </ul>
                    </div>
                    {/* <p>Tasks</p> */}

                    <div className="accTable">
                      <table>
                        <thead>
                          <th>Sr</th>
                          <th>Task</th>
                          <th>Tokens</th>
                        </thead>
                        <tr>
                          <td>1</td>
                          <td className="t-left">Win 2X PK daily</td>
                          <td>50</td>
                        </tr>

                        <tr>
                          <td>2</td>
                          <td className="t-left">
                            Receive at least 10k beans through event gift
                          </td>
                          <td>50</td>
                        </tr>
                      </table>

                      <div style={{ paddingLeft: "4vw", marginTop: "2vw" }}>
                        <ul>
                          <li>
                            Agar aap ek din mein ek PK jeet te ho aur 23:59:59
                            GMT se pehle dusra PK nahi jeetoge toh aapko use din
                            ke liye Token receive nahi hoga..
                          </li>
                          <li>
                            Ye saare Tokens Growth Acceleration mein consider
                            honge.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <h4 className="yellow-text">
                      GROWTH ACCELERATION kya hai?
                    </h4>
                    <div style={{ paddingLeft: "4vw" }}>
                      <ul>
                        <li>
                          Jab aap tasks complete karke Tokens collect karte ho,
                          aapke{" "}
                          <span className="yellow-text">POWER POINTS</span>{" "}
                          webpage pe multiply honge jab aapko Acceleration ke
                          baad event gift ke jariye beans receive honge.
                        </li>
                        <li>
                          Aapka Acceleration rate by default 1x hoga aur POWER
                          POINTS ka calculation 1x Acceleration rate ke hisab se
                          hoga lekin jaise hi aap Tokens receive karke apna
                          Acceleration rate 1.2x aur aage increase karte ho ,tab
                          aapne collect kiye hue saare POWER POINTS ko current
                          Acceleration rate se multiply kiya jaayega.
                        </li>
                      </ul>
                    </div>

                    <div className="accTable mt">
                      <table>
                        <thead>
                          <th>Tokens required</th>
                          <th>Minimum days required to collect</th>
                          <th>Acceleration Rate</th>
                        </thead>
                        <tr>
                          <td>200</td>
                          <td>2nd Day</td>
                          <td>1.2x</td>
                        </tr>
                        <tr>
                          <td>400</td>
                          <td>4th Day</td>
                          <td>1.5x</td>
                        </tr>
                        <tr>
                          <td>800</td>
                          <td>8th Day</td>
                          <td>2x</td>
                        </tr>
                      </table>
                    </div>

                    <div style={{ paddingLeft: "4vw" }}>
                      <ul>
                        <li>
                          Aap aapka Landmark for Acceleration rate webpage pe
                          dekh sakte ho, ye real time mein update ho jayega.
                        </li>
                        <li>
                          Aap Tokens instalment mein collect kar sakte ho, par
                          tasks instalment mein pure karna allowed nahi hai.
                        </li>
                        <li>
                          Aapke Tokens task completion ke baad auto credit honge
                          aur Token criteria complete honepe Acceleration rate
                          automatically upgrade ho jayega.
                        </li>
                      </ul>
                    </div>
                    <h4 className="mt yellow-text">
                      Acceleration Cards game khelke collect kijiye aur apne
                      favorite talent ko bhejiye. (user ke liye)
                    </h4>

                    <div style={{ paddingLeft: "4vw" }}>
                      <ul>
                        <li>
                          Har 2000 chances khelne ke baad system aapko randomly
                          <span className="yellow-text">
                            Acceleration cards{" "}
                          </span>{" "}
                          distribute karega.
                        </li>
                        <li>
                          Aapko free ACCELERATION CARD milega jo aap sirf ek
                          talent ID ko bhej sakte ho iss event ke dauran.
                        </li>
                        <li>
                          Agar aap ek se jyada Acceleration cards receive karte
                          hai toh aapko woh cards different talent IDs ko bhejne
                          honge.
                        </li>
                        <li>
                          Jab aapne send kiye hue cards talent ko receive honge
                          tab unka existing Acceleration rate 1X se increase
                          hoga.
                        </li>
                      </ul>
                    </div>
                    <div className="accTable">
                      <table>
                        <thead>
                          <th>If the existing rate is at:</th>
                          <th>After receiving the ACCELERATION CARD</th>
                        </thead>
                        <tr>
                          <td>1x</td>
                          <td>2x</td>
                        </tr>

                        <tr>
                          <td>1.2x</td>
                          <td>2.2x</td>
                        </tr>

                        <tr>
                          <td>1.5x</td>
                          <td>2.5x</td>
                        </tr>

                        <tr>
                          <td>2x</td>
                          <td>3x</td>
                        </tr>
                      </table>

                      <div style={{ paddingLeft: "4vw", marginTop: "2vw" }}>
                        <ul>
                          <li>
                            Aapko apke web page ke search section mein talent ID
                            type karni hai , vahi pe aapko talent ID ke saath
                            “ACCELERATE” button dikhai dega ,aap jab woh button
                            press karoge tab talent ke account mein naya
                            Acceleration rate credit ho jayega.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ) : (
              <div className="tab2-content">
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
                      <p>
                        Beans Pot: The rankings will be based on beans spent on
                        event gifts. At the end of each day. Beans will be
                        distributed to top 5 users.
                      </p>
                      <table>
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
                          <td>3rd Rank - 10% of the beans Pot</td>
                        </tr>
                        <tr>
                          <td>4th Rank - 10% of the beans Pot</td>
                        </tr>
                        <tr>
                          <td className="last">
                            5th Rank - 10% of the beans Pot
                          </td>
                        </tr>
                      </table>
                    </div>
                  ) : (
                    <div className="talentContent">
                      <p>
                        The leaderboard will be based on POWER POINTS
                        accumulated by the talents on that day.
                      </p>
                      {/* <table>
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
                      </table> */}

                      <table>
                        <tr>
                          <td className="colored">
                            1st Rank - 3 Days X (FireBrand Profile Frame + Gold
                            Luxury Entrance)
                          </td>
                        </tr>

                        <tr>
                          <td className="colored">
                            2nd Rank - 2 Days X (FireBrand Profile Frame + Gold
                            Luxury Entrance)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            3rd Rank - 1 Day X (FireBrand Profile Frame + Gold
                            Luxury Entrance)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            4th Rank - 1 Day X (FireBrand Profile Frame + Gold
                            Luxury Entrance)
                          </td>
                        </tr>
                        <tr>
                          <td className="last">
                            5th Rank - 1 Day X (FireBrand Profile Frame + Gold
                            Luxury Entrance)
                          </td>
                        </tr>
                      </table>
                    </div>
                  )}
                </Accordion>
                {/* Overall Accordion */}
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
                      <p>
                        {/* 0.30% of the beans will be collected in the beans pot. */}
                        {/* Estimated rewards to be shown on top 5 rankings */}
                        The rankings will be based on beans spent on event gifts
                        by user during the event tenure.
                      </p>
                      <table>
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
                      </table>
                    </div>
                  ) : (
                    <div className="talentContent">
                      <div className="beanBag">
                        <img src={baseUrl + "/streamkar/rewards/beanbag.png"} />
                      </div>
                      <p>
                        Leaderboard will be based on the Power points
                        accumulated by the talent during the event tenure.
                        {/* 0.20%
                        of the beans received will be collected in the talent
                        beans pot Estimated rewards to be shown. */}
                      </p>

                      <table>
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
                      </table>
                    </div>
                  )}
                </Accordion>
                {/* FieldGoal Accordion */}
                <Accordion
                  title="FieldGoal Milestone  Leaderboard"
                  // toggleUserTalent={toggleUserTalent}
                  hasTabs={0}
                  defaultOpen={false}
                >
                  <div className="fieldGoalContent">
                    <ul className="bullets">
                      <li>
                        Each successful attempt will be counted towards these
                        milestones.
                      </li>
                      <li>
                        User's failed attempts will not be counted towards these
                        milestones (11% possibility of NO REWARD).
                      </li>
                      <li>
                        Users will get extra rewards for reaching the
                        milestones.
                      </li>
                      <li>
                        These successful attempts will be ranked on leaderboard
                        which will be placed below the game. In case of same
                        successful attempts, priority will be given to user who
                        did the successful attempts in less time from the day of
                        event start. Furthermore, if situation arise that the
                        scores are still level, user XP level should be taken
                        into consideration.
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
                          3 days Raging Bull Profile Frame.
                        </td>
                        <td>
                          <img
                            src={`${baseUrl}/streamkar/rewards/valentineFrameUser.png`}
                            className="rewardImg"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>200</td>
                        <td className="colored">3 days Spaceship Entrance.</td>
                        <td>
                          <img
                            src={`${baseUrl}/streamkar/rewards/spaceship.png`}
                            className="rewardImg"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>500</td>
                        <td> 5 days Brave Heart Profile Frame.</td>
                        <td>
                          <img
                            src={`${baseUrl}/streamkar/rewards/braveHeart.png`}
                            className="rewardImg"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>1000</td>
                        <td> 7 days Ballpark Audio Theme.</td>
                        <td>
                          <img
                            src={`${baseUrl}/streamkar/rewards/ballParkTheme.png`}
                            className="rewardImg"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>2000</td>
                        <td>7 days HERO Entrance </td>
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

export default Guide;
