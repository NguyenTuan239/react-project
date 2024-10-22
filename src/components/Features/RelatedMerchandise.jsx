import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faPlay, faTags, faDownload,faStarHalf,faStar,  faPlus, faShareNodes, faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Select from 'react-select';
import OnlyOnStreamit from '../Home/OnlyOnStream/OnlyOnStreamit';

const options = [
  { value: "Playlist", label: "Playlist" },
  { value: "Zombie Island", label: "Zombie Island" },
  { value: "Sand Dust", label: "Sand Dust" },
  { value: "Jumbo Queen", label: "Jumbo Queen" },
];

const RelatedMerchandise = () => {
  const [toggleDesNav, setToggleDesNav] = useState(1);
  const [toggleCastNav, setToggleCastNav] = useState(1);

  const handleDesNavClick = (nav) => {
    if (nav !== toggleDesNav) {
      setToggleDesNav(nav)
    }
  }

  const handleCastNavClick = (nav) => {
    if (nav !== toggleCastNav) {
      setToggleCastNav(nav)
    }
  }

  const [selectedOption, setSelectedOption] = useState("Playlist");
  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <main className=" w-full bg-stone-950 text-slate-200 pt-14 md:pt-16">
      {/* section 1 Video baner  */}
      <section className="video-container">
        <video
          id="my-video"
          className="video-js detail-video"
          controls
          preload="auto"
          width="640"
          height="264"
          poster="https://i.ytimg.com/vi_webp/rKVEoyTedv4/maxresdefault.webp"
          data-setup="{}"
        >
          <source src="/react-project/image/video/sample-video.mp4" type="video/mp4" />
          <source src="/react-project/image/video/sample-video.webm" type="video/webm" />
          <p className="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a
            web browser that
            <Link to="https://videojs.com/html5-video-support/" target="_blank"
              >supports HTML5 video</Link>
          </p>
        </video>
      </section>
      {/* section 2 Video description  */}
      <section className="p-4 flex flex-col md:flex-row md:justify-between xl:px-28">
      <div>
        <h2 className="text-3xl font-semibold movie-poster-hl md:text-7xl">The DeadPool</h2>
        <div className="flex gap-4">
          <ul className="flex text-yellow-400">
            <li><FontAwesomeIcon icon={faStar} /></li>
            <li><FontAwesomeIcon icon={faStar} /></li>
            <li><FontAwesomeIcon icon={faStar} /></li>
            <li><FontAwesomeIcon icon={faStar} /></li>
            <li><FontAwesomeIcon icon={faStarHalf} /></li>
          </ul>
          <span className="text-white ms-2">4.8 (imdb)</span>
        </div>
        <ul className="my-3 flex font-medium">
          <li className="netflix"><Link className="text-primary" to="">Action&nbsp;&nbsp;•&nbsp;&nbsp;</Link></li>
          <li className="netflix"><Link className="text-primary" to="">Adventure&nbsp;&nbsp;•&nbsp;&nbsp;</Link></li>
          <li className="netflix"><Link className="text-primary" to="">Drama</Link></li>
        </ul>
        <div className="flex gap-2 mb-4">
          <span className="bg-slate-600 p-1 rounded-md text-xs text-center">Horror</span>
          <span className="">1hr 48mins</span>
          <span className="">
            Feb 2017
          </span>
        </div>
        <div className="flex items-center gap-6 flex-wrap mb-4">
          <ul className="flex gap-4">
            <li className="relative z-30">
              <div className="web-nav-home rounded-full bg-white border-4 border-gray-500 z-20 w-10 h-10 flex justify-center items-center netflix"><FontAwesomeIcon icon={faShareNodes} /></div>
              <div className="home-hover hidden bg-stone-800 absolute top-0 left-8 -z-10 w-36 h-10">
                <Link to=""><FontAwesomeIcon icon={faFacebook} className='p-3 ml-3'/></Link>
                <Link to=""><FontAwesomeIcon icon={faTwitter} className='p-3'/></Link>
                <Link to=""><FontAwesomeIcon icon={faLink} className='p-3'/></Link>
              </div>
            </li>
            <li className=" rounded-full bg-white border-4 border-gray-500 w-10 h-10 flex justify-center items-center netflix"><Link to="#"><FontAwesomeIcon icon={faHeart} /></Link></li>
            <li className=" rounded-full bg-white border-4 border-gray-500 w-10 h-10 flex justify-center items-center netflix"><Link to="#"><FontAwesomeIcon icon={faPlus} /></Link></li>
            <li className=" rounded-full bg-white border-4 border-gray-500 w-10 h-10 flex justify-center items-center netflix"><span><a href="/react-project/image/video/sample-video.mp4" download><FontAwesomeIcon icon={faDownload} /></a></span></li>
          </ul>
            <Select
              options={options}
              value={selectedOption}
              onChange={handleOptionChange}
              placeholder="PlayList"
              classNamePrefix="my-select" 
            />         
        </div>
        <ul className="flex flex-wrap items-center gap-3 p-0">
          <li className="mb-0 netflix">
          <FontAwesomeIcon icon={faTags} />
            Tags:
          </li>
          <li><Link className="hover-red" to="">Action</Link><span
              className="text-secondary">,</span></li>
          <li><Link className="hover-red" to="">Adventure</Link><span
              className="text-secondary">,</span></li>
          <li><Link className="hover-red" to="">Drama</Link></li>
        </ul>
      </div>
      <div className="mt-8 w-full h-auto md:w-4/12 md:max-w-96 lg:mr-16 xl:mr-28 2xl:mr-40">
        <Link data-fslightbox="html5-video" to="https://www.youtube.com/watch?v=QCGq1epI9pQ"
          className="relative">
          <div className="trailer-img"><img src="/react-project/image/genre/01.webp"
            className="" alt="" loading="lazy" /></div>
          <span className="trailer-link">
            <FontAwesomeIcon icon={faPlay} className='text-white'/>
            <span>Trailer Link</span>
          </span>
        </Link>
      </div>
      </section>
      <section className="p-4 xl:px-28">
      <div>
        <div className="detail-nav-bg">
            <button
              onClick={() => handleDesNavClick(1)}
              className={`${toggleDesNav === 1 ? 'toggle' : ''} detail-movie-des-nav`}>
            <span className="detail-movie-des-line"></span>
              Description
          </button>
            <button
              onClick={()=> handleDesNavClick(2)}
              className={`${toggleDesNav === 2 ? 'toggle' : ''} detail-movie-des-nav`}>
            <span className="detail-movie-des-line"></span>
              Rate &amp; Review
          </button>
            <button
              onClick={()=> handleDesNavClick(3)}
              className={`${toggleDesNav === 3 ? 'toggle' : ''} detail-movie-des-nav`}>
            <span className="detail-movie-des-line"></span>
              Sources
          </button> 
        </div>
        <div className={`${toggleDesNav === 1 ? '' : 'hidden'} detail-movie-des`}>
          <p className="py-10 font-light">
            Zombie Island is a 1998 direct-to-video animated comedy horror film
            based on Hanna-Barbera's Scooby-Doo Saturday-morning cartoons. In the
            film, Shaggy, Scooby, Fred, Velma, and Daphne reunite after a
            year-long hiatus from Mystery, Inc. to investigate a bayou island said
            to be haunted by the ghost of the pirate Morgan Moonscar. The film was
            directed by Jim Stenstrum, from a screenplay by Glenn Leopold.
          </p>
        </div>
        <div className={`${toggleDesNav === 2 ? '' : 'hidden'} detail-movie-des font-light`}>
          <p className="my-5">There are no reviews yet.</p>
          <h2 className="text-3xl font-medium my-3">Be the first to review “Zombie Island”</h2>
          <div className="w-full mb-4 red-border">
            <p className="mb-2">Your review *</p>
            <textarea className="red-border text-control w-full" name="comment" cols="5" rows="8" required=""></textarea>
          </div>
          <div className="w-full mb-4">
            <p className="mb-2">Name*</p>
            <input type="text" className="form-control red-border" required/>
          </div>
          <div className="w-full mb-4">
              <p className="mb-2">Email*</p>
              <input type="email" className="form-control red-border" required/>
          </div>
          <p><label><input type="checkbox" className="login-check red-border mr-2"/>Save my name, email, and website in this browser for the next time I comment.</label></p>
          <div className='relative h-10 w-40 mb-8 moviePoster-content5'>
            <Link to=""><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">submit<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
          </div>
        </div>
        <div className={`${toggleDesNav === 3 ? '' : 'hidden'} detail-movie-des table-wrapper mt-7`}>
          <table className="detail-mv-table">
            <thead className="bg-stone-700">
              <tr className="">
                <th className="py-6 pl-5">
                  Links
                </th>
                <th className="py-6 pl-5">
                  Quality
                </th>
                <th className="py-6 pl-5">
                  Language
                </th>
                <th className="py-6 pl-5">
                  Player
                </th>
                <th className="py-6 pl-5">
                  Date Added
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-stone-800">
                <td>
                  <a to="#"><div className="sub-but my-5 w-36 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">play now<i className="fa-solid fa-caret-right fa-xl pl-3"></i></span></div></a>
                </td>
                <td>
                  1080p
                </td>
                <td>
                  english
                </td>
                <td>
                  MusicBee
                </td>
                <td>
                  2021-11-28
                </td>
              </tr>
              <tr className="bg-stone-800">
                <td>
                  <a to="#"><div className="sub-but my-5 w-36 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">play now<i className="fa-solid fa-caret-right fa-xl pl-3"></i></span></div></a>
                </td>
                <td>
                  800p
                </td>
                <td>
                  english
                </td>
                <td>
                  5KPlayer
                </td>
                <td>
                  2021-11-25
                </td>
              </tr>
              <tr className="bg-stone-800">
                <td>
                  <a to="#"><div className="sub-but my-5 w-36 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">play now<i className="fa-solid fa-caret-right fa-xl pl-3"></i></span></div></a>
                </td>
                <td>
                  720p
                </td>
                <td>
                  English
                </td>
                <td>
                  MediaMonkey
                </td>
                <td>
                  2021-11-20
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div className="detail-nav-bg-2">
            <button
              onClick={()=> handleCastNavClick(1)}
              className={`${toggleCastNav === 1 ? 'toggle' : ''} detail-movie-des-nav`}>
            <span className="detail-movie-des-line"></span>
              Cast
          </button>
            <button
              onClick={()=> handleCastNavClick(2)}
              className={`${toggleCastNav === 2 ? 'toggle' : ''} detail-movie-des-nav`}>
            <span className="detail-movie-des-line"></span>
              Crew
          </button>
        </div>
        <div className={`${toggleCastNav === 1 ? '' : 'hidden'} detail-movie-des mt-7`}>
          <Swiper
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
            >
              <SwiperSlide>
                <div className="detail-movie-des-card">
                  <img src="/react-project/image/genre/07.webp" alt="" className="detail-movie-des-img"/>
                  <div className="detail-movie-des-text">
                    <p className="text-wrap">James Chinlund</p>
                    <p className="text-sm mt-1">As James</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="detail-movie-des-card">
                  <img src="/react-project/image/genre/06.webp" alt="" className="detail-movie-des-img"/>
                  <div className="detail-movie-des-text">
                    <p className="text-wrap">John Nathan</p>
                    <p className="text-sm mt-1">As John</p>
                  </div>
                </div>
              </SwiperSlide>
          </Swiper>
        </div>
        <div className={`${toggleCastNav === 2 ? '' : 'hidden'} detail-movie-des mt-7`}>
          <Swiper
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
            >
              <SwiperSlide>
                <div className="detail-movie-des-card">
                  <img src="/react-project/image/genre/05.webp" alt="" className="detail-movie-des-img"/>
                  <div className="detail-movie-des-text">
                    <p className="text-wrap">James Chinlund</p>
                    <p className="text-sm mt-1">As James</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="detail-movie-des-card">
                  <img src="/react-project/image/genre/04.webp" alt="" className="detail-movie-des-img"/>
                  <div className="detail-movie-des-text">
                    <p className="text-wrap">John Nathan</p>
                    <p className="text-sm mt-1">As John</p>
                  </div>
                </div>
              </SwiperSlide>
          </Swiper>
        </div>
      </div>
      </section>
      {/* section 3  */}
      <OnlyOnStreamit
        title='Newest Products'
        imgLink={[
          '/react-project/image/shop/product/01.webp',
          '/react-project/image/shop/product/02.webp',
          '/react-project/image/shop/product/03.webp',
          '/react-project/image/shop/product/04.webp',
          '/react-project/image/shop/product/05.webp',
          '/react-project/image/shop/product/06.webp',
          '/react-project/image/shop/product/07.webp',
        ]}
      />
      <OnlyOnStreamit
        title='Recommended For You'
        imgLink={[
          '/react-project/image/movie/related/01.webp',
          '/react-project/image/movie/related/02.webp',
          '/react-project/image/movie/related/03.webp',
          '/react-project/image/movie/related/04.webp',
          '/react-project/image/movie/related/05.webp',
          '/react-project/image/movie/related/06.webp',
          '/react-project/image/movie/related/07.webp',
        ]}
      />
    </main>
  )
}

export default RelatedMerchandise