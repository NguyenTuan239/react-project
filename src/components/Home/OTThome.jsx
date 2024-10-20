import React, { useState, useRef, useEffect, useContext } from 'react';
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
import OnlyOnStreamit from './OnlyOnStream/OnlyOnStreamit';
import ContinueWatching from './OnlyOnStream/ContinueWatching';
import VerticalSlide from './OnlyOnStream/VerticalSlide';

export const OTThome = () => {
  const castData = [
    { id: 1, src: "/image/cast/01.webp", name: "John Abraham", role: "Actress" },
    { id: 2, src: "/image/cast/02.webp", name: "Leena Burton", role: "Actor" },
    { id: 3, src: "/image/cast/03.webp", name: "Lorina Williams", role: "Actor" },
    { id: 4, src: "/image/cast/04.webp", name: "Davina Decorous", role: "Actress" },
    { id: 5, src: "/image/cast/05.webp", name: "Thomas Bailey", role: "Productor" },
    { id: 6, src: "/image/cast/06.webp", name: "Kelly Reilly", role: "Director" },
    { id: 7, src: "/image/cast/07.webp", name: "Smith Jonas", role: "Cameraman" },
    { id: 8, src: "/image/cast/08.webp", name: "Angel Luis", role: "Actor" },
    { id: 9, src: "/image/cast/09.webp", name: "Ammy Sedaris", role: "Productor" },
    { id: 10, src: "/image/cast/10.webp", name: "John Reilly", role: "Actor" },
    { id: 11, src: "/image/cast/11.webp", name: "Thomas Bailey", role: "Actress" },
  ];

  const [activeSeason, setActiveSeason] = useState(1);
  const handleSeasonClick = (season) => {
    if (season !== activeSeason) {
      setActiveSeason(season); // Only update if the season is different
    }
  };

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
              <div className='otthome-sec1-bg '>
                <div className="otthome-sec1-img-wrapper">
                  <img src="/image/movie/ott1.webp" alt="Slide 1" className="otthome-sec1-img" />
                </div>
                <div className="moviePoster text-gray-300 p-3">
                  <div className="moviePoster-content1 flex items-center font-bold pb-3">
                    <span className="bg-white text-xs  px-4 py-2 text-black">PG</span>
                    <span className="text-muted ml-4"><Link className="transition-all duration-500 ease-in-out hover-red">Adventure</Link><span className="netflix mx-2">•</span><Link className="transition-all duration-500 ease-in-out hover-red">Thriller</Link><span className="netflix mx-2">•</span><Link className="transition-all duration-500 ease-in-out hover-red">Drama</Link></span>
                  </div>
                  <h2 className="moviePoster-content2 movie-poster-hl text-3xl font-bold mt-2 tracking-widest md:text-6xl lg:text-7xl">The Hunter</h2>
                  <p className="moviePoster-content3 mt-1 clamped-text">
                  After the death of their father, two siblings fight for the throne, thereby causing a civil war known as the Dance of the Dragons. Rhaenyra tries to hold the realm together as the tension
                  rises following a tragic loss. Meanwhile, Daemon prepares for war.
                  </p>
                  <div className="moviePoster-content4 flex items-center mt-4 flex-wrap">
                    <span className="font-medium text-white mr-4 text-nowrap">⭐ 4.3/5</span>
                    <span><img src="/image/movie/imdb-logo.svg" alt="" className="h-14 w-auto"/></span>
                    <span className="ml-4 text-nowrap">2hr 6mins</span>
                    <span className="netflix ml-4 text-nowrap">Genres:<Link className="transition-all duration-500 ease-in-out hover-red text-slate-200">Drama</Link></span>
                    <span className="netflix ml-4 text-nowrap">Starting: <Link className="transition-all duration-500 ease-in-out hover-red text-slate-200">Jeffrey Silver</Link></span>
                  </div>
                  <div className='relative h-10 w-40 mb-8 moviePoster-content5'>
                    <Link to="/moviedetail"><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">stram now<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
                  </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='otthome-sec1-bg '>
                <div className="otthome-sec1-img-wrapper">
                  <img src="/image/movie/ott2.webp" alt="Slide 1" className="otthome-sec1-img" />
                </div>
                <div className="moviePoster text-gray-300 p-3">
                  <div className="moviePoster-content1 flex items-center font-bold pb-3">
                    <span className="bg-white text-xs  px-4 py-2 text-black">NC-17</span>
                    <span className="text-muted ml-4"><Link className="transition-all duration-500 ease-in-out hover-red">Animation</Link><span className="netflix mx-2">•</span><Link className="transition-all duration-500 ease-in-out hover-red">Sci-Fi</Link><span className="netflix mx-2">•</span><Link className="transition-all duration-500 ease-in-out hover-red">Action</Link></span>
                  </div>
                  <h2 className="moviePoster-content2 movie-poster-hl text-3xl font-bold mt-2 tracking-widest md:text-6xl lg:text-7xl">The Mandalorian</h2>
                  <p className="moviePoster-content3 mt-1 clamped-text">
                  After the fall of the Galactic Empire, a lone gunfighter makes his way through the outer reaches of the lawless galaxy. The show follows the adventures of a lone Mandalorian bounty hunter, Din Djarin, as he navigates the outer reaches of...
                  </p>
                  <div className="moviePoster-content4 flex items-center mt-4 flex-wrap">
                    <span className="font-medium text-white mr-4 text-nowrap">⭐ 4.3/5</span>
                    <span><img src="/image/movie/imdb-logo.svg" alt="" className="h-14 w-auto"/></span>
                    <span className="ml-4 text-nowrap">2hr 26mins</span>
                    <span className="netflix ml-4 text-nowrap">Genres:<Link className="transition-all duration-500 ease-in-out hover-red text-slate-200">Sci-Fi</Link></span>
                    <span className="netflix ml-4 text-nowrap">Starting: <Link className="transition-all duration-500 ease-in-out hover-red text-slate-200">James Chinlund</Link></span>
                  </div>
                  <div className='relative h-10 w-40 mb-8 moviePoster-content5'>
                    <Link to="/moviedetail"><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">stram now<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
                  </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='otthome-sec1-bg '>
                <div className="otthome-sec1-img-wrapper">
                  <img src="/image/movie/ott3.webp" alt="Slide 1" className="otthome-sec1-img" />
                </div>
                <div className="moviePoster text-gray-300 p-3">
                  <div className="moviePoster-content1 flex items-center font-bold pb-3">
                    <span className="bg-white text-xs  px-4 py-2 text-black">PG</span>
                    <span className="text-muted ml-4"><Link className="transition-all duration-500 ease-in-out hover-red">History</Link><span className="netflix mx-2">•</span><Link className="transition-all duration-500 ease-in-out hover-red">Thriller</Link><span className="netflix mx-2">•</span><Link className="transition-all duration-500 ease-in-out hover-red">Drama</Link></span>
                  </div>
                  <h2 className="moviePoster-content2 movie-poster-hl text-3xl font-bold mt-2 tracking-widest md:text-6xl lg:text-7xl">Better Call Saul</h2>
                  <p className="moviePoster-content3 mt-1 clamped-text">
                  After the fall of the Galactic Empire, a lone gunfighter makes his way through the outer reaches of the lawless galaxy. The show follows the adventures of a lone Mandalorian bounty hunter, Din Djarin, as he navigates the outer reaches of...
                  </p>
                  <div className="moviePoster-content4 flex items-center mt-4 flex-wrap">
                    <span className="font-medium text-white mr-4 text-nowrap">⭐ 4.3/5</span>
                    <span><img src="/image/movie/imdb-logo.svg" alt="" className="h-14 w-auto"/></span>
                    <span className="ml-4 text-nowrap">2hr 6mins</span>
                    <span className="netflix ml-4 text-nowrap">Genres:<Link className="transition-all duration-500 ease-in-out hover-red text-slate-200">Drama</Link></span>
                    <span className="netflix ml-4 text-nowrap">Starting: <Link className="transition-all duration-500 ease-in-out hover-red text-slate-200">Jeffrey Silver</Link></span>
                  </div>
                  <div className='relative h-10 w-40 mb-8 moviePoster-content5'>
                    <Link to="/moviedetail"><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">stram now<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
                  </div>
                </div>
              </div>
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
            <div className="item2 bg-[url('/image/movie/ott1.webp')]">
                <div className="poster-card-des">
                  <p className="font-medium text-white">The Hunter</p>
                  <p className="font-light text-sm text-white">2hr 6 minute</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="item2 bg-[url('/image/movie/ott2.webp')]">
                <div className="poster-card-des">
                  <p className="font-medium text-white">The Mandalorian</p>
                  <p className="font-light text-sm text-white">2hr 14 minute</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="item2 bg-[url('/image/movie/ott3.webp')]">
                <div className="poster-card-des">
                  <p className="font-medium text-white">Better call saul</p>
                  <p className="font-light text-sm text-white">2hr 55 minute</p>
                </div>
              </div>
            </SwiperSlide>
            <div className="prev-button hover-bg-red"><FontAwesomeIcon icon={faChevronLeft} style={{color: "#fafafa",}} /></div>
            <div className="next-button hover-bg-red"><FontAwesomeIcon icon={faChevronRight} style={{color: "#fafafa",}} /></div>
          </Swiper>
        </div>
      </section>
      {/* section 2 Continue Watching */}
      <ContinueWatching
        title='Continue Watching'
        imgLink={[
          '/image/continue-watch/01.webp',
          '/image/continue-watch/02.webp',
          '/image/continue-watch/03.webp',
          '/image/continue-watch/04.webp',
          '/image/continue-watch/05.webp',
          '/image/continue-watch/06.webp',
        ]}
        />
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
      <OnlyOnStreamit
        title='Only On Streamit'
        imgLink={['/image/movie/related/05.webp',
          '/image/movie/related/04.webp',
          '/image/movie/related/03.webp',
          '/image/movie/related/02.webp',
          '/image/movie/related/01.webp',
          '/image/movie/related/06.webp',
          '/image/movie/related/07.webp',
        ]}
        />
      {/* section 5  */}
      <VerticalSlide
        imgLink={[
          '/image/top-10/01.webp',
          '/image/top-10/02.webp',
          '/image/top-10/03.webp',
          '/image/top-10/04.webp',
          '/image/top-10/05.webp',
        ]}
        />
      {/* section 6 Your Favourite Personnality */}
      <section className="section-6 relative text-white font-light mx-auto py-16 w-11/12">
        <h2 className="text-xl md:text-2xl mb-10 mt-2 flex justify-between"><span>Your Favourite Personnality</span><span className="netflix text-lg cursor-pointer">View All</span></h2>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 25 },
            1024: { slidesPerView: 9, spaceBetween: 20 },
          }}
        >
           {castData.map(({ id, src, name, role }) => (
          <SwiperSlide key={id}>
            <div className="text-center">
              <img src={src} alt={name} className="sec6-image" />
              <p className="font-normal text-sm pt-3">{name}</p>
              <p className="text-sm">{role}</p>
            </div>
          </SwiperSlide>
        ))}
          <div className="navigation_">
            <div className="swiper-button-prev hover-bg-red"><FontAwesomeIcon icon={faChevronLeft} style={{color: "#fafafa",}} /></div>
            <div className="swiper-button-next hover-bg-red"><FontAwesomeIcon icon={faChevronRight} style={{color: "#fafafa",}} /></div>
          </div>
        </Swiper>
      </section>
      {/* section 7 Popular Movies */}
      <OnlyOnStreamit
        title='Popular Movies'
        imgLink={[
          '/image/movie/popular/01.webp',
          '/image/movie/popular/02.webp',
          '/image/movie/popular/03.webp',
          '/image/movie/popular/04.webp',
          '/image/movie/popular/05.webp',
          '/image/movie/popular/06.webp',
          '/image/movie/popular/07.webp',
        ]}
      />
      {/* section 8 */}
      <section className="section-8 relative w-full h-auto text-white font-light">
        <Swiper
          loop={true}
          speed={600}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          modules={[EffectFade, Navigation]}
          className=""
        >
          <SwiperSlide>
            <div className="sec5-bg bg-[url('/image/tab-slider/01.webp')]">
              <div className="sec8-Poster text-gray-300 p-3 z-10">
                <p className="font-medium text-white mr-4 text-nowrap flex justify-start items-center"><img src="/image/movie/trending-label.webp" style={{width: '5rem', height: '5rem'}}/><span className="netflix ml-4">#4</span>&nbsp; in Series Today</p>
                <h2 className="my-4 text-3xl font-medium movie-poster-hl">The Hunter</h2>
                <p className="sec5-content mt-1 text-sm">
                  After the death of their father, two siblings fight for the throne, thereby causing a civil war known as the Dance of the Dragons. Rhaenyra tries to hold the realm together as the tension
                  rises following a tragic loss. Meanwhile, Daemon prepares for war.
                </p>
                <div className="moviePoster-content1 flex items-center font-bold pb-3 my-4">
                  <span className="text-muted">Nov 2022<span className="netflix mx-4">•</span>Seasion 1</span>
                </div>
                <div className='relative h-10 w-40 mb-8 moviePoster-content5'>
                    <Link to="/moviedetail"><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">stram now<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
                  </div>
              </div>
              <div className="sec8-espisode text-white font-light">
                <p className="font-medium text-xl mt-8 ml-8 mb-2">All Episode</p>
                <p className="ml-8 text-base">
                  <button onClick={() => handleSeasonClick(1)}
                    className={`${activeSeason === 1 ? 'netflix' : ''}`}>
                    Season 1
                  </button>
                  <button onClick={() => handleSeasonClick(2)}
                    className={`${activeSeason === 2 ? 'netflix' : ''} mx-5`}>
                    Season 2
                  </button>
                  <button onClick={() => handleSeasonClick(3)}
                    className={`${activeSeason === 3 ? 'netflix' : ''}`}>
                    Season 3
                  </button>
                </p>
                <hr className="my-3 w-full border-slate-800"/>
                <ul className={`${activeSeason === 1 ? '' : 'hidden'} otthome-sec8-content ml-3`}>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/01.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E1</span> - Fire And Blood</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/02.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E2</span> - The Pointy End</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/03.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E3</span> - You Win Or You Die</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/04.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E4</span> - The Black Queen</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                </ul>
                <ul className={`${activeSeason === 2 ? '' : 'hidden'} otthome-sec8-content ml-3`}>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/05.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E1</span> - Valar Morghulis</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/06.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E2</span> - Black Water</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/07.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E3</span> - The Ghost Of Harrenhal</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/08.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E4</span> - Garden Of Bones</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                </ul>
                <ul className={`${activeSeason === 3 ? '' : 'hidden'} otthome-sec8-content ml-3`}>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/09.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E1</span> - Mhysa</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/10.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E2</span> - Secon Sons</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/11.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E3</span> - The Climb</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/12.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E4</span> - Kissed by Fire</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="sec5-bg bg-[url('/image/tab-slider/02.webp')]">
              <div className="sec8-Poster text-gray-300 p-3 z-10">
                <p className="font-medium text-white mr-4 text-nowrap flex justify-start items-center"><img src="/image/movie/trending-label.webp" style={{width: '5rem', height: '5rem'}}/><span className="netflix ml-4">#4</span>&nbsp; in Series Today</p>
                <h2 className="my-4 text-3xl font-medium movie-poster-hl">Pirates Of Dayones</h2>
                <p className="sec5-content mt-1 text-sm">
                  After the death of their father, two siblings fight for the throne, thereby causing a civil war known as the Dance of the Dragons. Rhaenyra tries to hold the realm together as the tension
                  rises following a tragic loss. Meanwhile, Daemon prepares for war.
                </p>
                <div className="moviePoster-content1 flex items-center font-bold pb-3 my-4">
                  <span className="text-muted">Nov 2022<span className="netflix mx-4">•</span>Seasion 1</span>
                </div>
                <div className='relative h-10 w-40 mb-8 moviePoster-content5'>
                    <Link to="/moviedetail"><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">stram now<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
                  </div>
              </div>
              <div className="sec8-espisode text-white font-light">
                <p className="font-medium text-xl mt-8 ml-8 mb-2">All Episode</p>
                <p className="ml-8 text-base">
                  <button onClick={() => handleSeasonClick(1)}
                    className={`${activeSeason === 1 ? 'netflix' : ''}`}>
                    Season 1
                  </button>
                  <button onClick={() => handleSeasonClick(2)}
                    className={`${activeSeason === 2 ? 'netflix' : ''} mx-5`}>
                    Season 2
                  </button>
                  <button onClick={() => handleSeasonClick(3)}
                    className={`${activeSeason === 3 ? 'netflix' : ''}`}>
                    Season 3
                  </button>
                </p>
                <hr className="my-3 w-full border-slate-800"/>
                <ul className={`${activeSeason === 1 ? '' : 'hidden'} otthome-sec8-content ml-3`}>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/13.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E1</span> - The Curse</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/14.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E2</span> - Dead Man Chest</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/15.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E3</span> - At World</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/16.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E4</span> - On Strange</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                </ul>
                <ul className={`${activeSeason === 2 ? '' : 'hidden'} otthome-sec8-content ml-3`}>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/17.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E1</span> - Valar Morghulis</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/18.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E2</span> - Black Water</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/19.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E3</span> - The Ghost Of Harrenhal</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/20.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E4</span> - Garden Of Bones</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                </ul>
                <ul className={`${activeSeason === 3 ? '' : 'hidden'} otthome-sec8-content ml-3`}>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/21.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E1</span> - Tell No Table</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/22.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E2</span> - The Priate</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/23.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E3</span> - Eat At Bara</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/24.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E4</span> - The Chef</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="sec5-bg bg-[url('/image/tab-slider/03.webp')]">
              <div className="sec8-Poster text-gray-300 p-3 z-10">
                <p className="font-medium text-white mr-4 text-nowrap flex justify-start items-center"><img src="/image/movie/trending-label.webp" style={{width: '5rem', height: '5rem'}}/><span className="netflix ml-4">#4</span>&nbsp; in Series Today</p>
                <h2 className="my-4 text-3xl font-medium movie-poster-hl">Peaky Blinders</h2>
                <p className="sec5-content mt-1 text-sm">
                  After the death of their father, two siblings fight for the throne, thereby causing a civil war known as the Dance of the Dragons. Rhaenyra tries to hold the realm together as the tension
                  rises following a tragic loss. Meanwhile, Daemon prepares for war.
                </p>
                <div className="moviePoster-content1 flex items-center font-bold pb-3 my-4">
                  <span className="text-muted">Nov 2022<span className="netflix mx-4">•</span>Seasion 1</span>
                </div>
                <div className='relative h-10 w-40 mb-8 moviePoster-content5'>
                    <Link to="/moviedetail"><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">stram now<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
                  </div>
              </div>
              <div className="sec8-espisode text-white font-light">
                <p className="font-medium text-xl mt-8 ml-8 mb-2">All Episode</p>
                <p className="ml-8 text-base">
                  <button onClick={() => handleSeasonClick(1)}
                    className={`${activeSeason === 1 ? 'netflix' : ''}`}>
                    Season 1
                  </button>
                  <button onClick={() => handleSeasonClick(2)}
                    className={`${activeSeason === 2 ? 'netflix' : ''} mx-5`}>
                    Season 2
                  </button>
                  <button onClick={() => handleSeasonClick(3)}
                    className={`${activeSeason === 3 ? 'netflix' : ''}`}>
                    Season 3
                  </button>
                </p>
                <hr className="my-3 w-full border-slate-800"/>
                <ul className={`${activeSeason === 1 ? '' : 'hidden'} otthome-sec8-content ml-3`}>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/25.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E1</span> - The Curse</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/26.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E2</span> - Dead Man Chest</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/27.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E3</span> - At World</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/28.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E4</span> - On Strange</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                </ul>
                <ul className={`${activeSeason === 2 ? '' : 'hidden'} otthome-sec8-content ml-3`}>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/29.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E1</span> - Valar Morghulis</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/30.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E2</span> - Black Water</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/31.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E3</span> - The Ghost Of Harrenhal</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/32.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E4</span> - Garden Of Bones</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                </ul>
                <ul className={`${activeSeason === 3 ? '' : 'hidden'} otthome-sec8-content ml-3`}>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/33.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E1</span> - Tell No Table</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/34.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E2</span> - The Priate</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/35.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E3</span> - Eat At Bara</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 mb-4">
                    <div className="sec8-tvshow"><img src="/image/tv-show/31.webp" alt="" className="sec8-tvshow-img"/></div>
                    <div>
                      <p className="text-base font-normal"><span className="netflix">E4</span> - The Chef</p>
                      <p className="text-sm">45 minute</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <div className="pagination_sec8">
            <div className="swiper-button-prev hover-bg-red"><FontAwesomeIcon icon={faChevronLeft} style={{color: "#fafafa",}} /></div>
            <div className="swiper-button-next hover-bg-red"><FontAwesomeIcon icon={faChevronRight} style={{color: "#fafafa",}} /></div>
          </div>
        </Swiper>
      </section>
      {/* section 9 */}
      <section className="section-10 relative text-white font-light mx-auto mt-16 w-11/12">
        <h2 className="text-xl md:text-2xl mb-7 flex justify-between"><span>Movie Geners</span><span className="netflix text-lg cursor-pointer">View All</span></h2>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
          }}
        >
          <SwiperSlide>
            <div className="only-onstream-item w-full">
              <div className="sec9-image bg-[url('/image/genre/01.webp')]">
                <p className="font-normal text-xl">Action</p>
                <div className="sec9-underline netflix-bg"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="only-onstream-item w-full">
              <div className="sec9-image bg-[url('/image/genre/02.webp')]">
                <p className="font-normal text-xl">Adventure</p>
                <div className="sec9-underline netflix-bg"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="only-onstream-item w-full">
              <div className="sec9-image bg-[url('/image/genre/03.webp')]">
                <p className="font-normal text-xl">Animation</p>
                <div className="sec9-underline netflix-bg"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="only-onstream-item w-full">
              <div className="sec9-image bg-[url('/image/genre/04.webp')]">
                <p className="font-normal text-xl">Crime</p>
                <div className="sec9-underline netflix-bg"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="only-onstream-item w-full">
              <div className="sec9-image bg-[url('/image/genre/05.webp')]">
                <p className="font-normal text-xl">Horror</p>
                <div className="sec9-underline netflix-bg"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="only-onstream-item w-full">
              <div className="sec9-image bg-[url('/image/genre/06.webp')]">
                <p className="font-normal text-xl">Mystery</p>
                <div className="sec9-underline netflix-bg"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="only-onstream-item w-full">
              <div className="sec9-image bg-[url('/image/genre/07.webp')]">
                <p className="font-normal text-xl">Romance</p>
                <div className="sec9-underline netflix-bg"></div>
              </div>
            </div>
          </SwiperSlide>
          <div className="navigation_">
            <div className="swiper-button-prev hover-bg-red"><FontAwesomeIcon icon={faChevronLeft} style={{color: "#fafafa",}} /></div>
            <div className="swiper-button-next hover-bg-red"><FontAwesomeIcon icon={faChevronRight} style={{color: "#fafafa",}} /></div>
          </div>
        </Swiper>
      </section>
      {/* section 10 */}
      <OnlyOnStreamit
        title='Recommended For You'
        imgLink={[
          '/image/movie/recommended/01.webp',
          '/image/movie/recommended/02.webp',
          '/image/movie/recommended/03.webp',
          '/image/movie/recommended/04.webp',
          '/image/movie/recommended/05.webp',
          '/image/movie/recommended/06.webp',
          '/image/movie/recommended/07.webp',
        ]}
      />
    </main>
  )
}
export default OTThome
