import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/burger.jpg";
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" height="150" />
        </Navbar.Brand>
        <Navbar.Text>
            <a href="#login">Mince 'n' Patties</a>
        </Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <Nav.Link>
              <i class="fa-solid fa-burger"></i> Home
            </Nav.Link>
            <Nav.Link>
              <i class="fa-solid fa-utensils"></i> Login
            </Nav.Link>
            <Nav.Link>
              <i class="fa-solid fa-drumstick-bite"></i> Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;