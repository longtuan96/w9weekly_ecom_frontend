import React from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import notFoundImg from "../images/not-available.png";
import orderActions from "../redux/actions/order.actions";
import userActions from "../redux/actions/user.actions";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      orderActions.AddOrDeleteItemOrder(props.itemId, props.orderId, "add")
    );
  };
  const handleDeleteFromCart = () => {
    dispatch(
      orderActions.AddOrDeleteItemOrder(props.itemId, props.orderId, "delete")
    );
  };

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
          {props.place === "contentSection" ? (
            <button className="btn-green" onClick={handleAddToCart}>
              Add to Cart
            </button>
          ) : (
            <button className="btn-red" onClick={handleDeleteFromCart}>
              Minus from Cart
            </button>
          )}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ProductCard;
