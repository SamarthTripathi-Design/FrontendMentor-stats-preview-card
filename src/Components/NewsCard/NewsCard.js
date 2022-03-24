import React from "react";
import "./NewsCard.css";

const NewsCard = ({ newsitem }) => {
  const fullDate = new Date(newsitem.publishedAt);
  var date = fullDate.toString().split(" ");
  const hour = parseInt(date[4].substring(0, 2));

  const time = hour > 12 ? true : false;

  return (
    <div className="newscard">
      {
        <img
          className="newsimage"
          src={newsitem.urlToImage ? newsitem.urlToImage : ""}
          alt={newsitem.title}
        />
      }
      <div className="newstext">
        <div>
          <span className="title">{newsitem.title}</span>
          <br />
          <span className="author">
            <a href={newsitem.url} target="_blank">
              <b>Short</b>
            </a>
            <span className="muted">
              by {newsitem.author ? newsitem.author : "unknown"} /{" "}
              {time
                ? `${hour - 23}:${date[4].substring(3, 5)}pm`
                : `${hour}:${date[4].substring(3, 5)}am`}
            </span>
          </span>
        </div>
        <div className="lowernewstext">
          <div className="description">{newsitem.description}</div>
          <span className="readmore">
            read more at
            <a className="source" href={newsitem.url}>
              <b>{newsitem.source.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
