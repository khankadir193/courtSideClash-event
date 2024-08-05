import React from "react";

const TimeUnit = ({ unit, value }) => (
  <div className="time-unit">
    <div className="value">
      <React.Fragment>
        <span>{value}</span>
        <span>{unit}</span>
      </React.Fragment>
    </div>
  </div>
);


export default TimeUnit;
