import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
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
        <h1 className="app__footer-headtext">We Are Here</h1>
        <p className="p__opensans border-bottom-highlight"><a href="https://goo.gl/maps/QM3wXoFwQmTGptQv8" target="_blank" className="p__opensans" rel="noreferrer">23 Melikishvili Street, Batumi, Georgia</a></p>
        <p className="p__opensans">(+995) 571-59-07-33</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;Our food is grown, not born.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/vegancafebatumi" target="_blank" rel="noreferrer"><FiFacebook /></a>
          <a href="https://www.instagram.com/vegancafebatumi/" target="_blank" rel="noreferrer"><FiInstagram /></a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Opening Hours</h1>
        <p className="p__opensans">Monday-Sunday:</p>
        <p className="p__opensans">11:00 am - 9:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">{new Date().getFullYear()} | Go Vegan Cafe Батуми</p>
    </div>

  </div>
);

export default Footer;
