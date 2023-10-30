import React, { lazy, Suspense } from 'react';
import Fallback from './Fallback'
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
            <Suspense fallback={<Fallback />}><Navbar /></Suspense>
            <Suspense fallback={<Fallback />}><Header /></Suspense>
            <Suspense fallback={<Fallback />}><AboutUs /></Suspense>
            <Suspense fallback={<Fallback />}> <SpecialMenu /></Suspense>
            <Suspense fallback={<Fallback />}><Gallery /></Suspense>
            <Suspense fallback={<Fallback />}><Chef /></Suspense>
            <Suspense fallback={<Fallback />}><Laurels /></Suspense>
            <Suspense fallback={<Fallback />}><Cake /></Suspense>
            <Suspense fallback={<Fallback />}><FindUs /></Suspense>
            <Suspense fallback={<Fallback />}><Footer /></Suspense>
          </div>
        }
      />

      <Route exact path='/en' element={<div>
        <Suspense fallback={<Fallback />}><NavbarENG /></Suspense>
        <Suspense fallback={<Fallback />}><HeaderENG /></Suspense>
        <Suspense fallback={<Fallback />}><AboutUsENG /></Suspense>
        <Suspense fallback={<Fallback />}><SpecialMenuENG /></Suspense>
        <Suspense fallback={<Fallback />}><GalleryENG /></Suspense>
        <Suspense fallback={<Fallback />}><ChefENG /></Suspense>
        <Suspense fallback={<Fallback />}><LaurelsENG /></Suspense>
        <Suspense fallback={<Fallback />}><CakeENG /></Suspense>
        <Suspense fallback={<Fallback />}><FindUsENG /></Suspense>
        <Suspense fallback={<Fallback />}><FooterENG /></Suspense>
      </div>} />
    </Routes>
  </Router>
);

export default App;
