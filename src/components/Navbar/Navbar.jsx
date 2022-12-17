import React from 'react';
/*eslint-disable */
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { MdLanguage } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
        <Link to='/en'><span className='app__lang'>En</span></Link>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Главная</a></li>
        <li className="p__opensans"><a href="#about">Доставка</a></li>
        <li className="p__opensans"><a href="#menu">Меню</a></li>
        <li className="p__opensans"><a href="#awards">Десерты</a></li>
        <li className="p__opensans"><a href="#contact">Контакты</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="https://goo.gl/maps/QM3wXoFwQmTGptQv8" target="_blank" className="p__opensans address-link" rel="noreferrer">Батуми, ул. Меликишвили, 23
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
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Главная</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>Доставка</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Меню</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Десерты</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Контакты</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Контакты</a></li>

            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
