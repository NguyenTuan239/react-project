import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ComingSoon = () => {
  // Initialize state for day, hour, minute, second
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set a target time
    const countdownDate = new Date("May 31, 2025 23:59:59").getTime();

    // Function to update countdown every second
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        // If the time has elapsed, stop the interval and set the value to 0.
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        // Calculate remaining days, hours, minutes, seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update state with new value
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    // Clean up interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full text-slate-300">
        <div className="w-full min-h-screen p-20 bg-[url('/react-project/image/pages/coming-soon.webp')]">
            <p className="text-5xl font-medium md:text-7xl text-white">We are coming back soon</p>
            <div className="mt-10 flex flex-col justify-center items-center md:flex-row md:gap-7 md:justify-start md:items-start">
                <div className="flex flex-col items-center">
                    <p id="days" className="text-white font-semibold text-4xl">{timeLeft.days}</p>
                    <p className="font-medium py-3">Days</p>
                </div>
                <div className="text-6xl netflix hidden md:block">:</div>
                <div className="flex flex-col items-center">
                    <p id="hours" className="text-white font-semibold text-4xl">{timeLeft.hours}</p>
                    <p className="font-medium py-3">Hours</p>
                </div>
                <div className="text-6xl netflix hidden md:block">:</div>
                <div className="flex flex-col items-center">
                    <p id="minutes" className="text-white font-semibold text-4xl">{timeLeft.minutes}</p>
                    <p className="font-medium py-3">Minutes</p>
                </div>
                <div className="text-6xl netflix hidden md:block">:</div>
                <div className="flex flex-col items-center">
                    <p id="seconds" className="text-white font-semibold text-4xl">{timeLeft.seconds}</p>
                    <p className="font-medium py-3">Seconds</p>
                </div>
            </div>
            <div className="flex mt-28 lg:w-1/2">
                <input type="email" className="form-control red-border !bg-black" name="Email" placeholder="Email *" required/>
                <a href="#"><div className="sub-but w-36 h-12 text-sm font-bold"><span className="sub-bg netflix-bg"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">Subscribe</span></div></a>
              </div>
            <div className="mt-10 flex gap-4 items-center">
                <span className="text-nowrap">Follow Us:</span>
              <span className=" flex justify-start items-center gap-3 w-auto flex-wrap">
                <Link className="rounded-full bg-slate-700 origin-bottom transition-all duration-500 ease-in-out translate-y-0 cursor-pointer hover:-translate-y-1.5 hover-bg-red"><FontAwesomeIcon icon={faFacebook} className='px-2 pt-2 pb-1'/></Link>
                <Link className="rounded-full bg-slate-700 origin-bottom transition-all duration-500 ease-in-out translate-y-0 cursor-pointer hover:-translate-y-1.5 hover-bg-red"><FontAwesomeIcon icon={faTwitter} className='px-2 pt-2 pb-1'/></Link>
                <Link className="rounded-full bg-slate-700 origin-bottom transition-all duration-500 ease-in-out translate-y-0 cursor-pointer hover:-translate-y-1.5 hover-bg-red"><FontAwesomeIcon icon={faGithub} className='px-2 pt-2 pb-1'/></Link>
                <Link className="rounded-full bg-slate-700 origin-bottom transition-all duration-500 ease-in-out translate-y-0 cursor-pointer hover:-translate-y-1.5 hover-bg-red"><FontAwesomeIcon icon={faInstagram} className='px-2 pt-2 pb-1'/></Link>
              </span>
            </div>
        </div>
     </section>
  )
}

export default ComingSoon