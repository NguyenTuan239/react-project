import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faQuestion, faHeadphones, faTag, faCheck } from '@fortawesome/free-solid-svg-icons';

const ErrorPage1 = () => {
  return (
    <section className="relative w-full min-h-screen bg-slate-950 text-slate-200 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
          <div className="relative text-nowrap w-full">
              <span className="error-page-number-41">4<span className="error-page-number-41-ft"></span></span>
              <span className="error-page-number-0">0</span>
              <span className="error-page-number-42">4</span>
          </div>
          <div className="error-page-text">
              Oops! something went wrong
              <span className="absolute w-1/2 h-0.5 top-0 left-1/4 error-page-line-color"></span>
              <span className="absolute w-1/2 h-0.5 bottom-0 left-1/4 error-page-line-color"></span>
          </div>
          <div className="text-center p-10">I am sorry, it looks like the page you are looking for isn't in our system</div>
          <Link to="/otthome"><div className="sub-but my-5 w-36 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">back to home<FontAwesomeIcon icon={faCaretRight} className='pl-2'/></span></div></Link>
      </div>
     </section>
  )
}

export default ErrorPage1