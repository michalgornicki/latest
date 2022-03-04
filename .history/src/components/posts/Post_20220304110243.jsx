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
    fetch("https://newsapi.org/v2/everything?q=ukrainian&apiKey=9ccd6ff9d04943049e448525cd92bd14")
      .then((response) => response.json())
      .then((json) => setInfo(json));
  }, []);

  return (
    <>
      <section className="section justify-content-between m-auto pt-5">
        {News && props.Photos ? (
          <article className="post">
            <img className="post__image" src={Info.articles[id].urlToImage} alt="" />
            <div className="post__title">{Info.articles[id].title}</div>
            <div className="post__body post__body--uppercase">{Info.articles[id].description}</div>
          </article>
        ) : (
          <div className="post__loading">Loading</div>
        )}

        <div className="input d-flex flex-column">
          <input className="input__field" type="text" name="comment" placeholder="Add your comment..." />
          <Button className="input__button w-25 my-2" variant="primary">
            Send
          </Button>
        </div>

        {props.Comments ? (
          props.Comments.filter((item) => item.postId === 1).map((item, id) => (
            <article className="comment" key={id}>
              <div className="comment__username">{item.name}</div>
              <div className="comment__body">{item.body}</div>
              <div className="d-flex w-25 justify-content-evenly">
                <div className="comment__button p-2">Like</div>
                <div className="comment__button p-2">Answer</div>
              </div>
            </article>
          ))
        ) : (
          <div className="post__loading">Loading</div>
        )}
      </section>
    </>
  );
};

export default Post;
