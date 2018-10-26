import React, { Component } from 'react';
import './results.css';
import Nav from '../../components/NavBar';
import Footer from '../../components/Footer';

class Results extends Component {
  render() {
    return (
      <div className="Results">
        <Nav />
        
          <div className="storage">
              <div className="capsule">
                <div className="hero-banner"></div> 
                <div className="results-cards">
                  <h1>Your perfect match...</h1>
                </div>  
              </div> 
          </div>

        <Footer />  
      </div>
    );
  }
}

export default Results;