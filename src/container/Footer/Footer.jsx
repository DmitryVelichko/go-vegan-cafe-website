import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

/*eslint-disable */

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
        <p className="p__opensans">Грузия, г. Батуми, ул. Меликишвили, 23</p>
        <p className="p__opensans">(+995) 571-59-07-33</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Часы работы</h1>
        <p className="p__opensans">Понедельник-Воскресенье:</p>
        <p className="p__opensans">11:00 - 21:00</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">{new Date().getFullYear()} Go Vegan Cafe Батуми</p>
    </div>

  </div>
);

export default Footer;
