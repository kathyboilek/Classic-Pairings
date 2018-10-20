import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import './useractions.css';
import logo from '../../images/logo-wine.png';
import SignIn from '../../SignIn';
import SignUp from '../../SignUp';


class GetStarted extends Component {
  constructor() {
    // In order to access react methods you have to bind
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // Input field states
    this.state = {
      username: '',
      password: ''
    };
  }
  // Handles the user's information and out inside the state
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  // Form
  handleSubmit() {
    const { typeModal } = this.props;
    
    if (typeModal === 'sign-in') {
      // Add here code to sign in

      


    }
    else if (typeModal === 'register') {
      // Add here code to register
    }
  }
  
  render() {
    const { showModal, typeModal } = this.props;

    if (!showModal) return null;
    
    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title style={{ textAlign: 'center' }}>
              <img alt="logo" src={logo}/>

              {typeModal === 'sign-in' &&
                <p className="sign-in">Sign In</p>
              }
              {typeModal === 'sign-up' &&
                <p className="sign-up">Sign Up</p>
              }
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {/* <form>
              <FormGroup
                controlId={`${typeModal}-username`}
              >
                <ControlLabel>Username</ControlLabel>
                <FormControl
                  type="text"
                  name="username"
                  value={this.state.username}
                  placeholder="Enter username"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup
                controlId={`${typeModal}-password`}
              >
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  type="password"
                  name="password"
                  value={this.state.password}
                  placeholder="Enter password"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </form> */}
            {typeModal === 'sign-in' &&
              <SignIn />
            }
            {typeModal === 'sign-up' &&
              <SignUp />
            }
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.toggleModal}>Close</Button>
            {/* <Button bsStyle="primary" onClick={this.handleSubmit}>{typeModal === 'sign-in' ? 'Sign In' : 'Register'}</Button> */}
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

export default GetStarted;