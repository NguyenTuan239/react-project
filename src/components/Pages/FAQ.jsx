import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faQuestion, faHeadphones, faTag } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  const [isFAQNavActive, setFAQNavActive] = useState(1)
  
  const handleFAQNavActive = (nav) => {
    if (nav !== isFAQNavActive) {
      setFAQNavActive(nav)
    }
  }

  return (
    <main className="w-full h-auto bg-stone-950 text-slate-200 font-light">

      <div className="relative w-full h-72 md:h-96">
        <img src="/react-project/image/pages/01.webp" alt="" className="w-full h-72 md:h-96 object-cover"/>
        <div className="term-of-use-hl">
          <h2 className="text-3xl font-medium mb-4 flex justify-center">FAQ</h2>
          <p className="text-xl"><Link to="/otthome" className="netflix font-medium">Home</Link>&nbsp;/&nbsp;<span className="netflix">FAQ</span></p>
        </div>
      </div>

      <section className="w-11/12 mx-auto mt-10">
        <div className="faq-container mx-auto">
            <div className="bg-stone-900 overflow-hidden my-5">
            <button
              onClick={() => handleFAQNavActive(1)}
              className="w-full flex justify-between items-center">
                    <h2 className="text-xl p-6 text-white font-normal md:text-2xl lg:text-3xl">What is streamit?</h2>
                    <div className="relative netflix-bg w-10 h-10 flex justify-center items-center mr-5">
                        <span className="w-4 h-0.5 bg-white"></span>
                        <span className={`${isFAQNavActive === 1 ? 'hidden' : ''} faq-plus-line`}></span>
                    </div>
                </button>
                <hr className="mx-auto w-11/12 border-slate-700"/>
                <div className={`${isFAQNavActive === 1 ? 'active' : ''} faq-des`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
            </div>
            <div className="bg-stone-900 overflow-hidden my-5">
            <button
              onClick={() => handleFAQNavActive(2)}
              className="w-full flex justify-between items-center">
                    <h2 className="text-xl p-6 text-white font-normal md:text-2xl lg:text-3xl">Will my account work outside my country?</h2>
                    <div className="relative netflix-bg w-10 h-10 flex justify-center items-center mr-5">
                        <span className="w-4 h-0.5 bg-white"></span>
                        <span className={`${isFAQNavActive === 2 ? 'hidden' : ''} faq-plus-line`}></span>
                    </div>
                </button>
                <hr className="mx-auto w-11/12 border-slate-700"/>
                <div className={`${isFAQNavActive === 2 ? 'active' : ''} faq-des`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
            </div>
            <div className="bg-stone-900 overflow-hidden my-5">
            <button
              onClick={() => handleFAQNavActive(3)}
              className="w-full flex justify-between items-center">
                    <h2 className="text-xl p-6 text-white font-normal md:text-2xl lg:text-3xl">I am facing video playback issues. What do I do?</h2>
                    <div className="relative netflix-bg w-10 h-10 flex justify-center items-center mr-5">
                        <span className="w-4 h-0.5 bg-white"></span>
                        <span className={`${isFAQNavActive === 3 ? 'hidden' : ''} faq-plus-line`}></span>
                    </div>
                </button>
                <hr className="mx-auto w-11/12 border-slate-700"/>
                <div className={`${isFAQNavActive === 3 ? 'active' : ''} faq-des`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
            </div>
            <div className="bg-stone-900 overflow-hidden my-5">
            <button
              onClick={() => handleFAQNavActive(4)}
              className="w-full flex justify-between items-center">
                    <h2 className="text-xl p-6 text-white font-normal md:text-2xl lg:text-3xl">What benefits do I get with the packs?</h2>
                    <div className="relative netflix-bg w-10 h-10 flex justify-center items-center mr-5">
                        <span className="w-4 h-0.5 bg-white"></span>
                        <span className={`${isFAQNavActive === 4 ? 'hidden' : ''} faq-plus-line`}></span>
                    </div>
                </button>
                <hr className="mx-auto w-11/12 border-slate-700"/>
                <div className={`${isFAQNavActive === 4 ? 'active' : ''} faq-des`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
            </div>
            <div className="bg-stone-900 overflow-hidden my-5">
            <button
              onClick={() => handleFAQNavActive(5)}
              className="w-full flex justify-between items-center">
                    <h2 className="text-xl p-6 text-white font-normal md:text-2xl lg:text-3xl">How can I manage notifications?</h2>
                    <div className="relative netflix-bg w-10 h-10 flex justify-center items-center mr-5">
                        <span className="w-4 h-0.5 bg-white"></span>
                        <span className={`${isFAQNavActive === 5 ? 'hidden' : ''} faq-plus-line`}></span>
                    </div>
                </button>
                <hr className="mx-auto w-11/12 border-slate-700"/>
                <div className={`${isFAQNavActive === 5 ? 'active' : ''} faq-des`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
            </div>
        </div>
      </section>
    </main>
  )
}

export default FAQ