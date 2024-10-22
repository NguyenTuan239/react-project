import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faHeart, faDownload, faGaugeHigh, faLocationDot,faTrashCan,faStarHalf, faUser, faBorderAll, faTableCells, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Login.css'

const login = () => {
  return (
    <main className="login-bg fixed min-h-screen w-full bg-[url('/react-project/image/pages/01.webp')] bg-cover text-slate-200">
      <section className="absolute w-full h-full flex justify-center items-center z-10">
        <div className="login-bar">
            <Link to="/otthome" className="my-12 mx-auto"><img src="/react-project/image/logo.webp" className="logo h-9 w-auto"/></Link>
            <div className="w-full mb-4">
                <p className="font-medium mb-2">Username or Email Address</p>
                <input type="text" className="login-input red-border" required/>
            </div>
            <div className="w-full mb-4">
                <p className="font-medium mb-2">Password</p>
                <input type="password" className="login-input red-border" required/>
            </div>
            <Link to="/resetpassword" className="netflix ml-auto mb-2 italic font-medium">Forgot password?</Link>
            <label><input type="checkbox" className="login-check red-border mr-2"/>Remember Me</label>
            <div className='relative h-10 w-full my-6'>
                <Link to=""><div className="sub-but w-full h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">login<FontAwesomeIcon icon={faCaretRight} size='lg' className='pl-3'/></span></div></Link>
            </div>
            <p className="mx-auto">New to Streamit? <Link to="/register" className="netflix">&nbsp;Register</Link></p>
            <hr className="absolute top-3/4 mx-auto w-10/12 border-slate-800 my-4"/>
            <div className="absolute left-1/2 top-3/4 z-20 w-7 h-7 pt-1 text-center bg-stone-950">OR</div>
            <div className="flex gap-6 mx-auto mt-20 !text-slate-100">
                <a href="https://www.facebook.com/" className="follow-icon rounded-full bg-slate-900 origin-bottom transition-all duration-500 ease-in-out translate-y-0 cursor-pointer hover:-translate-y-1.5 hover-bg-red"><FontAwesomeIcon icon={faFacebook} size='lg' className='py-4 px-4'/></a>
                <a href="https://x.com/" className="follow-icon rounded-full bg-slate-900 origin-bottom transition-all duration-500 ease-in-out translate-y-0 cursor-pointer hover:-translate-y-1.5 hover-bg-red"><FontAwesomeIcon icon={faTwitter} size='lg' className='py-4 px-4'/></a>
                <a href="https://www.instagram.com/" className="follow-icon rounded-full bg-slate-900 origin-bottom transition-all duration-500 ease-in-out translate-y-0 cursor-pointer hover:-translate-y-1.5 hover-bg-red"><FontAwesomeIcon icon={faInstagram} size='lg' className='py-4 px-4'/></a>
            </div>
        </div>
      </section>
    </main>
  )
}

export default login