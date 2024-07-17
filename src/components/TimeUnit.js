import React from "react";

const TimeUnit = ({ unit, value }) => {
  return (
    <div className="time-unit">
      <div className="value">
        <span>{value}</span>
        <span>{unit}</span>
      </div>
    </div>
  );
};

export default TimeUnit;
