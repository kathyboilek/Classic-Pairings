import React, { Component } from 'react';
import './recipes.css';
import Nav from '../../components/NavBar';
import Footer from '../../components/Footer';

class Recipes extends Component {
  render() {
    return (
      <div className="Recipes">
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

export default Recipes;