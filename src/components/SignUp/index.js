import React, { Component } from 'react';

class Signup extends Component {
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
    alert(`Username ${value} has signed up.`);
    event.preventDefault();
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        <div>
          <label htmlFor="username">
            Username
            <input type="text" value={value} onChange={this.handleChange} placeholder="Username" />
          </label>
        </div>

        <div>
          <label htmlFor="email">
            Email address
            <input type="email" placeholder="Enter email" />
          </label>
        </div>

        <div>
          <label htmlFor="password">
            Password
            <input type="password" placeholder="Enter password" />
          </label>
        </div>

        <div>
          <label htmlFor="confirm_password">
            Confirm Password
            <input type="password" placeholder="Confirm password" />
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
