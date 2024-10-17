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

function OnlyOnStreamit({
    title,
    imgLink=[0,1,2,3,4,5,6],
}) {

  return (
    <section className="section-4 relative text-white font-light mx-auto my-16 w-11/12">
          <h2 className="text-xl md:text-2xl mb-4 flex justify-between"><span>{title}</span><span className="netflix text-lg cursor-pointer">View All</span></h2>
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
            <Link to="/moviedetail" className='relative w-full h-auto lg:hidden'>
              <img src={imgLink[0]} alt="" className="only-on-stream-image" />
              <div className='only-on-stream-image-after'></div>
            </Link>
              <div className="only-on-stream-card hidden p-3 lg:flex lg:flex-col">
                <Link to="/moviedetail"><img src={imgLink[0]} alt="" className="only-image"/></Link>
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
          <Link to="/moviedetail" className='relative w-full h-auto lg:hidden'>
              <img src={imgLink[1]} alt="" className="only-on-stream-image" />
              <div className='only-on-stream-image-after'></div>
            </Link>
              <div className="only-on-stream-card hidden p-3 lg:flex lg:flex-col">
              <Link to="/moviedetail"><img src={imgLink[1]} alt="" className="only-image"/></Link>
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
          <Link to="/moviedetail" className='relative w-full h-auto lg:hidden'>
              <img src={imgLink[2]} alt="" className="only-on-stream-image" />
              <div className='only-on-stream-image-after'></div>
            </Link>
              <div className="only-on-stream-card hidden p-3 lg:flex lg:flex-col">
              <Link to="/moviedetail"><img src={imgLink[2]} alt="" className="only-image"/></Link>
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
          <Link to="/moviedetail" className='relative w-full h-auto lg:hidden'>
              <img src={imgLink[3]} alt="" className="only-on-stream-image" />
              <div className='only-on-stream-image-after'></div>
            </Link>
              <div className="only-on-stream-card hidden p-3 lg:flex lg:flex-col">
              <Link to="/moviedetail"><img src={imgLink[3]} alt="" className="only-image"/></Link>
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
          <Link to="/moviedetail" className='relative w-full h-auto lg:hidden'>
              <img src={imgLink[4]} alt="" className="only-on-stream-image" />
              <div className='only-on-stream-image-after'></div>
            </Link>
              <div className="only-on-stream-card hidden p-3 lg:flex lg:flex-col">
              <Link to="/moviedetail"><img src={imgLink[4]} alt="" className="only-image"/></Link>
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
          <Link to="/moviedetail" className='relative w-full h-auto lg:hidden'>
              <img src={imgLink[5]} alt="" className="only-on-stream-image" />
              <div className='only-on-stream-image-after'></div>
            </Link>
              <div className="only-on-stream-card hidden p-3 lg:flex lg:flex-col">
              <Link to="/moviedetail"><img src={imgLink[5]} alt="" className="only-image"/></Link>
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
          <Link to="/moviedetail" className='relative w-full h-auto lg:hidden'>
              <img src={imgLink[6]} alt="" className="only-on-stream-image" />
              <div className='only-on-stream-image-after'></div>
            </Link>
              <div className="only-on-stream-card hidden p-3 lg:flex lg:flex-col">
              <Link to="/moviedetail"><img src={imgLink[6]} alt="" className="only-image"/></Link>
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
  )
}

export default OnlyOnStreamit