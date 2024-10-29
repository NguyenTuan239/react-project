import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCaretRight, faShareNodes, faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import ContinueWatching from './OnlyOnStream/ContinueWatching';
import OnlyOnStreamit from './OnlyOnStream/OnlyOnStreamit';
import VerticalSlide from './OnlyOnStream/VerticalSlide';

const Home = () => {

  const [isWatchtrailer, setWatchtrailer] = useState(false);
  const handleWatchTrailerClick = () => {
    setWatchtrailer((prev) => !prev);
  }

  const trailerRef = useRef(null);
  const trailerBtRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !trailerRef.current.contains(event.target) &&
        trailerBtRef.current.contains(event.target)
      ) {
        setWatchtrailer(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <main className='w-full bg-stone-950 text-slate-200'>
      {/* section 1  */}
      <section className="w-full h-auto relative">
        <Swiper
          loop={true}
          speed={500}
          effect="fade"
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          fadeEffect={{ crossFade: true }}
          modules={[EffectFade, Navigation]}
          className=""
        >
          <SwiperSlide>
              <div className='otthome-sec1-bg '>
                <div className="otthome-sec1-img-wrapper">
                  <img src="/react-project/image/movie/upcoming/banner1.webp" alt="Slide 1" className="otthome-sec1-img" />
                </div>
                <div className="moviePoster text-gray-300 p-3">
                  <div className="moviePoster-content1 flex items-center font-bold pb-3">
                    <span className="bg-white text-xs  px-4 py-2 text-black">PG</span>
                    <span className="text-muted ml-4"><Link className="transition-all duration-500 ease-in-out hover-red">Comedy</Link><span className="netflix mx-2">•</span><Link className="transition-all duration-500 ease-in-out hover-red">Romance</Link><span className="netflix mx-2">•</span><Link className="transition-all duration-500 ease-in-out hover-red">Action</Link></span>
                  </div>
                  <h2 className="moviePoster-content2 movie-poster-hl text-3xl font-bold mt-2 tracking-widest md:text-6xl lg:text-7xl">ANOTHER DANGER</h2>
                  <p className="moviePoster-content3 mt-1 clamped-text">
                  After the death of their father, two siblings fight for the throne, thereby causing a civil war known as the Dance of the Dragons. Rhaenyra tries to hold the realm together as the tension
                  rises following a tragic loss. Meanwhile, Daemon prepares for war.
                  </p>
                  <div className="moviePoster-content4 flex items-center mt-4 flex-wrap">
                    <span className="font-medium text-white mr-4 text-nowrap">⭐⭐⭐⭐ 4.3/5</span>
                    <span><img src="/react-project/image/movie/imdb-logo.svg" alt="" className="h-14 w-auto"/></span>
                    <span className="ml-4 text-nowrap">2hr 30mins</span>
                    <span className="netflix ml-4 text-nowrap">Genres<Link className="transition-all duration-500 ease-in-out hover-red text-slate-200">Romance</Link></span>
                    <span className="netflix ml-4 text-nowrap">Starting: <Link className="transition-all duration-500 ease-in-out hover-red text-slate-200">Action</Link></span>
                  </div>
                  <div className='relative h-10 w-40 mb-8 moviePoster-content5'>
                    <Link to="/moviedetail"><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">stram now<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
                  </div>
                </div>
                <button
                  onClick={handleWatchTrailerClick}
                  className="homePG-sec1-button hidden xl:block">
                      Watch Trailer
                </button>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='otthome-sec1-bg '>
                <div className="otthome-sec1-img-wrapper">
                  <img src="/react-project/image/movie/upcoming/banner2.webp" alt="Slide 1" className="otthome-sec1-img" />
                </div>
                <div className="moviePoster text-gray-300 p-3">
                  <div className="moviePoster-content1 flex items-center font-bold pb-3">
                    <span className="bg-white text-xs  px-4 py-2 text-black">PG</span>
                    <span className="text-muted ml-4"><Link className="transition-all duration-500 ease-in-out hover-red">Comedy</Link><span className="netflix mx-2">•</span><Link className="transition-all duration-500 ease-in-out hover-red">Romance</Link><span className="netflix mx-2">•</span><Link className="transition-all duration-500 ease-in-out hover-red">Action</Link></span>
                  </div>
                  <h2 className="moviePoster-content2 movie-poster-hl text-3xl font-bold mt-2 tracking-widest md:text-6xl lg:text-7xl">BUMBLEBEE</h2>
                  <p className="moviePoster-content3 mt-1 clamped-text">
                  After the death of their father, two siblings fight for the throne, thereby causing a civil war known as the Dance of the Dragons. Rhaenyra tries to hold the realm together as the tension
                        rises following a tragic loss. Meanwhile, Daemon prepares for war.
                  </p>
                  <div className="moviePoster-content4 flex items-center mt-4 flex-wrap">
                    <span className="font-medium text-white mr-4 text-nowrap">⭐⭐⭐⭐ 4.3/5</span>
                    <span><img src="/react-project/image/movie/imdb-logo.svg" alt="" className="h-14 w-auto"/></span>
                    <span className="ml-4 text-nowrap">2hr 30mins</span>
                    <span className="netflix ml-4 text-nowrap">Genres<Link className="transition-all duration-500 ease-in-out hover-red text-slate-200">Romance</Link></span>
                    <span className="netflix ml-4 text-nowrap">Starting: <Link className="transition-all duration-500 ease-in-out hover-red text-slate-200">Action</Link></span>
                  </div>
                  <div className='relative h-10 w-40 mb-8 moviePoster-content5'>
                    <Link to="/moviedetail"><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">stram now<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
                  </div>
                </div>
                <button
                  onClick={handleWatchTrailerClick}
                  className="homePG-sec1-button hidden xl:block">
                      Watch Trailer
                </button>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='otthome-sec1-bg '>
                <div className="otthome-sec1-img-wrapper">
                  <img src="/react-project/image/movie/upcoming/banner3.webp" alt="Slide 1" className="otthome-sec1-img" />
                </div>
                <div className="moviePoster text-gray-300 p-3">
                  <div className="moviePoster-content1 flex items-center font-bold pb-3">
                    <span className="bg-white text-xs  px-4 py-2 text-black">PG</span>
                    <span className="text-muted ml-4"><Link className="transition-all duration-500 ease-in-out hover-red">Comedy</Link><span className="netflix mx-2">•</span><Link className="transition-all duration-500 ease-in-out hover-red">Romance</Link><span className="netflix mx-2">•</span><Link className="transition-all duration-500 ease-in-out hover-red">Action</Link></span>
                  </div>
                  <h2 className="moviePoster-content2 movie-poster-hl text-3xl font-bold mt-2 tracking-widest md:text-6xl lg:text-7xl">ANOTHER DANGER</h2>
                  <p className="moviePoster-content3 mt-1 clamped-text">
                  After the death of their father, two siblings fight for the throne, thereby causing a civil war known as the Dance of the Dragons. Rhaenyra tries to hold the realm together as the tension
                  rises following a tragic loss. Meanwhile, Daemon prepares for war.
                  </p>
                  <div className="moviePoster-content4 flex items-center mt-4 flex-wrap">
                    <span className="font-medium text-white mr-4 text-nowrap">⭐⭐⭐⭐ 4.3/5</span>
                    <span><img src="/react-project/image/movie/imdb-logo.svg" alt="" className="h-14 w-auto"/></span>
                    <span className="ml-4 text-nowrap">2hr 30mins</span>
                    <span className="netflix ml-4 text-nowrap">Genres<Link className="transition-all duration-500 ease-in-out hover-red text-slate-200">Romance</Link></span>
                    <span className="netflix ml-4 text-nowrap">Starting: <Link className="transition-all duration-500 ease-in-out hover-red text-slate-200">Action</Link></span>
                  </div>
                  <div className='relative h-10 w-40 mb-8 moviePoster-content5'>
                    <Link to="/moviedetail"><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">stram now<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
                  </div>
                </div>
                <button
                  onClick={handleWatchTrailerClick}
                  className="homePG-sec1-button hidden xl:block">
                      Watch Trailer
                </button>
              </div>
          </SwiperSlide>
          <div className="navigation_">
            <div className="swiper-button-prev hover-bg-red"><FontAwesomeIcon icon={faChevronLeft} style={{color: "#fafafa",}} /></div>
            <div className="swiper-button-next hover-bg-red"><FontAwesomeIcon icon={faChevronRight} style={{color: "#fafafa",}} /></div>
        </div>
        </Swiper>
        <div
          ref={trailerBtRef}
          className={`${isWatchtrailer ? '' : 'hidden'} home-trailer-container`}>
          <video
            ref={trailerRef}
            className="my-video"
            controls
            preload="auto"
            width="640"
            height="264"
            data-setup="{}"
          >
            <source src="/react-project/image/video/trailer.mp4" type="video/mp4" />
            <source src="/react-project/image/video/trailer.webm" type="video/webm" />
            <p className="vjs-no-js">
              To view this video please enable JavaScript, and consider upgrading to a
              web browser that
              <Link href="https://videojs.com/html5-video-support/" target="_blank"
                >supports HTML5 video</Link>
            </p>
          </video>
        </div>
      </section>
      {/* section 2  */}
      <ContinueWatching
        title='Only On Streamit'
        imgLink={[
          '/react-project/image/continue-watch/01.webp',
          '/react-project/image/continue-watch/02.webp',
          '/react-project/image/continue-watch/03.webp',
          '/react-project/image/continue-watch/04.webp',
          '/react-project/image/continue-watch/05.webp',
          '/react-project/image/continue-watch/06.webp',
        ]}
      />
      {/* section 3  */}
      <OnlyOnStreamit
        title='Upcomging'
        imgLink={[
          '/react-project/image/movie/upcoming/01.webp',
          '/react-project/image/movie/upcoming/02.webp',
          '/react-project/image/movie/upcoming/03.webp',
          '/react-project/image/movie/upcoming/04.webp',
          '/react-project/image/movie/upcoming/05.webp',
          '/react-project/image/movie/upcoming/06.webp',
          '/react-project/image/movie/upcoming/07.webp',
        ]}
      />
      {/* section 4  */}
      <VerticalSlide
        imgLink={[
          '/react-project/image/top-10/06.webp',
          '/react-project/image/top-10/07.webp',
          '/react-project/image/top-10/08.webp',
          '/react-project/image/top-10/09.webp',
          '/react-project/image/top-10/05.webp',
        ]}
      />
      {/* section 5  */}
      <OnlyOnStreamit
        title='Recommended For You'
        imgLink={[
          '/react-project/image/movie/recommended/01.webp',
          '/react-project/image/movie/recommended/02.webp',
          '/react-project/image/movie/recommended/03.webp',
          '/react-project/image/movie/recommended/04.webp',
          '/react-project/image/movie/recommended/05.webp',
          '/react-project/image/movie/recommended/06.webp',
          '/react-project/image/movie/recommended/07.webp',
        ]}
      />
      {/* section 6  */}
      <section>
        <div className="homePG-sec7-bg">
          <div className="homePG-sec7-poster mt-10 text-gray-300 p-3 z-10">
            <h2 className=" movie-poster-hl my-3 text-3xl font-medium md:text-4xl md:font-semibold xl:text-6xl md:py-3">BAILEY</h2>
            <p className=" font-medium text-white my-3 mr-4 text-nowrap">⭐⭐⭐⭐ 4.3/5 <span className="ml-4 font-thin">2hr 30mins</span></p>
            <div className=" flex items-center font-bold pb-3">
                <span className="text-white font-semibold text-xl">Movie of the year</span>
            </div>
            <p className="w-8/12 sec5-content my-3">
              Baileys Irish Cream is an Irish cream liqueur an alcoholic beverage flavoured with cream, cocoa, and Irish whiskey made by Diageo at Republic of Ireland and in Mallusk, Northern Ireland.
            </p>
            <div className='relative h-10 w-40 mb-8 moviePoster-content5'>
              <Link to="/moviedetail"><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">play now<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
            </div>
          </div>
          <div className="px-5 pb-24 xl:pt-24 xl:pr-24"><Link to="/moviedetail"><img src="/react-project/image/parallax/parallex.webp" alt="" className="homePG-sec7-img"/></Link></div>
        </div>
      </section>
      {/* section 7  */}
      <OnlyOnStreamit
        title='Related Movie'
        imgLink={[
          '/react-project/image/movie/related/07.webp',
          '/react-project/image/movie/related/06.webp',
          '/react-project/image/movie/related/05.webp',
          '/react-project/image/movie/related/04.webp',
          '/react-project/image/movie/related/03.webp',
          '/react-project/image/movie/related/02.webp',
          '/react-project/image/movie/related/01.webp',
        ]}
      />
    </main>
  )
}

export default Home