import React, { useEffect, useState } from "react";
import "../Style/ButtonSlider.css";
export const ButtonSlider = (props) => {
  const { bg, texts, onToggle, isPot, isLeaderBoard, talentDaily } = props;
  const [isOn, setIsOn] = useState(false);

  function handleToggle() {
    setIsOn(!isOn);
    if (onToggle) {
      onToggle();
    }
  }

  return (
    <div
      className={`slider ${isPot ? "mt1" : ""}`}
      style={{
        backgroundImage: `url(${bg})`,
        marginTop: talentDaily ? "0vw" : "",
      }}
    >
      <button
        className={`slider-button ${isOn ? "on" : "off"}`}
        style={{
          width: isLeaderBoard && "50%",
          fontSize: isLeaderBoard && "2.9vw",
        }}
      >
        {isOn ? texts[1] : texts[0]}
      </button>
      <div
        className={`slider-handle ${isOn ? "left" : "right"}`}
        onClick={handleToggle}
      />
    </div>
  );
};
