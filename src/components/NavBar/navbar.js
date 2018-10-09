import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

class Nav extends Component {
  render() {
    return (
      <ul className="navigation">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/join">Join</Link></li>
        <li><Link to="/wines">Wines</Link></li>
        <li><Link to="/food">Foods</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
      </ul>
    );
  }
}

export default Nav;