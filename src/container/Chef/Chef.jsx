import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Слово шеф-повара" />
      <h1 className="headtext__cormorant">Мы верим, что еда может быть здоровой и вкусной</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Я всегда мечтала открыть кафе, где посетители смогут поесть вкусной и здоровой пищи.</p>
        </div>
        <p className="p__opensans">И так родился проект Go Vegan, первый в Батуми ресторан с полностью растительным меню. Мы создали этическое пространство, где можно заказать здоровую и полезную еду.</p>
      </div>

      <div className="app__chef-sign">
        <p>Алёна Терешко</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" style={{ width: '350px', marginTop: 0 }} />
      </div>
    </div>
  </div>
);

export default Chef;
