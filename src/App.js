import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


const AboutUs = lazy(() => import('./container/AboutUs/AboutUs'));
const Chef = lazy(() => import('./container/Chef/Chef'));
const FindUs = lazy(() => import('./container/Findus/FindUs'));
const Footer = lazy(() => import('./container/Footer/Footer'));
const Gallery = lazy(() => import('./container/Gallery/Gallery'));
const Cake = lazy(() => import('./container/Cake/Cake'));
const Header = lazy(() => import('./container/Header/Header'));
const Laurels = lazy(() => import('./container/Laurels/Laurels'));
const SpecialMenu = lazy(() => import('./container/Menu/SpecialMenu'));
const AboutUsENG = lazy(() => import('./container/AboutUs/AboutUsENG'));
const ChefENG = lazy(() => import('./container/Chef/ChefENG'));
const FindUsENG = lazy(() => import('./container/Findus/FindUsENG'));
const FooterENG = lazy(() => import('./container/Footer/FooterENG'));
const GalleryENG = lazy(() => import('./container/Gallery/GalleryENG'));
const CakeENG = lazy(() => import('./container/Cake/CakeENG'));
const HeaderENG = lazy(() => import('./container/Header/HeaderENG'));
const LaurelsENG = lazy(() => import('./container/Laurels/LaurelsENG'));
const SpecialMenuENG = lazy(() => import('./container/Menu/SpecialMenuENG'));

const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const NavbarENG = lazy(() => import('./components/Navbar/NavbarENG'));

import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route
        exact
        path='/'
        element={
          <div>
            <Suspense fallback={<div>Loading...</div>}>  <Navbar /></Suspense>
            <Suspense fallback={<div>Loading...</div>}><Header /></Suspense>
            <Suspense fallback={<div>Loading...</div>}><AboutUs />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>  <SpecialMenu /></Suspense>
            <Suspense fallback={<div>Loading...</div>}> <Gallery /></Suspense>
            <Suspense fallback={<div>Loading...</div>}>  <Chef /></Suspense>
            <Suspense fallback={<div>Loading...</div>}><Laurels /></Suspense>
            <Suspense fallback={<div>Loading...</div>}> <Cake /></Suspense>
            <Suspense fallback={<div>Loading...</div>}> <FindUs /></Suspense>
            <Suspense fallback={<div>Loading...</div>}> <Footer /></Suspense>
          </div>
        }
      />

      <Route exact path='/en' element={<div>
        <Suspense fallback={<div>Loading...</div>}><NavbarENG /></Suspense>
        <Suspense fallback={<div>Loading...</div>}><HeaderENG /></Suspense>
        <Suspense fallback={<div>Loading...</div>}><AboutUsENG /></Suspense>
        <Suspense fallback={<div>Loading...</div>}><SpecialMenuENG /></Suspense>
        <Suspense fallback={<div>Loading...</div>}><GalleryENG /></Suspense>
        <Suspense fallback={<div>Loading...</div>}><ChefENG /></Suspense>
        <Suspense fallback={<div>Loading...</div>}><LaurelsENG /></Suspense>
        <Suspense fallback={<div>Loading...</div>}><CakeENG /></Suspense>
        <Suspense fallback={<div>Loading...</div>}><FindUsENG /></Suspense>
        <Suspense fallback={<div>Loading...</div>}><FooterENG /></Suspense>
      </div>} />
    </Routes>
  </Router>
);

export default App;
