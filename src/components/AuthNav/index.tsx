import React, { useState } from 'react';
import { Button, Tab, Modal, Nav, Tabs } from 'react-bootstrap';
import Login from '../Login';
import Signup from '../SignUp';

const AuthNav = ({ loggedIn }) => {
  const [show, setShow] = useState(false);

  const handleShow = (event) => {
    event.preventDefault();
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <Nav.Link href="#" onClick={handleShow}>
        {loggedIn ? 'Logout' : 'Signup'}
      </Nav.Link>
      <Modal show={show} onHide={handleClose}>
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
            <Tab eventKey="login" title="Login">
              <Login />
            </Tab>
            <Tab eventKey="signup" title="Signup">
              <Signup />
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AuthNav;
