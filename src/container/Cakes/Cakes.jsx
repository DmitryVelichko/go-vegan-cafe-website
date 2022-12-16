/*eslint-disable */

import React,  {useEffect}  from 'react';

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Cakes.css';

const Cakes = () => {
  const scrollRef = React.useRef(null);

  
   useEffect(() => {
           scroll()
   },[])

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

      <div className="app__cake-content">
        <SubHeading title="Для особых случаев" />
        <h1 className="headtext__cormorant">Торты ручной работы</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Делаем веганские тортики на заказ. Без молочки и глютена. Заказывайте заранее.</p>
        <a href="https://www.instagram.com/vegancafebatumi/" target="_blank" rel="noreferrer"><button type="button" className="custom__button">Больше фоточек</button></a>
      </div>
     
    </div>
  );
};

export default Cakes;
