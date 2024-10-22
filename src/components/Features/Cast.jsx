import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Cast = () => {
  return (
    <main className="w-full h-auto bg-stone-950 text-slate-200 font-light">
      <div className="relative w-full h-60 md:h-72">
        <img src="/react-project/image/pages/01.webp" alt="" className="w-full h-60 md:h-72 object-cover"/>
        <div className="term-of-use-hl">
          <h2 className="text-3xl font-medium mb-4 flex justify-center">Cast</h2>
          <p className="text-xl"><Link to="/otthome" className="netflix font-medium">Home</Link>&nbsp;/&nbsp;<span className="netflix">Cast</span></p>
        </div>
      </div>
      <section className="w-11/12 mx-auto py-10">
        <div className="cast-grid">
            <div className="relative w-full h-auto">
              <img src="/react-project/image/cast/01.webp" alt="" className="-z-10"/>
              <div className="absolute top-0 left-0 w-full h-full bg-stone-950/40 z-10"></div>
              <div className="absolute left-4 bottom-4 z-20">
                  <p className="font-medium text-lg">Debbi Bossi</p>
                  <p>Production</p>
              </div>
            </div>
            <div className="relative">
              <img src="/react-project/image/cast/02.webp" alt="" className="-z-10"/>
              <div className="absolute top-0 left-0 w-full h-full bg-stone-950/40 z-10"></div>
              <div className="absolute left-4 bottom-4 z-20">
                  <p className="font-medium text-lg">Karen Gilchrist</p>
                  <p>Production</p>
              </div>
            </div>
            <div className="relative">
                <img src="/react-project/image/cast/03.webp" alt="" className="-z-10"/>
                <div className="absolute top-0 left-0 w-full h-full bg-stone-950/40 z-10"></div>
                <div className="absolute left-4 bottom-4 z-20">
                    <p className="font-medium text-lg">James Chinlund</p>
                    <p>Art</p>
                </div>
            </div>
            <div className="relative">
                <img src="/react-project/image/cast/04.webp" alt="" className="-z-10"/>
                <div className="absolute top-0 left-0 w-full h-full bg-stone-950/40 z-10"></div>
                <div className="absolute left-4 bottom-4 z-20">
                    <p className="font-medium text-lg">Brenda Chapman</p>
                    <p>Writing</p>
                </div>
            </div>
            <div className="relative">
                <img src="/react-project/image/cast/05.webp" alt="" className="-z-10"/>
                <div className="absolute top-0 left-0 w-full h-full bg-stone-950/40 z-10"></div>
                <div className="absolute left-4 bottom-4 z-20">
                    <p className="font-medium text-lg">Mark Livolsi</p>
                    <p>Edting</p>
                </div>
            </div>
            <div className="relative">
                <img src="/react-project/image/cast/06.webp" alt="" className="-z-10"/>
                <div className="absolute top-0 left-0 w-full h-full bg-stone-950/40 z-10"></div>
                <div className="absolute left-4 bottom-4 z-20">
                    <p className="font-medium text-lg">Caleb Deschannel</p>
                    <p>Camera</p>
                </div>
            </div>
            <div className="relative">
                <img src="/react-project/image/cast/07.webp" alt="" className="-z-10"/>
                <div className="absolute top-0 left-0 w-full h-full bg-stone-950/40 z-10"></div>
                <div className="absolute left-4 bottom-4 z-20">
                    <p className="font-medium text-lg">Hans Zimmer</p>
                    <p>Sound</p>
                </div>
            </div>
            <div className="relative">
                <img src="/react-project/image/cast/08.webp" alt="" className="-z-10"/>
                <div className="absolute top-0 left-0 w-full h-full bg-stone-950/40 z-10"></div>
                <div className="absolute left-4 bottom-4 z-20">
                    <p className="font-medium text-lg">John Bartnicki</p>
                    <p>Producer</p>
                </div>
            </div>
            <div className="relative">
                <img src="/react-project/image/cast/09.webp" alt="" className="-z-10"/>
                <div className="absolute top-0 left-0 w-full h-full bg-stone-950/40 z-10"></div>
                <div className="absolute left-4 bottom-4 z-20">
                    <p className="font-medium text-lg">Jeddrey Silver</p>
                    <p>Production</p>
                </div>
            </div>
            <div className="relative">
                <img src="/react-project/image/cast/10.webp" alt="" className="-z-10"/>
                <div className="absolute top-0 left-0 w-full h-full bg-stone-950/40 z-10"></div>
                <div className="absolute left-4 bottom-4 z-20">
                    <p className="font-medium text-lg">Linda Wolverton</p>
                    <p>Writing</p>
                </div>
            </div>
            <div className="relative">
                <img src="/react-project/image/cast/11.webp" alt="" className="-z-10"/>
                <div className="absolute top-0 left-0 w-full h-full bg-stone-950/40 z-10"></div>
                <div className="absolute left-4 bottom-4 z-20">
                    <p className="font-medium text-lg">Johnathan Robert</p>
                    <p>Writing</p>
                </div>
            </div>
            <div className="relative">
                <img src="/react-project/image/cast/11.webp" alt="" className="-z-10"/>
                <div className="absolute top-0 left-0 w-full h-full bg-stone-950/40 z-10"></div>
                <div className="absolute left-4 bottom-4 z-20">
                    <p className="font-medium text-lg">Irene Mecchi</p>
                    <p>Writing</p>
                </div>
            </div>
        </div>
        <div className='relative h-10 w-40 my-8 left-1/2 -translate-x-1/2'>
              <Link to=""><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">load more<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
            </div>
      </section>
    </main>
  )
}

export default Cast