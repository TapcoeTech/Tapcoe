import { useCallback, useEffect, useRef, useState } from "react";
import "./Timer4.css"
import { useNavigate } from "react-router-dom"

const Timer4 = ({ startTime, eventName, eventAddress, handlechange, eventId }) => {

  const [countDownTime, setCountDownTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const navigate = useNavigate();
  const secondTimer = useRef(null);

  const getTimeDifference = (countDownDate) => {
    const currentTime = new Date().getTime();
    const timeDifference = countDownDate - currentTime;
    const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    const hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

    if (timeDifference < 0) {
      clearInterval();
      if (secondTimer.current) {
        secondTimer.current.className = "relative top-5";
      }
      setCountDownTime({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    } else {
      if (secondTimer.current) {
        secondTimer.current.className = "";
        secondTimer.current.className = "animate-timer";
      }
      setCountDownTime({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };

  useEffect(() => {
    if (startTime) {
      const countDownDate = new Date(startTime).getTime();
      const interval = setInterval(() => {
        getTimeDifference(countDownDate);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [startTime]);
  return (
    <div className="  items-center justify-center sm:w-64 bg-white overflow-hidden shadow-lg  eventCard " style={{ width: "350px" }}>
      <div className="flex flex-col  items-center justify-center gap-2 ">
        <div className="" style={{ width: "100%", height: "100%" }}>
          <img className="eventImage grow object-cover -z-10" src="images/eventimg.png" />
        </div>
        <div className="w-[100%]  flex items-center justify-center">
          <p className="text-black-500  py-1 rounded-md text-xl font-semibold">{eventName}</p>
        </div>
      </div>
      <div className="p-2">
        {/* Countdown Timer */}
        <div className="flex items-center justify-center">
          <div className="flex gap-3 flex-row h-14 overflow-hidden pt-2 pb-2 pl-2 pr-2 sm:pt-0 sm:pr-0">
            <div className="flex flex-col w-1/4 sm:w-16 items-center">
              <div className="h-10 w-6 bg-[#FACC15] rounded-md">
                <div className="flex justify-center items-center h-full text-base text-[#000000]">
                  <div
                    className={
                      countDownTime?.days >= 0 &&
                        countDownTime?.hours == 23 &&
                        countDownTime?.minutes == 59 &&
                        countDownTime?.seconds == 59
                        ? "animate-timer"
                        : "relative top-1"
                    }
                  >
                    {countDownTime?.days}
                  </div>
                </div>
              </div>
              <div className="mt-1">
                <span className="text-xs text-[#A6ADBB]">Days</span>
              </div>
            </div>
            <div className="flex flex-col w-1/4 sm:w-16 items-center">
              <div className="h-10 w-6 bg-[#FACC15] rounded-md">
                <div className="flex justify-center items-center h-full text-base text-[#000000]">
                  <div
                    className={
                      countDownTime?.hours >= 0 &&
                        countDownTime?.minutes == 59 &&
                        countDownTime?.seconds == 59
                        ? "animate-timer"
                        : "relative top-1"
                    }
                  >
                    {countDownTime?.hours}
                  </div>
                </div>
              </div>
              <div className="mt-1">
                <span className="text-xs text-[#A6ADBB]">Hours</span>
              </div>
            </div>
            <div className="flex flex-col w-1/4 sm:w-16 items-center">
              <div className="h-10  w-6 bg-[#FACC15] rounded-md">
                <div className="flex justify-center items-center h-full bg-[#FACC15] text-base text-[#000000]">
                  <div
                    className={
                      countDownTime?.minutes >= 0 && countDownTime?.seconds == 59
                        ? "animate-timer"
                        : "relative top-1"
                    }
                  >
                    {countDownTime?.minutes}
                  </div>
                </div>
              </div>
              <div className="mt-1">
                <span className="text-xs text-[#A6ADBB]">Minutes</span>
              </div>
            </div>
            <div className="flex flex-col w-1/4 sm:w-16 items-center">
              <div className="h-10 w-6 bg-[#FACC15] rounded-md">
                <div className="flex justify-center items-center h-full text-base text-[#000000]">
                  <div ref={secondTimer}>{countDownTime?.seconds}</div>
                </div>
              </div>
              <div className="mt-1">
                <span className="text-xs text-[#A6ADBB]">Seconds</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center text-center px-2 py-2"><span className="text-sm font-normal" style={{ color: "#004F4A" }}>{eventAddress}</span></div>
        {/* Buttons */}
        <div className="flex justify-center mt-1 space-x-1">
          <button className="text-black-500 px-2 py-1 rounded-md text-md font-semibold">Winners</button>
          <button className="bg-yellow-400 px-2 py-1 rounded-md text-white text-md font-semibold" onClick={() => {
            handlechange(eventId, startTime, eventName, eventAddress);
            localStorage.setItem("eventId",eventId);
            localStorage.setItem("eventName",eventName);

            navigate("/Eventdetails");

          }}>Open Event</button>
        </div>
      </div>
    </div>






  );
};
export default Timer4;
/*
    Extenal css to add 
.animate-timer {
         position: relative;
          animation: animatetop 1s infinite;
        }
        @keyframes animatetop {
          from {
            top: -50px;
          }
          to {
            top: 20px;
          }
        }
 */
