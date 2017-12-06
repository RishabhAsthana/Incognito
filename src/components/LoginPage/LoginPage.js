import React, { Component } from 'react';
import logo from './logo.svg';
import { Container, Button, Header, Form, Grid, Modal, Image, Checkbox, Tab } from 'semantic-ui-react'

import './LoginPage.css';

class LoginPage extends Component {

  constructor(){
      super();
      this.state = {'email' : ''};
      this.handleEmail.bind(this);
  }
   
    handleEmail(e){
        this.setState({'email':e.target.value});
    }
  render() {
    return (
      <div className="form_container">
        <Form>
          <Form.Field>
            <label>Email</label>
            <input placeholder='example@example.com' onChange={ (e, input) => this.handleEmail(e)} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='Password' type='password' />
          </Form.Field>
          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Button type='submit' href='/'>Submit</Button>
          <p className="register">Need an account? Register</p>
        </Form>
      </div>    );
  }
}

export default LoginPage;
