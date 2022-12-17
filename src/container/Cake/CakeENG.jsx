import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Cake.css';

const CakeENG = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__cake flex__center">
      <div className="app__cake-content">
        <SubHeading title="For special occasions" />
        <h1 className="headtext__cormorant">Handmade Cakes</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>We make vegan cakes to order. Dairy and gluten free. Look what a beauty! More details in the menu.</p>
        <a href="https://www.instagram.com/vegancafebatumi/" target="_blank" rel="noreferrer"><button type="button" className="custom__button">More Photos</button></a>
      </div>
      <div className="app__cake-images">
        <div className="app__cake-images_container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <a href="https://www.instagram.com/vegancafebatumi/" target="_blank" rel="noreferrer">
              <div className="app__cake-images_card flex__center" key={`cake_image-${index + 1}`}>
                <img src={image} alt="cake_image" />
                <BsInstagram className="cake__image-icon" />
              </div>
            </a>
          ))}
        </div>
        <div className="app__cake-images_arrows">
          <BsArrowLeftShort className="cake__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="cake__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default CakeENG;
