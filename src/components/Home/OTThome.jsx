import React, { useState, useRef, useEffect, useContext } from 'react';
import { MovieContext } from '../../contexts/MovieContext';
import { Link, NavLink } from 'react-router-dom';
import './OTThome.css';
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

export const OTThome = () => {
  const { movies } = useContext(MovieContext);

  const swiper00Ref = useRef(null);
  const swiper01Ref = useRef(null);

  useEffect(() => {
    const swiper00 = swiper00Ref.current.swiper;
    const swiper01 = swiper01Ref.current.swiper;

    // Sync mySwiper00 with mySwiper01
    swiper00.on('slideChangeTransitionStart', () => {
      swiper01.slideToLoop(swiper00.realIndex);
    });

    // Sync mySwiper01 with mySwiper00
    swiper01.on('slideChangeTransitionStart', () => {
      swiper00.slideToLoop(swiper01.realIndex);
    });
  }, []);

  return (
    <main className="relative w-full bg-stone-950 text-slate-200">
      {/* section 1  */}
      <section className="w-full h-auto relative">
         {/* Swiper 00 with fade and autoplay effect */}
        <Swiper
          ref={swiper00Ref}
          loop={true}
          speed={1000}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 6500, disableOnInteraction: false }}
          modules={[EffectFade, Autoplay]}
          className="mySwiper00"
        >
          <SwiperSlide>
          {movies
            .filter((movie) => movie.id === 2)
            .map((movie) => (
              <div key={movie.id} className='otthome-sec1-bg '>
                <div className="otthome-sec1-img-wrapper">
                  <img src="/image/movie/ott1.webp" alt="Slide 1" className="otthome-sec1-img" />
                </div>
                <div className="moviePoster text-gray-300 p-3">
                  <div className="moviePoster-content1 flex items-center font-bold pb-3">
                    <span className="bg-white text-xs  px-4 py-2 text-black">PG</span>
                    <span className="text-muted ml-4"><Link className="transition-all duration-500 ease-in-out hover-red">{movie.genres[0]}</Link><span className="netflix mx-2">•</span><Link className="transition-all duration-500 ease-in-out hover-red">{movie.genres[1]}</Link><span className="netflix mx-2">•</span><Link className="transition-all duration-500 ease-in-out hover-red">{movie.genres[2]}</Link></span>
                  </div>
                  <h2 className="moviePoster-content2 movie-poster-hl text-3xl font-bold mt-2 tracking-widest md:text-6xl lg:text-7xl">{ movie.title}</h2>
                  <p className="moviePoster-content3 mt-1 clamped-text">
                    {movie.description}
                  </p>
                  <div className="moviePoster-content4 flex items-center mt-4 flex-wrap">
                    <span className="font-medium text-white mr-4 text-nowrap">⭐ {movie.rating}/10</span>
                    <span><img src="/image/movie/imdb-logo.svg" alt="" className="h-14 w-auto"/></span>
                    <span className="ml-4 text-nowrap">{movie.duration} mins</span>
                    <span className="netflix ml-4 text-nowrap">Genres<Link className="transition-all duration-500 ease-in-out hover-red text-slate-200">{movie.genres[0]}</Link></span>
                    <span className="netflix ml-4 text-nowrap">Starting: <Link className="transition-all duration-500 ease-in-out hover-red text-slate-200">{movie.actors.join(', ')}</Link></span>
                  </div>
                  <div className='relative h-10 w-40 mb-8 moviePoster-content5'>
                    <Link to="/moviedetail"><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">stram now<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
                  </div>
                </div>
              </div>
            ))}
          </SwiperSlide>
          <SwiperSlide>
          {movies
            .filter((movie) => movie.id === 3)
            .map((movie) => (
              <div key={movie.id} className='otthome-sec1-bg '>
                <div className="otthome-sec1-img-wrapper">
                  <img src="/image/movie/ott2.webp" alt="Slide 1" className="otthome-sec1-img" />
                </div>
                <div className="moviePoster text-gray-300 p-3">
                  <div className="moviePoster-content1 flex items-center font-bold pb-3">
                    <span className="bg-white text-xs  px-4 py-2 text-black">PG</span>
                    <span className="text-muted ml-4"><Link className="transition-all duration-500 ease-in-out hover-red">{movie.genres[0]}</Link><span className="netflix mx-2">•</span><Link className="transition-all duration-500 ease-in-out hover-red">{movie.genres[1]}</Link><span className="netflix mx-2">•</span><Link className="transition-all duration-500 ease-in-out hover-red">{movie.genres[2]}</Link></span>
                  </div>
                  <h2 className="moviePoster-content2 movie-poster-hl text-3xl font-bold mt-2 tracking-widest md:text-6xl lg:text-7xl">{ movie.title}</h2>
                  <p className="moviePoster-content3 mt-1 clamped-text">
                    {movie.description}
                  </p>
                  <div className="moviePoster-content4 flex items-center mt-4 flex-wrap">
                    <span className="font-medium text-white mr-4 text-nowrap">⭐ {movie.rating}/10</span>
                    <span><img src="/image/movie/imdb-logo.svg" alt="" className="h-14 w-auto"/></span>
                    <span className="ml-4 text-nowrap">{movie.duration} mins</span>
                    <span className="netflix ml-4 text-nowrap">Genres<Link className="transition-all duration-500 ease-in-out hover-red text-slate-200">{movie.genres[0]}</Link></span>
                    <span className="netflix ml-4 text-nowrap">Starting: <Link className="transition-all duration-500 ease-in-out hover-red text-slate-200">{movie.actors.join(', ')}</Link></span>
                  </div>
                  <div className='relative h-10 w-40 mb-8 moviePoster-content5'>
                    <Link to="/moviedetail"><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">stram now<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
                  </div>
                </div>
              </div>
            ))}
          </SwiperSlide>
          <SwiperSlide>
          {movies
            .filter((movie) => movie.id === 4)
            .map((movie) => (
              <div key={movie.id} className='otthome-sec1-bg '>
                <div className="otthome-sec1-img-wrapper">
                  <img src="/image/movie/ott3.webp" alt="Slide 1" className="otthome-sec1-img" />
                </div>
                <div className="moviePoster text-gray-300 p-3">
                  <div className="moviePoster-content1 flex items-center font-bold pb-3">
                    <span className="bg-white text-xs  px-4 py-2 text-black">PG</span>
                    <span className="text-muted ml-4"><Link className="transition-all duration-500 ease-in-out hover-red">{movie.genres[0]}</Link><span className="netflix mx-2">•</span><Link className="transition-all duration-500 ease-in-out hover-red">{movie.genres[1]}</Link><span className="netflix mx-2">•</span><Link className="transition-all duration-500 ease-in-out hover-red">{movie.genres[2]}</Link></span>
                  </div>
                  <h2 className="moviePoster-content2 movie-poster-hl text-3xl font-bold mt-2 tracking-widest md:text-6xl lg:text-7xl">{ movie.title}</h2>
                  <p className="moviePoster-content3 mt-1 clamped-text">
                    {movie.description}
                  </p>
                  <div className="moviePoster-content4 flex items-center mt-4 flex-wrap">
                    <span className="font-medium text-white mr-4 text-nowrap">⭐ {movie.rating}/10</span>
                    <span><img src="/image/movie/imdb-logo.svg" alt="" className="h-14 w-auto"/></span>
                    <span className="ml-4 text-nowrap">{movie.duration} mins</span>
                    <span className="netflix ml-4 text-nowrap">Genres<Link className="transition-all duration-500 ease-in-out hover-red text-slate-200">{movie.genres[0]}</Link></span>
                    <span className="netflix ml-4 text-nowrap">Starting: <Link className="transition-all duration-500 ease-in-out hover-red text-slate-200">{movie.actors.join(', ')}</Link></span>
                  </div>
                  <div className='relative h-10 w-40 mb-8 moviePoster-content5'>
                    <Link to="/moviedetail"><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">stram now<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
                  </div>
                </div>
              </div>
            ))}
          </SwiperSlide>
        </Swiper>
        {/* Swiper 01 with navigation and slideToClickedSlide */}
        <div className="otthome-sec1-slide2 hidden lg:block">
          <Swiper
            ref={swiper01Ref}
            loop={true}
            speed={1000}
            slidesPerView={2}
            spaceBetween={10}
            slideToClickedSlide={true}
            navigation={{
              nextEl: '.next-button',
              prevEl: '.prev-button',
            }}
            modules={[Navigation]}
            className="mySwiper01 h-full"
          >
            <SwiperSlide>
            {movies
            .filter((movie) => movie.id === 2)
            .map((movie) => (
            <div key={movie.id} className="item2 bg-[url('/image/movie/ott1.webp')]">
                <div className="poster-card-des">
                  <p className="font-medium text-white">{ movie.title}</p>
                  <p className="font-light text-sm text-white">{movie.duration} mins</p>
                </div>
              </div>
            ))}
            </SwiperSlide>
            <SwiperSlide>
            {movies
            .filter((movie) => movie.id === 3)
            .map((movie) => (
            <div key={movie.id} className="item2 bg-[url('/image/movie/ott2.webp')]">
                <div className="poster-card-des">
                  <p className="font-medium text-white">{ movie.title}</p>
                  <p className="font-light text-sm text-white">{movie.duration} mins</p>
                </div>
              </div>
            ))}
            </SwiperSlide>
            <SwiperSlide>
            {movies
            .filter((movie) => movie.id === 4)
            .map((movie) => (
            <div key={movie.id} className="item2 bg-[url('/image/movie/ott3.webp')]">
                <div className="poster-card-des">
                  <p className="font-medium text-white">{ movie.title}</p>
                  <p className="font-light text-sm text-white">{movie.duration} mins</p>
                </div>
              </div>
            ))}
            </SwiperSlide>
            <div className="prev-button hover-bg-red"><FontAwesomeIcon icon={faChevronLeft} style={{color: "#fafafa",}} /></div>
            <div className="next-button hover-bg-red"><FontAwesomeIcon icon={faChevronRight} style={{color: "#fafafa",}} /></div>
          </Swiper>
        </div>
      </section>
      {/* section 2 Continue Watching */}
      <section className="relative text-white font-light mx-auto w-11/12 mt-16">
        <h2 className="text-xl md:text-2xl mb-10 mt-2">Continue Watching</h2>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <Link to="/moviedetail">
              <img src="/image/continue-watch/01.webp" alt="" className="continue-image" />
            </Link>
            <div className="absolute bottom-1 left-0 h-0.5 netflix-bg" style={{ width: '30%' }}></div>
            <div className="absolute bottom-1 right-0 h-0.5 bg-gray-500" style={{ width: '70%' }}></div>
            <span className="absolute bottom-2 left-2 text-gray-300 hidden md:block">70 of 230 m</span>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/moviedetail">
              <img src="/image/continue-watch/02.webp" alt="" className="continue-image" />
            </Link>
            <div className="absolute bottom-1 left-0 h-0.5 netflix-bg" style={{ width: '60%' }}></div>
            <div className="absolute bottom-1 right-0 h-0.5 bg-gray-500" style={{ width: '40%' }}></div>
            <span className="absolute bottom-2 left-2 text-gray-300 hidden md:block">70 of 230 m</span>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/moviedetail">
              <img src="/image/continue-watch/03.webp" alt="" className="continue-image" />
            </Link>
            <div className="absolute bottom-1 left-0 h-0.5 netflix-bg" style={{ width: '50%' }}></div>
            <div className="absolute bottom-1 right-0 h-0.5 bg-gray-500" style={{ width: '50%' }}></div>
            <span className="absolute bottom-2 left-2 text-gray-300 hidden md:block">70 of 230 m</span>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/moviedetail">
              <img src="/image/continue-watch/04.webp" alt="" className="continue-image" />
            </Link>
            <div className="absolute bottom-1 left-0 h-0.5 netflix-bg" style={{ width: '30%' }}></div>
            <div className="absolute bottom-1 right-0 h-0.5 bg-gray-500" style={{ width: '70%' }}></div>
            <span className="absolute bottom-2 left-2 text-gray-300 hidden md:block">70 of 230 m</span>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/moviedetail">
              <img src="/image/continue-watch/05.webp" alt="" className="continue-image" />
            </Link>
            <div className="absolute bottom-1 left-0 h-0.5 netflix-bg" style={{ width: '30%' }}></div>
            <div className="absolute bottom-1 right-0 h-0.5 bg-gray-500" style={{ width: '70%' }}></div>
            <span className="absolute bottom-2 left-2 text-gray-300 hidden md:block">70 of 230 m</span>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/moviedetail">
              <img src="/image/continue-watch/06.webp" alt="" className="continue-image" />
            </Link>
            <div className="absolute bottom-1 left-0 h-0.5 netflix-bg" style={{ width: '30%' }}></div>
            <div className="absolute bottom-1 right-0 h-0.5 bg-gray-500" style={{ width: '70%' }}></div>
            <span className="absolute bottom-2 left-2 text-gray-300 hidden md:block">70 of 230 m</span>
          </SwiperSlide>
          <div className="navigation_">
            <div className="swiper-button-prev hover-bg-red"><FontAwesomeIcon icon={faChevronLeft} style={{color: "#fafafa",}} /></div>
            <div className="swiper-button-next hover-bg-red"><FontAwesomeIcon icon={faChevronRight} style={{color: "#fafafa",}} /></div>
        </div>
        </Swiper>
      </section>
      {/* section 3 Top ten Movie To Watch */}
      <section className="section-3 relative text-white font-light mx-auto mt-16 w-11/12">
        <h2 className="text-xl md:text-2xl mb-10 mt-2 flex justify-between"><span>Top ten Movie To Watch</span><span className="netflix text-lg cursor-pointer">View All</span></h2>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
          className='h-full'
        >
          <SwiperSlide>
            <div className="topten-item">
              <Link to="/moviedetail"><img src="/image/tv-show/01.webp" alt="" className="topten-image"/></Link>
              <div className="topten-number movie-poster-hl text-7xl lg:text-9xl font-extrabold">1</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="topten-item">
              <Link to="/moviedetail"><img src="/image/tv-show/02.webp" alt="" className="topten-image"/></Link>
              <div className="topten-number movie-poster-hl text-7xl lg:text-9xl font-extrabold">2</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="topten-item">
              <Link to="/moviedetail"><img src="/image/tv-show/03.webp" alt="" className="topten-image"/></Link>
              <div className="topten-number movie-poster-hl text-7xl lg:text-9xl font-extrabold">3</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="topten-item">
              <Link to="/moviedetail"><img src="/image/tv-show/04.webp" alt="" className="topten-image"/></Link>
              <div className="topten-number movie-poster-hl text-7xl lg:text-9xl font-extrabold">4</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="topten-item">
              <Link to="/moviedetail"><img src="/image/tv-show/05.webp" alt="" className="topten-image"/></Link>
              <div className="topten-number movie-poster-hl text-7xl lg:text-9xl font-extrabold">5</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="topten-item">
              <Link to="/moviedetail"><img src="/image/tv-show/06.webp" alt="" className="topten-image"/></Link>
              <div className="topten-number movie-poster-hl text-7xl lg:text-9xl font-extrabold">6</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="topten-item">
              <Link to="/moviedetail"><img src="/image/tv-show/07.webp" alt="" className="topten-image"/></Link>
              <div className="topten-number movie-poster-hl text-7xl lg:text-9xl font-extrabold">7</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="topten-item">
              <Link to="/moviedetail"><img src="/image/tv-show/08.webp" alt="" className="topten-image"/></Link>
              <div className="topten-number movie-poster-hl text-7xl lg:text-9xl font-extrabold">8</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="topten-item">
              <Link to="/moviedetail"><img src="/image/tv-show/09.webp" alt="" className="topten-image"/></Link>
              <div className="topten-number movie-poster-hl text-7xl lg:text-9xl font-extrabold">9</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="topten-item">
              <Link to="/moviedetail"><img src="/image/tv-show/10.webp" alt="" className="topten-image"/></Link>
              <div className="topten-number movie-poster-hl text-7xl lg:text-9xl font-extrabold">10</div>
            </div>
          </SwiperSlide>
          <div className="navigation_">
            <div className="swiper-button-prev hover-bg-red"><FontAwesomeIcon icon={faChevronLeft} style={{color: "#fafafa",}} /></div>
            <div className="swiper-button-next hover-bg-red"><FontAwesomeIcon icon={faChevronRight} style={{color: "#fafafa",}} /></div>
        </div>
        </Swiper>
      </section>
      {/* section 4 Only On Streamit */}
      <section className="section-4 relative text-white font-light mx-auto mt-16 w-11/12">
        <h2 className="text-xl md:text-2xl mb-7 flex justify-between"><span>Only On Streamit</span><span className="netflix text-lg cursor-pointer">View All</span></h2>
        <Swiper
          modules={[Navigation]}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          className='h-full'
        >
          <SwiperSlide>
          <div className=" card-item only-onstream-item">
              <Link to="/moviedetail"><div className="only-on-stream-image bg-[url('/image/movie/related/05.webp')] lg:hidden"></div></Link>
              <div className="only-on-stream-card hidden p-3 lg:flex lg:flex-col">
                <Link to="/moviedetail"><img src="/image/movie/related/05.webp" alt="" className="only-image"/></Link>
                <div className="only-on-stream-content py-1">
                  <h2 className="font-medium text-sm">Avengers <span className="pl-3 text-xs font-thin">+Watchlist</span></h2>
                  <p className="text-xs">1hr 45mins</p>
                </div>
                <div className="only-on-stream-icon flex items-center gap-2 absolute z-10">
                  <div className="web-nav-home share-icon hover-bg-red rounded-full bg-stone-800 z-20"><FontAwesomeIcon icon={faShareNodes} className='p-2 pb-1'/></div>
                  <div className="home-hover share-hover hidden bg-stone-800 absolute w-8 h-28 bottom-7 pb-4 left-0 items-center gap-2 z-10">
                    <FontAwesomeIcon icon={faFacebook}  className='p-2'/>
                    <FontAwesomeIcon icon={faTwitter} className='p-2'/>
                    <FontAwesomeIcon icon={faLink} className='pl-1'/>
                  </div>
                  <div className="heart-icon hover-bg-red rounded-full bg-stone-800 z-20">
                  <FontAwesomeIcon icon={faHeart} className='p-2 pb-1'/><div className="heart-hover bg-stone-800 flex flex-col absolute bottom-9 left-10 items-center p-1 gap-2 z-10 text-sm">+55</div>
                  </div>
                </div>
                <Link to="/moviedetail"><div id="only-on-stream-button" className="sub-but w-10 h-10 2xl:w-12 2xl:h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-full"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text"><FontAwesomeIcon icon={faCaretRight} size='lg' /></span></div></Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=" card-item only-onstream-item">
              <Link to="/moviedetail"><div className="only-on-stream-image bg-[url('/image/movie/related/04.webp')] lg:hidden"></div></Link>
              <div className="only-on-stream-card hidden p-3 lg:flex lg:flex-col">
                <Link to="/moviedetail"><img src="/image/movie/related/04.webp" alt="" className="only-image"/></Link>
                <div className="only-on-stream-content py-1">
                  <h2 className="font-medium text-sm">Avengers <span className="pl-3 text-xs font-thin">+Watchlist</span></h2>
                  <p className="text-xs">1hr 45mins</p>
                </div>
                <div className="only-on-stream-icon flex items-center gap-2 absolute z-10">
                  <div className="web-nav-home share-icon hover-bg-red rounded-full bg-stone-800 z-20"><FontAwesomeIcon icon={faShareNodes} className='p-2 pb-1'/></div>
                  <div className="home-hover share-hover hidden bg-stone-800 absolute w-8 h-28 bottom-7 pb-4 left-0 items-center gap-2 z-10">
                    <FontAwesomeIcon icon={faFacebook}  className='p-2'/>
                    <FontAwesomeIcon icon={faTwitter} className='p-2'/>
                    <FontAwesomeIcon icon={faLink} className='pl-1'/>
                  </div>
                  <div className="heart-icon hover-bg-red rounded-full bg-stone-800 z-20">
                  <FontAwesomeIcon icon={faHeart} className='p-2 pb-1'/><div className="heart-hover bg-stone-800 flex flex-col absolute bottom-9 left-10 items-center p-1 gap-2 z-10 text-sm">+55</div>
                  </div>
                </div>
                <Link to="/moviedetail"><div id="only-on-stream-button" className="sub-but w-10 h-10 2xl:w-12 2xl:h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-full"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text"><FontAwesomeIcon icon={faCaretRight} size='lg' /></span></div></Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=" card-item only-onstream-item">
              <Link to="/moviedetail"><div className="only-on-stream-image bg-[url('/image/movie/related/03.webp')] lg:hidden"></div></Link>
              <div className="only-on-stream-card hidden p-3 lg:flex lg:flex-col">
                <Link to="/moviedetail"><img src="/image/movie/related/03.webp" alt="" className="only-image"/></Link>
                <div className="only-on-stream-content py-1">
                  <h2 className="font-medium text-sm">Avengers <span className="pl-3 text-xs font-thin">+Watchlist</span></h2>
                  <p className="text-xs">1hr 45mins</p>
                </div>
                <div className="only-on-stream-icon flex items-center gap-2 absolute z-10">
                  <div className="web-nav-home share-icon hover-bg-red rounded-full bg-stone-800 z-20"><FontAwesomeIcon icon={faShareNodes} className='p-2 pb-1'/></div>
                  <div className="home-hover share-hover hidden bg-stone-800 absolute w-8 h-28 bottom-7 pb-4 left-0 items-center gap-2 z-10">
                    <FontAwesomeIcon icon={faFacebook}  className='p-2'/>
                    <FontAwesomeIcon icon={faTwitter} className='p-2'/>
                    <FontAwesomeIcon icon={faLink} className='pl-1'/>
                  </div>
                  <div className="heart-icon hover-bg-red rounded-full bg-stone-800 z-20">
                  <FontAwesomeIcon icon={faHeart} className='p-2 pb-1'/><div className="heart-hover bg-stone-800 flex flex-col absolute bottom-9 left-10 items-center p-1 gap-2 z-10 text-sm">+55</div>
                  </div>
                </div>
                <Link to="/moviedetail"><div id="only-on-stream-button" className="sub-but w-10 h-10 2xl:w-12 2xl:h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-full"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text"><FontAwesomeIcon icon={faCaretRight} size='lg' /></span></div></Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=" card-item only-onstream-item">
              <Link to="/moviedetail"><div className="only-on-stream-image bg-[url('/image/movie/related/02.webp')] lg:hidden"></div></Link>
              <div className="only-on-stream-card hidden p-3 lg:flex lg:flex-col">
                <Link to="/moviedetail"><img src="/image/movie/related/02.webp" alt="" className="only-image"/></Link>
                <div className="only-on-stream-content py-1">
                  <h2 className="font-medium text-sm">Avengers <span className="pl-3 text-xs font-thin">+Watchlist</span></h2>
                  <p className="text-xs">1hr 45mins</p>
                </div>
                <div className="only-on-stream-icon flex items-center gap-2 absolute z-10">
                  <div className="web-nav-home share-icon hover-bg-red rounded-full bg-stone-800 z-20"><FontAwesomeIcon icon={faShareNodes} className='p-2 pb-1'/></div>
                  <div className="home-hover share-hover hidden bg-stone-800 absolute w-8 h-28 bottom-7 pb-4 left-0 items-center gap-2 z-10">
                    <FontAwesomeIcon icon={faFacebook}  className='p-2'/>
                    <FontAwesomeIcon icon={faTwitter} className='p-2'/>
                    <FontAwesomeIcon icon={faLink} className='pl-1'/>
                  </div>
                  <div className="heart-icon hover-bg-red rounded-full bg-stone-800 z-20">
                  <FontAwesomeIcon icon={faHeart} className='p-2 pb-1'/><div className="heart-hover bg-stone-800 flex flex-col absolute bottom-9 left-10 items-center p-1 gap-2 z-10 text-sm">+55</div>
                  </div>
                </div>
                <Link to="/moviedetail"><div id="only-on-stream-button" className="sub-but w-10 h-10 2xl:w-12 2xl:h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-full"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text"><FontAwesomeIcon icon={faCaretRight} size='lg' /></span></div></Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=" card-item only-onstream-item">
              <Link to="/moviedetail"><div className="only-on-stream-image bg-[url('/image/movie/related/01.webp')] lg:hidden"></div></Link>
              <div className="only-on-stream-card hidden p-3 lg:flex lg:flex-col">
                <Link to="/moviedetail"><img src="/image/movie/related/01.webp" alt="" className="only-image"/></Link>
                <div className="only-on-stream-content py-1">
                  <h2 className="font-medium text-sm">Avengers <span className="pl-3 text-xs font-thin">+Watchlist</span></h2>
                  <p className="text-xs">1hr 45mins</p>
                </div>
                <div className="only-on-stream-icon flex items-center gap-2 absolute z-10">
                  <div className="web-nav-home share-icon hover-bg-red rounded-full bg-stone-800 z-20"><FontAwesomeIcon icon={faShareNodes} className='p-2 pb-1'/></div>
                  <div className="home-hover share-hover hidden bg-stone-800 absolute w-8 h-28 bottom-7 pb-4 left-0 items-center gap-2 z-10">
                    <FontAwesomeIcon icon={faFacebook}  className='p-2'/>
                    <FontAwesomeIcon icon={faTwitter} className='p-2'/>
                    <FontAwesomeIcon icon={faLink} className='pl-1'/>
                  </div>
                  <div className="heart-icon hover-bg-red rounded-full bg-stone-800 z-20">
                  <FontAwesomeIcon icon={faHeart} className='p-2 pb-1'/><div className="heart-hover bg-stone-800 flex flex-col absolute bottom-9 left-10 items-center p-1 gap-2 z-10 text-sm">+55</div>
                  </div>
                </div>
                <Link to="/moviedetail"><div id="only-on-stream-button" className="sub-but w-10 h-10 2xl:w-12 2xl:h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-full"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text"><FontAwesomeIcon icon={faCaretRight} size='lg' /></span></div></Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=" card-item only-onstream-item">
              <Link to="/moviedetail"><div className="only-on-stream-image bg-[url('/image/movie/related/06.webp')] lg:hidden"></div></Link>
              <div className="only-on-stream-card hidden p-3 lg:flex lg:flex-col">
                <Link to="/moviedetail"><img src="/image/movie/related/06.webp" alt="" className="only-image"/></Link>
                <div className="only-on-stream-content py-1">
                  <h2 className="font-medium text-sm">Avengers <span className="pl-3 text-xs font-thin">+Watchlist</span></h2>
                  <p className="text-xs">1hr 45mins</p>
                </div>
                <div className="only-on-stream-icon flex items-center gap-2 absolute z-10">
                  <div className="web-nav-home share-icon hover-bg-red rounded-full bg-stone-800 z-20"><FontAwesomeIcon icon={faShareNodes} className='p-2 pb-1'/></div>
                  <div className="home-hover share-hover hidden bg-stone-800 absolute w-8 h-28 bottom-7 pb-4 left-0 items-center gap-2 z-10">
                    <FontAwesomeIcon icon={faFacebook}  className='p-2'/>
                    <FontAwesomeIcon icon={faTwitter} className='p-2'/>
                    <FontAwesomeIcon icon={faLink} className='pl-1'/>
                  </div>
                  <div className="heart-icon hover-bg-red rounded-full bg-stone-800 z-20">
                  <FontAwesomeIcon icon={faHeart} className='p-2 pb-1'/><div className="heart-hover bg-stone-800 flex flex-col absolute bottom-9 left-10 items-center p-1 gap-2 z-10 text-sm">+55</div>
                  </div>
                </div>
                <Link to="/moviedetail"><div id="only-on-stream-button" className="sub-but w-10 h-10 2xl:w-12 2xl:h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-full"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text"><FontAwesomeIcon icon={faCaretRight} size='lg' /></span></div></Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=" card-item only-onstream-item">
              <Link to="/moviedetail"><div className="only-on-stream-image bg-[url('/image/movie/related/07.webp')] lg:hidden"></div></Link>
              <div className="only-on-stream-card hidden p-3 lg:flex lg:flex-col">
                <Link to="/moviedetail"><img src="/image/movie/related/07.webp" alt="" className="only-image"/></Link>
                <div className="only-on-stream-content py-1">
                  <h2 className="font-medium text-sm">Avengers <span className="pl-3 text-xs font-thin">+Watchlist</span></h2>
                  <p className="text-xs">1hr 45mins</p>
                </div>
                <div className="only-on-stream-icon flex items-center gap-2 absolute z-10">
                  <div className="web-nav-home share-icon hover-bg-red rounded-full bg-stone-800 z-20"><FontAwesomeIcon icon={faShareNodes} className='p-2 pb-1'/></div>
                  <div className="home-hover share-hover hidden bg-stone-800 absolute w-8 h-28 bottom-7 pb-4 left-0 items-center gap-2 z-10">
                    <FontAwesomeIcon icon={faFacebook}  className='p-2'/>
                    <FontAwesomeIcon icon={faTwitter} className='p-2'/>
                    <FontAwesomeIcon icon={faLink} className='pl-1'/>
                  </div>
                  <div className="heart-icon hover-bg-red rounded-full bg-stone-800 z-20">
                  <FontAwesomeIcon icon={faHeart} className='p-2 pb-1'/><div className="heart-hover bg-stone-800 flex flex-col absolute bottom-9 left-10 items-center p-1 gap-2 z-10 text-sm">+55</div>
                  </div>
                </div>
                <Link to="/moviedetail"><div id="only-on-stream-button" className="sub-but w-10 h-10 2xl:w-12 2xl:h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-full"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text"><FontAwesomeIcon icon={faCaretRight} size='lg' /></span></div></Link>
              </div>
            </div>
          </SwiperSlide>
          <div className="navigation_">
            <div className="swiper-button-prev hover-bg-red"><FontAwesomeIcon icon={faChevronLeft} style={{color: "#fafafa",}} /></div>
            <div className="swiper-button-next hover-bg-red"><FontAwesomeIcon icon={faChevronRight} style={{color: "#fafafa",}} /></div>
        </div>
        </Swiper>
      </section>
      {/* section 5  */}
    </main>
  )
}
export default OTThome
