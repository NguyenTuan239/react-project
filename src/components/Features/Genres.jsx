import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Genres = () => {
  return (
    <main className="w-full h-auto bg-stone-950 text-slate-200 font-light">
      <div className="relative w-full h-72 md:h-96">
        <img src="/image/pages/01.webp" alt="" className="w-full h-72 md:h-96 object-cover"/>
        <div className="term-of-use-hl">
          <h2 className="text-3xl font-medium mb-4 flex justify-center">Genres</h2>
          <p className="text-xl"><Link to="/otthome" className="netflix font-medium">Home</Link>&nbsp;/&nbsp;<span className="netflix">Genres</span></p>
        </div>
      </div>
      <section className="w-11/12 mx-auto py-10">
        <div>
            <p className="text-3xl font-normal my-5">Movie Genres</p>
            <div className="playlist-grid">
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-[url('/image/genre/01.webp')]">
                        <p className="font-normal text-xl">Action</p>
                        <div className="sec9-underline netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-[url('/image/genre/02.webp')]">
                        <p className="font-normal text-xl">Action</p>
                        <div className="sec9-underline netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-[url('/image/genre/03.webp')]">
                        <p className="font-normal text-xl">Action</p>
                        <div className="sec9-underline netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-[url('/image/genre/04.webp')]">
                        <p className="font-normal text-xl">Action</p>
                        <div className="sec9-underline netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-[url('/image/genre/05.webp')]">
                        <p className="font-normal text-xl">Action</p>
                        <div className="sec9-underline netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-[url('/image/genre/06.webp')]">
                        <p className="font-normal text-xl">Action</p>
                        <div className="sec9-underline netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-[url('/image/genre/07.webp')]">
                        <p className="font-normal text-xl">Action</p>
                        <div className="sec9-underline netflix-bg"></div>
                    </div>
                </div>
            </div>
            <div className='relative h-10 w-40 mb-8 left-1/2 -translate-x-1/2'>
              <Link to=""><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">load more<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
            </div>
        </div>
        <div>
            <p className="text-3xl font-normal my-5">Movie Genres</p>
            <div className="playlist-grid">
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-[url('/image/genre/01.webp')]">
                        <p className="font-normal text-xl">Action</p>
                        <div className="sec9-underline netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-[url('/image/genre/02.webp')]">
                        <p className="font-normal text-xl">Action</p>
                        <div className="sec9-underline netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-[url('/image/genre/03.webp')]">
                        <p className="font-normal text-xl">Action</p>
                        <div className="sec9-underline netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-[url('/image/genre/04.webp')]">
                        <p className="font-normal text-xl">Action</p>
                        <div className="sec9-underline netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-[url('/image/genre/05.webp')]">
                        <p className="font-normal text-xl">Action</p>
                        <div className="sec9-underline netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-[url('/image/genre/06.webp')]">
                        <p className="font-normal text-xl">Action</p>
                        <div className="sec9-underline netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-[url('/image/genre/07.webp')]">
                        <p className="font-normal text-xl">Action</p>
                        <div className="sec9-underline netflix-bg"></div>
                    </div>
                </div>
            </div>
            <div className='relative h-10 w-40 mb-8 left-1/2 -translate-x-1/2'>
              <Link to=""><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">load more<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
            </div>
        </div>
        <div>
            <p className="text-3xl font-normal my-5">Movie Genres</p>
            <div className="playlist-grid">
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-[url('/image/genre/01.webp')]">
                        <p className="font-normal text-xl">Action</p>
                        <div className="sec9-underline netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-[url('/image/genre/02.webp')]">
                        <p className="font-normal text-xl">Action</p>
                        <div className="sec9-underline netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-[url('/image/genre/03.webp')]">
                        <p className="font-normal text-xl">Action</p>
                        <div className="sec9-underline netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-[url('/image/genre/04.webp')]">
                        <p className="font-normal text-xl">Action</p>
                        <div className="sec9-underline netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-[url('/image/genre/05.webp')]">
                        <p className="font-normal text-xl">Action</p>
                        <div className="sec9-underline netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-[url('/image/genre/06.webp')]">
                        <p className="font-normal text-xl">Action</p>
                        <div className="sec9-underline netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-[url('/image/genre/07.webp')]">
                        <p className="font-normal text-xl">Action</p>
                        <div className="sec9-underline netflix-bg"></div>
                    </div>
                </div>
            </div>
            <div className='relative h-10 w-40 mb-8 left-1/2 -translate-x-1/2'>
              <Link to=""><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">load more<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
            </div>
        </div>
      </section>
    </main>
  )
}

export default Genres