import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faHeart, faDownload, faGaugeHigh, faLocationDot,faTrashCan,faStarHalf, faUser, faBorderAll, faTableCells, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const MyAccount = () => {

  const [isNavToggle, setNavToggle] = useState(1);

  const handleNavToggle = (nav) => {
    if (nav !== isNavToggle) {
      setNavToggle(nav)
    }
  }

  return (
    <main className="w-full h-auto bg-stone-950 text-slate-200 font-light">

      <div className="relative w-full h-72 md:h-96">
        <img src="/react-project/image/pages/01.webp" alt="" className="w-full h-72 md:h-96 object-cover"/>
        <div className="term-of-use-hl">
          <h2 className="text-3xl font-medium mb-4 flex justify-center">My Account</h2>
          <p className="text-xl"><Link to="/otthome" className="netflix font-medium">Home</Link>&nbsp;/&nbsp;<span className="netflix">My Account</span></p>
        </div>
      </div>

      <section className="w-11/12 mx-auto py-5 md:flex md:items-start md:gap-5 xl:w-10/12 2xl:w-8/12">
        <div className="w-full p-5 bg-stone-900 mt-10 md:w-1/3 "> 
          <button
            onClick={()=> handleNavToggle(1)}
            className={`${isNavToggle === 1 ? 'netflix' : ''} relative w-36 my-4 py-1 hover-red flex`}><FontAwesomeIcon icon={faGaugeHigh} className='pr-2' />Dashboard</button>
          <button
            onClick={()=> handleNavToggle(2)}
            className={`${isNavToggle === 2 ? 'netflix' : ''} relative w-36 my-4 py-1 hover-red flex`}><FontAwesomeIcon icon={faList} className='pr-2' />
            Orders
          </button>
          <button
            onClick={()=> handleNavToggle(3)}
            className={`${isNavToggle === 3 ? 'netflix' : ''} relative w-36 my-4 py-1 hover-red flex`}><FontAwesomeIcon icon={faDownload} className='pr-2' />
            Downloads
          </button>
          <button
            onClick={()=> handleNavToggle(4)}
            className={`${isNavToggle === 4 ? 'netflix' : ''} relative w-36 my-4 py-1 hover-red flex`}><FontAwesomeIcon icon={faLocationDot} className='pr-2' />
            Address
          </button>
          <button
            onClick={()=> handleNavToggle(5)}
            className={`${isNavToggle === 5 ? 'netflix' : ''} relative w-36 my-4 py-1 hover-red flex`}><FontAwesomeIcon icon={faUser} className='pr-2' />
            Account details
          </button>
          <button
            onClick={()=> handleNavToggle(6)}
            className={`${isNavToggle === 6 ? 'netflix' : ''} relative w-36 my-4 py-1 hover-red flex`}><FontAwesomeIcon icon={faRightFromBracket} className='pr-2' />
            Logout
          </button>
        </div>
        <div className="w-full mt-10 md:w-2/3">
          <div
            className={`${isNavToggle === 1 ? '' : 'hidden'} detail-movie-des bg-stone-900 p-5`}>
                <p className="py-4">Hello Nguyen Van Tuan (not Tuan? <Link to="/login" className="netflix">Log out</Link>)</p>
                <p>From your account dashboard you can view your <a href="" className="netflix">recent orders</a> , manage your <a href="" className="netflix">shipping and billing addresses</a> , and <a href="" className="netflix">edit your password and account details</a> .</p>
            </div>
            <div className={`${isNavToggle === 2 ? '' : 'hidden'} detail-movie-des bg-stone-900 p-5 table-wrapper`}>
                <table className="detail-mv-table">
                    <thead className="bg-black">
                      <tr className="">
                        <th className="py-6 pl-5">
                          Order
                        </th>
                        <th className="py-6 pl-5">
                          Date
                        </th>
                        <th className="py-6 pl-5">
                          Status
                        </th>
                        <th className="py-6 pl-5">
                          Total
                        </th>
                        <th className="py-6 pl-5">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-black">
                        <td>
                          <p className="netflix">#32604</p>
                        </td>
                        <td className="text-nowrap">
                            May 28, 2024
                        </td>
                        <td>
                            Cancelled
                        </td>
                        <td className="text-nowrap">
                            $215.00 For 1 Items
                        </td>
                        <td className="flex gap-2">
                            <a href="#"><div className="sub-but my-3 w-16 h-10 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">pay</span></div></a>
                            <a href="#"><div className="sub-but my-3 w-16 h-10 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">view</span></div></a>
                            <a href="#"><div className="sub-but my-3 w-16 h-10 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">cancel</span></div></a>
                        </td>
                      </tr>
                      <tr className="bg-black">
                        <td>
                          <p className="netflix">#32584</p>
                        </td>
                        <td className="text-nowrap">
                            May 28, 2024
                        </td>
                        <td>
                            On Hold
                        </td>
                        <td className="text-nowrap">
                            $522.00 For 5 Items
                        </td>
                        <td className="flex gap-2">
                            <a href="#"><div className="sub-but my-3 w-16 h-10 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">pay</span></div></a>
                            <a href="#"><div className="sub-but my-3 w-16 h-10 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">view</span></div></a>
                            <a href="#"><div className="sub-but my-3 w-16 h-10 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">cancel</span></div></a>
                        </td>
                      </tr>
                      <tr className="bg-black">
                        <td>
                          <p className="netflix">#32584</p>
                        </td>
                        <td className="text-nowrap">
                            May 30, 2024
                        </td>
                        <td>
                            Processing
                        </td>
                        <td className="text-nowrap">
                            $243.00 For 2 Items
                        </td>
                        <td className="flex gap-2">
                            <a href="#"><div className="sub-but my-3 w-16 h-10 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">pay</span></div></a>
                            <a href="#"><div className="sub-but my-3 w-16 h-10 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">view</span></div></a>
                            <a href="#"><div className="sub-but my-3 w-16 h-10 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">cancel</span></div></a>
                        </td>
                      </tr>
                      <tr className="bg-black">
                        <td>
                          <p className="netflix">#23663</p>
                        </td>
                        <td className="text-nowrap">
                            April 15, 2022
                        </td>
                        <td>
                            Completed
                        </td>
                        <td className="text-nowrap">
                            $64.00 For 1 Items
                        </td>
                        <td className="flex gap-2">
                            <a href="#"><div className="sub-but my-3 w-16 h-10 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">view</span></div></a>
                        </td>
                      </tr>
                      <tr className="bg-black">
                        <td>
                          <p className="netflix">#23663</p>
                        </td>
                        <td className="text-nowrap">
                            April 10, 2022
                        </td>
                        <td>
                            Completed
                        </td>
                        <td className="text-nowrap">
                            $84.00 For 3 Items
                        </td>
                        <td className="flex gap-2">
                            <a href="#"><div className="sub-but my-3 w-16 h-10 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">view</span></div></a>
                        </td>
                      </tr>
                      <tr className="bg-black">
                        <td>
                          <p className="netflix">#23663</p>
                        </td>
                        <td className="text-nowrap">
                            April 6, 2022
                        </td>
                        <td>
                            Completed
                        </td>
                        <td className="text-nowrap">
                            $100.00 For 2 Items
                        </td>
                        <td className="flex gap-2">
                            <a href="#"><div className="sub-but my-3 w-16 h-10 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">view</span></div></a>
                        </td>
                      </tr>
                    </tbody>
                </table>
            </div>
            <div className={`${isNavToggle === 3 ? '' : 'hidden'} detail-movie-des bg-stone-900 p-5 table-wrapper`}>
                <table className="detail-mv-table">
                    <thead className="bg-black">
                      <tr className="">
                        <th className="py-6 pl-5">
                            Product
                        </th>
                        <th className="py-6 pl-5">
                            Downloads Remaining
                        </th>
                        <th className="py-6 pl-5">
                            Expires
                        </th>
                        <th className="py-6 pl-5">
                            Download
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-black">
                        <td>
                          Electric Toothbrush
                        </td>
                        <td className="text-nowrap">
                            ∞
                        </td>
                        <td className="text-nowrap">
                            Never
                        </td>
                        <td className="flex gap-2">
                          <a href="#"><div className="sub-but my-3 w-28 h-10 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">product</span></div></a>
                        </td>
                      </tr>
                    </tbody>
                </table>
            </div>
            <div className={`${isNavToggle === 4 ? '' : 'hidden'} detail-movie-des bg-stone-900 p-5`}>
                <p>The following addresses will be used on the checkout page by default.</p>
                <div className="flex justify-between items-center my-7">
                    <p className="text-2xl font-medium">Billing Address.</p>
                    <a href="#"><div className="sub-but my-3 w-28 h-10 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">exit<i className="fa-solid fa-caret-right fa-xl pl-3"></i></span></div></a>
                </div>
                <div>
                    <p><span className="inline-block py-2 w-36">Name</span>: <span className="pl-5">Nguyen Tuan</span></p>
                    <p><span className="inline-block py-2 w-36">Company</span>: <span className="pl-5">Design</span></p>
                    <p><span className="inline-block py-2 w-36">Country</span>: <span className="pl-5">Viet Nam</span></p>
                    <p><span className="inline-block py-2 w-36">Address</span>: <span className="pl-5">Thuy Nguyen Hai Phong Viet Nam</span></p>
                    <p><span className="inline-block py-2 w-36">E-mail</span>: <span className="pl-5">nguyenvantuan23996@gmail.com</span></p>
                    <p><span className="inline-block py-2 w-36">Phone</span>: <span className="pl-5">0123456789</span></p>
                </div>
                <div className="flex justify-between items-center my-7">
                    <p className="text-2xl font-medium">Shipping Address.</p>
                    <a href="#"><div className="sub-but my-3 w-28 h-10 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">exit<i className="fa-solid fa-caret-right fa-xl pl-3"></i></span></div></a>
                </div>
                <div>
                    <p><span className="inline-block py-2 w-36">Name</span>: <span className="pl-5">Nguyen Tuan</span></p>
                    <p><span className="inline-block py-2 w-36">Company</span>: <span className="pl-5">Design</span></p>
                    <p><span className="inline-block py-2 w-36">Country</span>: <span className="pl-5">Viet Nam</span></p>
                    <p><span className="inline-block py-2 w-36">Address</span>: <span className="pl-5">Thuy Nguyen Hai Phong Viet Nam</span></p>
                    <p><span className="inline-block py-2 w-36">E-mail</span>: <span className="pl-5">nguyenvantuan23996@gmail.com</span></p>
                    <p><span className="inline-block py-2 w-36">Phone</span>: <span className="pl-5">0123456789</span></p>
                </div>
            </div>
            <form className={`${isNavToggle === 5 ? '' : 'hidden'} detail-movie-des bg-stone-900 p-5`}>
                <div className="w-full mb-10">
                    <p className="mb-2">First Name *</p>
                    <input type="text" className="form-control red-border !bg-black" name="Name" required placeholder="Nguyen"/>
                </div>
                <div className="w-full mb-10">
                    <p className="mb-2">Last Name *</p>
                    <input type="text" className="form-control red-border !bg-black" name="Name" required placeholder="Tuan"/>
                </div>
                <div className="w-full mb-3">
                    <p className="mb-2">Nick Name *</p>
                    <input type="text" className="form-control red-border !bg-black" name="Name" required placeholder="Tuan"/>
                </div>
                <p className="italic mb-10">This will be how your name will be displayed in the account section and in reviews</p>
                <div className="w-full mb-10">
                    <p className="mb-2">Email address *</p>
                    <input type="email" className="form-control red-border !bg-black" name="Email" required placeholder="nguyenvantuan23996@gmail.com"/>
                </div>
                <p className="text-xl font-normal mb-7">Password change</p>
                <div className="w-full mb-10">
                    <p className="mb-2">Current password (leave blank to leave unchanged)</p>
                    <input type="password" className="form-control red-border !bg-black" name="Name" required/>
                </div>
                <div className="w-full mb-10">
                    <p className="mb-2">New password (leave blank to leave unchanged)</p>
                    <input type="password" className="form-control red-border !bg-black" name="Name" required/>
                </div>
                <div className="w-full mb-10">
                    <p className="mb-2">Confirm new password</p>
                    <input type="password" className="form-control red-border !bg-black" name="Name" required/>
                </div>
                <div className="flex">
                    <a href="#"><div className="sub-but my-3 w-36 h-10 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">save change<i className="fa-solid fa-caret-right fa-xl pl-3"></i></span></div></a>
                </div>
            </form>
            <div className={`${isNavToggle === 6 ? '' : 'hidden'} detail-movie-des bg-stone-900 p-5`}>
                <p className="text-xl netflix my-5">Login</p>
                <input type="text" className="form-control red-border my-4 !bg-black" name="User" required placeholder="Username or email address *"/>
                <input type="password" className="form-control red-border my-4 !bg-black" name="password" required placeholder="Password"/>
                <label className="text-slate-400"><input type="checkbox" className="login-check red-border mr-2"/>Remember Me</label>
                <div className="flex mt-7">
                    <a href="#"><div className="sub-but my-3 w-28 h-10 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">login<i className="fa-solid fa-caret-right fa-xl pl-3"></i></span></div></a>
                </div>
                <p className="netflix"><a href="reset-password.html">Lost Your Password?</a></p>
                <p className="text-xl netflix my-7">Register</p>
                <input type="text" className="form-control red-border my-4 !bg-black" name="User" required placeholder="Username *"/>
                <input type="text" className="form-control red-border my-4 !bg-black" name="User" required placeholder="Email address *"/>
                <input type="text" className="form-control red-border my-4 !bg-black" name="User" required placeholder="Password *"/>
                <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="privacy-policy.html" className="netflix">privacy policy</a> .</p>
                <div className="flex mt-7">
                    <a href="#"><div className="sub-but my-3 w-28 h-10 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">register<i className="fa-solid fa-caret-right fa-xl pl-3"></i></span></div></a>
                </div>
            </div>
        </div>
      </section>
    </main>
  )
}

export default MyAccount