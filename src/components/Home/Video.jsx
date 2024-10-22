import React from 'react'
import MovieSection from './OnlyOnStream/MovieSection';
import OnlyOnStreamit from './OnlyOnStream/OnlyOnStreamit';

const Video = () => {
  return (
    <main className="w-full bg-stone-950">
      {/* section 1  */}
      <MovieSection
        imgLink={[
          '/react-project/image/genre/04.webp',
          '/react-project/image/genre/06.webp',
          '/react-project/image/genre/07.webp',
        ]}
      />
      {/* section 2  */}
      <OnlyOnStreamit
        title='Top 10'
        imgLink={[
          '/react-project/image/top-ten-number/10.webp',
          '/react-project/image/top-ten-number/09.webp',
          '/react-project/image/top-ten-number/08.webp',
          '/react-project/image/top-ten-number/07.webp',
          '/react-project/image/top-ten-number/06.webp',
          'image/movie/upcoming/06.webp',
          'image/movie/upcoming/07.webp',
        ]}
        />
      {/* section 3  */}
      <OnlyOnStreamit
        title='Recommended Movies'
        imgLink={[
          '/react-project/image/top-ten-number/05.webp',
          '/react-project/image/top-ten-number/04.webp',
          '/react-project/image/top-ten-number/03.webp',
          '/react-project/image/top-ten-number/02.webp',
          '/react-project/image/top-ten-number/01.webp',
          '/react-project/image/movie/upcoming/02.webp',
          '/react-project/image/movie/upcoming/03.webp',
        ]}
        />
    </main>
  )
}

export default Video