import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      <form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>

        <div>
          <label htmlFor="email">
            Username/Email address
            <input
              type="text"
              value={email}
              onChange={this.handleInputChange}
              placeholder="Enter username or email address"
              name="email"
            />
          </label>
        </div>

        <div>
          <label htmlFor="password">
            Password
            <input
              type="password"
              value={password}
              onChange={this.handleInputChange}
              placeholder="Enter password"
              name="password"
            />
          </label>
        </div>

        <div>
          <div>
            <label htmlFor="customCheckbox">
              <input
                type="checkbox"
                id="customCheckbox"
                value={checked}
                onChange={this.handleInputChange}
                name="checked"
              />
              Remember me
            </label>
          </div>
        </div>

        <button type="submit">Submit</button>
        <p>
          Forgot
          {' '}
          <Link to="/password">password ?</Link>
        </p>
      </form>
    );
  }
}

export default Login;
