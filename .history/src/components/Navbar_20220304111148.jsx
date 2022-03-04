import React, {useState} from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const NavigationBar = (props) => {


  const [Theme, setTheme] = useState("https://newsapi.org/v2/everything?q=ukrainian&apiKey=9ccd6ff9d04943049e448525cd92bd14");

  return (
    <>
      <Navbar className="navbar py-4" bg="white" expand="lg">
        <Container className="w-75 m-auto">
          <Link className="link" to="/">
            <Navbar.Brand className="px-3">Sport News</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav m-auto p-3 w-75 justify-content-between">
              <Nav.Link href="#link" onClick={setTheme("football)}>FOOTBALL</Nav.Link>
              <Nav.Link href="#link">TENNIS</Nav.Link>
              <Nav.Link href="#link">BASKETBALL</Nav.Link>
              <Nav.Link href="#link">MOTORSPORTS</Nav.Link>
              <Nav.Link href="#link">CHESS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
