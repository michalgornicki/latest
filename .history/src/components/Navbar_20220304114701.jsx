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
            <Navbar.Brand onClick={props.updateTheme("football") className="px-3">Latest News</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav m-auto p-3 w-75 justify-content-between">
              <Nav.Link >Ukraine</Nav.Link>
              <Nav.Link >Russia</Nav.Link>
              <Nav.Link >NATO</Nav.Link>
              <Nav.Link >Asia</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
