import React, { Component } from 'react';
import './join.css';
import Nav from '../../components/NavBar';
import Footer from '../../components/Footer';

class Join extends Component {
  render() {
    return (
      <div className="Wines">
        <Nav />

        
        <div className="Container">
          <div className="box1">
          <div className="filter-search">
            <div className="wine-list">
              <h3>Join</h3>
              <ul className="list">
                <li className="category-name">1</li>
                <li className="category-name">2</li>
                <li className="category-name">3</li>
                <li className="category-name">4</li>
                <li className="category-name">5</li>
              </ul>
            </div>  
          </div>
          </div>
          <div className="box2">
          <div className="wine-banner">Banner</div>  
          <div className="wine-cards">
          </div>  
          </div> 
        </div>
        <Footer />  
      </div>
    );
  }
}

export default Join;


