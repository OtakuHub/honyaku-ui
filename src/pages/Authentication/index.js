import React, { Component } from 'react';
import {
  Button, Tab, Modal, Nav, Tabs,
} from 'react-bootstrap';
import Login from '../../components/Login';
import Signup from '../../components/SignUp';

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleShow(event) {
    event.preventDefault();
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false });
  }

  render() {
    const { show } = this.state;
    return (
      <>
        <Nav.Link
          href="#"
          onClick={this.handleShow}
        >
          SignIn/SignUp
        </Nav.Link>
        <Modal
          show={show}
          size="lg"
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Login or Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tabs
              tabPosition="top"
              tabBarGutter={100}
              style={{
                flex: 0,
                flexDirection: 'row',
                width: 50,
              }}
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
      </>
    );
  }
}

export default Authentication;
