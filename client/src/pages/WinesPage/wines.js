import React, { Component } from 'react';
import Nav from '../../components/NavBar';
import './wines.css';
import Footer from '../../components/Footer';

class Wines extends Component {
  render() {
    return (
      <div className="Wines">
        <Nav />
        <div className="Container">
          <div className="item">5</div>
          <div className="item">6</div>
          <div className="item">7</div>
          <div className="item">8</div>
        </div> 
        <Footer />  
      </div>
    );
  }
}

export default Wines;