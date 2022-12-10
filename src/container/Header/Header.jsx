import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Кафе растительной кухни</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Готовим вкусную, полезную и этическую еду ❤️</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome2} alt="header_img" />
    </div>
  </div>
);

export default Header;
