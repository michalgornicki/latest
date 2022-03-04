import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Home = (props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className="section d-flex flex-wrap justify-content-between m-auto pt-5">
        {props.News && props.Photos ? (
          props.News.articles.map((item, id) => (
            <article className="post post--hover" key={}>
              <Link className="link" to={"/posts/" + id}>
                <img className="post__image" src={props.News.articles[id].urlToImage} alt="" loading="lazy" />
                <div className="post__title">{item.title}</div>
              </Link>
            </article>
          ))
        ) : (
          <div className="post__loading">Loading</div>
        )}
      </section>
    </>
  );
};

export default Home;
