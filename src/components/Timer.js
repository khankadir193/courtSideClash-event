import React, { useEffect, useState } from "react";
import TimeUnit from "./TimeUnit";
import '../Style/defaultStyle.css';

function Timer({ targetTimestamp }) {
  const [remainingTime, setRemainingTime] = React.useState(() => {
    const now = Date.now();
    const timeDifference = targetTimestamp - now;

    return {
      days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
    };
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => {
        const { days, hours, minutes, seconds } = prevRemainingTime;

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(interval);
          return prevRemainingTime;
        }

        const now = Date.now();
        const timeDifference = targetTimestamp - now;

        if (timeDifference <= 0) {
          clearInterval(interval);
          return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          };
        }

        return {
          days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTimestamp]);

  return (
    <div className="d-flex p-rel al-center gap">
      <TimeUnit unit="Days" value={remainingTime.days} />
      <span className="timer-colon">:</span>
      <TimeUnit unit="Hr" value={remainingTime.hours} />
      <span className="timer-colon">:</span>
      <TimeUnit unit="Min" value={remainingTime.minutes} />
      <span className="timer-colon">:</span>
      <TimeUnit unit="Sec" value={remainingTime.seconds} />
    </div>
  );
}

export default Timer;
