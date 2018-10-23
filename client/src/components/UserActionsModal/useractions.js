import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Auth from '../../Auth';
import './useractions.css';
import logo from '../../images/logo-wine.png';

const auth = new Auth();



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

  componentDidMount(){
    this.handleAuthentication(this.props);
  }

  handleAuthentication = () => {
    if (/access_token|id_token|error/.test(window.location.hash)) {
      auth.handleAuthentication();
      window.location.reload();
    }
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

  handleForm = e => {
    e.preventDefault();
    
    const { typeModal } = this.props;
    const email = this.refs.user_email.value;
    const password = this.refs.user_password.value;

    if(email && password) {
      if(typeModal === 'sign-in') {
        auth.login(email, password);
      }
      if(typeModal === 'sign-up') {
        auth.signup(email, password);
      }
    }
    
  }
  
  render() {
    const { showModal, typeModal } = this.props;
    console.log( localStorage.getItem('access_token') );

    if (!showModal) return null;
    
    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title style={{ textAlign: 'center' }}>
              {typeModal === 'sign-in' && 'Sign In' }
              {typeModal === 'sign-up' && 'Sign Up' }
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            <form onSubmit={(e) => this.handleForm(e)  }>
              <div className="form-group">
                <label>Email</label>
                <input ref="user_email" type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input ref="user_password" type="password" className="form-control" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>

          </Modal.Body>
        </Modal.Dialog>
      </div>
    )
  }
}

export default GetStarted;