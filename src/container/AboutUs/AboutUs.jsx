import React from 'react';
/*eslint-disable*/
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Доставка</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Закажите ваши любимые веганские вкусняшки из нашего кафе через сайты наших партнёров: Bolt, Glovo и Wolt.</p>
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
        <h1 className="headtext__cormorant">Самовывоз</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Позвоните нам по телефону <span className='about__tel'>(+995) 571-59-07-33</span> и заберите ваши любимые блюда в удобное для вас время.</p>
        <a href='tel:+995571590733'><button type="button"className="custom__button button__cta">Позвонить</button></a>
      </div>
    </div>
  </div>
);

export default AboutUs;
