import React from 'react';
/*eslint-disable */
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import flagImg from '../../assets/english-flag.png'
import images from '../../constants/images';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavbarENG = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
        <div className='flag-englishDivENG'>
        <Link to='/' className='linkToEn'><span className='flag-englishDiv'>🌐 <span className='spanRu'>Ru</span></span></Link>
      </div>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Main</a></li>
        <li className="p__opensans"><a href="#about">Delivery</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Desserts</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="https://goo.gl/maps/QM3wXoFwQmTGptQv8" target="_blank" className="p__opensans address-link" rel="noreferrer">23 Melikishvili Street, Batumi
        </a>
        <div />
        <a href="#" style={{pointerEvents: "none"}} className="p__opensans">(+995) 571-59-07-33
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Main</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>Delivery </a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Desserts</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contacts</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarENG;
