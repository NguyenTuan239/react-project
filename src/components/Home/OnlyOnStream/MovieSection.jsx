import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCaretRight, faShareNodes, faLink } from '@fortawesome/free-solid-svg-icons';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

function MovieSection({
    imgLink=[0,1,2],
}) {

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
    <section className="w-full h-auto relative bg-stone-950">
        <Swiper
          loop={true}
          speed={500}
          navigation={{
            nextEl: '.movie-sec1-next',
            prevEl: '.movie-sec1-prev',
          }}
          modules={[Navigation]}
          className="movie-slide-wrapper"
        >
          <SwiperSlide>
              <div className='otthome-sec1-bg '>
                <div className="otthome-sec1-img-wrapper">
                  <img src={imgLink[0]} alt="Slide 1" className="otthome-sec1-img" />
                </div>
                <div className="moviePoster text-gray-300 p-3">
                  <div className="moviePoster-content1 flex items-center font-bold pb-3">
                    <span className="bg-white text-xs  px-4 py-2 text-black">PG</span>
                    <span className="text-muted ml-4"><Link className="transition-all duration-500 ease-in-out hover-red">Comedy</Link><span className="netflix mx-2">•</span><Link className="transition-all duration-500 ease-in-out hover-red">Romance</Link><span className="netflix mx-2">•</span><Link className="transition-all duration-500 ease-in-out hover-red">Action</Link></span>
                  </div>
                  <h2 className="moviePoster-content2 movie-poster-hl text-3xl font-bold mt-2 tracking-widest md:text-6xl lg:text-7xl">JONH WICK</h2>
                  <p className="moviePoster-content3 mt-1 clamped-text">
                  After the death of their father, two siblings fight for the throne, thereby causing a civil war known as the Dance of the Dragons. Rhaenyra tries to hold the realm together as the tension
                  rises following a tragic loss. Meanwhile, Daemon prepares for war.
                  </p>
                  <div className="moviePoster-content4 flex items-center mt-4 flex-wrap">
                    <span className="font-medium text-white mr-4 text-nowrap">⭐⭐⭐⭐ 4.3/5</span>
                    <span><img src="/image/movie/imdb-logo.svg" alt="" className="h-14 w-auto"/></span>
                    <span className="ml-4 text-nowrap">2hr 30mins</span>
                    <span className="netflix ml-4 text-nowrap">Genres<Link className="transition-all duration-500 ease-in-out hover-red text-slate-200">Romance</Link></span>
                    <span className="netflix ml-4 text-nowrap">Starting: <Link className="transition-all duration-500 ease-in-out hover-red text-slate-200">john nathan</Link></span>
                  </div>
                  <div className='relative h-10 w-40 mb-8 moviePoster-content5'>
                    <Link to="/moviedetail"><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">stram now<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
                  </div>
                </div>
                <button
                  onClick={handleWatchTrailerClick}
                  className="homePG-sec1-button hidden xl:block text-slate-300">
                      Watch Trailer
                </button>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='otthome-sec1-bg '>
                <div className="otthome-sec1-img-wrapper">
                  <img src={imgLink[1]} alt="Slide 1" className="otthome-sec1-img" />
                </div>
                <div className="moviePoster text-gray-300 p-3">
                  <div className="moviePoster-content1 flex items-center font-bold pb-3">
                    <span className="bg-white text-xs  px-4 py-2 text-black">PG</span>
                    <span className="text-muted ml-4"><Link className="transition-all duration-500 ease-in-out hover-red">Comedy</Link><span className="netflix mx-2">•</span><Link className="transition-all duration-500 ease-in-out hover-red">Romance</Link><span className="netflix mx-2">•</span><Link className="transition-all duration-500 ease-in-out hover-red">Action</Link></span>
                  </div>
                  <h2 className="moviePoster-content2 movie-poster-hl text-3xl font-bold mt-2 tracking-widest md:text-6xl lg:text-7xl">JONH WICK</h2>
                  <p className="moviePoster-content3 mt-1 clamped-text">
                  After the death of their father, two siblings fight for the throne, thereby causing a civil war known as the Dance of the Dragons. Rhaenyra tries to hold the realm together as the tension
                  rises following a tragic loss. Meanwhile, Daemon prepares for war.
                  </p>
                  <div className="moviePoster-content4 flex items-center mt-4 flex-wrap">
                    <span className="font-medium text-white mr-4 text-nowrap">⭐⭐⭐⭐ 4.3/5</span>
                    <span><img src="/image/movie/imdb-logo.svg" alt="" className="h-14 w-auto"/></span>
                    <span className="ml-4 text-nowrap">2hr 30mins</span>
                    <span className="netflix ml-4 text-nowrap">Genres<Link className="transition-all duration-500 ease-in-out hover-red text-slate-200">Romance</Link></span>
                    <span className="netflix ml-4 text-nowrap">Starting: <Link className="transition-all duration-500 ease-in-out hover-red text-slate-200">john nathan</Link></span>
                  </div>
                  <div className='relative h-10 w-40 mb-8 moviePoster-content5'>
                    <Link to="/moviedetail"><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">stram now<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
                  </div>
                </div>
                <button
                  onClick={handleWatchTrailerClick}
                  className="homePG-sec1-button hidden xl:block text-slate-300">
                      Watch Trailer
                </button>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='otthome-sec1-bg '>
                <div className="otthome-sec1-img-wrapper">
                  <img src={imgLink[2]} alt="Slide 1" className="otthome-sec1-img" />
                </div>
                <div className="moviePoster text-gray-300 p-3">
                  <div className="moviePoster-content1 flex items-center font-bold pb-3">
                    <span className="bg-white text-xs  px-4 py-2 text-black">PG</span>
                    <span className="text-muted ml-4"><Link className="transition-all duration-500 ease-in-out hover-red">Comedy</Link><span className="netflix mx-2">•</span><Link className="transition-all duration-500 ease-in-out hover-red">Romance</Link><span className="netflix mx-2">•</span><Link className="transition-all duration-500 ease-in-out hover-red">Action</Link></span>
                  </div>
                  <h2 className="moviePoster-content2 movie-poster-hl text-3xl font-bold mt-2 tracking-widest md:text-6xl lg:text-7xl">JONH WICK</h2>
                  <p className="moviePoster-content3 mt-1 clamped-text">
                  After the death of their father, two siblings fight for the throne, thereby causing a civil war known as the Dance of the Dragons. Rhaenyra tries to hold the realm together as the tension
                  rises following a tragic loss. Meanwhile, Daemon prepares for war.
                  </p>
                  <div className="moviePoster-content4 flex items-center mt-4 flex-wrap">
                    <span className="font-medium text-white mr-4 text-nowrap">⭐⭐⭐⭐ 4.3/5</span>
                    <span><img src="/image/movie/imdb-logo.svg" alt="" className="h-14 w-auto"/></span>
                    <span className="ml-4 text-nowrap">2hr 30mins</span>
                    <span className="netflix ml-4 text-nowrap">Genres<Link className="transition-all duration-500 ease-in-out hover-red text-slate-200">Romance</Link></span>
                    <span className="netflix ml-4 text-nowrap">Starting: <Link className="transition-all duration-500 ease-in-out hover-red text-slate-200">john nathan</Link></span>
                  </div>
                  <div className='relative h-10 w-40 mb-8 moviePoster-content5'>
                    <Link to="/moviedetail"><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">stram now<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
                  </div>
                </div>
                <button
                  onClick={handleWatchTrailerClick}
                  className="homePG-sec1-button hidden xl:block text-slate-300">
                      Watch Trailer
                </button>
              </div>
          </SwiperSlide>
        </Swiper>
        <div className="movie-sec1-prev hover-bg-red"><FontAwesomeIcon icon={faChevronLeft} style={{color: "#fafafa",}} /></div>
        <div className="movie-sec1-next hover-bg-red"><FontAwesomeIcon icon={faChevronRight} style={{color: "#fafafa",}} /></div>
        <div
          ref={trailerBtRef}
          className={`${isWatchtrailer ? '' : 'hidden'} home-trailer-container`}>
          <video
            ref={trailerRef}
            id="my-video"
            className="video-js detail-video"
            controls
            preload="auto"
            width="640"
            height="264"
            data-setup="{}"
          >
            <source src="../image/video/trailer.mp4" type="video/mp4" />
            <source src="../image/video/trailer.webm" type="video/webm" />
            <p className="vjs-no-js">
              To view this video please enable JavaScript, and consider upgrading to a
              web browser that
              <Link href="https://videojs.com/html5-video-support/" target="_blank"
                >supports HTML5 video</Link>
            </p>
          </video>
        </div>
      </section>
  )
}

export default MovieSection