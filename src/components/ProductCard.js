import React from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import notFoundImg from "../images/not-available.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProductCard = (props) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="border-yellow ProductCard">
      <Card>
        <Card.Img
          variant="top"
          src={props.image || notFoundImg}
          style={{ borderRadius: "10px" }}
        />
        <Card.Body>
          <Card.Title>
            <h2>{props.name}</h2>
          </Card.Title>
          <h4>{props.price}</h4>
          <h4>{`Rating (work in progress): `}</h4>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
        </Card.Body>
        <Card.Footer>
          <button className="btn-green">Add to Cart</button>
          <button className="btn-red">Minus from Cart</button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ProductCard;
