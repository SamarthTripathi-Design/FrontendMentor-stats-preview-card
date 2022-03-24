import { Container } from "@mui/material";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NavContents.css";

const NavContents = ({ newsArray, newResults, setLoadMore, loadMore }) => {
  return (
    <Container maxWidth="md">
      <div className="contents">
        {newsArray.map((newsItem) => {
          // return <div>{newsItem.title}</div>;
          return <NewsCard newsitem={newsItem} key={newsItem.name} />;
        })}

        {loadMore <= newResults && (
          <>
            <hr />
            <button
              onClick={() => setLoadMore(loadMore + 5)}
              className="loadmore"
            >
              Load More
            </button>
          </>
        )}
      </div>
    </Container>
  );
};

export default NavContents;
