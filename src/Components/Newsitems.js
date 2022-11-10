import React from "react";

const Newsitems = (props) => {
  let { title, discription, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div>
          <span
            className="badge rounded-pill bg-danger"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
            }}
          >
            {source}
          </span>
        </div>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{discription}</p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsitems;
