import React from 'react';
import './Findus.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUsENG = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contacts" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Our Address</h1>
      <div className="app__wrapper-content border-bottom-highlight">
        <p className="p__opensans"><a href="https://goo.gl/maps/QM3wXoFwQmTGptQv8" target="_blank" className="p__opensans" rel="noreferrer">23 Melikishvili Street, Batumi, Georgia</a></p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Monday - Sunday: 11:00 am - 9:00 pm</p>
      </div>
      <a href="https://www.facebook.com/vegancafebatumi" target="_blank" rel="noreferrer"><button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Write to Us</button></a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUsENG;
