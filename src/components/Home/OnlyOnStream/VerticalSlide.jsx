import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCaretRight, faShareNodes, faLink, faChevronDown,faChevronUp, } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

function VerticalSlide({
    imgLink=[0,1,2,3,4],
}) {

    const swiper4Ref = useRef(null); 
    const swiper5Ref = useRef(null); 

    useEffect(() => {
        const swiper4 = swiper4Ref.current.swiper;
        const swiper5 = swiper5Ref.current.swiper;
        // Sync swiper5 -> swiper4
        swiper5.on('slideChangeTransitionStart', () => {
          swiper4.slideToLoop(swiper5.realIndex);
        });
        // Sync swiper4 -> swiper5
        swiper4.on('slideChangeTransitionStart', () => {
          swiper5.slideToLoop(swiper4.realIndex);
        });
        // Handle click events on swiper4
        swiper4.on('click', (swiper) => {
          const clickedSlide = swiper.clickedSlide;
          if (clickedSlide) {
            const realIndex = clickedSlide.getAttribute('data-swiper-slide-index');
            if (realIndex !== undefined) {
              swiper4.slideToLoop(realIndex);
            }
          }
        });
        // Manage sec5-red-line on the first slide of swiper4
        swiper4.on('slideChangeTransitionStart', (swiper) => {
          document.querySelectorAll('.swiper-slide .sec5-red-line').forEach((line) => {
            line.style.display = 'none';
          });
    
          const firstVisibleSlide = swiper.slides[swiper.activeIndex];
          const redLine = firstVisibleSlide.querySelector('.sec5-red-line');
          if (redLine) {
            redLine.style.display = 'block';
          }
        });
        // Cleanup event listeners on unmount
        return () => {
          swiper5.off('slideChangeTransitionStart');
          swiper4.off('slideChangeTransitionStart');
          swiper4.off('click');
        };
    }, []);
    
  return (
    <section className="section-5 relative w-full h-auto text-white font-light">
        <Swiper
          ref={swiper5Ref}
          loop={true}
          speed={600}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          modules={[EffectFade]}
          direction={'vertical'}
          className=""
        >
          <SwiperSlide>
            <div className="sec5-bg">
              <img src={imgLink[0]} alt="" className='w-full h-full object-cover'/>
              <div className="sec5-Poster text-gray-300 p-3 z-10">
                <div className="moviePoster-content1 flex items-center font-bold pb-3">
                  <span className="text-muted">Comedy<span className="netflix mx-2">•</span>Romance<span className="netflix mx-2">•</span>Action</span>
                </div>
                <h2 className="my-2 text-3xl font-medium">Lostti N Sacee</h2>
                <p className="font-medium text-white mr-4 text-nowrap">⭐ 4.3/5 <span className="ml-4 font-thin">2hr 30mins</span></p>
                <p className="sec5-content my-3">
                  After the death of their father, two siblings fight for the throne, thereby causing a civil war known as the Dance of the Dragons. Rhaenyra tries to hold the realm together as the tension
                  rises following a tragic loss. Meanwhile, Daemon prepares for war.
                </p>
                <div className='relative h-10 w-40 mb-8 moviePoster-content5'>
                      <Link to="/moviedetail"><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">play now<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sec5-bg">
              <img src={imgLink[1]} alt="" className='w-full h-full object-cover'/>
              <div className="sec5-Poster text-gray-300 p-3 z-10">
                <div className="moviePoster-content1 flex items-center font-bold pb-3">
                  <span className="text-muted">Horror<span className="netflix mx-2">•</span>Romance<span className="netflix mx-2">•</span>Action</span>
                </div>
                <h2 className="my-2 text-3xl font-medium">Ret Seap</h2>
                <p className="font-medium text-white mr-4 text-nowrap">⭐ 4.3/5 <span className="ml-4 font-thin">3hr 0mins</span></p>
                <p className="sec5-content mt-1">
                  After the death of their father, two siblings fight for the throne, thereby causing a civil war known as the Dance of the Dragons. Rhaenyra tries to hold the realm together as the tension
                  rises following a tragic loss. Meanwhile, Daemon prepares for war.
                </p>
                <div className='relative h-10 w-40 mb-8 moviePoster-content5'>
                    <Link to="/moviedetail"><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">play now<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
              </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sec5-bg">
              <img src={imgLink[2]} alt="" className='w-full h-full object-cover'/>
              <div className="sec5-Poster text-gray-300 p-3 z-10">
                <div className="moviePoster-content1 flex items-center font-bold pb-3">
                  <span className="text-muted">Comedy<span className="netflix mx-2">•</span>Romance<span className="netflix mx-2">•</span>Action</span>
                </div>
                <h2 className="my-2 text-3xl font-medium">Avenger</h2>
                <p className="font-medium text-white mr-4 text-nowrap">⭐ 4.3/5 <span className="ml-4 font-thin">2hr 45mins</span></p>
                <p className="sec5-content mt-1">
                  After the death of their father, two siblings fight for the throne, thereby causing a civil war known as the Dance of the Dragons. Rhaenyra tries to hold the realm together as the tension
                  rises following a tragic loss. Meanwhile, Daemon prepares for war.
                </p>
                <div className='relative h-10 w-40 mb-8 moviePoster-content5'>
                    <Link to="/moviedetail"><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">play now<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
              </div>
              </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sec5-bg">
            <img src={imgLink[3]} alt="" className='w-full h-full object-cover'/>
              <div className="sec5-Poster text-gray-300 p-3 z-10">
                <div className="moviePoster-content1 flex items-center font-bold pb-3">
                  <span className="text-muted">Comedy<span className="netflix mx-2">•</span>Romance<span className="netflix mx-2">•</span>Action</span>
                </div>
                <h2 className="my-2 text-3xl font-medium">Logan</h2>
                <p className="font-medium text-white mr-4 text-nowrap">⭐ 4.3/5 <span className="ml-4 font-thin">1hr 50mins</span></p>
                <p className="sec5-content mt-1">
                  After the death of their father, two siblings fight for the throne, thereby causing a civil war known as the Dance of the Dragons. Rhaenyra tries to hold the realm together as the tension
                  rises following a tragic loss. Meanwhile, Daemon prepares for war.
                </p>
                <div className='relative h-10 w-40 mb-8 moviePoster-content5'>
                    <Link to="/moviedetail"><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">play now<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
              </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sec5-bg">
            <img src={imgLink[4]} alt="" className='w-full h-full object-cover'/>
              <div className="sec5-Poster text-gray-300 p-3 z-10">
                <div className="moviePoster-content1 flex items-center font-bold pb-3">
                  <span className="text-muted">Comedy<span className="netflix mx-2">•</span>Romance<span className="netflix mx-2">•</span>Action</span>
                </div>
                <h2 className="my-2 text-3xl font-medium">Black Queen</h2>
                <p className="font-medium text-white mr-4 text-nowrap">⭐ 4.3/5 <span className="ml-4 font-thin">2hr 10mins</span></p>
                <p className="sec5-content mt-1">
                  After the death of their father, two siblings fight for the throne, thereby causing a civil war known as the Dance of the Dragons. Rhaenyra tries to hold the realm together as the tension
                  rises following a tragic loss. Meanwhile, Daemon prepares for war.
                </p>
                <div className='relative h-10 w-40 mb-8 moviePoster-content5'>
                    <Link to="/moviedetail"><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">play now<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
              </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="sec5-image-slide hidden md:block">
          <Swiper
            ref={swiper4Ref}
            loop={true}
            speed={600}
            slidesPerView={3}
            spaceBetween={20}
            slideToClickedSlide={true}
            touchRatio={0.2}
            navigation={{
              nextEl: '.sec5-next',
              prevEl: '.sec5-prev',
            }}
            modules={[Navigation]}
            direction={'vertical'}
            className="h-full"
          >
            <SwiperSlide>
              <img src={imgLink[0]} alt=""/>
              <div className="sec5-red-line absolute w-full h-1 netflix-bg bottom-0 z-40"></div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={imgLink[1]} alt=""/>
              <div className="sec5-red-line hidden absolute w-full h-1 netflix-bg bottom-0 z-40"></div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={imgLink[2]} alt=""/>
              <div className="sec5-red-line hidden absolute w-full h-1 netflix-bg bottom-0 z-40"></div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={imgLink[3]} alt=""/>
              <div className="sec5-red-line hidden absolute w-full h-1 netflix-bg bottom-0 z-40"></div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={imgLink[4]} alt=""/>
              <div className="sec5-red-line hidden absolute w-full h-1 netflix-bg bottom-0 z-40"></div>
            </SwiperSlide>
          </Swiper>
          <div className="sec5-prev hover-bg-red"><FontAwesomeIcon icon={faChevronUp} style={{color: "#fafafa",}} /></div>
          <div className="sec5-next hover-bg-red"><FontAwesomeIcon icon={faChevronDown} style={{color: "#fafafa",}} /></div>
        </div>
    </section>
  )
}

export default VerticalSlide