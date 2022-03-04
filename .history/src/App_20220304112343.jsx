import React, { useState, useEffect } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Post from "./components/posts/Post.jsx";

import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const App = () => {
  const [Posts, setPosts] = useState();
  const [Photos, setPhotos] = useState();
  const [Comments, setComments] = useState();
  const [News, setNews] = useState();
  const [Theme, setTheme] = useState("https://newsapi.org/v2/everything?q=ukrainian&apiKey=9ccd6ff9d04943049e448525cd92bd14");

  const updateTheme = (Theme) => {
    setTheme(Theme);
  }

  console.log(Theme)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));

    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setPhotos(json));

    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => setComments(json));

    fetch(Theme)
      .then((response) => response.json())
      .then((json) => setNews(json));
  }, []);

  return (
    <Router>
      <>
      <Navbar className="navbar py-4" bg="white" expand="lg">
        <Container className="w-75 m-auto">
          <Link className="link" to="/">
            <Navbar.Brand onClick={props.updateTheme("https://newsapi.org/v2/everything?q=football&apiKey=9ccd6ff9d04943049e448525cd92bd14")} className="px-3">Latest News</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav m-auto p-3 w-75 justify-content-between">
              <Nav.Link >FOOTBALL</Nav.Link>
              <Nav.Link href="#link">TENNIS</Nav.Link>
              <Nav.Link href="#link">BASKETBALL</Nav.Link>
              <Nav.Link href="#link">MOTORSPORTS</Nav.Link>
              <Nav.Link href="#link">CHESS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

        <Routes>
          <Route path="/" element={<Home Posts={Posts} Photos={Photos} Comments={Comments} News={News} />} />
          <Route path="/posts/:id" element={<Post Posts={Posts} Photos={Photos} Comments={Comments} />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
