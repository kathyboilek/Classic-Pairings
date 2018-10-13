import React, { Component } from 'react';
import './join.css';
import Nav from '../../components/NavBar';
import Footer from '../../components/Footer';
import Button from 'react-bootstrap/lib/Button';

class Join extends Component {
  render() {
    return (
      <div className="Join">
        <Nav />
        <div className="container1-join">
          <div className="item-picture">10</div>
        </div>
        <div className="container2-example">
          <div className="item-banner"></div>
          <div className="item-button">
            <Button className="join-button">Ready to get started?</Button>
          </div>  
        </div>
        <Footer />  
      </div>
    );
  }
}

export default Join;



