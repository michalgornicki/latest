import React, { useState, useEffect } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home.jsx";
import Post from "./components//posts/Post.jsx";
import { Link } from "react-router-dom";


const App = () => {



    const [Posts, setPosts] = useState();
    const [Photos, setPhotos] = useState();
    const [Comments, setComments] = useState();
  
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
    }, []);

  return (
    <Router>
      <>


        <Routes>
          <Route path="/" element={<Home Posts={Posts} Photos={Photos} Comments={Comments} />} />
          <Route path="/posts/:id" element={<Post Posts={Posts} Photos={Photos} Comments={Comments} />} />
        </Routes>

      </>
    </Router>
  );
}

export default App;
