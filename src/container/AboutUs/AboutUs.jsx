import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Доставка Wolt</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Закажите ваши любимые веганские вкусняшки из нашего кафе через сайт Wolt.</p>
        <a href="https://wolt.com/en/geo/batumi/restaurant/go-vegan-cafe" target="_blank" rel="noreferrer"><button type="button" className="custom__button">Заказать</button></a>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Доставка Bolt</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Закажите ваши любимые веганские вкусняшки из нашего кафе через сайт Bolt.</p>
        <a href="https://food.bolt.eu/en-US/38-batumi/p/57127-go-vegan-cafe" target="_blank" rel="noreferrer"><button type="button" className="custom__button">Заказать</button></a>
      </div>
    </div>
  </div>
);

export default AboutUs;
