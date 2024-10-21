import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faQuestion, faHeadphones, faTag } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
  return (
    <main className="w-full h-auto bg-stone-950 text-slate-200 font-light">
      <div className="relative w-full h-72 md:h-96">
        <img src="../image/pages/01.webp" alt="" className="w-full h-72 md:h-96 object-cover"/>
        <div className="term-of-use-hl">
          <h2 className="text-3xl font-medium mb-4 flex justify-center">Contact Us</h2>
          <p className="text-xl"><Link to="/otthome" className="netflix font-medium">Home</Link>&nbsp;/&nbsp;<span className="netflix">Contact Us</span></p>
        </div>
      </div>

      <section className="w-11/12 mx-auto my-5 flex flex-col xl:justify-center xl:items-center xl:flex-row xl:gap-7">
        <form>
          <h2 className="text-4xl font-medium text-slate-100 py-3">Create With Us</h2>
          <p className="mb-7">To learn more about how Streamit can help you, contact us.</p>
          <div className="w-full flex flex-col lg:flex-row lg:gap-4">
              <div className="w-full">
                <input type="text" className="login-input red-border my-3" required placeholder="Your Name*"/>
                <input type="text" className="login-input red-border my-3" required placeholder="Last Name*"/>
              </div>
              <div className="w-full">
                <input type="text" className="login-input red-border my-3" required placeholder="Phone Number*"/>
                <input type="text" className="login-input red-border my-3" required placeholder="Your Email*"/>
              </div>
          </div>
          <textarea className="red-border login-input w-full !h-40 pt-3" name="Description" cols="5" rows="5" placeholder="Your Number"></textarea>
          <div className='relative h-10 w-40 mb-8 '>
            <Link to="/moviedetail"><div className="sub-but w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">sent messenger</span></div></Link>
          </div>
        </form>
        <div>
            <p className="font-medium text-slate-100 mt-5 mb-3">Come See Us</p>
            <p>Townhouse Agency Consoling. LLC 50 ean 2 See, 41A Xo Hai Phong NY 20159</p>
            <hr className="my-3 border-slate-700"/>
            <p className="font-medium text-slate-100 mt-5 mb-3">Get In Touch</p>
            <p className="netflix italic">support@streamit.com</p>
            <p>(012)3456 7890</p>
            <hr className="my-3 border-slate-700"/>
            <p className="font-medium text-slate-100 mt-5 mb-3">Follow Us:</p>
            <div className=" flex justify-start items-center gap-3 w-auto flex-wrap">
                <a className="follow-icon rounded-full bg-slate-700 origin-bottom transition-all duration-500 ease-in-out translate-y-0 cursor-pointer hover:-translate-y-1.5 hover-bg-red"><FontAwesomeIcon icon={faFacebook} className='px-2 pt-2 pb-1'/></a>
                <a className="follow-icon rounded-full bg-slate-700 origin-bottom transition-all duration-500 ease-in-out translate-y-0 cursor-pointer hover:-translate-y-1.5 hover-bg-red"><FontAwesomeIcon icon={faTwitter} className='px-2 pt-2 pb-1'/></a>
                <a className="follow-icon rounded-full bg-slate-700 origin-bottom transition-all duration-500 ease-in-out translate-y-0 cursor-pointer hover:-translate-y-1.5 hover-bg-red"><FontAwesomeIcon icon={faGithub} className='px-2 pt-2 pb-1'/></a>
                <a className="follow-icon rounded-full bg-slate-700 origin-bottom transition-all duration-500 ease-in-out translate-y-0 cursor-pointer hover:-translate-y-1.5 hover-bg-red"><FontAwesomeIcon icon={faInstagram} className='px-2 pt-2 pb-1'/></a>
              </div>
        </div>
      </section>

      <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29825.101859272927!2d106.67073349549447!3d20.866498032538214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7b15a4559941%3A0xaaead3b47e5359a2!2zTmjDoCBow6F0IFRow6BuaCBwaOG7kSBI4bqjaSBQaMOybmc!5e0!3m2!1svi!2sjp!4v1727919715256!5m2!1svi!2sjp" width="100%" height="550" style={{border: '0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
      
      <section className="w-11/12 mx-auto py-16">
            <p className="text-3xl font-semibold text-slate-100 py-7">To Learn More About How Me Can Help You, Contact Us. We'd Be Happy To Take On The Challenge!</p>
            <div className="contact-us-sec4-grid mt-4">
                <div className="flex gap-5 p-3 bg-stone-900">
                    <div className="bg-black w-16 h-16 flex justify-center items-center rounded-full text-white"><FontAwesomeIcon icon={faQuestion} size='xl'/></div>
                    <div>
                        <p className="text-xl font-medium text-slate-100 mb-4">For General Enquiries</p>
                        <p >Call On:&nbsp;&nbsp;<span className="netflix italic">(012)3456 7890</span></p>
                        <p>support@streamit.com </p>
                    </div>
                </div>
                <div className="flex gap-5 p-3 bg-stone-900">
                    <div className="bg-black w-16 h-16 flex justify-center items-center rounded-full text-white"><FontAwesomeIcon icon={faHeadphones} size='xl'/></div>
                    <div>
                        <p className="text-xl font-medium text-slate-100 mb-4">For user support</p>
                        <p >Call On:&nbsp;&nbsp;<span className="netflix italic">(012)3456 7890</span></p>
                        <p>user@streamit.com </p>
                    </div>
                </div>
                <div className="flex gap-5 p-3 bg-stone-900">
                    <div className="bg-black w-16 h-16 flex justify-center items-center rounded-full text-white"><FontAwesomeIcon icon={faTag} size='xl'/></div>
                    <div>
                        <p className="text-xl font-medium text-slate-100 mb-4">For sales Support</p>
                        <p >Call On:&nbsp;&nbsp;<span className="netflix italic">(012)3456 7890</span></p>
                        <p>sales@streamit.com </p>
                    </div>
                </div>
            </div>
        </section>
      
    </main>
  )
}

export default ContactUs