import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faEye, faTrashCan,faStarHalf, faCaretRight, faShareNodes, faLink } from '@fortawesome/free-solid-svg-icons';
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

const MerchandiseStore = () => {
  return (
    <main className='w-full bg-stone-950 text-slate-200'>
      {/* section 1  */}
      <section className="w-full">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <SwiperSlide>
            <Link to=""><img src="/react-project/image/shop/slider-01.webp" alt="" className=""/></Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to=""><img src="/react-project/image/shop/slider-02.webp" alt="" className=""/></Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to=""><img src="/react-project/image/shop/slider-03.webp" alt="" className=""/></Link>
          </SwiperSlide>
          <div className="navigation_">
            <div className="swiper-button-prev hover-bg-red"><FontAwesomeIcon icon={faChevronLeft} style={{color: "#fafafa",}} /></div>
            <div className="swiper-button-next hover-bg-red"><FontAwesomeIcon icon={faChevronRight} style={{color: "#fafafa",}} /></div>
          </div>
        </Swiper>
      </section>
      {/* section 2  */}
      <section className="relative text-white font-light mx-auto w-11/12 py-16">
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
            <Link to=""><img src="/react-project/image/shop/category/01.webp" alt="" className="" /></Link>
            <span className="absolute bottom-5 font-medium left-1/2 -translate-x-1/2">Activeman</span>
          </SwiperSlide>
          <SwiperSlide>
            <Link to=""><img src="/react-project/image/shop/category/02.webp" alt="" className="" /></Link>
            <span className="absolute bottom-5 font-medium left-1/2 -translate-x-1/2">Avenger</span>
          </SwiperSlide>
          <SwiperSlide>
            <Link to=""><img src="/react-project/image/shop/category/03.webp" alt="" className="" /></Link>
            <span className="absolute bottom-5 font-medium left-1/2 -translate-x-1/2">Disney World</span>
          </SwiperSlide>
          <SwiperSlide>
            <Link to=""><img src="/react-project/image/shop/category/04.webp" alt="" className="" /></Link>
            <span className="absolute bottom-5 font-medium left-1/2 -translate-x-1/2">Galaxy Haven</span>
          </SwiperSlide>
          <SwiperSlide>
            <Link to=""><img src="/react-project/image/shop/category/05.webp" alt="" className="" /></Link>
            <span className="absolute bottom-5 font-medium left-1/2 -translate-x-1/2">Ghost Spider</span>
          </SwiperSlide>
          <SwiperSlide>
            <Link to=""><img src="/react-project/image/shop/category/06.webp" alt="" className="" /></Link>
            <span className="absolute bottom-5 font-medium left-1/2 -translate-x-1/2">Disney World</span>
          </SwiperSlide>
          <SwiperSlide>
            <Link to=""><img src="/react-project/image/shop/category/07.webp" alt="" className="" /></Link>
            <span className="absolute bottom-5 font-medium left-1/2 -translate-x-1/2">Avenger</span>
          </SwiperSlide>
          <SwiperSlide>
            <Link to=""><img src="/react-project/image/shop/category/08.webp" alt="" className="" /></Link>
            <span className="absolute bottom-5 font-medium left-1/2 -translate-x-1/2">Avenger</span>
          </SwiperSlide>
          <SwiperSlide>
            <Link to=""><img src="/react-project/image/shop/category/09.webp" alt="" className="" /></Link>
            <span className="absolute bottom-5 font-medium left-1/2 -translate-x-1/2">Avenger</span>
          </SwiperSlide>
          <SwiperSlide>
            <Link to=""><img src="/react-project/image/shop/category/10.webp" alt="" className="" /></Link>
            <span className="absolute bottom-5 font-medium left-1/2 -translate-x-1/2">Avenger</span>
          </SwiperSlide>
          <div className="navigation_">
            <div className="swiper-button-prev hover-bg-red"><FontAwesomeIcon icon={faChevronLeft} style={{color: "#fafafa",}} /></div>
            <div className="swiper-button-next hover-bg-red"><FontAwesomeIcon icon={faChevronRight} style={{color: "#fafafa",}} /></div>
          </div>
        </Swiper>
      </section>
      {/* section 3  */}
      <section className="w-11/12 mx-auto">
        <div className="merchandise-grid">
            <div className="merchandise-grid-1 mercha-hover">
                <Link to="">
                    <div className="absolute left-14 bottom-16 z-10">
                        <p>Ghost Spider</p>
                        <p className="my-0.5 text-2xl font-medium">Monster-House</p>
                        <p className="netflix mt-3">Show Now</p>
                    </div>
                    <div className="mercha-hover-img"><img src="/react-project/image/shop/card/01.webp" alt="" className="merchandise-grid-img"/></div>
                </Link>
            </div>
            <div className="merchandise-grid-2 mercha-hover">
                <Link to="">
                    <div className="absolute left-14 bottom-16 z-10">
                        <p>Ghost Spider</p>
                        <p className="my-0.5 text-2xl font-medium">Monster-House</p>
                        <p className="netflix mt-3">Show Now</p>
                    </div>
                    <div className="mercha-hover-img"><img src="/react-project/image/shop/card/02.webp" alt="" className="merchandise-grid-img"/></div>
                </Link>
            </div>
            <div className="merchandise-grid-3 mercha-hover">
                <Link to="">
                    <div className="absolute left-14 bottom-16 z-10">
                        <p>Ghost Spider</p>
                        <p className="my-0.5 text-2xl font-medium">Monster-House</p>
                        <p className="netflix mt-3">Show Now</p>
                    </div>
                    <div className="mercha-hover-img-mid"><img src="/react-project/image/shop/card/03.webp" alt="" className="merchandise-grid-img-mid"/></div>
                </Link>
            </div>
            <div className="merchandise-grid-4 mercha-hover">
                <Link to="">
                    <div className="absolute left-14 bottom-16 z-10 bg-transparent">
                        <p>Ghost Spider</p>
                        <p className="my-0.5 text-2xl font-medium">Monster-House</p>
                        <p className="netflix mt-3">Show Now</p>
                    </div>
                    <div className="mercha-hover-img"><img src="/react-project/image/shop/card/04.webp" alt="" className="merchandise-grid-img"/></div>
                </Link>
            </div>
            <div className="merchandise-grid-5 mercha-hover">
                <Link to="">
                    <div className="absolute left-14 bottom-16 z-10">
                        <p>Ghost Spider</p>
                        <p className="my-0.5 text-2xl font-medium">Monster-House</p>
                        <p className="netflix mt-3">Show Now</p>
                    </div>
                    <div className="mercha-hover-img"><img src="/react-project/image/shop/card/05.webp" alt="" className="merchandise-grid-img"/></div>
                </Link>
            </div>
        </div>
      </section>
      {/* section 4  */}
      <section className="relative text-slate-200 font-medium mx-auto w-11/12 mt-16">
        <h2 className="text-xl md:text-2xl mb-10 mt-2">Newest Products</h2>
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
            <div className=" mercha-sec4">
              <div className="relative">
                  <Link to=""><img src="/react-project/image/shop/product/01.webp" alt="" className=""/></Link>
                  <div className="mercha-sec4-hover-item netflix-bg"><FontAwesomeIcon icon={faEye} /><FontAwesomeIcon icon={faHeart} /><FontAwesomeIcon icon={faTrashCan} /></div>
              </div>
              <span className="absolute top-3 font-medium left-3 netflix-bg px-2 py-0.5">sale!</span>
              <div className="flex flex-col items-center mt-4">
                  <p>Black Bow</p>
                  <p><span className="line-through text-gray-400">$48.00</span>&nbsp;$28.00</p>
                  <p className="mt-2 text-yellow-500">⭐⭐⭐⭐<FontAwesomeIcon icon={faStarHalf} /></p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" mercha-sec4">
              <div className="relative">
                  <Link to=""><img src="/react-project/image/shop/product/02.webp" alt="" className=""/></Link>
                  <div className="mercha-sec4-hover-item netflix-bg"><FontAwesomeIcon icon={faEye} /><FontAwesomeIcon icon={faHeart} /><FontAwesomeIcon icon={faTrashCan} /></div>
              </div>
              <div className="flex flex-col items-center mt-4">
                  <p>Black Bow</p>
                  <p><span className="line-through text-gray-400"></span>$13.00</p>
                  <p className="mt-2 text-yellow-500">⭐⭐⭐⭐</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" mercha-sec4">
              <div className="relative">
                  <Link to=""><img src="/react-project/image/shop/product/03.webp" alt="" className=""/></Link>
                  <div className="mercha-sec4-hover-item netflix-bg"><FontAwesomeIcon icon={faEye} /><FontAwesomeIcon icon={faHeart} /><FontAwesomeIcon icon={faTrashCan} /></div>
              </div>
              <span className="absolute top-3 font-medium left-3 netflix-bg px-2 py-0.5">new!</span>
              <div className="flex flex-col items-center mt-4">
                  <p>Black Bow</p>
                  <p><span className="line-through text-gray-400"></span>&nbsp;$50.00</p>
                  <p className="mt-2 text-yellow-500">⭐⭐⭐⭐<FontAwesomeIcon icon={faStarHalf} /></p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" mercha-sec4">
              <div className="relative">
                  <Link to=""><img src="/react-project/image/shop/product/04.webp" alt="" className=""/></Link>
                  <div className="mercha-sec4-hover-item netflix-bg"><FontAwesomeIcon icon={faEye} /><FontAwesomeIcon icon={faHeart} /><FontAwesomeIcon icon={faTrashCan} /></div>
              </div>
              <span className="absolute top-3 font-medium left-3 netflix-bg px-2 py-0.5">sale!</span>
              <div className="flex flex-col items-center mt-4">
                  <p>Black Bow</p>
                  <p><span className="line-through text-gray-400">$40.00</span>&nbsp;$20.00</p>
                  <p className="mt-2 text-yellow-500">⭐⭐⭐⭐</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" mercha-sec4">
              <div className="relative">
                  <Link to=""><img src="/react-project/image/shop/product/05.webp" alt="" className=""/></Link>
                  <div className="mercha-sec4-hover-item netflix-bg"><FontAwesomeIcon icon={faEye} /><FontAwesomeIcon icon={faHeart} /><FontAwesomeIcon icon={faTrashCan} /></div>
              </div>
              <div className="flex flex-col items-center mt-4">
                  <p>Black Bow</p>
                  <p><span className="line-through text-gray-400"></span>&nbsp;$10.00</p>
                  <p className="mt-2 text-yellow-500">⭐⭐⭐⭐</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" mercha-sec4">
              <div className="relative">
                  <Link to=""><img src="/react-project/image/shop/product/02.webp" alt="" className=""/></Link>
                  <div className="mercha-sec4-hover-item netflix-bg"><FontAwesomeIcon icon={faEye} /><FontAwesomeIcon icon={faHeart} /><FontAwesomeIcon icon={faTrashCan} /></div>
              </div>
              <span className="absolute top-3 font-medium left-3 netflix-bg px-2 py-0.5">new!</span>
              <div className="flex flex-col items-center mt-4">
                  <p>Black Bow</p>
                  <p><span className="line-through text-gray-400">$36.00</span>&nbsp;$25.00</p>
                  <p className="mt-2 text-yellow-500">⭐⭐⭐⭐<FontAwesomeIcon icon={faStarHalf} /></p>
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
      <section>
        <div className="w-11/12 mx-auto flex flex-col md:flex-row md:gap-3">
            <div className="mt-28">
                <img src="/react-project/image/shop/card/capton-america.webp" alt=""/>
                <div>
                  <p className="text-xl font-semibold">Captain America</p>
                  <p className="font-light my-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <div className='relative h-10 w-40 mb-8 moviePoster-content5'>
                    <Link to=""><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">view collection<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
                  </div>
                </div>
            </div>
            <div>
                <img src="/react-project/image/shop/card/deadpool.webp" alt=""/>
                <div>
                    <p className="text-xl font-semibold">Dead Pool</p>
                    <p className="font-light my-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className='relative h-10 w-40 mb-8 moviePoster-content5'>
                      <Link to=""><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">view collection<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
                  </div>
                </div>
            </div>
        </div>
        <div className="w-full h-auto mt-10 bg-[url('/react-project/image/shop/card/bg-img.webp')]">
            <img src="/react-project/image/shop/card/multipal.webp" alt=""/>
            <div className="p-5">
                <Link to="/otthome"><img src="logo.webp" alt="logo" className="logo h-8 mb-5"/></Link>
                <p className="text-2l font-semibold">Wear Streamit, Buy Streamit and Love Streamit</p>
                <p className="font-light my-2">Buy exclusive streamit products from our store and get amazing benefits.</p>
                <div className='relative h-10 w-40 mb-8 moviePoster-content5'>
                    <Link to=""><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">shop now<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
                  </div>
            </div>
        </div>
      </section>
      {/* section 6  */}
      <section className="mt-16 flex flex-col lg:flex-row">
        <div className="w-9/12 mx-auto py-14 lg:flex-1">
          <div className="HomePG-sec8-nav-pt2-date font-normal !p-4 text-2xl"><span className="absolute netflix-bg w-1 h-full left-0 top-0"></span>Our Multiple Locations</div>
          <p className="text-xl p-4">Viet Nam:</p>
          <p className="pl-4">Thuy Nguyen district, Hai Phong City</p>
          <p className="text-xl p-4">Viet Nam:</p>
          <p className="pl-4">Tran Nguyen Han,Hai Ba Trung district, Ha Noi City</p>
          <p className="text-xl p-4">Working Hours: <span className="italic netflix font-light pl-3 text-base">Mon - Fri : 09:00 AM to 06:00 PM</span></p>
        </div>
        <div className="bg-[url('/react-project/image/shop/card/location.webp')] lg:flex-1 w-full h-80 lg:h-96 bg-cover"></div>
      </section>
    </main>
  )
}

export default MerchandiseStore