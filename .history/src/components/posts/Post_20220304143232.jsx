import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Post = (props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  let { id } = useParams();

  const [Info, setInfo] = useState()

  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=ukraine&apiKey=9ccd6ff9d04943049e448525cd92bd14")
      .then((response) => response.json())
      .then((json) => setInfo(json));
  }, []);

  return (
    <>
      <section className="section justify-content-between m-auto pt-5">
        {props.News && props.Photos ? (
          <article className="post">
            <img className="post__image" src={Info.articles[id].urlToImage} alt="" />
            <div className="post__source post__body--uppercase">{props.News.articles[id].source.name}</div>
            <div className="post__title">{props.News.articles[id].title}</div>
            <div className="post__body post__body--uppercase">{props.News.articles[id].description}</div>
            <a className="post__link link post__body--uppercase"
             href={props.News.articles[id].url}>Read full article</a>
          </article>
        ) : (
          <div className="post__loading">Loading</div>
        )}

      </section>
    </>
  );
};

export default Post;
