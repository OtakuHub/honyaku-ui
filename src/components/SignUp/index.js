import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    const { value } = this.state;
    alert(`Username ${value} has signed up.`);
    event.preventDefault();
  }

  render() {
    const {
      username, email, password, confirmPassword,
    } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={this.handleChange}
            placeholder="Username"
            name="username"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Enter email"
            name="email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Enter password"
            name="password"
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={this.handleChange}
            placeholder="Confirm password"
            name="confirmPassword"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

        <Link to="/singin"> Already registered, Sign In?</Link>
      </Form>
    );
  }
}

export default Signup;
