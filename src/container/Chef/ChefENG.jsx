import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const ChefENG = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Слово шеф-повара" />
      <h1 className="headtext__cormorant">We believe that food can be healthy and tasty</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">I have always dreamed of opening a cafe where visitors can eat delicious and healthy food.</p>
        </div>
        <p className="p__opensans">And it seems that the team and I managed to do it. We have created an ethical space where you can order healthy and wholesome food. Try it yourself. Super tasty, I swear.</p>
      </div>

      <div className="app__chef-sign">
        <p>Alyona Tereshko</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" style={{ width: '350px', marginTop: 0 }} />
      </div>
    </div>
  </div>
);

export default ChefENG;
