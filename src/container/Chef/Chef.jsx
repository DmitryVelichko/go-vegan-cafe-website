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
      <h1 className="headtext__cormorant">Мы верим, что еда может здоровой и вкусной</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Я всегда мечтала открыть кафе, где посетители смогут вкусно поесть и не отравиться.</p>
        </div>
        <p className="p__opensans">И кажется, нам с командой удалось это сделать. Мы создали этическое пространство, где можно заказать здоровую и полезную пищу. Кароч, попробуйте сами. Пальчики оближешь, мамой клянусь.</p>
      </div>

      <div className="app__chef-sign">
        <p>Алёна</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
