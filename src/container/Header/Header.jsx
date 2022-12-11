import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';
import menu from '../../assets/cafemenu.jpeg';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="С любовью к планете и животным" />
      <h1 className="app__header-h1">Кафе растительной кухни</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Готовим вкусную, полезную и этическую еду ❤️</p>
      <a href={menu} target="_blank" rel="noreferrer"><button type="button" className="custom__button">Смотреть меню</button></a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome2} alt="header_img" />
    </div>
  </div>
);

export default Header;
