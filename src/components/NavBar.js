import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/burger.jpg";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="150" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Text>
            <a href="#login">Mince 'n' Patties</a>
        </Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fa-solid fa-burger"></i>Home
            </NavLink>
            <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/signin"
            >
              <i className="fa-solid fa-utensils"></i>Sign in
            </NavLink>
            <NavLink
              to="/signup"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fa-solid fa-drumstick-bite"></i>Sign up
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;