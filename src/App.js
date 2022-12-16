import React from 'react';
import { AboutUs, Chef, FindUs, Footer, Gallery, Cakes, Header, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Laurels />
    <Gallery />
    <Cakes />
    <FindUs />
    <Footer />
  </div>
);

export default App;
