import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

type CheckboxEvent = React.ChangeEvent<HTMLInputElement>;

const Login: React.FC = (): ReactElement => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [checked, setChecked] = useState<boolean | string>(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Username ${email} has logged in.`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Username/Email address</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter username or email address"
          name="email"
        />
        <Form.Text className="text-muted">
          We&apos;ll never share you email with anyone else.
        </Form.Text>
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

      <Form.Group controlId="formBasicCheckBox">
        <Form.Check
          type="checkbox"
          label="Remember Me"
          value={checked as string}
          onChange={(event: CheckboxEvent) => setChecked(event.target.checked)}
          name="checked"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

      <Link to="/password"> Forgot Password?</Link>
    </Form>
  );
};

export default Login;
