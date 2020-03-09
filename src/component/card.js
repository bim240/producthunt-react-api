import React from "react";

const Card = props => {
  return (
    <div>
      <div className="list_container">
        <div className="product_container">
          <div className="img_prodect">
            {console.log(props.thumbnail)}
            <img src={props.thumbnail ? props.thumbnail.image_url : ""}></img>
          </div>
          <div className="product_details">
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <div>
              {/* {props.tagline.split(",").map(v => ( */}
              <button className="btn tags">{props.tagline}</button>
              {/* ))} */}
            </div>
          </div>
        </div>
        <div className="popular_container">
          <button
            className="rm_btn"
            onClick={() => props.updatePopular(props.id)}
          >
            <div> &#9650;</div>
            <div>{props.votes_count}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
