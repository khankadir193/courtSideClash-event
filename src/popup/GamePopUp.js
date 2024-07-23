import PopUp from "./Popup.js";
import bg from "../assests/game-popup.gif";
import bean from "../assests/bean.png";
import basketIcon from "../assests/gift-basketball.gif";
// import bgImage from '../assets/images/titleTagBg.png'
// import "../Style/popup.css";
import '../Style/Gamepopup.css';
import { useApi } from '../ApiCall/AppContext';
import { baseUrl } from '../ApiCall/ApiComp.js';
function GamePopUp(props) {
  const { toggleGamePopUp } = useApi();
  const {
    textTitle,
    content,
    beans,
    throwsLeft,
    isSuccess,
    isCombo,
    notPoints,
    gameErroCode,
    errMsg,
    rewardsList,
    rewardsContent,
    inputValue,
    rewardWon
  } = props;
  const getTitle = () => {
    if (isSuccess && !isCombo && gameErroCode === 0) {
      return "HURRAH!!";
    } else if (isSuccess && isCombo && gameErroCode === 0) {
      return "GODLIKE!!";
    } else if (!isSuccess && !isCombo && gameErroCode === 0) {
      return "Oops!!";
    } else if (notPoints) {
      return "Try Again!!";
    } else {
      return "Oops!!";
    }
  };

  return (
    <PopUp
      bg={bg}
      popUpHandler={toggleGamePopUp}
      // isRewards={true}
      textTitle={getTitle()}
      isGame={true}
    >
      <div className="game">
        <p className={`textTitle ${getTitle() == 'GODLIKE!!' || getTitle() == 'HURRAH!!'  ? 'textTitle-congo' : '' }`} >{getTitle()}</p>

        {isSuccess && !isCombo && gameErroCode === 0 ? (
          <div className="game-content" style={{width: '80%',left: '9vw',top: '38vw'}}>
             <div>That was a perfect throw and you've won  {rewardsContent} <img className="w-10 v-align-middle" src={bean} alt="" /></div> 
          </div>
        ) : isSuccess && isCombo && gameErroCode === 0 ? (
          <div className="game-content-success">
           <div className="mt"> Showcasing your incredible skills, you've scored & won <br/>{rewardWon > 1 ? rewardWon+' baskets ':rewardWon+' basket '} <img className="w-10 v-align-middle" src={basketIcon} alt="" /> + { rewardsContent} <img className="w-10 v-align-middle" src={bean} alt="" />. Well done!</div>
          </div>
        ) : notPoints ? (
          <div className="game-content">
            To earn a throwing chance, spend 25k beans worth of event gifts and
            start playing. We're waiting to see you play. Come soon! DO YOU
            KNOW?
            <p className="bottom-text">Successful throws win you beans.</p>
          </div>
        ) : !isSuccess && gameErroCode === 0 ? (
          <div className="game-content">
            Uh-Oh! The throw was unsuccessful. Please try again.
            <p className="bottom-text">
              {" "}
              <span style={{color:'gold'}}>DO YOU KNOW?</span> Successful throws win you beans.
            </p>
          </div>
        ) : (
          <div className="game-content" ><div>{errMsg}</div> </div>
        )}
      </div>
    </PopUp>
  );
}

export default GamePopUp;
