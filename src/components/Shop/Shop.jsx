import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faHeart, faChevronRight, faEye, faTrashCan,faStarHalf, faCaretRight, faBorderAll, faTableCells, faBraille } from '@fortawesome/free-solid-svg-icons';

export const Shop = () => {
  return (
    <main className="w-full h-auto bg-stone-950 text-slate-200 font-light">

      <div className="relative w-full h-72 md:h-96">
        <img src="/image/pages/01.webp" alt="" className="w-full h-72 md:h-96 object-cover"/>
        <div className="term-of-use-hl">
          <h2 className="text-3xl font-medium mb-4 flex justify-center">Shop</h2>
          <p className="text-xl"><Link to="/otthome" className="netflix font-medium">Home</Link>&nbsp;/&nbsp;<span className="netflix">Shop</span></p>
        </div>
      </div>

       <section className="w-11/12 mx-auto mt-10 xl:flex xl:gap-7">
        <div className="xl:w-1/4">
            <div className="my-5">
                <h2 className="text-2xl my-5 font-medium">Product categories</h2>
                <p className="p-3">Activeman (4)</p>
                <p className="p-3">Disney World (2)</p>
                <p className="p-3">Galaxy Heaven (1)</p>
                <p className="p-3">Haunted Halloween (6)</p>
                <p className="p-3">Marvel Studios (3)</p>
                <p className="p-3">Monster-House (4)</p>
                <p className="p-3">Quid Game (1)</p>
                <p className="p-3">The Flashv (1)</p>
                <p className="p-3">The Madrid (3)</p>
                <p className="p-3">The-Champion(4)</p>
                <p className="p-3">Uptight Birds (1)</p>
                <p className="p-3">Warner Bros Films (2)</p>
            </div>
            <hr className="w-full border-slate-700"/>
            <div className="my-5">
              <h3 className="uppercase text-2xl font-medium py-5">Price Filter</h3>
              <div id="filter-container" className="relative w-full h-1 bg-white cursor-pointer">
                <div id="slider-range" className="absolute h-full bg-red-600"></div>
                <span id="filter-change-left" className="absolute -top-1 w-3 h-3 bg-red-600 cursor-pointer"></span>
                <span id="filter-change-right" className="absolute -top-1 w-3 h-3 bg-red-600 cursor-pointer"></span>
              </div>
              <div className="my-5">Price:&nbsp;&nbsp; $<span id="filter-change-left-price">10</span>&nbsp; -&nbsp; $<span id="filter-change-right-price">45</span></div>
            </div>  
            <hr className="w-full border-slate-700"/>
            <div className="pt-10">
              <p className="text-2xl font-medium">PRODUCT SIZE</p>
              <p className="py-5 my-3 flex gap-5"><span className="px-3 py-1 transition-all duration-500 font-medium text-lg border-2 border-gray-800 cursor-pointer hover-bg-red">L</span><span className="px-3 py-1 transition-all duration-500 font-medium text-lg border-2 border-gray-800 cursor-pointer hover-bg-red">M</span><span className="px-3 py-1 transition-all duration-500 font-medium text-lg border-2 border-gray-800 cursor-pointer hover-bg-red">S</span></p>
            </div>
            <hr className="w-full border-slate-700"/>
            <div className="py-5">
              <p className="text-2xl font-medium my-5">PRODUCT</p>
              <div className="flex gap-5 items-center">
                <img src="../../image/shop/product/01.webp" alt="" className="w-20 h-auto"/>
                <div>
                  <p>Magic Hat</p>
                  <p>$10.00</p>
                </div>
              </div>
              <div className="flex gap-5 items-center my-5">
                <img src="../../image/shop/product/02.webp" alt="" className="w-20 h-auto"/>
                <div>
                  <p>Green Specs</p>
                  <p>$19.00</p>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <img src="../../image/shop/product/03.webp" alt="" className="w-20 h-auto"/>
                <div>
                  <p>Cartoon Character</p>
                  <p>$14.00</p>
                </div>
              </div>
            </div>
        </div>
        <div className="xl:w-3/4 mt-5">
          <div className="flex justify-between items-center pr-16">
            <span>Showing 1-10 of 31 results</span>
            <div className="pr-3">
              <span className="mr-4 py-3 px-5 bg-stone-800">
                <button id="shop-grid-bt-1" className="cursor-pointer "><FontAwesomeIcon icon={faList} className='pr-5'/></button>
                <button id="shop-grid-bt-2" className="cursor-pointer "><FontAwesomeIcon icon={faBorderAll} className='pr-5' /></button>
                <button id="shop-grid-bt-3" className="cursor-pointer netflix"><FontAwesomeIcon icon={faTableCells} className='pr-5' /></button>
                <button id="shop-grid-bt-4" className="cursor-pointer "><FontAwesomeIcon icon={faBraille} /></button>
              </span>
              <select name="movieselect" className="playlist-privacy-select !w-32 red-border my-1">
                <option value="1">Default sorting</option>
                <option value="2">Sort by popularity</option>
                <option value="3">Sort by rating</option>
                <option value="4">Sort by lastest</option>
                <option value="4">Sort by price: low to high</option>
                <option value="4">Sort by price: high to low</option>
              </select>
            </div>
          </div>
          <div id="shop-grid" className="shop-grid my-10">
            <div className="shop-product-item relative">
              <div className="relative">
                  <a href="#"><img src="../../image/shop/product/01.webp" alt="" className="relative w-full h-auto"/></a>
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="shop-hover-item netflix-bg"><FontAwesomeIcon icon={faEye}/><FontAwesomeIcon icon={faHeart} className='px-5'/><FontAwesomeIcon icon={faTrashCan}/></div>
                  </div>
                  <span className="absolute top-3 font-medium left-3 netflix-bg px-2 py-0.5">sale!</span>
              </div>
              <div className="flex flex-col items-center mt-4">
                  <p>Black Bow</p>
                  <p><span className="line-through text-gray-400">$48.00</span>&nbsp;$28.00</p>
                  <p className="mt-2">⭐⭐⭐⭐<i className="fa-solid fa-star-half"></i></p>
              </div>
            </div>
            <div className="shop-product-item relative">
              <div className="relative">
                  <a href="#"><img src="../../image/shop/product/02.webp" alt="" className="relative w-full h-auto"/></a>
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="shop-hover-item netflix-bg"><FontAwesomeIcon icon={faEye}/><FontAwesomeIcon icon={faHeart} className='px-5'/><FontAwesomeIcon icon={faEye}/></div>
                  </div>
              </div>
              <div className="flex flex-col items-center mt-4">
                  <p>Believe Mask</p>
                  <p>$18.00</p>
                  <p className="mt-2">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <div className="shop-product-item relative">
              <div className="relative">
                  <a href="#"><img src="../../image/shop/product/03.webp" alt="" className="relative w-full h-auto"/></a>
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="shop-hover-item netflix-bg"><FontAwesomeIcon icon={faEye}/><FontAwesomeIcon icon={faHeart} className='px-5'/><FontAwesomeIcon icon={faEye}/></div>
                  </div>
              </div>
              <span className="absolute top-3 font-medium left-3 netflix-bg px-2 py-0.5">sale!</span>
              <div className="flex flex-col items-center mt-4">
                  <p>Black I</p>
                  <p><span className="line-through text-gray-400">$28.00</span>&nbsp;$18.00</p>
                  <p className="mt-2">⭐⭐⭐⭐<i className="fa-solid fa-star-half"></i></p>
              </div>
            </div>
            <div className="shop-product-item relative">
              <div className="relative">
                  <a href="#"><img src="../../image/shop/product/04.webp" alt="" className="relative w-full h-auto"/></a>
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="shop-hover-item netflix-bg"><FontAwesomeIcon icon={faEye}/><FontAwesomeIcon icon={faHeart} className='px-5'/><FontAwesomeIcon icon={faEye}/></div>
                  </div>
              </div>
              <span className="absolute top-3 font-medium left-3 netflix-bg px-2 py-0.5">sale!</span>
              <div className="flex flex-col items-center mt-4">
                  <p>Black Hat</p>
                  <p><span className="line-through text-gray-400">$38.00</span>&nbsp;$28.00</p>
                  <p className="mt-2">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <div className="shop-product-item relative">
              <div className="relative">
                  <a href="#"><img src="../../image/shop/product/05.webp" alt="" className="relative w-full h-auto"/></a>
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="shop-hover-item netflix-bg"><FontAwesomeIcon icon={faEye}/><FontAwesomeIcon icon={faHeart} className='px-5'/><FontAwesomeIcon icon={faEye}/></div>
                  </div>
              </div>
              <span className="absolute top-3 font-medium left-3 netflix-bg px-2 py-0.5">sale!</span>
              <div className="flex flex-col items-center mt-4">
                  <p>Boxing Gloves</p>
                  <p><span className="line-through text-gray-400">$38.00</span>&nbsp;$18.00</p>
                  <p className="mt-2">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <div className="shop-product-item relative">
              <div className="relative">
                  <a href="#"><img src="../../image/shop/product/06.webp" alt="" className="relative w-full h-auto"/></a>
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="shop-hover-item netflix-bg"><FontAwesomeIcon icon={faEye}/><FontAwesomeIcon icon={faHeart} className='px-5'/><FontAwesomeIcon icon={faEye}/></div>
                  </div>
              </div>
              <div className="flex flex-col items-center mt-4">
                  <p>Carry Bag</p>
                  <p>$18.00</p>
                  <p className="mt-2">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <div className="shop-product-item relative">
              <div className="relative">
                  <a href="#"><img src="../../image/shop/product/07.webp" alt="" className="relative w-full h-auto"/></a>
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="shop-hover-item netflix-bg"><FontAwesomeIcon icon={faEye}/><FontAwesomeIcon icon={faHeart} className='px-5'/><FontAwesomeIcon icon={faEye}/></div>
                  </div>
              </div>
              <div className="flex flex-col items-center mt-4">
                  <p>Catton Character</p>
                  <p>$18.00</p>
                  <p className="mt-2">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <div className="shop-product-item relative">
              <div className="relative">
                  <a href="#"><img src="../../image/shop/product/08.webp" alt="" className="relative w-full h-auto"/></a>
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="shop-hover-item netflix-bg"><FontAwesomeIcon icon={faEye}/><FontAwesomeIcon icon={faHeart} className='px-5'/><FontAwesomeIcon icon={faEye}/></div>
                  </div>
              </div>
              <div className="flex flex-col items-center mt-4">
                  <p>Big Coca</p>
                  <p>$10.00</p>
                  <p className="mt-2">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <div className="shop-product-item relative">
              <div className="relative">
                  <a href="#"><img src="../../image/shop/product/09.webp" alt="" className="relative w-full h-auto"/></a>
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="shop-hover-item netflix-bg"><FontAwesomeIcon icon={faEye}/><FontAwesomeIcon icon={faHeart} className='px-5'/><FontAwesomeIcon icon={faEye}/></div>
                  </div>
              </div>
              <div className="flex flex-col items-center mt-4">
                  <p>Game center</p>
                  <p>$20.00</p>
                  <p className="mt-2">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>
        </div>
       </section>
    </main>
  )
}
 export default Shop