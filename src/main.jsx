import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {Home, OTThome, Movie, Video, TVShow, MerchandiseStore} from "./components/Home"
import {Cast, RestrictedContent, RelatedMerchandise, Playlist, Genres, Tags} from "./components/Features"
import {AboutUs, ContactUs, FAQ, PrivacyPolicy, PricingPlan, ComingSoon, ErrorPage1, ErrorPage2} from './components/Pages'
import Listing from './components/Blog/Listing.jsx'
import {Shop, MyAccount, CartPage} from './components/Shop'
import { Login, Register, ResetPassword, TermsOfUse } from './components/login'
import {MovieDetail} from './components/other'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}>
        <Route path='otthome' element={<OTThome />}/>
        <Route path='home' element={<Home />}/>
        <Route path='movie' element={<Movie />}/>
        <Route path='video' element={<Video />}/>
        <Route path='tvshow' element={<TVShow />}/>
        <Route path='merchandisestore' element={<MerchandiseStore />}/>

        <Route path='restrictedcontent' element={<RestrictedContent />} />
        <Route path='relatedmerchandise' element={<RelatedMerchandise />} />
        <Route path='playlist' element={<Playlist />} />
        <Route path='genres' element={<Genres />} />
        <Route path='cast' element={<Cast />} />
        <Route path='tags' element={<Tags />} />

        <Route path='aboutus' element={<AboutUs />} />
        <Route path='contactus' element={<ContactUs />} />
        <Route path='faq' element={<FAQ />} />
        <Route path='privacypolicy' element={<PrivacyPolicy />} />
        <Route path='pricingplan' element={<PricingPlan />} />

        <Route path='listing' element={<Listing />} />

        <Route path='shop' element={<Shop />} />
        <Route path='myaccount' element={<MyAccount />} />
        <Route path='cartpage' element={<CartPage />} />

        <Route path='termsofuse' element={<TermsOfUse />} />
        <Route path='moviedetail' element={<MovieDetail />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='resetpassword' element={<ResetPassword />} />

        {/* Redirect from '/' to '/otthome' */}
        <Route path='/' element={<OTThome />} />

        <Route path='*' element={<div>Not Found</div>} />
      </Route>

      
      
      <Route path='errorpage1' element={<ErrorPage1 />} />
      <Route path='errorpage2' element={<ErrorPage2 />} />
      <Route path='comingsoon' element={<ComingSoon />} />
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
