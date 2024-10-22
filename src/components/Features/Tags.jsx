import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Tags = () => {
  return (
    <main className="w-full h-auto bg-stone-950 text-slate-200 font-light">
      <div className="relative w-full h-72 md:h-96">
        <img src="/react-project/image/pages/01.webp" alt="" className="w-full h-72 md:h-96 object-cover"/>
        <div className="term-of-use-hl">
          <h2 className="text-3xl font-medium mb-4 flex justify-center">Tags</h2>
          <p className="text-xl"><Link to="/otthome" className="netflix font-medium">Home</Link>&nbsp;/&nbsp;<span className="netflix">Tags</span></p>
        </div>
      </div>
      <section className="w-11/12 mx-auto py-10">
        <div>
            <p className="text-3xl font-normal my-5">Movie Tag</p>
            <div className="cast-grid">
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Action</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Adventure</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Animation</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Comedy</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Drama</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Family</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Fantasy</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">History</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Horror</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Mystery</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Recommended</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Sci-Fi</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
            </div>
            <div className='relative h-10 w-40 my-3 left-1/2 -translate-x-1/2'>
              <Link to=""><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">load more<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
            </div>
        </div>
        <div className="py-10">
            <p className="text-3xl font-normal my-5">Tv-show Tag</p>
            <div className="cast-grid">
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">4K Ultra</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Brother</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Kings</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Music</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Viking</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Avenger</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Thor</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Loki</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Stark</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Game of Thor</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Sheldon</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Missy</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
            </div>
            <div className='relative h-10 w-40 my-3 left-1/2 -translate-x-1/2'>
              <Link to=""><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">load more<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
            </div>
        </div>
        <div>
            <p className="text-3xl font-normal my-5">Video Tag</p>
            <div className="cast-grid">
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Action</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Adventure</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Animation</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Comedy</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Drama</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Family</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Fantasy</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">History</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Horror</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Mystery</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Recommended</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
                <div className="playlist-card card-item only-onstream-item">
                    <div className="sec9-image bg-stone-900">
                        <p className="font-normal text-xl netflix">Sci-Fi</p>
                        <div className="absolute h-1 w-full bottom-0 netflix-bg"></div>
                    </div>
                </div>
            </div>
            <div className='relative h-10 w-40 my-3 left-1/2 -translate-x-1/2'>
              <Link to=""><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">load more<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
            </div>
        </div>
      </section>
    </main>
  )
}

export default Tags