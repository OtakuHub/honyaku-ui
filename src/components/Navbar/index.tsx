import React, { ReactElement, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import AuthNav from '../AuthNav';
import handleNavigation from '../../helper/navigation';
import './style.sass';

interface Categories {
  link: string;
  name: string;
}

const NavigationBar: React.FC = (): ReactElement => {
  const [loggedIn] = useState<boolean>(false);
  const [categories] = useState<Array<Categories>>([
    { link: '/category/anime', name: 'Anime' },
    { link: '/category/manga', name: 'Manga' },
    { link: '/category/lightnovel', name: 'Light Novel' },
  ]);

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
          <AuthNav loggedIn={loggedIn} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
