import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './OTThome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export const OTThome = () => {
  return (
    <main className="w-full">
      <section className="section-2 relative text-white font-light mx-auto w-11/12 my-16">
        <h2 className="text-xl md:text-2xl mb-10 mt-2">Continue Watching</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={3}
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
            <Link to="">
              <img src="/image/continue-watch/01.webp" alt="" className="continue-image" />
            </Link>
            <div className="absolute bottom-1 left-0 h-0.5 netflix-bg" style={{ width: '30%' }}></div>
            <div className="absolute bottom-1 right-0 h-0.5 bg-gray-500" style={{ width: '70%' }}></div>
            <span className="absolute bottom-2 left-2 text-gray-300 hidden md:block">70 of 230 m</span>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="">
              <img src="/image/continue-watch/02.webp" alt="" className="continue-image" />
            </Link>
            <div className="absolute bottom-1 left-0 h-0.5 netflix-bg" style={{ width: '60%' }}></div>
            <div className="absolute bottom-1 right-0 h-0.5 bg-gray-500" style={{ width: '40%' }}></div>
            <span className="absolute bottom-2 left-2 text-gray-300 hidden md:block">70 of 230 m</span>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="">
              <img src="/image/continue-watch/03.webp" alt="" className="continue-image" />
            </Link>
            <div className="absolute bottom-1 left-0 h-0.5 netflix-bg" style={{ width: '50%' }}></div>
            <div className="absolute bottom-1 right-0 h-0.5 bg-gray-500" style={{ width: '50%' }}></div>
            <span className="absolute bottom-2 left-2 text-gray-300 hidden md:block">70 of 230 m</span>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="">
              <img src="/image/continue-watch/04.webp" alt="" className="continue-image" />
            </Link>
            <div className="absolute bottom-1 left-0 h-0.5 netflix-bg" style={{ width: '30%' }}></div>
            <div className="absolute bottom-1 right-0 h-0.5 bg-gray-500" style={{ width: '70%' }}></div>
            <span className="absolute bottom-2 left-2 text-gray-300 hidden md:block">70 of 230 m</span>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="">
              <img src="/image/continue-watch/05.webp" alt="" className="continue-image" />
            </Link>
            <div className="absolute bottom-1 left-0 h-0.5 netflix-bg" style={{ width: '30%' }}></div>
            <div className="absolute bottom-1 right-0 h-0.5 bg-gray-500" style={{ width: '70%' }}></div>
            <span className="absolute bottom-2 left-2 text-gray-300 hidden md:block">70 of 230 m</span>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="">
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
    </main>
  )
}
export default OTThome
