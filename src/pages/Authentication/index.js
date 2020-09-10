import React, { Component } from 'react';
import {
  Button, Tab, Tabs, Modal, Nav,
} from 'react-bootstrap';
import Login from '../../components/Login';
import Signup from '../../components/SignUp';
import './style.sass';

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleShow = () => this.setState({ show: true });

  handleClose = () => this.setState({ show: false });

  render() {
    const { show } = this.state;
    return (
      <Nav.Link onClick={this.handleShow}>
        <Modal
          show={show}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Login or Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tabs
              id="controltab"
              defaultActiveKey="login"
            >
              <Tab
                eventKey="login"
                title="Login"
              >
                <Login />
              </Tab>
              <Tab
                eventKey="signup"
                title="Signup"
              >
                <Signup />
              </Tab>
            </Tabs>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline-danger"
              onClick={this.handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Nav.Link>
    );
  }
}

export default Authentication;
