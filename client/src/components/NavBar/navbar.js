import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

class Nav extends Component {
  render() {
    return (
      <div className="all">
        <ul className="navigation">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/join">Join</Link></li>
          <li><Link to="/wines">Wines</Link></li>
          <li><Link to="/food">Foods</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
          <li className='userinfo'><Link to="/signin">Sign In</Link></li>
          <li className='userinfo'><Link to="/getstarted">Get Started</Link></li>
        </ul> 
      </div>  
    );
  }
}

export default Nav;