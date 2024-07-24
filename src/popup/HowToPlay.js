import "./HowToPlay.css";

function HowToPlay() {
  return (
    <div className="HtpContent">
      <h4 class="yellow-text">Courtside Clash</h4>
      <div style={{ padding: "4vw" }}>
        <ul>
          <li>
            To get one opportunity to play in this game, you spend 25,000 beans
            on event gifts.{" "}
            <span class="yellow-text">( one chance = 25,000 Beans)</span>
          </li>
          <li>
            After you send 1 gift, you will automatically get placed in any one
            of the eight teams in this event.
          </li>
          <li>
            On the event webpage, you will see 6 baskets, and to utilize your
            chance, you will be required to press the{" "}
            <span class="yellow-text">THROW</span> button on the webpage.
          </li>
          <li>
            After you click the <span class="yellow-text">THROW</span> button,
            the ball will be hurled into the net, and you will receive appealing
            prizes if it successfully makes its way through.
          </li>
          <li>
            The number of baskets you score will not only contribute towards
            your daily leaderboard but will also contribute to your team, which
            will help them rank higher on the weekly leaderboard, which in turn
            can benefit you with amazing rewards if you are the top contributor
            to your team.
          </li>
          <li>
            Depending on the amount of beans spent on event gifts, you may type
            up to<span class="yellow-text">x999</span> chances to play at a
            time.
          </li>
        </ul>
      </div>

      <h4 class="yellow-text">What are Dunk Milestones?</h4>
      <div style={{ padding: "4vw" }}>
        <ul>
          <li>
            These Dunk Milestones will be attained with each successful basket
            you score.
          </li>
          <li>
            When you complete the Dunk Milestones, you'll receive additional
            gifts.
          </li>
        </ul>
      </div>

      <h4 class="yellow-text">Weekly Leaderboard</h4>
      <div style={{paddingLeft: '4vw'}}>
        <ul>
          <li>
            In the weekly leaderboard, teams will be ranked on the basis of the
            number of total baskets scored by the entire team during the week.
          </li>
          <li>
            The Trophies that the teams received from the Weekly Leaderboard
            helps them to rank higher on the Overall Leaderboard.
          </li>
          <li>
            The teams ranked on the Weekly leaderboard will receive Trophies as
            per the below mentioned table:
          </li>
        </ul>
        <table style={{width: '80%', margin: 'auto', textAlign: 'center', border:'1px solid white'}}>
          <tr>
            <th style={{borderBottom: '1px solid white', borderRight: '1px solid white'}}>
              Team Weekly Rank
            </th>
            <th style={{borderBottom: '1px solid white'}}>TROPHIES</th>
          </tr>
          <tr>
            <td
              class="colored"
              style={{borderBottom: '1px solid white', borderRight: '1px solid white'}}
            >
              1st
            </td>
            <td class="colored" style={{borderBottom: '1px solid white'}}>
              10
            </td>
          </tr>
          <tr>
            <td
              class="colored"
              style={{borderBottom: '1px solid white', borderRight: '1px solid white'}}
            >
              2nd
            </td>
            <td class="colored" style={{borderBottom: '1px solid white'}}>
              7
            </td>
          </tr>
          <tr>
            <td
              class="colored"
              style={{borderBottom: '1px solid white', borderRight: '1px solid white'}}
            >
              3rd
            </td>
            <td class="colored" style={{borderBotom: '1px solid white'}}>
              5
            </td>
          </tr>
          <tr>
            <td
              class="colored"
              style={{borderBottom: '1px solid white', borderRight: '1px solid white'}}
            >
              4th - 6th
            </td>
            <td class="colored" style={{borderBottom:'1px solid white'}}>
              3
            </td>
          </tr>
          <tr>
            <td class="colored" style={{borderRight :'1px solid white'}}>
              7th &amp; 8th
            </td>
            <td class="colored">1</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default HowToPlay;
