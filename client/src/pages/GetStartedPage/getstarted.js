import React, { Component } from 'react';
import './getstarted.css';
import Nav from '../../components/NavBar';
import Footer from '../../components/Footer/footer';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class GetStarted extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    const { email, password } = this.state;
    console.log('email', email);
    console.log('password', password);
    // Logic for register
  }

  render() {
    return (
      <div className="Contact">
        <Nav />
        <div className="Container">
          <div className="item0">
            <h1 className="create">Create an Account</h1>
            <h3 className="text1">It's free, only takes a minute, and will make future visits quicker and easier. Take advantages of the many benefits, including:
              <ul className="reasons">
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ul>
            </h3>
          </div>
          <div className="item1">
            <form>
              <FormGroup
                controlId="formBasicText"
              >
                <ControlLabel>Email Address</ControlLabel>
                <FormControl
                  type="text"
                  name="email"
                  value={this.state.email}
                  placeholder="Enter email address"
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

              <Button bsStyle="primary" onClick={this.handleSubmit}>Register</Button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default GetStarted;