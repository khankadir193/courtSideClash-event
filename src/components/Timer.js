import React, { useEffect, useState } from "react";
import TimeUnit from "./TimeUnit";
import '../Style/defaultStyle.css';

function Timer({ targetTimestamp }) {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = targetTimestamp - now;

      if (timeDifference <= 0) {
        clearInterval(interval);
        setRemainingTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) ;
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setRemainingTime({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetTimestamp]);

  return (
    <div
      className="d-flex p-rel al-center gap"
      // style={{ left: "5vw", top: "8vw" }}
    >
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
