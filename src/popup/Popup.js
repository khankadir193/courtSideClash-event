import React, { useEffect } from "react";
import "../Style/popup.css";
// import congoGifBg from '../assets/images/Congo-gif.gif'
import congoGifBg from '../assests/default.png';
const PopUp = (props) => {
  const {
    children,
    bg,
    title,
    popUpHandler,
    isAccPopUp,
    isRewards,
    isGame,
    isMilestone,
    guide,
    isTeam,
   textTitle,
  } = props;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="overlay">
      <div
        className="content"
        style={{
          backgroundImage: `${textTitle == 'HURRAH!!' || textTitle == 'GODLIKE!!'?`url(${congoGifBg})`: `url(${bg})`}`,
          minHeight: `${
            isAccPopUp
              ? "74vw"
              : isRewards
              ? "58vw"
              : isGame
              ? "63vw"
              : isMilestone
              ? "108vw"
              : guide
              ? "124vw"
              : isTeam
              ? "124vw"
              : ""
          }`,
          width: `${
            isAccPopUp
              ? "85%"
              : isRewards
              ? "91%"
              : isMilestone
              ? "98%"
              : guide
              ? "95%"
              : isTeam
              ? "95%"
              : ""
          }`,
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            marginTop: "-8vw",
            justifyContent: "center",
          }}
        >
          <img
            src={title}
            className={`${
              guide
                ? "guide-title"
                : isMilestone
                ? "info-title"
                : isTeam
                ? "teams-title"
                : "title"
            }`}
            style={{ visibility: title ? "visible" : "hidden" }}
          />
        </div>
        {children}
      </div>
      <button className="closeBtn" onClick={popUpHandler}></button>
    </div>
  );
};

export default PopUp;
