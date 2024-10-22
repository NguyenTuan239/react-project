import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faQuestion, faHeadphones, faTag, faCheck } from '@fortawesome/free-solid-svg-icons';

const PricingPlan = () => {
  return (
    <main className="w-full h-auto bg-stone-950 text-slate-200 font-light">

      <div className="relative w-full h-72 md:h-96">
        <img src="../image/pages/01.webp" alt="" className="w-full h-72 md:h-96 object-cover"/>
        <div className="term-of-use-hl">
          <h2 className="text-3xl font-medium mb-4 flex justify-center">Privacy and Policy</h2>
          <p className="text-xl"><Link href="/otthome" className="netflix font-medium">Home</Link>&nbsp;/&nbsp;<span className="netflix">Privacy and Policy</span></p>
        </div>
      </div>

       <section className="w-11/12 mx-auto py-7 font-normal">
        <div className="contact-us-sec4-grid ">
            <div className="relative">
                <p className="pl-14 py-16 text-2xl">Free</p>
                <div className="bg-stone-900 w-full h-auto p-14">
                    <p className="pb-7 text-lg p-0.5"><FontAwesomeIcon icon={faCheck} className='pr-3 netflix'/>Ads free movies and shows</p>
                    <p className="pb-7 text-lg">✖️ &nbsp;Watch on TV or Laptop</p>
                    <p className="pb-7 text-lg">✖️ &nbsp;Streamit Special</p>
                    <p className="pb-7 text-lg">✖️ &nbsp;Max video quality</p>
                    <a href="#"><div className="sub-but mt-5 w-full h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">select free<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-2' /></span></div></a>
                </div>
                <span className="absolute w-full h-0.5 top-0 netflix-bg"></span>
                <span className="absolute w-0.5 h-full left-0 top-0 linear-red"></span>
                <span className="absolute w-0.5 h-full right-0 top-0 linear-red"></span>
            </div>
            <div className="relative">
                <p className="pl-14 pt-16 pb-10 text-2xl">Premium</p>
                <p className="pl-14 pb-14 text-2xl"><span className="text-5xl line-through">$49</span><span className="netflix text-5xl">$39</span>/3 Month</p>
                <div className="bg-stone-900 w-full h-auto p-14">
                    <p className="pb-7 text-lg p-0.5"><FontAwesomeIcon icon={faCheck} className='pr-3 netflix'/>Ads free movies and shows</p>
                    <p className="pb-7 text-lg p-0.5"><FontAwesomeIcon icon={faCheck} className='pr-3 netflix'/>Watch on TV or Laptop</p>
                    <p className="pb-7 text-lg p-0.5"><FontAwesomeIcon icon={faCheck} className='pr-3 netflix'/>Streamit Special</p>
                    <p className="pb-7 text-lg p-0.5"><FontAwesomeIcon icon={faCheck} className='pr-3 netflix'/>Max video quality</p>
                    <a href="#"><div className="sub-but mt-5 w-full h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">select premium<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-2' /></span></div></a>
                </div>
                <span className="absolute w-full h-10 top-0 netflix-bg flex justify-center items-center"> Save 20%</span>
                <span className="absolute w-0.5 h-full left-0 top-0 linear-red"></span>
                <span className="absolute w-0.5 h-full right-0 top-0 linear-red"></span>
            </div>
            <div className="relative">
                <p className="pl-14 pt-16 pb-10 text-2xl">Basic</p>
                <p className="pl-14 pb-14 text-2xl"><span className="netflix text-5xl">$19</span>/1 Month</p>
                <div className="bg-stone-900 w-full h-auto p-14">
                    <p className="pb-7 text-lg">✖️ &nbsp;Ads free movies and shows</p>
                    <p className="pb-7 text-lg p-0.5"><FontAwesomeIcon icon={faCheck} className='pr-3 netflix'/>Watch on TV or Laptop</p>
                    <p className="pb-7 text-lg p-0.5"><FontAwesomeIcon icon={faCheck} className='pr-3 netflix'/>Streamit Special</p>
                    <p className="pb-7 text-lg p-0.5"><FontAwesomeIcon icon={faCheck} className='pr-3 netflix'/>Max video quality</p>
                    <a href="#"><div className="sub-but mt-5 w-full h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">select basic<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-2' /></span></div></a>
                </div>
                <span className="absolute w-full h-0.5 top-0 netflix-bg flex justify-center items-center"></span>
                <span className="absolute w-0.5 h-full left-0 top-0 linear-red"></span>
                <span className="absolute w-0.5 h-full right-0 top-0 linear-red"></span>
            </div>
        </div>
       </section>
    </main>
  )
}

export default PricingPlan