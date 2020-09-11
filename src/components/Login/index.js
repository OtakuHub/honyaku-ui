import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      checked: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    const { email } = this.state;
    alert(`Username ${email} has logged in.`);
    event.preventDefault();
  }

  handleInputChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({ [name]: value });
  }

  render() {
    const { email, password, checked } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username/Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={this.handleInputChange}
            placeholder="Enter username or email address"
            name="email"
          />
          <Form.Text className="text-muted">
            We'll never share you email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={this.handleInputChange}
            placeholder="Enter password"
            name="password"
          />
        </Form.Group>

        <Form.Group controlId="formBasicCheckBox">
          <Form.Check
            type="checkbox"
            label="Remember Me"
            value={checked}
            onChange={this.handleInputChange}
            name="checked"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

        <Link to="/password"> Forgot Password?</Link>
      </Form>
    );
  }
}

export default Login;
