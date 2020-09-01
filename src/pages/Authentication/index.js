import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
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
      <Tabs id="controltab" defaultActiveKey="login">
        <Tab eventKey="login" title="Login">
          <Login />
        </Tab>
        <Tab eventKey="signup" title="Signup">
          <Signup />
        </Tab>
      </Tabs>
    );
  }
}

export default Authentication;
