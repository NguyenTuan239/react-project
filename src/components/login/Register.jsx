import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

const register = () => {
  return (
    <main className="login-bg fixed min-h-screen w-full bg-[url('/image/pages/01.webp')] bg-cover text-slate-200">
      <section className="absolute w-full h-full flex justify-center items-center z-10">
        <form className="register-b register-bar">
            <h1 className="mx-auto mt-12 mb-10 text-xl font-medium">Creat Your Account</h1>
            <div className="register-2col">
                <div className="w-full mb-3">
                    <p className="font-medium mb-2">First Name</p>
                    <input type="text" className="login-input red-border" required/>
                </div>
                <div className="w-full mb-3">
                    <p className="font-medium mb-2">Last Name</p>
                    <input type="text" className="login-input red-border" required/>
                </div>
                <div className="w-full mb-3">
                    <p className="font-medium mb-2">Username*</p>
                    <input type="text" className="login-input red-border" required/>
                </div>
                <div className="w-full mb-3">
                    <p className="font-medium mb-2">Email*</p>
                    <input type="text" className="login-input red-border" required/>
                </div>
                <div className="w-full mb-3">
                    <p className="font-medium mb-2">Password*</p>
                    <input type="text" className="login-input red-border" required/>
                </div>
                <div className="w-full mb-3">
                    <p className="font-medium mb-2">Comfirm Password*</p>
                    <input type="text" className="login-input red-border" required/>
                </div>
            </div>
            <div className="my-4">
                <label><input type="checkbox" className="login-check red-border mr-2"/>I've read and accept the</label>
                <Link to="/termsofuse" className="netflix">terms & conditions*</Link>
            </div>
            <div className='relative h-10 w-full mb-8'>
              <Link to=""><div className="sub-but w-full h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">sign up</span></div></Link>
            </div>
            <p className="mx-auto">Already have an account?<Link to="/login" className="netflix">&nbsp;Login</Link></p>
        </form>
      </section>
    </main>
  )
}

export default register