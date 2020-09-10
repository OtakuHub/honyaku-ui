import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import handleNavigation from '../../helper/navigation';
import './style.sass';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      categories: [
        { link: '/category/anime', name: 'Anime' },
        { link: '/category/manga', name: 'Manga' },
        { link: '/category/lightnovel', name: 'Light Novel' },
      ],
    };
  }

  render() {
    const { loggedIn, categories } = this.state;
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand
          href="#"
          data-url="/"
          onClick={handleNavigation}
        >
          Honyaku
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {categories.map((category) => (
              <Nav.Link
                key={category.name}
                href="#"
                data-url={category.link}
                onClick={handleNavigation}
              >
                {category.name}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link
              href="#"
              data-url={loggedIn ? '/logout' : '/authentication'}
              onClick={handleNavigation}
            >
              {loggedIn ? 'Logout' : 'Sign up'}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
