import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faQuestion, faHeadphones, faTag, faCheck } from '@fortawesome/free-solid-svg-icons';

const ErrorPage2 = () => {
  return (
    <section class="relative w-full min-h-screen text-slate-200 bg-[url('/image/pages/404-two.webp')] flex flex-col justify-center items-center">
        <div class="flex flex-col items-center">
            <div class="relative text-nowrap w-full pl-5">
                <span class="error-page-number-41"><span>4</span><span class="error-page-number-410">4</span></span>
                <span class="error-page-number-0">0</span>
                <span class="error-page-number-42"><span>4</span><span class="error-page-number-410">4</span></span>
            </div>
            <div class="error-page-text">
                ohhh no..! you lost in imagination.
            </div>
            <div class="text-center p-10">we are sorry, but the page you are looking for doesn't exist.</div>
            <Link to="/otthome"><div class="sub-but my-5 w-36 h-12 text-sm font-bold"><span class="sub-bg netflix-bg rounded-md"></span><span class="sub-but1"></span><span class="sub-but2"></span><span class="sub-but-text">back to home<FontAwesomeIcon icon={faCaretRight} className='pl-2'/></span></div></Link>
        </div>
     </section>
  )
}

export default ErrorPage2