import React from "react";
import "../Style/Slider.css";
const SliderDot = ({ isActive }) => {
  return <div className={`slider-dot ${isActive && "active-dot"}`}></div>;
};

export default SliderDot;
