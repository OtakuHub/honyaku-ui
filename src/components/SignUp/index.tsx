import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const Signup: React.FC = (): ReactElement => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Username ${username} has signed up.`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username"
          name="username"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter email"
          name="email"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter password"
          name="password"
        />
      </Form.Group>

      <Form.Group controlId="formConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
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
};

export default Signup;
