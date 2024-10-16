import React, { useState, useRef, useEffect, useContext } from 'react';
import { MovieContext } from '../../contexts/MovieContext';
import { Link, NavLink } from 'react-router-dom';
// import './OTThome.css';
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

const Home = () => {
  const { movies } = useContext(MovieContext);
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
          {movies
            .filter((movie) => movie.id === 2)
            .map((movie) => (
              <div key={movie.id} className='otthome-sec1-bg '>
                <div className="otthome-sec1-img-wrapper">
                  <img src="/image/movie/upcoming/banner1.webp" alt="Slide 1" className="otthome-sec1-img" />
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
                  <img src="/image/movie/upcoming/banner2.webp" alt="Slide 1" className="otthome-sec1-img" />
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
                  <img src="/image/movie/upcoming/banner3.webp" alt="Slide 1" className="otthome-sec1-img" />
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
          <div className="navigation_">
            <div className="swiper-button-prev hover-bg-red"><FontAwesomeIcon icon={faChevronLeft} style={{color: "#fafafa",}} /></div>
            <div className="swiper-button-next hover-bg-red"><FontAwesomeIcon icon={faChevronRight} style={{color: "#fafafa",}} /></div>
        </div>
        </Swiper>
      </section>
    </main>
  )
}

export default Home