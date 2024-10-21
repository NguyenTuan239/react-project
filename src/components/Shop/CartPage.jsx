import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faHeart, faCaretRight, faEye, faTrashCan,faStarHalf, faBorderAll, faTableCells, faBraille } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const CartPage = () => {
  return (
    <main className="w-full h-auto bg-stone-950 text-slate-200 font-light">

      <div className="relative w-full h-72 md:h-96">
        <img src="../../image/pages/01.webp" alt="" className="w-full h-72 md:h-96 object-cover"/>
        <div className="term-of-use-hl">
          <h2 className="text-3xl font-medium mb-4 flex justify-center">Cart</h2>
          <p className="text-xl"><Link to="/otthome" className="netflix font-medium">Home</Link>&nbsp;/&nbsp;<span className="netflix">Cart</span></p>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 justify-center items-center my-10">
        <div>
            <span className="px-2 py-0.5 rounded-full netflix-bg">1</span>
            <span className="pl-1">Shopping Cart</span>
        </div>
        <div className="border border-slate-400 text-slate-400 px-2 rounded-full"><FontAwesomeIcon icon={faCaretRight} size='2xs'/></div>
        <div>
            <span className="px-2 py-0.5 rounded-full bg-stone-900">2</span>
            <span className="pl-1">Checkout</span>
        </div>
        <div className="border border-slate-400 text-slate-400 px-2 rounded-full"><FontAwesomeIcon icon={faCaretRight} size='2xs'/></div>
        <div>
            <span className="px-2 py-0.5 rounded-full bg-stone-900">2</span>
            <span className="pl-1">Order Summary</span>
        </div>
    </div>
      <section className="cart-sec w-11/12 mx-auto py-7 lg:flex lg:gap-5 lg:items-start">
        <div className="lg:w-8/12">
            <div className="table-wrapper">
                <table className="detail-mv-table">
                    <thead className="bg-stone-900">
                      <tr className="">
                        <th className="py-6 pl-5">
                            Product
                        </th>
                        <th className="py-6 pl-5">
                            Price
                        </th>
                        <th className="py-6 pl-5">
                            Quantity
                        </th>
                        <th className="py-6 pl-5">
                            Subtotal
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr id="cart-line-1" className="bg-black">
                        <td className="flex gap-3 items-center my-3">
                          <img src="../../image/shop/product/08.webp" alt="" className="w-20 h-20"/>
                          <span>Coffee Cup</span>
                        </td>
                        <td className="text-nowrap">
                            $15.00
                        </td>
                        <td className="text-nowrap ">
                            <div className="inline-flex flex-nowrap border border-white">
                              <button id="quantity-minus-1" className="cart-quantity-bt py-4 px-6">-</button>
                              <div id="quantity-number-1" className="py-4 px-6">3</div>
                              <button id="quantity-plus-1" className="cart-quantity-bt py-4 px-6">+</button>
                            </div>
                        </td>
                        <td className="">
                            <button id="quantity-delete-1"><FontAwesomeIcon icon={faTrashCan} className='p-4'/></button>
                        </td>
                      </tr>
                      <tr id="cart-line-2" className="bg-black">
                        <td className="flex gap-3 items-center my-3">
                          <img src="../../image/shop/product/09.webp" alt="" className="w-20 h-20"/>
                          <span>Game Center</span>
                        </td>
                        <td className="text-nowrap">
                            $25.00
                        </td>
                        <td className="text-nowrap ">
                            <div className="inline-flex flex-nowrap border border-white">
                              <button id="quantity-minus-2" className="cart-quantity-bt py-4 px-6">-</button>
                              <div id="quantity-number-2" className="py-4 px-6">1</div>
                              <button id="quantity-plus-2" className="cart-quantity-bt py-4 px-6">+</button>
                            </div>
                        </td>
                        <td className="">
                            <button id="quantity-delete-2"><FontAwesomeIcon icon={faTrashCan} className='p-4'/></button>
                        </td>
                      </tr>
                      <tr id="cart-line-3" className="bg-black">
                        <td className="flex gap-3 items-center my-3">
                          <img src="../../image/shop/product/06.webp" alt="" className="w-20 h-20"/>
                          <span>Carry bag</span>
                        </td>
                        <td className="text-nowrap">
                            $5.00
                        </td>
                        <td className="text-nowrap ">
                            <div className="inline-flex flex-nowrap border border-white">
                              <button id="quantity-minus-3" className="cart-quantity-bt py-4 px-6">-</button>
                              <div id="quantity-number-3" className="py-4 px-6">5</div>
                              <button id="quantity-plus-3" className="cart-quantity-bt py-4 px-6">+</button>
                            </div>
                        </td>
                        <td className="">
                            <button id="quantity-delete-3"><FontAwesomeIcon icon={faTrashCan} className='p-4'/></button>
                        </td>
                      </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between items-center flex-wrap gap-5 my-5">
                <div className="flex justify-between items-center flex-wrap gap-4">
                    <div className="flex items-center justify-start gap-3">
                      <span>Coupon:</span>
                      <div><input type="text" className="form-control red-border !bg-black" name="" placeholder="Coupon code"/></div>
                    </div>
                    <a href="#"><div className="sub-but my-3 w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">apply coupon<FontAwesomeIcon icon={faCaretRight} size='xl' className='pl-3'/></span></div></a>
                </div>
                <div>
                    <a href="#"><div className="sub-but my-3 w-40 h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">update cart<FontAwesomeIcon icon={faCaretRight} size='xl' className='pl-3'/></span></div></a>
                </div>
            </div>
        </div>
        <div className=" p-5 mt-4 bg-stone-900 lg:w-4/12 lg:inline-flex">
          <div className="w-full">
            <p className="font-medium text-xl mb-5">Cart Totals</p>
            <div className="flex my-4">
              <span>Subtotal</span> <span className="flex justify-center flex-1">$305.00</span>
            </div>
            <div className="flex my-4">
              <span>Total</span> <span className="flex justify-center flex-1 netflix">$305.00</span>
            </div>
            <a href="#"><div className="sub-but my-3 w-full h-12 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">proceed to checkout<FontAwesomeIcon icon={faCaretRight} size='xl' className='pl-3'/></span></div></a>
          </div>
        </div>
      </section>
      <div id="cart-delete-dialog" className="cart-dialog hidden">
        <div className="delete-dialog-content font-medium">
            <p className="py-3 text-3xl">Are you sure?</p>
            <p>You want to delete this item</p>
            <div className="flex gap-4 items-center mt-4">
              <button id="confirm-delete" className="px-3 py-2 netflix-bg rounded-md">Yes, delete it!</button>
              <button id="cancel-delete">Cancel</button>
            </div>
        </div>
      </div>
    </main>
  )
}

export default CartPage