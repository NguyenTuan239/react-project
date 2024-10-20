import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <main className="w-full h-auto bg-stone-950 text-slate-200 font-light">

      <div className="relative w-full h-72 md:h-96">
        <img src="../image/pages/01.webp" alt="" className="w-full h-72 md:h-96 object-cover"/>
        <div className="term-of-use-hl">
          <h2 className="text-3xl font-medium mb-4 flex justify-center">Privacy and Policy</h2>
          <p className="text-xl"><Link to="/otthome" className="netflix font-medium">Home</Link>&nbsp;/&nbsp;<span className="netflix">Privacy and Policy</span></p>
        </div>
      </div>

      <section className="p-4 pb-10 lg:px-16 xl:px-28 2xl:px-48">
        <p className="text-white text-3xl font-normal mb-5 mt-8">1. What Personal Information About Users Does streamit Collect?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi ullamcorper consequat justo, in posuere nisi efficitur sed. Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem</p>
        <p className="text-white text-3xl font-normal mb-5 mt-8">2. Cookies and Web Beacons</p>
        <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi ullamcorper consequat justo, in posuere nisi efficitur sed.</p>
        <p>Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem</p>
        <p className="text-white text-3xl font-normal mb-5 mt-8">3. Third Party Payment Gateway - Financial Information</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi ullamcorper consequat justo, in posuere nisi efficitur sed. Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem</p>
        <p className="text-white text-3xl font-normal mb-5 mt-8">4. Disclosure Children's Privacy</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi ullamcorper consequat justo, in posuere nisi efficitur sed. Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem</p>
        <p className="text-white text-3xl font-normal mb-5 mt-8">5. Data transfer, storage & processing globally</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi ullamcorper consequat justo, in posuere nisi efficitur sed. Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem</p>
      </section>
    </main>
  )
}

export default PrivacyPolicy