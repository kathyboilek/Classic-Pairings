import React, { Component } from 'react';
import './home.css';
import Nav from '../../components/NavBar';
import Footer from '../../components/Footer';
import Carousel from '../../components/HomeCarousel';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Nav />
        <div className="Container">
        <Carousel />
          {/* <div className="banner1">1</div> */}
          <div className="banner2">Let us help you how...</div>
          <div className="arrow-down"></div>
          <div className="banner3">3</div>
        </div>
        <Footer />  
      </div>
    );
  }
}

export default Home;