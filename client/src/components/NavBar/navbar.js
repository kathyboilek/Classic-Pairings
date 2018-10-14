import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import './navbar.css';

class Nav extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      showModal: false,
      username: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { showModal } = this.state;
    return (
      <div className="all">
        {showModal &&
          <div className="static-modal">
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>Sign In</Modal.Title>
              </Modal.Header>

              <Modal.Body>
              <form>
                <FormGroup
                  controlId="formBasicText"
                >
                  <ControlLabel>Username</ControlLabel>
                  <FormControl
                    type="text"
                    name="username"
                    value={this.state.username}
                    placeholder="Enter username"
                    onChange={this.handleChange}
                  />

                  <ControlLabel>Password</ControlLabel>
                  <FormControl
                    type="password"
                    name="password"
                    value={this.state.password}
                    placeholder="Enter password"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </form>
              </Modal.Body>

              <Modal.Footer>
                <Button onClick={() => this.setState({ showModal: false })}>Close</Button>
                <Button bsStyle="primary">Sign In</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        }

        <ul className="navigation">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/join">Join</Link></li>
          <li><Link to="/wines">Wines</Link></li>
          <li><Link to="/food">Foods</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
          <li className='userinfo' onClick={() => this.setState({ showModal: true })}>
            <a href="#">
              Sign In
            </a>
          </li>
          <li className='userinfo'><Link to="/getstarted">Get Started</Link></li>
        </ul>
      </div>
    );
  }
}

export default Nav;