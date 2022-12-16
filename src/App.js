import React from 'react';
import { AboutUs, Chef, FindUs, Footer, Gallery, Cake, Header, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Gallery />
    <Chef />
    <Laurels />
    <Cake />
    <FindUs />
    <Footer />
  </div>
);

export default App;
