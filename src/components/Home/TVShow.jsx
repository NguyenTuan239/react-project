import React from 'react'
import MovieSection from './OnlyOnStream/MovieSection';
import OnlyOnStreamit from './OnlyOnStream/OnlyOnStreamit';

const TVShow = () => {
  return (
    <main className="w-full bg-stone-950">
      {/* section 1  */}
      <MovieSection
        imgLink={[
          '/image/movie-banner/banner-1.webp',
          '/image/movie-banner/banner-2.webp',
          '/image/movie-banner/banner-3.webp',
        ]}
      />
      {/* section 2  */}
      <OnlyOnStreamit
        title='Top Pick'
        imgLink={[
          '/image/movie/top-picks/07.webp',
          '/image/movie/top-picks/06.webp',
          '/image/movie/top-picks/05.webp',
          '/image/movie/top-picks/04.webp',
          '/image/movie/top-picks/03.webp',
          '/image/movie/top-picks/02.webp',
          '/image/movie/top-picks/01.webp',
        ]}
        />
      {/* section 3  */}
      <OnlyOnStreamit
        title='Recommended Movies'
        imgLink={[
          '/image/movie/related/06.webp',
          '/image/movie/related/05.webp',
          '/image/movie/related/04.webp',
          '/image/movie/related/03.webp',
          '/image/movie/upcoming/04.webp',
          '/image/movie/upcoming/03.webp',
          '/image/movie/top-picks/01.webp',
        ]}
        />
    </main>
  )
}

export default TVShow