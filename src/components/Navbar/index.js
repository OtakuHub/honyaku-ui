import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './style.sass';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  render() {
    const { loggedIn } = this.state;
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">
            Honyaku
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/category/anime">
                Anime
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/category/manga">
                manga
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/category/lightnovel">
                Light Novel
              </Link>
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            {loggedIn && (
              <Nav.Link>
                <Link to="/logout">
                  Logout
                </Link>
              </Nav.Link>
            )}
            {!loggedIn && (
              <Nav.Link>
                <Link to="/authentication">
                  Signup
                </Link>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
