import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faQuestion, faFilm, faTag, faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Listing = () => {
  return (
    <main className="w-full bg-stone-950 text-slate-200 h-auto font-light">

      <div className="relative w-full h-72 md:h-96">
        <img src="../image/pages/01.webp" alt="" className="w-full h-72 md:h-96 object-cover"/>
        <div className="term-of-use-hl">
          <h2 className="text-3xl font-medium mb-4 flex justify-center">Blog Listing</h2>
          <p className="text-xl"><Link to="/otthome" className="netflix font-medium">Home</Link>&nbsp;/&nbsp;<span className="netflix">Blog Listing</span></p>
        </div>
      </div>

       <section className="w-11/12 mx-auto py-7 flex flex-col lg:flex-row lg:gap-5 xl:px-10">

         <div className="w-full lg:w-2/3">
            <div className="w-full mb-5">
                <img src="../image/blog/blog3.webp" alt="" className="w-full h-auto"/>
                <div className="my-5">
                    <span className="bg-image-nothover relative p-2"><FontAwesomeIcon icon={faUser} className='pr-2'/>JENNY <span className="absolute left-0 top-0 w-0.5 h-full netflix-bg"></span></span>
                    <span className="bg-image-nothover relative p-2 ml-5"><FontAwesomeIcon icon={faCalendarDays} className='pr-2'/>DECEMBER 30, 2024 <span className="absolute left-0 top-0 w-0.5 h-full netflix-bg"></span></span>
                </div>
                <Link to="/blogdetail"><p className="text-3xl font-medium py-3 hover-red">The Most Anticipated Movies</p></Link>
                <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
                <div className="sub-but w-36 rounded-md overflow-hidden my-5 h-12 text-sm font-bold"><Link to="/blogdetail"><span className="sub-bg netflix-bg"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">read more</span></Link></div>
                <div className="my-3"><FontAwesomeIcon icon={faFilm} className='pr-2'/>Categories: <span className="px-1 ml-5 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">DRAMAS</span></div>
                <div><FontAwesomeIcon icon={faTag} className='pr-2'/>Tags: <span className="px-1 mx-3 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">COMEDY</span><span className="px-1 mx-3 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">DRAMAS</span><span className="px-1 mx-3 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">TRAILERS</span></div>
                <div className="w-full h-0.5 error-page-line-color my-7"></div>
            </div>
            <div className="w-full mb-5">
                <img src="../image/blog/blog2.webp" alt="" className="w-full h-auto"/>
                <div className="my-5">
                    <span className="bg-image-nothover relative p-2"><FontAwesomeIcon icon={faUser} className='pr-2'/>Goldenmace <span className="absolute left-0 top-0 w-0.5 h-full netflix-bg"></span></span>
                    <span className="bg-image-nothover relative p-2 ml-5"><FontAwesomeIcon icon={faCalendarDays} className='pr-2'/>DECEMBER 30, 2024 <span className="absolute left-0 top-0 w-0.5 h-full netflix-bg"></span></span>
                </div>
                <Link to="/blogdetail"><p className="text-3xl font-medium py-3 hover-red">Everything You Need to Know About</p></Link>
                <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
                <div className="sub-but w-36 rounded-md overflow-hidden my-5 h-12 text-sm font-bold"><Link to="/blogdetail"><span className="sub-bg netflix-bg"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">read more</span></Link></div>
                <div className="my-3"><FontAwesomeIcon icon={faFilm} className='pr-2'/>Categories: <span className="px-1 ml-5 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">MOVIE</span></div>
                <div><FontAwesomeIcon icon={faTag} className='pr-2'/>Tags: <span className="px-1 mx-3 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">MOVIE TRALERS</span><span className="px-1 mx-3 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">THRILL</span><span className="px-1 mx-3 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">TRAILERS</span></div>
                <div className="w-full h-0.5 error-page-line-color my-7"></div>
            </div>
            <div className="w-full mb-5">
                <img src="../image/blog/blog1.webp" alt="" className="w-full h-auto"/>
                <div className="my-5">
                    <span className="bg-image-nothover relative p-2"><FontAwesomeIcon icon={faUser} className='pr-2'/>Goldenmace <span className="absolute left-0 top-0 w-0.5 h-full netflix-bg"></span></span>
                    <span className="bg-image-nothover relative p-2 ml-5"><FontAwesomeIcon icon={faCalendarDays} className='pr-2'/>DECEMBER 30, 2024 <span className="absolute left-0 top-0 w-0.5 h-full netflix-bg"></span></span>
                </div>
                <Link to="/blogdetail"><p className="text-3xl font-medium py-3 hover-red">The Avenger</p></Link>
                <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
                <div className="sub-but w-36 rounded-md overflow-hidden my-5 h-12 text-sm font-bold"><Link to="/blogdetail"><span className="sub-bg netflix-bg"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">read more</span></Link></div>
                <div className="my-3"><FontAwesomeIcon icon={faFilm} className='pr-2'/>Categories: <span className="px-1 ml-5 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">MOVIE</span></div>
                <div><FontAwesomeIcon icon={faTag} className='pr-2'/>Tags: <span className="px-1 mx-3 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">MOVIE TRALERS</span><span className="px-1 mx-3 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">THRILL</span><span className="px-1 mx-3 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">TRAILERS</span></div>
                <div className="w-full h-0.5 error-page-line-color my-7"></div>
            </div>
            <div className="w-full mb-5">
                <img src="../image/blog/blog4.webp" alt="" className="w-full h-auto"/>
                <div className="my-5">
                    <span className="bg-image-nothover relative p-2"><FontAwesomeIcon icon={faUser} className='pr-2'/>Goldenmace <span className="absolute left-0 top-0 w-0.5 h-full netflix-bg"></span></span>
                    <span className="bg-image-nothover relative p-2 ml-5"><FontAwesomeIcon icon={faCalendarDays} className='pr-2'/>DECEMBER 30, 2024 <span className="absolute left-0 top-0 w-0.5 h-full netflix-bg"></span></span>
                </div>
                <Link to="/blogdetail"><p className="text-3xl font-medium py-3 hover-red">Gillian Anderson Shares</p></Link>
                <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
                <div className="sub-but w-36 rounded-md overflow-hidden my-5 h-12 text-sm font-bold"><Link to="/blogdetail"><span className="sub-bg netflix-bg"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">read more</span></Link></div>
                <div className="my-3"><FontAwesomeIcon icon={faFilm} className='pr-2'/>Categories: <span className="px-1 ml-5 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">MOVIE</span></div>
                <div><FontAwesomeIcon icon={faTag} className='pr-2'/>Tags: <span className="px-1 mx-3 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">MOVIE TRALERS</span><span className="px-1 mx-3 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">THRILL</span><span className="px-1 mx-3 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">TRAILERS</span></div>
                <div className="w-full h-0.5 error-page-line-color my-7"></div>
            </div>
            <div className="w-full mb-5">
                <img src="../image/blog/blog5.webp" alt="" className="w-full h-auto"/>
                <div className="my-5">
                    <span className="bg-image-nothover relative p-2"><FontAwesomeIcon icon={faUser} className='pr-2'/>Goldenmace <span className="absolute left-0 top-0 w-0.5 h-full netflix-bg"></span></span>
                    <span className="bg-image-nothover relative p-2 ml-5"><FontAwesomeIcon icon={faCalendarDays} className='pr-2'/>DECEMBER 30, 2024 <span className="absolute left-0 top-0 w-0.5 h-full netflix-bg"></span></span>
                </div>
                <Link to="/blogdetail"><p className="text-3xl font-medium py-3 hover-red">Saterday Night Live and...</p></Link>
                <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
                <div className="sub-but w-36 rounded-md overflow-hidden my-5 h-12 text-sm font-bold"><Link to="/blogdetail"><span className="sub-bg netflix-bg"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">read more</span></Link></div>
                <div className="my-3"><FontAwesomeIcon icon={faFilm} className='pr-2'/>Categories: <span className="px-1 ml-5 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">MOVIE</span></div>
                <div><FontAwesomeIcon icon={faTag} className='pr-2'/>Tags: <span className="px-1 mx-3 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">MOVIE TRALERS</span><span className="px-1 mx-3 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">THRILL</span><span className="px-1 mx-3 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">TRAILERS</span></div>
                <div className="w-full h-0.5 error-page-line-color my-7"></div>
            </div>
            <div className="w-full mb-5">
                <img src="../image/blog/blog6.webp" alt="" className="w-full h-auto"/>
                <div className="my-5">
                    <span className="bg-image-nothover relative p-2"><FontAwesomeIcon icon={faUser} className='pr-2'/>Goldenmace <span className="absolute left-0 top-0 w-0.5 h-full netflix-bg"></span></span>
                    <span className="bg-image-nothover relative p-2 ml-5"><FontAwesomeIcon icon={faCalendarDays} className='pr-2'/>DECEMBER 30, 2024 <span className="absolute left-0 top-0 w-0.5 h-full netflix-bg"></span></span>
                </div>
                <Link to="/blogdetail"><p className="text-3xl font-medium py-3 hover-red">Birds Of Preys Stars</p></Link>
                <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
                <div className="sub-but w-36 rounded-md overflow-hidden my-5 h-12 text-sm font-bold"><Link to="/blogdetail"><span className="sub-bg netflix-bg"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">read more</span></Link></div>
                <div className="my-3"><FontAwesomeIcon icon={faFilm} className='pr-2'/>Categories: <span className="px-1 ml-5 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">MOVIE</span></div>
                <div><FontAwesomeIcon icon={faTag} className='pr-2'/>Tags: <span className="px-1 mx-3 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">MOVIE TRALERS</span><span className="px-1 mx-3 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">THRILL</span><span className="px-1 mx-3 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">TRAILERS</span></div>
                <div className="w-full h-0.5 error-page-line-color my-7"></div>
            </div>
            <div className="w-full mb-5">
                <img src="../image/blog/blog7.webp" alt="" className="w-full h-auto"/>
                <div className="my-5">
                    <span className="bg-image-nothover relative p-2"><FontAwesomeIcon icon={faUser} className='pr-2'/>Goldenmace <span className="absolute left-0 top-0 w-0.5 h-full netflix-bg"></span></span>
                    <span className="bg-image-nothover relative p-2 ml-5"><FontAwesomeIcon icon={faCalendarDays} className='pr-2'/>DECEMBER 30, 2024 <span className="absolute left-0 top-0 w-0.5 h-full netflix-bg"></span></span>
                </div>
                <Link to="/blogdetail"><p className="text-3xl font-medium py-3 hover-red">Cookies and Web Beacons</p></Link>
                <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
                <div className="sub-but w-36 rounded-md overflow-hidden my-5 h-12 text-sm font-bold"><Link to="/blogdetail"><span className="sub-bg netflix-bg"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">read more</span></Link></div>
                <div className="my-3"><FontAwesomeIcon icon={faFilm} className='pr-2'/>Categories: <span className="px-1 ml-5 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">MOVIE</span></div>
                <div><FontAwesomeIcon icon={faTag} className='pr-2'/>Tags: <span className="px-1 mx-3 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">MOVIE TRALERS</span><span className="px-1 mx-3 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">THRILL</span><span className="px-1 mx-3 py-0.5 bg-stone-900 hover-bg-red transition-all duration-500">TRAILERS</span></div>
                <div className="w-full h-0.5 error-page-line-color my-7"></div>
            </div>
         </div>

         <div className="w-full lg:w-1/3">
            <div className="p-6 bg-slate-900 rounded-md text-white">
                <input type="text" className="form-control red-border !bg-black" name="Name" placeholder="Search"/>
            </div>
            <div className="p-6 bg-slate-900 rounded-md my-6">
                <p className="text-white text-2xl font-medium">Recent Post</p>
                <div className="flex items-center my-7">
                    <a href=""><img src="../image/blog/01.webp" alt="" className="w-20 h-auto"/></a>
                    <div className="pl-5">
                        <p className="text-lg font-medium">The Most Anticipated Movies</p>
                        <p className="mt-2"><FontAwesomeIcon icon={faCalendarDays} size='sm' className='pr-1 netflix'/>September 23, 2024</p>
                    </div>
                </div>
                <div className="flex items-center my-7">
                    <a href=""><img src="../image/blog/blog2.webp" alt="" className="w-20 h-auto"/></a>
                    <div className="pl-5">
                        <p className="text-lg font-medium">Amy Adams Always Dreamed</p>
                        <p className="mt-2"><FontAwesomeIcon icon={faCalendarDays} size='sm' className='pr-1 netflix'/>September 23, 2024</p>
                    </div>
                </div>
                <div className="flex items-center my-7">
                    <a href=""><img src="../image/blog/blog3.webp" alt="" className="w-24 h-auto"/></a>
                    <div className="pl-5">
                        <p className="text-lg lg:text-sm 2xl:text-lg font-medium">WandaVision Will Reveal Scarlet Witch's Untapped Powers</p>
                        <p className="mt-2"><FontAwesomeIcon icon={faCalendarDays} size='sm' className='pr-1 netflix'/>September 23, 2024</p>
                    </div>
                </div>
            </div>
            <div className="p-6 bg-slate-900 rounded-md text-white my-6">
                <p className="text-2xl font-medium">Categories</p>
                <div className="relative my-4 cursor-pointer blog-listing-cate-hover">
                    <p className="blog-listing-cate-text font-normal">Drama <span className="blog-listing-cate-num netflix">(4)</span></p>
                    <span className="blog-listing-cate-line netflix-bg"></span>
                </div>
                <hr className="mx-auto w-full border-slate-700"/>
                <div className="relative my-4 cursor-pointer blog-listing-cate-hover">
                    <p className="blog-listing-cate-text font-normal">Historical <span className="blog-listing-cate-num netflix">(7)</span></p>
                    <span className="blog-listing-cate-line netflix-bg"></span>
                </div>
                <hr className="mx-auto w-full border-slate-700"/>
                <div className="relative my-4 cursor-pointer blog-listing-cate-hover">
                    <p className="blog-listing-cate-text font-normal">Movie <span className="blog-listing-cate-num netflix">(2)</span></p>
                    <span className="blog-listing-cate-line netflix-bg"></span>
                </div>
                <hr className="mx-auto w-full border-slate-700"/>
                <div className="relative my-4 cursor-pointer blog-listing-cate-hover">
                    <p className="blog-listing-cate-text font-normal">Movie Tralers <span className="blog-listing-cate-num netflix">(6)</span></p>
                    <span className="blog-listing-cate-line netflix-bg"></span>
                </div>
                <hr className="mx-auto w-full border-slate-700"/>
                <div className="relative my-4 cursor-pointer blog-listing-cate-hover">
                    <p className="blog-listing-cate-text font-normal">Trailers <span className="blog-listing-cate-num netflix">(14)</span></p>
                    <span className="blog-listing-cate-line netflix-bg"></span>
                </div>
                <hr className="mx-auto w-full border-slate-700"/>
                <div className="relative my-4 cursor-pointer blog-listing-cate-hover">
                    <p className="blog-listing-cate-text font-normal">TV Rumor <span className="blog-listing-cate-num netflix">(9)</span></p>
                    <span className="blog-listing-cate-line netflix-bg"></span>
                </div>
                <hr className="mx-auto w-full border-slate-700"/>
                <div className="relative my-4 cursor-pointer blog-listing-cate-hover">
                    <p className="blog-listing-cate-text font-normal">TV Series <span className="blog-listing-cate-num netflix">(40)</span></p>
                    <span className="blog-listing-cate-line netflix-bg"></span>
                </div>
            </div>
            <div className="relative p-6 bg-slate-900 rounded-md text-slate-200 my-6">
                <p className="text-2xl font-medium pb-3">Tags</p>
                <div className="flex flex-wrap gap-2 my-3">
                    <a href=""><div className="bg-stone-950 px-1 py-0.5 transition-all duration-500 hover-bg-red">Action</div></a>
                    <a href=""><div className="bg-stone-950 px-1 py-0.5 transition-all duration-500 hover-bg-red">Comedies</div></a>
                    <a href=""><div className="bg-stone-950 px-1 py-0.5 transition-all duration-500 hover-bg-red">comedy</div></a>
                    <a href=""><div className="bg-stone-950 px-1 py-0.5 transition-all duration-500 hover-bg-red">Dramas</div></a>
                    <a href=""><div className="bg-stone-950 px-1 py-0.5 transition-all duration-500 hover-bg-red">Historical</div></a>
                    <a href=""><div className="bg-stone-950 px-1 py-0.5 transition-all duration-500 hover-bg-red">Horror</div></a>
                    <a href=""><div className="bg-stone-950 px-1 py-0.5 transition-all duration-500 hover-bg-red">Movie</div></a>
                    <a href=""><div className="bg-stone-950 px-1 py-0.5 transition-all duration-500 hover-bg-red">Movie Trailers</div></a>
                    <a href=""><div className="bg-stone-950 px-1 py-0.5 transition-all duration-500 hover-bg-red">Mystery</div></a>
                    <a href=""><div className="bg-stone-950 px-1 py-0.5 transition-all duration-500 hover-bg-red">Rumors</div></a>
                </div>
            </div>
            <div className="relative p-6 bg-slate-900 rounded-md text-slate-200 my-6">
              <span className="text-nowrap">Follow Us:</span>
              <span className=" flex justify-start items-center gap-3 mt-5 w-auto flex-wrap">
              <Link className="rounded-full bg-slate-700 origin-bottom transition-all duration-500 ease-in-out translate-y-0 cursor-pointer hover:-translate-y-1.5 hover-bg-red"><FontAwesomeIcon icon={faFacebook} className='px-2 pt-2 pb-1'/></Link>
              <Link className="rounded-full bg-slate-700 origin-bottom transition-all duration-500 ease-in-out translate-y-0 cursor-pointer hover:-translate-y-1.5 hover-bg-red"><FontAwesomeIcon icon={faTwitter} className='px-2 pt-2 pb-1'/></Link>
              <Link className="rounded-full bg-slate-700 origin-bottom transition-all duration-500 ease-in-out translate-y-0 cursor-pointer hover:-translate-y-1.5 hover-bg-red"><FontAwesomeIcon icon={faGithub} className='px-2 pt-2 pb-1'/></Link>
              <Link className="rounded-full bg-slate-700 origin-bottom transition-all duration-500 ease-in-out translate-y-0 cursor-pointer hover:-translate-y-1.5 hover-bg-red"><FontAwesomeIcon icon={faInstagram} className='px-2 pt-2 pb-1'/></Link>
              </span>
            </div>
            <div className="p-6 bg-slate-900 rounded-md my-6 flex justify-center items-center">
                <a href=""><img src="../image/blog/01.webp" alt="" className="h-80 w-auto"/></a>
            </div>
         </div>
       </section>
    </main>
  )
}

export default Listing