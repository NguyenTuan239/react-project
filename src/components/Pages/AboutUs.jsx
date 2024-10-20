import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const NumberAnimation = ({ targetNumber, increment, className }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    let currentNumber = 0;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const timer = setInterval(() => {
            currentNumber += increment;
            element.textContent = currentNumber;

            if (currentNumber >= targetNumber) {
              clearInterval(timer);
            }
          }, 5);

          observer.unobserve(element); // Stop observing after animation starts
        }
      });
    });

    observer.observe(element);

    // Cleanup observer khi component unmount
    return () => observer.disconnect();
  }, [increment, targetNumber]);

  return <div className={className} ref={elementRef}>{0}</div>;
};

const AboutUs = () => {
  return (
    <main className="w-full h-auto bg-stone-950 text-slate-200 font-light">
      <div className="relative w-full h-72 md:h-96">
        <img src="../image/pages/01.webp" alt="" className="w-full h-72 md:h-96 object-cover"/>
        <div className="term-of-use-hl">
          <h2 className="text-3xl font-medium mb-4 flex justify-center">About Us</h2>
          <p className="text-xl"><Link to="/otthome" className="netflix font-medium">Home</Link>&nbsp;/&nbsp;<span className="netflix">About Us</span></p>
        </div>
      </div>
      <section className="w-11/12 mx-auto my-7">
        <div className="flex flex-col items-center">
            <p className="text-4xl py-4 font-normal">Masterminds Team</p>
            <p className="text-center">Your Streamit is build by one of the best and well experienced web developers and an awarded Envato Elite Author.</p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-5 md:justify-center">
            <div>
                <div className="overflow-hidden w-full h-auto my-5">
                    <img src="../image/pages/team1.webp" alt="" className="w-full transition-transform ease-in-out duration-1000 hover:scale-110"/>
                </div>
                <p className=" p-3 pl-5 relative bg-transparent italic"><span className="web-nav-li web-nav-li-red-nothover absolute top-1 left-0 w-48 h-9"></span>CEO</p>
                <p className="text-xl font-medium">Tonny Smith</p>
            </div>
            <div>
                <div className="overflow-hidden w-full h-auto my-5">
                    <img src="../image/pages/team2.webp" alt="" className="w-full transition-transform ease-in-out duration-1000 hover:scale-110"/>
                </div>
                <p className=" p-3 pl-5 relative bg-transparent italic"><span className="web-nav-li web-nav-li-red-nothover absolute top-1 left-0 w-48 h-9"></span>Designer</p>
                <p className="text-xl font-medium">Barry Aline</p>
            </div>
            <div>
                <div className="overflow-hidden w-full h-auto my-5">
                    <img src="../image/pages/team3.webp" alt="" className="w-full transition-transform ease-in-out duration-1000 hover:scale-110"/>
                </div>
                <p className=" p-3 pl-5 relative bg-transparent italic"><span className="web-nav-li web-nav-li-red-nothover absolute top-1 left-0 w-48 h-9"></span>Developer</p>
                <p className="text-xl font-medium">Tony Stark</p>
            </div>
            <div>
                <div className="overflow-hidden w-full h-auto my-5">
                    <img src="../image/pages/team4.webp" alt="" className="w-full transition-transform ease-in-out duration-1000 hover:scale-110"/>
                </div>
                <p className=" p-3 pl-5 relative bg-transparent italic"><span className="web-nav-li web-nav-li-red-nothover absolute top-1 left-0 w-48 h-9"></span>Designer</p>
                <p className="text-xl font-medium">Spider Man</p>
            </div>
        </div>
      </section>

       <section className="w-full h-auto flex flex-col justify-center items-center md:flex-row">
        <div className="w-11/12 mx-auto lg:w-1/2 xl:w-1/3 flex justify-end">
            <img src="../image/pages/map.webp" alt="" className="about-us-map"/>
        </div>
        <div className="w-11/12 mx-auto lg:w-1/2 xl:w-1/3">
            <p className="text-4xl font-medium my-4">Contact Us Here</p>
            <p className="pr-5">World is located in Hai Phong city and you can contact us at <span className="italic netflix">hello@World.com </span>for any tech-related support and assistance. We love to hear from our World users.</p>
            <div className="flex flex-col justify-center items-center md:flex-row md:gap-10">
                <div className="text-center">
                    <p className="netflix text-4xl my-4 font-semibold">14</p>
                    <p>Branch</p>
                </div>
                <div className="text-center">
                    <p className="netflix text-4xl my-4 font-semibold flex flex-nowrap"><NumberAnimation className="number-plus-500" targetNumber={500} increment={1} /> +</p>
                    <p>Employee</p>
                </div>
                <div className="text-center">
                    <p className="netflix text-4xl my-4 font-semibold flex flex-nowrap"><NumberAnimation className="number-plus-2000" targetNumber={2000} increment={4} /> +</p>
                    <p>Clients</p>
                </div>
            </div>
        </div>
       </section>
    </main>
  )
}

export default AboutUs