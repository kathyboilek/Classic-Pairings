import React from 'react';
import './homecarousel.css';
import Carousel from 'nuka-carousel';
import pic1 from '../../images/happy-couple.jpg';
import pic2 from '../../images/wine-food.jpg';
import pic3 from '../../images/wine-girl.jpg';

export default class extends React.Component {
  render() {
    return (
      <Carousel autoplay wrapAround autoplayInterval={1500} speed={700} pauseOnHover={false}>
          <img alt="pic1" src={pic1} />
          <img alt="pic2" src={pic2} />
          <img alt="pic3" src={pic3} />
      </Carousel>
    );
  }
}

