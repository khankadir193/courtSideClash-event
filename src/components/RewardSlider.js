import React, { useContext, useEffect, useState } from "react";
import "../Style/Slider.css";
import leftArrow from "../assests/left-arrow.png";

import SliderDot from "./SliderDot";

import { rewGet } from "../ApiCall/imageContext";

const RewardsSlider = ({
  rewards,
  showRanks,
  hideArrows,
  showIndicators,
  tag,
  showGems,
  isUser,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let intervalId = null;
  const nextSlide = () => {
    setCurrentIndex((prevState) =>
      prevState === rewards?.length - 1 ? 0 : prevState + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prevState) =>
      prevState === 0 ? rewards?.length - 1 : prevState - 1
    );
  };

  useEffect(() => {
    intervalId = setInterval(nextSlide, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [rewards]);
  return (
    <div className={`slider2`}>
      {!hideArrows && (
        <img className="left-arrow" src={leftArrow} onClick={prevSlide} />
      )}
      <img src={tag} className="rewards-text" />
      <div className="slider-content">
        {showRanks && (
          <div
            className={`rank-bg ${
              rewards[currentIndex]?.rank == 1
                ? "top1"
                : rewards[currentIndex]?.rank == 2
                ? "top2"
                : rewards[currentIndex]?.rank == 3
                ? "top3"
                : rewards[currentIndex]?.rank == 4
                ? "top4"
                : "top5"
            }`}
          >
            {rewards[currentIndex]?.rank}
          </div>
        )}

        <div className="rew-container">
          {rewards[currentIndex]?.pageRewards?.map((singleRew, index) => {
            return (
              <div className="reward-item" key={index}>
                <div className="image-div">
                  <img src={rewGet(singleRew.name)} className="reward-img" />
                </div>
                <div className="center rew-desc">{singleRew.desc}</div>
              </div>
            );
          })}
        </div>

        {showIndicators && (
          <div className="indicators">
            {rewards.map((item, index) => (
              <SliderDot isActive={index === currentIndex} />
            ))}
          </div>
        )}
      </div>
      {!hideArrows && (
        <img className="right-arrow flip" src={leftArrow} onClick={nextSlide} />
      )}
    </div>
  );
};

export default RewardsSlider;
