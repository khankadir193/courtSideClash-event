import React, { useEffect } from "react";
import "../Style/popup.css";
import congoGifBg from '../assests/default.png'; //here should cong image

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

  const getMinHeight = () => {
    if (isAccPopUp) return "74vw";
    if (isRewards) return "58vw";
    if (isGame) return "63vw";
    if (isMilestone) return "108vw";
    if (guide) return "124vw";
    if (isTeam) return "124vw";
    return "";
  };

  const getWidth = () => {
    if (isAccPopUp) return "85%";
    if (isRewards) return "91%";
    if (isMilestone) return "98%";
    if (guide) return "95%";
    if (isTeam) return "95%";
    return "";
  };

  const getTitleClass = () => {
    if (guide) return "guide-title";
    if (isMilestone) return "info-title";
    if (isTeam) return "teams-title";
    return "title";
  };

  return (
    <div className="overlay">
      <div
        className="content"
        style={{
          backgroundImage: `url(${textTitle === 'HURRAH!!' || textTitle === 'GODLIKE!!' ? congoGifBg : bg})`,
          minHeight: getMinHeight(),
          width: getWidth(),
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
            className={getTitleClass()}
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
