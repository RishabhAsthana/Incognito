import React, { Component } from 'react';
import logo from './logo.svg';
import { Container, Button, Header, Form, Grid, Modal, Image, Checkbox, Tab } from 'semantic-ui-react'

import './LoginPage.css';

const LoginForm = () => (
  <div className="form_container">
    <Form>
      <Form.Field>
        <label>Email</label>
        <input placeholder='example@example.com' />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input placeholder='Password' type='password' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit' href="/">Submit</Button>
      <p className="register">Need an account? Register</p>
    </Form>
  </div>
)



class LoginPage extends Component {
  render() {
    return (
        <LoginForm/>
    );
  }
}

export default LoginPage;
