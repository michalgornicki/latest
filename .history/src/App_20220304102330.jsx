import React, { useState, useEffect } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Post from "./components//posts/Post.jsx";

const App = () => {
  const [Posts, setPosts] = useState();
  const [Photos, setPhotos] = useState();
  const [Comments, setComments] = useState();
  const [News, setNews] = useState();

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

    const fetchNews =
    fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=9ccd6ff9d04943049e448525cd92bd14")
      .then((response) => response.json())
      .then((json) => setNews(json))
      .then(console.log(News))
  }, []);




  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home Posts={Posts} Photos={Photos} Comments={Comments} />} />
          <Route path="/posts/:id" element={<Post Posts={Posts} Photos={Photos} Comments={Comments} />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
