import React, { Component } from 'react';
import './join.css';
import Nav from '../../components/NavBar';
import Footer from '../../components/Footer';

class Join extends Component {
  render() {
    return (
      <div className="Wines">
        <Nav />

        
        <div className="Wrapper">
          <div className="bundle">
          <div className="join-banner">Banner</div>  
          <div className="join-example">
            <i className="icons" class="fas fa-wine-glass"></i>
            <i className="icons" class="fas fa-utensils"></i>
            <i className="icons" class="fas fa-film"></i>
          </div>  
          </div> 
        </div>
        <Footer />  
      </div>
    );
  }
}

export default Join;


