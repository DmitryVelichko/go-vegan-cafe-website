import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    {/* <Newsletter /> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Мы здесь</h1>
        <p className="p__opensans border-bottom-highlight"><a href="https://goo.gl/maps/QM3wXoFwQmTGptQv8" target="_blank" className="p__opensans" rel="noreferrer">Грузия, Батуми, улица Меликишвили, 23</a></p>
        <p className="p__opensans">(+995) 571-59-07-33</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;Все животные — мои друзья. А я не ем моих друзей&quot;.<br/>Бернард Шоу</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/vegancafebatumi" target="_blank" rel="noreferrer"><FiFacebook /></a>
          <a href="https://www.instagram.com/vegancafebatumi/" target="_blank" rel="noreferrer"><FiInstagram /></a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Часы работы</h1>
        <p className="p__opensans">Понедельник-воскресенье:</p>
        <p className="p__opensans">11:00 - 21:00</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">{new Date().getFullYear()} | Go Vegan Cafe Батуми</p>
    </div>

  </div>
);

export default Footer;
