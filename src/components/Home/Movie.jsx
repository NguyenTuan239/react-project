import React, { useState, useRef, useEffect, useContext } from 'react';
import './Home.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import OnlyOnStreamit from './OnlyOnStream/OnlyOnStreamit';
import MovieSection from './OnlyOnStream/MovieSection';

const Movie = () => {
  
  return (
    <main className="w-full bg-stone-950">
      {/* section 1  */}
      <MovieSection
        imgLink={[
          '/react-project/image/movie-banner/movie-banner-1.webp',
          '/react-project/image/movie-banner/movie-banner-2.webp',
          '/react-project/image/movie-banner/movie-banner-3.webp',
        ]}
      />
      {/* section 2  */}
      <OnlyOnStreamit
        title='Lastest Movies'
        imgLink={[
          '/react-project/image/movie/upcoming/07.webp',
          '/react-project/image/movie/upcoming/06.webp',
          '/react-project/image/movie/upcoming/05.webp',
          '/react-project/image/movie/upcoming/04.webp',
          '/react-project/image/movie/upcoming/03.webp',
          '/react-project/image/movie/upcoming/02.webp',
          '/react-project/image/movie/upcoming/01.webp',
        ]}
        />
      {/* section 3  */}
      <OnlyOnStreamit
        title='Related Movie'
        imgLink={[
          '/react-project/image/movie/related/07.webp',
          '/react-project/image/movie/related/06.webp',
          '/react-project/image/movie/related/05.webp',
          '/react-project/image/movie/related/04.webp',
          '/react-project/image/movie/related/03.webp',
          '/react-project/image/movie/related/02.webp',
          '/react-project/image/movie/related/01.webp',
        ]}
        />
    </main>
  )
}

export default Movie