import React from 'react';
/*eslint-disable*/
import { images } from '../../constants';
import './AboutUs.css';

const AboutUsENG = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Delivery</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Order your favorite vegan treats from our cafe through our partner websites: Bolt, Glovo and Wolt.</p>
        <div className='app__aboutus_links'>
        <a href="https://food.bolt.eu/en-US/38-batumi/p/57127-go-vegan-cafe" target="_blank" rel="noreferrer"><button type="button" className="custom__button cta__btn">Bolt</button></a>
        <a href="https://glovoapp.com/ge/ru/batumi/go-vegan-cafe/" target="_blank" rel="noreferrer"><button type="button" className="custom__button cta__btn">Glovo</button></a>
        <a href="https://wolt.com/en/geo/batumi/restaurant/go-vegan-cafe" target="_blank" rel="noreferrer"><button type="button" className="custom__button cta__btn">Wolt</button></a>
        </div>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Pickup</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Call us <span className='about__tel'>(+995) 571-59-07-33</span> and pick up your favorite meals at your convenience.</p>
        <a href='tel:+995571590733'><button type="button"className="custom__button button__cta">Call</button></a>
      </div>
    </div>
  </div>
);

export default AboutUsENG;
