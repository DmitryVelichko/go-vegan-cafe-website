/*eslint-disable */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import React from 'react';
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Cake,
  Header,
  Laurels,
  SpecialMenu,
} from './container';
import {
  Navbar,
  NavbarENG,
  AboutUsENG,
  ChefENG,
  FindUsENG,
  FooterENG,
  GalleryENG,
  CakeENG,
  HeaderENG,
  LaurelsENG,
  SpecialMenuENG,
} from './components';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route
        exact
        path='/'
        element={
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
        }
      />

      <Route exact path='/en' element={<div>
            <NavbarENG />
            <HeaderENG />
            <AboutUsENG />
            <SpecialMenuENG />
            <GalleryENG />
            <ChefENG />
            <LaurelsENG />
            <CakeENG />
            <FindUsENG />
            <FooterENG />
          </div>} />
    </Routes>
  </Router>
);

export default App;
