import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';


const TermsOfUse = () => {
  return (
    <main className="w-full h-auto bg-stone-950 text-slate-200 font-light">

      <div className="relative w-full h-72 md:h-96">
        <img src="/react-project/image/pages/01.webp" alt="" className="w-full h-72 md:h-96 object-cover"/>
        <div className="term-of-use-hl">
          <h2 className="text-3xl font-medium mb-4 flex justify-center">Terms Of Use</h2>
          <p className="text-xl"><Link to="/otthome" className="netflix font-medium">Home</Link>&nbsp;/&nbsp;<span className="netflix">Terms Of Use</span></p>
        </div>
      </div>

      <div className="p-4 lg:px-16 xl:px-28 2xl:px-48">
        <h2 className="my-6 text-2xl font-normal text-white">1. Description of Service and Acceptance of Terms of Use</h2>
        <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi ullamcorper consequat justo, in posuere nisi efficitur sed. Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem</p>
        <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi ullamcorper consequat justo, in posuere nisi efficitur sed.</p>
        <p className="mb-3">Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem</p>
        <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi ullamcorper consequat justo, in posuere nisi efficitur sed. Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem</p>
        <h2 className="my-6 text-2xl font-normal text-white">The Streamit website works best with:</h2>
        <ul className="custom-list ml-4">
          <li>Latest version of Google Chrome</li>
          <li>Latest version of Firefox</li>
          <li>Latest version of Safari</li>
          <li>JavaScript and cookies enabled</li>
        </ul>
        <h2 className="my-6 text-2xl font-normal text-white">2. Subscription Services</h2>
        <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi ullamcorper consequat justo, in posuere nisi efficitur sed.</p>
        <p className="mb-3">Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi ullamcorper consequat justo, in posuere nisi efficitur sed.</p>
        <p className="mb-3">Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem</p>
        <h2 className="my-6 text-2xl font-normal text-white">3. Third Party Payment Gateway - Financial Information</h2>
        <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi ullamcorper consequat justo, in posuere nisi efficitur sed. Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem</p>
        <h2 className="my-6 text-2xl font-normal text-white">4. Disclosure Children's Privacy</h2>
        <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi ullamcorper consequat justo, in posuere nisi efficitur sed. Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem</p>
        <h2 className="my-6 text-2xl font-normal text-white">5. Data transfer, storage & processing globally</h2>
        <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi ullamcorper consequat justo, in posuere nisi efficitur sed. Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem</p>

      </div>
    </main>
  )
}

export default TermsOfUse