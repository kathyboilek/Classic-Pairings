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
      username: '',
      password: '',
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    const { username, password } = this.state;
    console.log('username', username);
    console.log('password', password);
    // Logic for register
  }

  render() {
    return (
      <div className="Contact">
        <Nav />
        <div className="Container">
          <div className="item1">
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

              <Button bsStyle="primary" onClick={this.handleSubmit}>Register</Button>
            </form>
          </div>
          <div className="item2">30</div>
          <div className="item3">31</div>
          <div className="item4">32</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default GetStarted;