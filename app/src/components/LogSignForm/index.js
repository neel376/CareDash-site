import React from 'react';

import { FormGroup, ControlLabel, FormControl, HelpBlock, form, Button } from 'react-bootstrap';


var accept = true;
class LogSignForm extends React.Component {
  constructor() {
    super();
    this.state = {
      showFullForm: true,
      fName: '',
      lName: '',
      email: '',
      password1: '',
      password2: '',

    }
  }

  handleSwitchForm() {
    this.setState({showFullForm: !this.state.showFullForm, fName: '', lName: '', email: '', password1: '', password2: ''})
  }
  validate(fName) {
    if(fName.length > 1){
      accept = true;
      return "success"
    }
    
    accept = false
    return null;
  }
  validatePassword(password) {
    if(/[A-Z]/.test(password) && /[!#$%?]/.test(password) && password.length >= 8) {
      accept = true;
      return "success";
    } 
    else if(password.length > 0) {
      accept = false
      return "error";
    }
    accept = false
    return null;
  }
  validateConfirmPassword(password) {
    if(this.state.password1.length + password.length === 0) {
      accept = false;
      return null;
    } 
    if(this.state.password1 === password) {
      accept = true;
      return "success";
    }

    accept = false;
    return "error";
   
  }
  displaySignup() {
    
    return(
     
      <div>
     <FormGroup
        controlId="formBasicText"

            >
              <ControlLabel>First Name</ControlLabel>
              <FormGroup validationState={this.validate(this.state.fName)}> 
                <FormControl
                  type="text"
                  value={this.state.fName}
                  placeholder="First Name"
                  onChange={(e) => {this.setState({ fName: e.target.value })}}
                />
              </FormGroup>

              <ControlLabel>Last Name</ControlLabel>
              <FormGroup validationState={this.validate(this.state.lName)}> 
                <FormControl
                  type="text"
                  value={this.state.lName}
                  placeholder="Last Name"
                  onChange={(e) => {this.setState({ lName: e.target.value })}}
                />
              </FormGroup>
              <ControlLabel>Email Address</ControlLabel>
              <FormControl
                type="text"
                type="email"
                value={this.state.email}
                placeholder="Email"
                onChange={(e) => {this.setState({ email: e.target.value })}}
              />
              <ControlLabel>Password</ControlLabel>
              <p style={{ fontSize: '0.7em', color: 'gray' }}>Must contain 8 characters, 1 uppercase, and at least one special character (!, #, $, %, ?)</p>
              <FormGroup validationState={this.validatePassword(this.state.password1)}>
                <FormControl
                  type="password"
                  value={this.state.password1}
                  placeholder="Password"
                  onChange={(e) => {this.setState({ password1: e.target.value })}}
                />
              </FormGroup>
              <ControlLabel>Confirm Password</ControlLabel>
              <FormGroup validationState={this.validateConfirmPassword(this.state.password2)}>
                <FormControl
                  type="password"
                  value={this.state.password2}
                  placeholder="Confirm Password"
                  onChange={(e) => {this.setState({ password2: e.target.value })}}
                />
              </FormGroup>
              <FormControl.Feedback />
            </FormGroup>

            <ul>

            <li><Button bsStyle="primary" disabled={!accept} type="submit">Create Account</Button></li>
            <li style={{ marginTop: 10 }}><a onClick={() => { this.handleSwitchForm() }}>Already have an account? Click Here</a></li>
            </ul>
            </div>
      )

  }

  displayLogin() { 
    return(
     <div>
      <FormGroup controlId="formBasicText">      
          <ControlLabel>Email Address</ControlLabel>
          <FormGroup>
            <FormControl
              type="text"
              type="email"
              value={this.state.email}
              placeholder="Email"
              onChange={(e) => {this.setState({ email: e.target.value })}}
            />
          </FormGroup>     
          <ControlLabel>Password</ControlLabel>
          <FormGroup validationState={this.validate(this.state.password1)}>
            <FormControl
              type="password"
              value={this.state.password1}
              placeholder="Password"
              onChange={(e) => {this.setState({ password1: e.target.value })}}
            />
          </FormGroup>
      </FormGroup>
          <ul>
            <li><Button bsStyle="primary" disabled={!accept} type="submit">Login</Button></li>
            <li style={{ marginTop: 10 }}><a onClick={() => { this.handleSwitchForm() }}>New user? Sign up here</a></li>
          </ul>
      </div>
          
      )

  }

  render() {
    return (
     <form style={{ marginLeft: 50, marginRight: 50 }}>
          <h3 style={{ color: '#30ABAA', textAlign: 'center' }}>{this.state.showFullForm ? "Sign in" : "Sign up"} with Caredash to Edit your Provider Profile</h3>
            {this.state.showFullForm ? this.displayLogin() : this.displaySignup()}
          </form>
    )
  }
}


export default LogSignForm;
