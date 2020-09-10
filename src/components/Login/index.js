import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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
    alert(`Username ${value} has logged in.`);
    event.preventDefault();
  }

  handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
  }

  render() {
    const { email, password, checked } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>

        <div>
          <label
            htmlFor="username"
          >
            Username/Email address
            <input
              type="email"
              value={email}
              onChange={this.handleChange}
              placeholder="Enter username or email address"
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
          <div>
            <label
              htmlFor="customCheckbox"
            >
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
          <a href="/password">password?</a>
        </p>
      </form>
    );
  }
}

export default Login;
