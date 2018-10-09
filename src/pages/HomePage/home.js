import React, { Component } from 'react';
import './home.css';
import Nav from '../../components/NavBar';
import Footer from '../../components/Footer';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Nav />
        <div className="Container">
          <div className="banner1">1</div>
          <div className="banner2">2</div>
          <div className="banner3">3</div>
        </div>
        <Footer />  
      </div>
    );
  }
}

export default Home;