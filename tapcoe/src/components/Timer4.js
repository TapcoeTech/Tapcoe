import { useCallback, useEffect, useRef, useState } from "react";
import "./Timer4.css"
const Timer4 = ({startTime,eventName}) => {
    const [countDownTime, setCountDownTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    
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
    <div className="w-98 max-w-xl bg-white rounded-lg overflow-hidden shadow-lg">
       <div className="flex items-center justify-center">
       <img/>
        <span className="text-2xl font-semibold" style={{color:"#004F4A"}}>{eventName}</span>
       </div>
      <div className=" p-4">
        {/* Countdown Timer */}
        <div className="flex items-center justify-center">
          <div className="flex gap-3 sm:gap-1 flex-row bg-white h-36 rounded-lg overflow-hidden pt-2 pr-3 sm:pt-0 sm:pr-0">
            <div className="flex flex-col bg-[#2A303C] sm:w-32 w-16">
              <div className="h-10 sm:h-20 bg-[#2A303C]">
                <div className="h-[30px] flex justify-center bg-[#2A303C] sm:text-3xl text-xl !text-[#A6ADBB]">
                  <div
                    className={
                      countDownTime?.days >= 0 &&
                      countDownTime?.hours == 23 &&
                      countDownTime?.minutes == 59 &&
                      countDownTime?.seconds == 59
                        ? "animate-timer"
                        : "relative top-5"
                    }
                  >
                    {countDownTime?.days}
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <span className="text-lg sm:text-2xl text-center text-[#A6ADBB]">
                  {countDownTime?.days == 1 ? "Day" : "Days"}
                </span>
              </div>
            </div>
            <div className="flex flex-col bg-[#2A303C] sm:w-32 w-16">
              <div className="h-16 sm:h-20 bg-[#2A303C]">
                <div className="h-[60px] flex justify-center bg-[#2A303C] sm:text-3xl text-xl !text-[#A6ADBB]">
                  <div
                    className={
                      countDownTime?.hours >= 0 &&
                      countDownTime?.minutes == 59 &&
                      countDownTime?.seconds == 59
                        ? "animate-timer"
                        : "relative top-5"
                    }
                  >
                    {countDownTime?.hours}
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <span className="text-lg sm:text-2xl text-center text-[#A6ADBB]">
                  {countDownTime?.hours == 1 ? "Hour" : "Hours"}
                </span>
              </div>
            </div>
            <div className="flex flex-col bg-[#2A303C] sm:w-32 w-16">
              <div className="h-16 sm:h-20 bg-[#2A303C]">
                <div className="h-[60px] flex justify-center bg-[#2A303C] sm:text-3xl text-xl !text-[#A6ADBB]">
                  <div
                    className={
                      countDownTime?.minutes >= 0 && countDownTime?.seconds == 59
                        ? "animate-timer"
                        : "relative top-5"
                    }
                  >
                    {countDownTime?.minutes}
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <span className="text-lg sm:text-2xl text-center text-[#A6ADBB]">
                  {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
                </span>
              </div>
            </div>
            <div className="flex flex-col bg-[#2A303C] sm:w-32 w-16">
              <div className="h-16 sm:h-20 bg-[#2A303C]">
                <div className="h-[60px] flex justify-center bg-[#2A303C] overflow-hidden sm:text-3xl text-xl text-[#A6ADBB]">
                  <div ref={secondTimer}>{countDownTime?.seconds}</div>
                </div>
              </div>
              <div className="flex justify-center">
                <span className="text-lg sm:text-2xl text-center text-[#A6ADBB]">
                  {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-4 space-x-4">
          <button className="text-black-500 px-4 py-2 rounded-md text-xl font-semibold">Winners</button>
          <button className="bg-yellow-400 px-4 py-2 rounded-md text-white  text-xl font-semibold">Open Event</button>
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
