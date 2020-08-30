import React, { Component } from 'react';
import Login from '../../components/Login';
import Signup from '../../components/SignUp';

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Login />
        <Signup />
      </div>
    );
  }
}

export default Authentication;
