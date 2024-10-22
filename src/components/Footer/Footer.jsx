import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShowBackToTop(true);
        } else {
            setShowBackToTop(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of page
  };

  return (
    <footer className='bg-stone-950 text-slate-200'>
      <button
        id="backToTop"
        onClick={scrollToTop}
        className={`netflix-bg ${showBackToTop ? 'show' : ''}`}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
      <hr className="mx-auto w-11/12 border-slate-700"></hr>
    <section className="w-full">
      <div className="py-16 px-3 xl:px-24 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-3 text-slate-200 font-light text-sm">
        <div>
          <div className='relative h-10 w-40 mb-8'>
            <Link to="otthome"><img src="/image/logo.webp" alt="logo" className="logo h-8 w-auto" /></Link>
          </div>
          <p>Email us: <Link to="mailto:customer@streamit.com" className="font-normal">customer@streamit.com</Link></p>
          <p className="mt-4">CUSTOMER SERVICES</p>
          <h3 className="text-lg font-semibold">+ (480) 555-0103</h3>
        </div>
        <div>
          <h3 className="font-medium text-base">Quick Links</h3>
          <ul className="mt-2">
            <li className="pb-3"><FontAwesomeIcon icon={faAngleRight} size="xs" className='netflix'/><Link to="aboutus" className="transition-all duration-500 ease-in-out hover-red">&nbsp;&nbsp;About Us</Link></li>
            <li className="pb-3"><FontAwesomeIcon icon={faAngleRight} size="xs" className='netflix'/><Link to="listing" className="transition-all duration-500 ease-in-out hover-red">&nbsp;&nbsp;Blog</Link></li>
            <li className="pb-3"><FontAwesomeIcon icon={faAngleRight} size="xs" className='netflix'/><Link to="pricingplan" className="transition-all duration-500 ease-in-out hover-red">&nbsp;&nbsp;Pricing Plan</Link></li>
            <li className="pb-3"><FontAwesomeIcon icon={faAngleRight} size="xs" className='netflix'/><Link to="faq" className="transition-all duration-500 ease-in-out hover-red">&nbsp;&nbsp;FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-base">Movies To Watch</h3>
          <ul className="mt-2">
            <li className="pb-3"><FontAwesomeIcon icon={faAngleRight} size="xs" className='netflix'/><Link to="#" className="transition-all duration-500 ease-in-out hover-red">&nbsp;&nbsp;Top Trending</Link></li>
            <li className="pb-3"><FontAwesomeIcon icon={faAngleRight} size="xs" className='netflix'/><Link to="#" className="transition-all duration-500 ease-in-out hover-red">&nbsp;&nbsp;Recommended</Link></li>
            <li className="pb-3"><FontAwesomeIcon icon={faAngleRight} size="xs" className='netflix'/><Link to="#" className="transition-all duration-500 ease-in-out hover-red">&nbsp;&nbsp;Popular</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-base">About Company</h3>
          <ul className="mt-2">
            <li className="pb-3"><FontAwesomeIcon icon={faAngleRight} size="xs" className='netflix'/><Link to="contactus" className="transition-all duration-500 ease-in-out hover-red">&nbsp;&nbsp;Contact Us</Link></li>
            <li className="pb-3"><FontAwesomeIcon icon={faAngleRight} size="xs" className='netflix'/><Link to="privacypolicy" className="transition-all duration-500 ease-in-out hover-red">&nbsp;&nbsp;Privacy Policy</Link></li>
            <li className="pb-3"><FontAwesomeIcon icon={faAngleRight} size="xs" className='netflix'/><Link to="termsofuse" className="transition-all duration-500 ease-in-out hover-red">&nbsp;&nbsp;Terms Of Use</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-base">Subscribe Newsletter</h3>
          <div className="flex mt-5">
            <input id="send-email" type="email" autoComplete="true" placeholder="Email*" className="rounded-l-lg p-2 w-full border border-transparent bg-black red-border focus:outline-none" />
            <Link to=""><div className="sub-but w-32 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">Subscribe</span></div></Link>
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
      </div>
    </section>
    <hr className="mx-auto w-11/12 border-slate-700"/>
    <section>
      <div className="py-16 px-3 xl:px-24 w-full text-slate-300 text-sm font-light mx-auto flex flex-col sm:flex-row md:justify-between items-start">
        <div className="w-full sm:w-1/2">
          <div className="flex space-x-4">
            <Link to="termsofuse" className="transition-all duration-500 ease-in-out hover-red text-nowrap">Terms Of Use</Link>
            <Link to="privacypolicy" className="transition-all duration-500 ease-in-out hover-red text-nowrap">Privacy Policy</Link>
            <Link to="faq" className="transition-all duration-500 ease-in-out hover-red text-nowrap">FAQ</Link>
            <Link to="#" className="transition-all duration-500 ease-in-out hover-red text-nowrap">Watch List</Link>
          </div>
          <p className="md:text-left text-sm mt-4">
            © 2024 <span className="font-medium netflix">STREAMIT</span>. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit
            Inc. Duplication and copy of this is strictly prohibited. All rights reserved.
          </p>
        </div>
        <div className="w-full sm:w-1/2 flex flex-col sm:items-end space-x-4 mt-4 sm:mt-0">
          <p className="sm:mr-20 pb-3 text-slate-100">Download Streamit Apps</p>
          <div className="flex gap-3">
            <Link to="#" className="flex items-center">
              <img src="/image/footer/google-play.webp" alt="Get it on Google Play" className="h-10" />
            </Link>
            <Link to="#" className="flex items-center">
              <img src="/image/footer/apple.webp" alt="Download on the App Store" className="h-10" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  </footer>
  )
}

export default Footer