import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Адрес</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Грузия, г. Батуми, ул. Меликишвили, 23</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Часы работы</p>
        <p className="p__opensans">Понедельник - Воскресенье: 11:00 - 21:00</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
