import React,  { useState, useRef, useEffect }  from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight, faMagnifyingGlass, faUserPlus, faUser, faPlus, faStar, faRightFromBracket, faCircleArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

  // For Mobie Navigaton
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive31, setIsActive31] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive41, setIsActive41] = useState(false);
  const [isActive42, setIsActive42] = useState(false);
  const [isActive43, setIsActive43] = useState(false);
  const [isActive5, setIsActive5] = useState(false);

  const toggleState = (setter) => {
    setter((prev) => !prev);
  };

  const handleNavClick = () => toggleState(setIsActive);
  const handleNav2Click = () => toggleState(setIsActive2);
  const handleNav3Click = () => toggleState(setIsActive3);
  const handleNav31Click = () => toggleState(setIsActive31);
  const handleNav4Click = () => toggleState(setIsActive4);
  const handleNav41Click = () => toggleState(setIsActive41);
  const handleNav42Click = () => toggleState(setIsActive42);
  const handleNav43Click = () => toggleState(setIsActive43);
  const handleNav5Click = () => toggleState(setIsActive5);

  // For Web Navigaton
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSearchToggled, setIsSearchToggled] = useState(false);
  const [isAccountActive, setIsAccountActive] = useState(false);
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [isMobieMenuToggled, setIsMObieMenuToggled] = useState(false);
  
  const searchIconRef = useRef(null);
  const searchInputRef = useRef(null);
  const searchRef = useRef(null);
  const accountButtonRef = useRef(null);
  const accountRef = useRef(null);
  const menuButtonRef = useRef(null);
  const mobileMenuBtRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const handleSearchIconClick = () => {
    if (!isSearchToggled) {
      setIsSearchActive((prev) => !prev);
    } else {
      setIsSearchToggled(false);
      setIsSearchActive(false);
    }
  };

  const handleSearchClick = () => {
    setIsSearchToggled((prev) => !prev);
    setIsSearchActive(false);
  };

  const handleAccountClick = () => {
    setIsAccountActive((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuToggled((prev) => !prev);
  };
  const toggleMobieMenu = () => {
    setIsMObieMenuToggled((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchIconRef.current &&
        !searchIconRef.current.contains(event.target) &&
        !searchInputRef.current.contains(event.target)
      ) {
        setIsSearchActive(false);
      }
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        !searchInputRef.current.contains(event.target)
      ) {
        setIsSearchToggled(false);
      }
      if (
        accountRef.current &&
        !accountRef.current.contains(event.target) &&
        !accountButtonRef.current.contains(event.target)
      ) {
        setIsAccountActive(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !mobileMenuBtRef.current.contains(event.target)
      ) {
        setIsMObieMenuToggled(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <header className="sticky top-0 w-full h-14 md:h-16  z-30 text-slate-200">
      <div className='bg-stone-950/90 w-full h-14 md:h-16 absolute top-0'></div>
      {/* Web Navigation */}
      <section className="flex justify-center ">
        <Link to="otthome"><img src="/image/logo.webp" alt="logo" className="logo absolute left-12 top-2 h-8 w-auto lg:left-4 lg:top-4 xl:left-20"/></Link>
        <div className="web-nav hidden relative lg:flex justify-center items-center gap-10 mt-0 ml-20 text-sm xl:gap-14">
          <p className="web-nav-home cursor-pointer px-2 h-16 flex justify-center items-center hover-red">Home&nbsp;&nbsp;<FontAwesomeIcon icon={faCaretDown} /></p>
          <div className="home-hover hidden absolute top-16 -left-28 -right-14 lg:-left-36 lg:-right-32 h-auto w-auto bg-stone-900">
            <ul className="my-2 mx-4 flex justify-evenly">
              <NavLink to="otthome" className={({ isActive }) => `${isActive ? "netflix" : ""} flex flex-col justify-center items-center gap-2 hover-red`}>
                <img className="w-28 lg:w-36 h-auto" src="/image/mega-menu/new-home.webp" alt="new home menu" /><span>OTT Home</span>
              </NavLink>
              <NavLink to="home" className={({ isActive }) => `${isActive ? "netflix" : ""} flex flex-col justify-center items-center gap-2 hover-red`}>
                <img className="w-28 lg:w-36 h-auto" src="/image/mega-menu/home.webp" alt="home menu" /><span>Home</span>
              </NavLink>
              <NavLink to="movie" className={({ isActive }) => `${isActive ? "netflix" : ""} flex flex-col justify-center items-center gap-2 hover-red`}>
                <img className="w-28 lg:w-36 h-auto" src="/image/mega-menu/movie.webp" alt="movie" /><span>Movie</span>
              </NavLink>
              <NavLink to="tvshow" className={({ isActive }) => `${isActive ? "netflix" : ""} flex flex-col justify-center items-center gap-2 hover-red`}>
                <img className="w-28 lg:w-36 h-auto" src="/image/mega-menu/tv-show.webp" alt="Tv Show" /><span>Tv Show</span>
              </NavLink>
              <NavLink to="video" className={({ isActive }) => `${isActive ? "netflix" : ""} flex flex-col justify-center items-center gap-2 hover-red`}>
                <img className="w-28 lg:w-36 h-auto" src="/image/mega-menu/video.webp" alt="Video" /><span>Video</span>
              </NavLink>
              <NavLink to="merchandisestore" className={({ isActive }) => `${isActive ? "netflix" : ""} flex flex-col justify-center items-center gap-2 hover-red`}>
                <img className="w-28 lg:w-36 h-auto" src="/image/mega-menu/shop-home.webp" alt="Merchadise Store" /><span className="w-4/6 pt-2 -mb-2">Merchandise</span><span>Store</span>
              </NavLink>
            </ul>
          </div>
          <p className="web-nav-home cursor-pointer px-2 h-16 flex justify-center items-center hover-red">Features&nbsp;&nbsp;<FontAwesomeIcon icon={faCaretDown} /></p>
          <div className="home-hover hidden absolute top-16 left-28 w-52 bg-stone-900">
            <ul className="py-1 text-slate-300">
              <NavLink to="restrictedcontent">
                {({ isActive }) => (
                  <div className="p-3 pl-5 relative bg-transparent">
                    <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                    Restricted Content
                  </div>
                )}
              </NavLink>
              <NavLink to="relatedmerchandise">
                {({ isActive }) => (
                  <div className="p-3 pl-5 relative bg-transparent">
                    <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                    Related Merchadise
                  </div>
                )}
              </NavLink>
              <NavLink to="playlist">
                {({ isActive }) => (
                  <div className="p-3 pl-5 relative bg-transparent">
                    <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                    Playlist
                  </div>
                )}
              </NavLink>
              <NavLink to="genres">
                {({ isActive }) => (
                  <div className="p-3 pl-5 relative bg-transparent">
                    <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                    Genres
                  </div>
                )}
              </NavLink>
              <NavLink to="cast">
                {({ isActive }) => (
                  <div className="p-3 pl-5 relative bg-transparent">
                    <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                    Cast
                  </div>
                )}
              </NavLink>
              <NavLink to="tags">
                {({ isActive }) => (
                  <div className="p-3 pl-5 relative bg-transparent">
                    <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                    Tags
                  </div>
                )}
              </NavLink>
            </ul>
          </div>
          <p className="web-nav-home cursor-pointer px-2 h-16 flex justify-center items-center hover-red">Pages&nbsp;&nbsp;<FontAwesomeIcon icon={faCaretDown} /></p>
          <div className="home-hover hidden absolute top-16 left-56 w-52 bg-stone-900 xl:left-60">
            <ul className="py-1 text-slate-300">
          <NavLink to="aboutus">
            {({ isActive }) => (
              <div className="p-3 pl-5 relative bg-transparent">
                <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                About Us
              </div>
            )}
          </NavLink>
          <NavLink to="contactus">
            {({ isActive }) => (
              <div className="p-3 pl-5 relative bg-transparent">
                <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                Contract Us
              </div>
            )}
          </NavLink>
          <NavLink to="faq">
            {({ isActive }) => (
              <div className="p-3 pl-5 relative bg-transparent">
                <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                FAQ
              </div>
            )}
          </NavLink>
          <NavLink to="privacypolicy">
            {({ isActive }) => (
              <div className="p-3 pl-5 relative bg-transparent">
                <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                Privacy Policy
              </div>
            )}
          </NavLink>
          <NavLink to="pricingplan">
            {({ isActive }) => (
              <div className="p-3 pl-5 relative bg-transparent">
                <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                Pricing Plan
              </div>
            )}
          </NavLink>
          <NavLink to="comingsoon">
            {({ isActive }) => (
              <div className="p-3 pl-5 relative bg-transparent">
                <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                Comming Soon
              </div>
            )}
          </NavLink>
          <li className="web-nav-home cursor-pointer p-3 pl-5 relative bg-transparent"><span className="web-nav-li web-nav-li-red absolute top-1 left-3 w-48 h-9"></span>Error Page <FontAwesomeIcon icon={faCaretRight} className='absolute top-4 right-5'/></li>
            <div className="home-hover hidden absolute w-52 bg-stone-900 top-64 -left-52 lg:left-52">
              <ul className="p-3 text-slate-300">
                <NavLink to="errorpage1">
                  {({ isActive }) => (
                    <div className="p-3 pl-5 relative bg-transparent">
                      <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                      Error page 1
                    </div>
                  )}
                </NavLink>
                <NavLink to="errorpage2">
                  {({ isActive }) => (
                    <div className="p-3 pl-5 relative bg-transparent">
                      <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                      Error page 2
                    </div>
                  )}
                </NavLink>
              </ul>
            </div>
            </ul>
          </div>
          <p className="web-nav-home cursor-pointer px-2 h-16 flex justify-center items-center hover-red">Blog&nbsp;&nbsp;<FontAwesomeIcon icon={faCaretDown} /></p>
          <div className="home-hover hidden absolute top-16 -right-10 w-52 bg-stone-900 xl:-right-8">
            <ul className="py-1 text-slate-300">
            <NavLink to="listing">
              {({ isActive }) => (
                <div className="p-3 pl-5 relative bg-transparent">
                  <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                  Listing
                </div>
              )}
            </NavLink>
            <li className="web-nav-home cursor-pointer p-3 pl-5 relative bg-transparent"><span className="web-nav-li web-nav-li-red absolute top-1 left-3 w-48 h-9"></span>Blog Grid<FontAwesomeIcon icon={faCaretRight} className='absolute top-4 right-5'/></li>
              <div className="home-hover hidden absolute w-52 bg-stone-900 top-11 -left-52 lg:left-52">
                <ul className="p-3 text-slate-300">
                  <NavLink to="comingsoon">
                    {({ isActive }) => (
                      <div className="p-3 pl-5 relative bg-transparent">
                        <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                        1 Colume
                      </div>
                    )}
                  </NavLink>
                  <NavLink to="comingsoon">
                    {({ isActive }) => (
                      <div className="p-3 pl-5 relative bg-transparent">
                        <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                        2 Colume
                      </div>
                    )}
                  </NavLink>
                  <NavLink to="comingsoon">
                    {({ isActive }) => (
                      <div className="p-3 pl-5 relative bg-transparent">
                        <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                        3 Colume
                      </div>
                    )}
                  </NavLink>
                  <NavLink to="comingsoon">
                    {({ isActive }) => (
                      <div className="p-3 pl-5 relative bg-transparent">
                        <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                        4 Colume
                      </div>
                    )}
                  </NavLink>
                </ul>
              </div>
              <li className="web-nav-home cursor-pointer p-3 pl-5 relative bg-transparent"><span className="web-nav-li web-nav-li-red absolute top-1 left-3 w-48 h-9"></span>Blog Sidebar<FontAwesomeIcon icon={faCaretRight} className='absolute top-4 right-5'/></li>
              <div className="home-hover hidden absolute w-52 bg-stone-900 top-20 -left-52 lg:left-52">
                <ul className="p-3 text-slate-300">
                  <NavLink to="comingsoon">
                    {({ isActive }) => (
                      <div className="p-3 pl-5 relative bg-transparent">
                        <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                        Left Sidebar
                      </div>
                    )}
                  </NavLink>
                  <NavLink to="comingsoon">
                    {({ isActive }) => (
                      <div className="p-3 pl-5 relative bg-transparent">
                        <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                        Right Sidebar
                      </div>
                    )}
                  </NavLink>
                </ul>
              </div>
              <li className="web-nav-home cursor-pointer p-3 pl-5 relative bg-transparent"><span className="web-nav-li web-nav-li-red absolute top-1 left-3 w-48 h-9"></span>Blog Single<FontAwesomeIcon icon={faCaretRight} className='absolute top-4 right-5'/></li>
              <div className="home-hover hidden absolute w-52 bg-stone-900 top-32 -left-52 lg:left-52">
                <ul className="p-3 text-slate-300">
                  <NavLink to="comingsoon">
                    {({ isActive }) => (
                      <div className="p-3 pl-5 relative bg-transparent">
                        <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                        Blog Template
                      </div>
                    )}
                  </NavLink>
                  <NavLink to="comingsoon">
                    {({ isActive }) => (
                      <div className="p-3 pl-5 relative bg-transparent">
                        <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                        Standard
                      </div>
                    )}
                  </NavLink>
                  <NavLink to="comingsoon">
                    {({ isActive }) => (
                      <div className="p-3 pl-5 relative bg-transparent">
                        <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                        Audio
                      </div>
                    )}
                  </NavLink>
                  <NavLink to="comingsoon">
                    {({ isActive }) => (
                      <div className="p-3 pl-5 relative bg-transparent">
                        <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                        Video
                      </div>
                    )}
                  </NavLink>
                  <NavLink to="comingsoon">
                    {({ isActive }) => (
                      <div className="p-3 pl-5 relative bg-transparent">
                        <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                        Link
                      </div>
                    )}
                  </NavLink>
                  <NavLink to="comingsoon">
                    {({ isActive }) => (
                      <div className="p-3 pl-5 relative bg-transparent">
                        <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                        Quote
                      </div>
                    )}
                  </NavLink>
                  <NavLink to="comingsoon">
                    {({ isActive }) => (
                      <div className="p-3 pl-5 relative bg-transparent">
                        <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                        Gallery
                      </div>
                    )}
                  </NavLink>
                </ul>
              </div>
            </ul>
          </div>
          <p className="web-nav-home cursor-pointer px-2 h-16 flex justify-center items-center hover-red z-10">Shop&nbsp;&nbsp;<FontAwesomeIcon icon={faCaretDown} /></p>
          <div className="home-hover hidden absolute top-16 -right-24 w-44 bg-stone-900 xl:-right-28">
            <ul className="py-1 text-slate-300">
              <NavLink to="shop">
                {({ isActive }) => (
                  <div className="p-3 pl-5 relative bg-transparent">
                    <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                    Shop
                  </div>
                )}
              </NavLink>
              <NavLink to="myaccount">
                {({ isActive }) => (
                  <div className="p-3 pl-5 relative bg-transparent">
                    <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                    My Account Page
                  </div>
                )}
              </NavLink>
              <NavLink to="cartpage">
                {({ isActive }) => (
                  <div className="p-3 pl-5 relative bg-transparent">
                    <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                    Cart Page
                  </div>
                )}
              </NavLink>
              <NavLink to="comingsoon">
                {({ isActive }) => (
                  <div className="p-3 pl-5 relative bg-transparent">
                    <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                    Wishlist Page
                  </div>
                )}
              </NavLink>
              <NavLink to="comingsoon">
                {({ isActive }) => (
                  <div className="p-3 pl-5 relative bg-transparent">
                    <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                    Checkout Page
                  </div>
                )}
              </NavLink>
              <NavLink to="comingsoon">
                {({ isActive }) => (
                  <div className="p-3 pl-5 relative bg-transparent">
                    <span className={`${isActive ? "web-nav-li-red-nothover" : "web-nav-li-red"} web-nav-li absolute top-1 left-3 w-48 h-9`}></span>
                    Order Page
                  </div>
                )}
              </NavLink>
            </ul>
          </div>
        </div>

        {/* Search and Account Button */}
        <button
        id="search"
        ref={searchRef}
        className={`search absolute h top-16 right-16 z-40 h-9 lg:hidden text-slate-300 cursor-pointer pt-1 px-3 hover:text-slate-300 ${isMenuToggled ? 'block' : 'hidden'}`}
        onClick={handleSearchClick}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>

        <div className="absolute top-28 right-16 lg:right-24 lg:top-3 lg:block xl:pr-24 z-10">
          <button
            ref={searchIconRef}
            className={`search-icon hidden lg:block absolute h-9 text-slate-300 cursor-pointer pt-1 px-3 hover:text-slate-300 ${
              isSearchActive ? 'active' : ''
            } ${isSearchToggled ? 'toggled' : ''}`}
            onClick={handleSearchIconClick}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>

          {/* Search Input field */}

          <input
            ref={searchInputRef}
            type="text"
            className={`search-input h-9 bg-stone-900 border-none focus:outline-none focus:ring-0 focus:bg-stone-900 ${
              isSearchActive || isSearchToggled ? 'active' : ''
            }`}
            placeholder="Search..."
          />
        </div>

        <button
          ref={accountButtonRef}
          className={`account-button ${isMenuToggled ? 'block' : 'hidden'} absolute top-16 right-6 lg:top-3 lg:right-5 h-9 w-9 bg-stone-900 rounded-full text-slate-300 hover:text-slate-300 lg:block xl:mr-20 z-10`}
          onClick={handleAccountClick}
        >
          <FontAwesomeIcon icon={faUserPlus} />
        </button>
        <div
          ref={accountRef}
          className={`account absolute h-60 w-52 right-4 top-28 bg-stone-900 text-sm lg:top-16 xl:right-20 ${isAccountActive ? 'active' : ''}`}
        >
          <p className="p-4 pl-12 ">
            <span className="absolute top-3 left-2 w-9 h-9">
              <img src="/image/profile.png" alt="Profile" />
            </span>
            Tuan Nguyen
          </p>
          <div className="w-full h-0.5 mt-1 bg-stone-700"></div>
          <ul className="flex flex-col items-start justify-center ml-4">
            <Link to="/myaccount" className="p-3">
              <FontAwesomeIcon icon={faUser} />
              <span className="hover-red">My Account</span>
            </Link>
            <Link to="" className="p-3">
              <FontAwesomeIcon icon={faPlus} />
              <span className="hover-red">Watchlist</span>
            </Link>
            <Link to="" className="p-3">
              <FontAwesomeIcon icon={faStar} />
              <span className="hover-red">Subscription</span>
            </Link>
          </ul>
          <Link
            to="login"
            className="absolute h-10 w-full bottom-0 bg-stone-700 text-center pt-2"
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span className="hover-red">&nbsp;Logout</span>
          </Link>
        </div>
      </section>

      {/* Mobie Navigation */}

      <section className="lg:hidden">
        <div
          ref={menuButtonRef}
          className={`menuButton cursor-pointer absolute right-3 top-2 ${isMenuToggled ? 'toggle-btn' : ''}`}
          onClick={toggleMenu}
        >
          <span className="top"></span>
          <span className="mid"></span>
          <span className="bot"></span>
        </div>
        <div
        className={`mobile-menu ${isMenuToggled ? 'toggled' : ''} absolute top-12 h-16 w-full bg-stone-900`}
        ></div>

        <button
          ref={mobileMenuBtRef}
          onClick={toggleMobieMenu}>
          <FontAwesomeIcon icon={faCircleArrowRight} size='xl' className='absolute top-4 left-3 cursor-pointer netflix hover:text-slate-600' />
        </button>
        <div className={`${isMobieMenuToggled ? 'block' : 'hidden'} bg-black/50 w-full h-screen z-30 mt-8`}></div>
        <div
          ref={mobileMenuRef}
          className={`nav-mobile ${isMobieMenuToggled ? 'active' : ''} fixed inset-y-0 left-0 bg-black text-white w-72 p-4 overflow-y-scroll scroll-smooth`}>
          <div className="flex items-center justify-between mb-8">
            <Link to="otthome" onClick={toggleMobieMenu}>
              <img src="image/logo.webp" alt="logo" className="logo absolute left-6 top-4 h-8 w-auto cursor-pointer md:left-4 md:top-4 lg:left-20" />
            </Link>
            <button onClick={toggleMobieMenu}>
              <FontAwesomeIcon icon={faXmark} size='xl' className='text-slate-300 hover:text-slate-300' />
            </button>

          </div>
          <ul className="text-sm">
            <div id="nav-1"
            onClick={handleNavClick}
            className="flex justify-between items-center cursor-pointer py-4 px-4 border-b border-slate-900 hover-red">
              <span>Home</span>
              <div className="netflix-bg h-5 w-5 text-slate-50 relative flex justify-center">{`${isActive ? '-' : '+'}`}</div>
            </div>
            <ul id="li-1" className={`${isActive ? 'active' : ''}`}>
              <NavLink to="otthome"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
              >
                <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">OTT Home</div>
              </NavLink>
              <NavLink to="home"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
              >
                <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Home</div>
              </NavLink>
              <NavLink to="movie"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
              >
                <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Movie</div>
              </NavLink>
              <NavLink to="tvshow"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
              >
                <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">TV Show</div>
              </NavLink>
              <NavLink to="video"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
              >
                <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Video</div>
              </NavLink>
              <NavLink to="merchandisestore"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
              >
                <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Merchadise Store</div>
              </NavLink>
            </ul>
            <div id="nav-2"
            onClick={handleNav2Click}
            className="flex justify-between items-center cursor-pointer py-4 px-4 border-b border-slate-900 hover-red">
              <span>Features</span>
              <div className="netflix-bg h-5 w-5 text-slate-50 relative flex justify-center">{`${isActive2 ? '-' : '+'}`}</div>
            </div>
            <ul id="li-2" className={`${isActive2 ? 'active' : ''}`}>
              <NavLink to="restrictedcontent"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
              >
                <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Restricted Content</div>
              </NavLink>
              <NavLink to="relatedmerchandise"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
              >
                <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Related Merchandise</div>
              </NavLink>
              <NavLink to="playlist"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
              >
                <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Playlist</div>
              </NavLink>
              <NavLink to="genres"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
              >
                <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Genres</div>
              </NavLink>
              <NavLink to="cast"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
              >
                <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Cast</div>
              </NavLink>
              <NavLink to="tags"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
              >
                <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Tags</div>
              </NavLink>
            </ul>
            <div id="nav-3"
            onClick={handleNav3Click}
            className="flex justify-between items-center cursor-pointer py-4 px-4 border-b border-slate-900 hover-red">
              <span>Pages</span>
              <div className="netflix-bg h-5 w-5 text-slate-50 relative flex justify-center">{`${isActive3 ? '-' : '+'}`}</div>
            </div>
            <ul id="li-3" className={`${isActive3 ? 'active' : ''}`}>
              <NavLink to="aboutus"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
              >
                <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">About Us</div>
              </NavLink>
              <NavLink to="contactus"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
              >
                <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Contact Us</div>
              </NavLink>
              <NavLink to="faq"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
              >
                <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">FAQ</div>
              </NavLink>
              <NavLink to="privacypolicy"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
              >
                <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Privacy Policy</div>
              </NavLink>
              <NavLink to="pricingplan"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
              >
                <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Pricing Plan</div>
              </NavLink>
              <NavLink to="comingsoon"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
              >
                <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Coming Soon</div>
              </NavLink>
              <div id="nav-3-1"
                onClick={handleNav31Click}
                className="flex justify-between items-center py-4 px-7 border-b border-slate-900 hover-red">
                <span>Error Page</span>
                <div className="netflix-bg h-5 w-5 text-slate-50 relative flex justify-center">{`${isActive31 ? '-' : '+'}`}</div>
              </div>
              <ul id="li-3-1" className={`${isActive31 ? 'active' : ''}`}>
                    <NavLink to="errorpage1"><div className="py-4 pr-4 pl-10 border-b border-slate-900 hover-red">Error Page 1</div></NavLink>
                    <NavLink to="errorpage2"><div className="py-4 pr-4 pl-10 border-b border-slate-900 hover-red">Error Page 2</div></NavLink>
              </ul>
            </ul>
            <div id="nav-4"
            onClick={handleNav4Click}
            className="flex justify-between items-center py-4 px-4 border-b border-slate-900 hover-red">
              <span>Blog</span>
              <div className="netflix-bg h-5 w-5 text-slate-50 relative flex justify-center">{`${isActive4 ? '-' : '+'}`}</div>
            </div>
            <ul id="li-4" className={`${isActive4 ? 'active' : ''}`}>
              <NavLink to="listing"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
              >
                <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Listing</div>
              </NavLink>
              <div id="nav-4-1"
              onClick={handleNav41Click}
              className="flex justify-between items-center py-4 px-7 cursor-pointer border-b border-slate-900 hover-red">
                  <span>Blog Grid</span>
                  <div className="netflix-bg h-5 w-5 text-slate-50 relative flex justify-center">{`${isActive41 ? '-' : '+'}`}</div>
              </div>
              <ul id="li-4-1"
                className={`${isActive41 ? 'active' : ''}`}
              >
                <NavLink to="comingsoon"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
                >
                  <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">1 Colume</div>
                </NavLink>
                <NavLink to="comingsoon"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
                >
                  <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">2 Colume</div>
                </NavLink>
                <NavLink to="comingsoon"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
                >
                  <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">3 Colume</div>
                </NavLink>
                <NavLink to="comingsoon"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
                >
                  <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">4 Colume</div>
                </NavLink>
              </ul>
              <div id="nav-4-2"
                onClick={handleNav42Click}
                className="flex justify-between items-center py-4 px-7 border-b border-slate-900 hover-red">
                  <span>Blog Sidebar</span>
                  <div className="netflix-bg h-5 w-5 text-slate-50 relative flex justify-center">{`${isActive42 ? '-' : '+'}`}</div>
              </div>
              <ul id="li-4-2"
              className={`${isActive42 ? 'active' : ''}`}>
                <NavLink to="comingsoon"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
                >
                  <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Left Sidebar</div>
                </NavLink>
                <NavLink to="comingsoon"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
                >
                  <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Right Sidebar</div>
                </NavLink>
              </ul>
              <div id="nav-4-3"
                onClick={handleNav43Click}
                className="flex justify-between items-center py-4 px-7 border-b border-slate-900 hover-red">
                <span>Blog Single</span>
                <div className="netflix-bg h-5 w-5 text-slate-50 relative flex justify-center">{`${isActive42 ? '-' : '+'}`}</div>
              </div>
              <ul id="li-4-3" className={`${isActive43 ? 'active' : ''}`}>
                <NavLink to="comingsoon"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
                >
                  <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Blog Template</div>
                </NavLink>
                <NavLink to="comingsoon"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
                >
                  <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Standard</div>
                </NavLink>
                <NavLink to="comingsoon"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
                >
                  <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Audio</div>
                </NavLink>
                <NavLink to="comingsoon"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
                >
                  <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Video</div>
                </NavLink>
                <NavLink to="comingsoon"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
                >
                  <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Link</div>
                </NavLink>
                <NavLink to="comingsoon"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
                >
                  <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Quote</div>
                </NavLink>
                <NavLink to="comingsoon"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
                >
                  <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Gallery</div>
                </NavLink>
              </ul>
            </ul>
            <div id="nav-5"
            onClick={handleNav5Click}
            className="flex justify-between items-center cursor-pointer py-4 px-4 border-b border-slate-900 hover-red">
              <span>Shop</span>
              <div className="netflix-bg h-5 w-5 text-slate-50 relative flex justify-center">{`${isActive5 ? '-' : '+'}`}</div>
            </div>
            <ul id="li-5" className={`${isActive5 ? 'active' : ''}`}>
              <NavLink to="shop"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
              >
                <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Shop</div>
              </NavLink>
              <NavLink to="myaccount"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
              >
                <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">My Account</div>
              </NavLink>
              <NavLink to="cartpage"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
              >
                <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Cart Page</div>
              </NavLink>
              <NavLink to="comingsoon"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
              >
                <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Wishlist Page</div>
              </NavLink>
              <NavLink to="comingsoon"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
              >
                <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Check Out Page</div>
              </NavLink>
              <NavLink to="comingsoon"
                onClick={toggleMobieMenu}
                className={({ isActive }) => `${isActive ? "netflix" : "hover-red"}`}
              >
                <div className="py-4 pr-4 pl-7 border-b border-slate-900 ">Order Tracking</div>
              </NavLink>
            </ul>
          </ul>
        </div>
      </section>
    </header>
  )
}

export default Header