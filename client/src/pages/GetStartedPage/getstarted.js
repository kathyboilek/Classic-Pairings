import React, { Component } from 'react';
import './getstarted.css';
import Nav from '../../components/NavBar';
import Footer from '../../components/Footer/footer';

class GetStarted extends Component {
  render() {
    return (
      <div className="Contact">
        <Nav />
        <div className="Container">
          <div className="item">29</div>
          <div className="item">30</div>
          <div className="item">31</div>
          <div className="item">32</div>
        </div> 
        <Footer /> 
      </div>
    );
  }
}

export default GetStarted;