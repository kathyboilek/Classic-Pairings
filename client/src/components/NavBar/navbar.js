import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import UserActions from '../UserActionsModal';
import logo from '../../images/logo-wine.png';

import './navbar.css';

class Nav extends Component {
  constructor() {
    super();
    
    this.state = {
      typeModal: '',
      showModal: false
    };
  }

  toggleModal(action) {
    this.setState({ 
      showModal: !this.state.showModal,
      typeModal: action
    });
  }

  render() {
    const { showModal, typeModal } = this.state;
    return (
      <div>
        <UserActions
            showModal={showModal}
            typeModal={typeModal}
            toggleModal={() => this.toggleModal('')}
          />
        <div className="header">
          
          <div className="logo">
            <img alt="logo" src={logo}/>
          </div>
          <ul className="navigation">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/join">Join</Link></li>
            <li><Link to="/wines">Wines</Link></li>
            <li><Link to="/recipes">Recipes</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
            <li className='userinfo' onClick={() => this.toggleModal('sign-in')}>
              <a href="#">
                Sign In
              </a>
            </li>
            {/* <li className='userinfo'><Link to="/getstarted">Get Started</Link></li> */}
            <li className='userinfo' onClick={() => this.toggleModal('register')}>
              <a href="#">
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;