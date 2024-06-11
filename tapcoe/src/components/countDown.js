import React, { useState, useEffect } from 'react';
import "./countDown.css"
const Countdown = ({ startTime }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(startTime));
    const [animate, setAnimate] = useState({ days: false, hours: false, minutes: false, seconds: false });

    useEffect(() => {
        const timer = setInterval(() => {
            const newTimeLeft = calculateTimeLeft(startTime);
            setTimeLeft((prevTimeLeft) => {
                const changedUnits = getChangedUnits(prevTimeLeft, newTimeLeft);
                setAnimate(changedUnits);
                return newTimeLeft;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [startTime]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimate({ days: false, hours: false, minutes: false, seconds: false });
        }, 500); // duration of the animation

        return () => clearTimeout(timeout);
    }, [timeLeft]);

    function calculateTimeLeft(startTime) {
        const eventDate = new Date(startTime);
        const currentDate = new Date();
        const difference = eventDate - currentDate;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    function getChangedUnits(prev, current) {
        return {
            days: prev.days !== current.days,
            hours: prev.hours !== current.hours,
            minutes: prev.minutes !== current.minutes,
            seconds: prev.seconds !== current.seconds,
        };
    }

    return (
        <div className="flex space-x-2 text-lg font-medium text-gray-800">
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col  items-center">
                   
                    <span className="relative">
                        <span>{String(value).padStart(2, '0')}</span>
                        {animate[unit] && (
                            <span className="absolute top-0 left-0 animate-topdown bg-yellow-500 rounded text-white w-[32px] text-center">
                                {String(value).padStart(2, '0')}
                            </span>
                        )}
                    </span>
                    <span className="text-sm">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
                </div>
            ))}
        </div>
    );
};

export default Countdown;
