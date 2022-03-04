import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const NavigationBar = (props) => {

  return (
    <>
      <Navbar className="navbar py-4" bg="white" expand="lg">
        <Container className="w-75 m-auto">
          <Link className="link" to="/">
            <Navbar.Brand className="px-3">Latest News</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav m-auto p-3 w-75 justify-content-between">
              <Nav.Link onClick={() => props.updateTheme("ukraine")}>Ukraine</Nav.Link>
              <Nav.Link onClick={() => props.updateTheme("russia")}>Russia</Nav.Link>
              <Nav.Link onClick={() => props.updateTheme("nato")}>NATO</Nav.Link>
              <Nav.Link onClick={() => props.updateTheme("asia")}>Asia</Nav.Link>
              <Nav.Link onClick={() => props.updateTheme("techn")}>Asia</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
