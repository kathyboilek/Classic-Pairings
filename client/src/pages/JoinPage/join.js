import React, { Component } from 'react';
import './join.css';
import Nav from '../../components/NavBar';
import Footer from '../../components/Footer';

class Join extends Component {
  render() {
    return (
      <div className="Join">
        <Nav />
        <div className="Container">
          <div className="item">10</div>
          <div className="item">11</div>
          <div className="item">12</div>
          <div className="item">13</div>
        </div>
        <Footer />  
      </div>
    );
  }
}

export default Join;