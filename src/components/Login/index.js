import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const { value } = this.state;
    alert(`Username ${value} has logged in.`);
    event.preventDefault();
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>

        <div>
          <label htmlFor="username">
            Username/Email address
            <input type="email" value={value} onChange={this.handleChange} placeholder="Enter username or email address" />
          </label>
        </div>

        <div>
          <label htmlFor="password">
            Password
            <input type="password" placeholder="Enter password" />
          </label>
        </div>

        <div>
          <div>
            <label htmlFor="customCheckbox">
              <input type="checkbox" id="customCheckbox" />
              Remember me
            </label>
          </div>
        </div>

        <button type="submit">Submit</button>
        <p>
          Forgot
          {' '}
          <a href="/password">password?</a>
        </p>
      </form>
    );
  }
}

export default Login;
