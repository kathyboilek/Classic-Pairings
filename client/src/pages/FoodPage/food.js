import React, { Component } from 'react';
import './food.css';
import Nav from '../../components/NavBar';
import Footer from '../../components/Footer';

class Food extends Component {
  render() {
    return (
      <div className="Food">
        <Nav />
        <div className="Container">
          <div className="item">13</div>
          <div className="item">14</div>
          <div className="item">15</div>
          <div className="item">16</div>
        </div> 
        <Footer /> 
      </div>
    );
  }
}

export default Food;