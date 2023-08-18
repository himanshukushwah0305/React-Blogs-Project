import React, { useEffect, useRef, useState } from "react";
import style from "./clock.module.css";

const Clock = () => {
  const [time, setTime] = useState({
    h: 0,
    m: 0,
    s: 0,
    ap: "",
  });

  // for Time
  const hours = useRef();
  const minutes = useRef();
  const seconds = useRef();
  const ampm = useRef();

  // for Offset
  const hh = useRef();
  const mm = useRef();
  const ss = useRef();

  // for Dot-Offset
  const hrDot = useRef();
  const minDot = useRef();
  const secDot = useRef();

  useEffect(() => {
    const date = new Date();
    const interval = setInterval(() => {
      hours.current = date.getHours();
      minutes.current = date.getMinutes();
      seconds.current = date.getSeconds();
      ampm.current = hours.current >= 12 ? "PM" : "AM";

      if (hours.current > 12) {
        hours.current -= 12;
      }

      hours.current = hours.current < 10 ? "0" + hours.current : hours.current;
      minutes.current =
        minutes.current < 10 ? "0" + minutes.current : minutes.current;
      seconds.current =
        seconds.current < 10 ? "0" + seconds.current : seconds.current;
      setTime({
        ...time,
        h: hours.current,
        m: minutes.current,
        s: seconds.current,
        ap: ampm.current,
      });

      // for offset
      hh.current.style.strokeDashoffset = 138 - (138 * hours.current) / 12;
      mm.current.style.strokeDashoffset = 138 - (138 * minutes.current) / 60;
      ss.current.style.strokeDashoffset = 138 - (138 * seconds.current) / 60;
      
      // for dot-Offset
      hrDot.current.style.transform = `rotate(${hours.current* 30}deg)`;
      minDot.current.style.transform = `rotate(${minutes.current* 6}deg)`;
      secDot.current.style.transform = `rotate(${seconds.current* 6}deg)`;
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <div className={style.clock}>
      <div className={style.circle} style={{ "--bdr-clr": "#00b894" }}>
        <div className={style.dots} ref={hrDot}></div>
        <svg>
          <circle cx={"25"} cy={"25"} r={"22"}></circle>
          <circle cx={"25"} cy={"25"} r={"22"} ref={hh}></circle>
        </svg>
        <div className={style.hours} ref={hours}>
          {time.h}
        </div>
      </div>
      <div className={style.circle} style={{ "--bdr-clr": "#fdcb6e" }}>
        <div className={style.dots} ref={minDot}></div>
        <svg>
          <circle cx={"25"} cy={"25"} r={"22"}></circle>
          <circle cx={"25"} cy={"25"} r={"22"} ref={mm}></circle>
        </svg>
        <div className={style.minutes} ref={minutes}>
          {time.m}
        </div>
      </div>
      <div className={style.circle} style={{ "--bdr-clr": "#0984e3" }}>
        <div className={style.dots} ref={secDot}></div>
        <svg>
          <circle cx={"25"} cy={"25"} r={"22"}></circle>
          <circle cx={"25"} cy={"25"} r={"22"} ref={ss}></circle>
        </svg>
        <div className={style.seconds} ref={seconds}>
          {time.s}
        </div>
      </div>
      <div className={`${style.ampm} ${style.circle}`}>
        <div className={style.ap} ref={ampm}>
          {time.ap}
        </div>
      </div>
    </div>
  );
};

export default Clock;
