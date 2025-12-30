import React, { useEffect, useState } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from './icons';
import config from './config';

function Timer() {
  const START_DATE = new Date(config.anniversaryDate);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const days = Math.abs(differenceInDays(now, START_DATE));
      const hours = Math.abs(differenceInHours(now, START_DATE) % 24);
      const minutes = Math.abs(differenceInMinutes(now, START_DATE) % 60);
      const seconds = Math.abs(differenceInSeconds(now, START_DATE) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    // Menambahkan font-poppins di container utama
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center bg-cover bg-center relative text-white px-4 font-poppins">
      <div className="text-center z-10">
        
        {/* Title dengan Poppins Bold */}
        <h1 className="text-lg sm:text-2xl font-bold mb-8 drop-shadow-lg tracking-tight">
          {config.timerTitle}
        </h1>

        {/* Countdown - Menggunakan font-bold dan tracking rapat khas Poppins */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 text-5xl sm:text-7xl font-extrabold mb-6 tracking-tighter">
          {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
            <React.Fragment key={unit}>
              {index !== 0 && (
                <span className="text-4xl sm:text-6xl mb-8 opacity-50">:</span>
              )}
              <div className="flex flex-col items-center">
                <span className="drop-shadow-2xl">
                  {timeLeft[unit].toString().padStart(2, '0')}
                </span>
                {/* Label Satuan Waktu (Hari, Jam, dll) */}
                <span className="text-[10px] sm:text-sm uppercase tracking-[0.2em] font-medium opacity-80 mt-1">
                  {config.timeUnits[unit]}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
        
        <p className="text-base sm:text-lg mb-8 drop-shadow-lg font-light italic opacity-90">
          {config.timerMessage}
        </p>

        {/* Button dengan Poppins Medium */}
        <div className="flex justify-center w-full">
          <button
            className="mt-8 sm:mt-12 px-8 py-3 flex justify-center items-center bg-white/10 gap-3 hover:bg-white/20 backdrop-blur-md text-white text-sm sm:text-base border border-white/30 rounded-full transition-all duration-300 font-medium tracking-wide shadow-lg"
            onClick={() => navigate(config.recapRedirectPath)}
          >
            {config.nextPageText} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;