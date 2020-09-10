import React, { Component } from 'react';

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
      <form
        onSubmit={this.handleSubmit}
      >
        <h3>Sign Up</h3>

        <div>
          <label
            htmlFor="username"
          >
            Username
            <input
              type="text"
              value={username}
              onChange={this.handleChange}
              placeholder="Username"
              name="username"
            />
          </label>
        </div>

        <div>
          <label
            htmlFor="email"
          >
            Email address
            <input
              type="email"
              value={email}
              onChange={this.handleChange}
              placeholder="Enter email"
              name="email"
            />
          </label>
        </div>

        <div>
          <label
            htmlFor="password"
          >
            Password
            <input
              type="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Enter password"
              name="password"
            />
          </label>
        </div>

        <div>
          <label
            htmlFor="confirm_password"
          >
            Confirm Password
            <input
              type="password"
              value={confirmPassword}
              onChange={this.handleChange}
              placeholder="Confirm password"
              name="confirmPassword"
            />
          </label>
        </div>

        <button type="submit">Sign Up</button>
        <p>
          Already registered
          {' '}
          <a href="/signin">sign in?</a>
        </p>
      </form>
    );
  }
}

export default Signup;
