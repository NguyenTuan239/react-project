import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
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

function ContinueWatching({
    title,
    imgLink=[0,1,2,3,4,5],
}) {

  return (
    <section className="relative text-white font-light mx-auto w-11/12 mt-16">
        <h2 className="text-xl md:text-2xl mb-10 mt-2">{title}</h2>
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
            <Link to="/moviedetail">
              <img src={imgLink[0]} alt="" className="continue-image" />
            </Link>
            <div className="absolute bottom-1 left-0 h-0.5 netflix-bg" style={{ width: '30%' }}></div>
            <div className="absolute bottom-1 right-0 h-0.5 bg-gray-500" style={{ width: '70%' }}></div>
            <span className="absolute bottom-2 left-2 text-gray-300 hidden md:block">70 of 230 m</span>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/moviedetail">
              <img src={imgLink[1]} alt="" className="continue-image" />
            </Link>
            <div className="absolute bottom-1 left-0 h-0.5 netflix-bg" style={{ width: '60%' }}></div>
            <div className="absolute bottom-1 right-0 h-0.5 bg-gray-500" style={{ width: '40%' }}></div>
            <span className="absolute bottom-2 left-2 text-gray-300 hidden md:block">70 of 230 m</span>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/moviedetail">
              <img src={imgLink[2]} alt="" className="continue-image" />
            </Link>
            <div className="absolute bottom-1 left-0 h-0.5 netflix-bg" style={{ width: '50%' }}></div>
            <div className="absolute bottom-1 right-0 h-0.5 bg-gray-500" style={{ width: '50%' }}></div>
            <span className="absolute bottom-2 left-2 text-gray-300 hidden md:block">70 of 230 m</span>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/moviedetail">
              <img src={imgLink[3]} alt="" className="continue-image" />
            </Link>
            <div className="absolute bottom-1 left-0 h-0.5 netflix-bg" style={{ width: '30%' }}></div>
            <div className="absolute bottom-1 right-0 h-0.5 bg-gray-500" style={{ width: '70%' }}></div>
            <span className="absolute bottom-2 left-2 text-gray-300 hidden md:block">70 of 230 m</span>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/moviedetail">
              <img src={imgLink[4]} alt="" className="continue-image" />
            </Link>
            <div className="absolute bottom-1 left-0 h-0.5 netflix-bg" style={{ width: '30%' }}></div>
            <div className="absolute bottom-1 right-0 h-0.5 bg-gray-500" style={{ width: '70%' }}></div>
            <span className="absolute bottom-2 left-2 text-gray-300 hidden md:block">70 of 230 m</span>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/moviedetail">
              <img src={imgLink[5]} alt="" className="continue-image" />
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
  )
}

export default ContinueWatching