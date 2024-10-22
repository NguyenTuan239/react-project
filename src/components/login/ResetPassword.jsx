import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faHeart, faDownload, faGaugeHigh, faLocationDot,faTrashCan,faStarHalf, faUser, faBorderAll, faTableCells, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const ResetPassword = () => {
  return (
    <main className="login-bg fixed min-h-screen w-full bg-[url('/image/pages/01.webp')] bg-cover text-slate-200">
      <section className="absolute w-full h-full flex justify-center items-center z-10">
        <div className="login-bar reset-password-bar">
            <p className="font-light mt-12 mb-5">Please enter your username or email address. You will receive a link to create a new password via email.</p>
            <div className="w-full mb-10">
                <p className="font-medium mb-3">Username or Email Address</p>
                <input type="text" className="login-input red-border" required/>
            </div>
            <div className='relative h-10 w-full mb-3'>
                <Link to=""><div className="sub-but w-48 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">get new password<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
            </div>
            <hr className="mx-auto w-full border-slate-800 my-4"/>
            <div className='relative h-10 w-full mb-3'>
                <Link to="/login"><div className="sub-but w-32 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">login<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
            </div>
        </div>
      </section>
    </main>
  )
}

export default ResetPassword