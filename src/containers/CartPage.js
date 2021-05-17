import React from "react";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Order from "../components/Order";
import ProductCard from "../components/ProductCard";
import orderActions from "../redux/actions/order.actions";

const CartPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const order = useSelector((state) => state.order.order);

  useEffect(() => {
    dispatch(orderActions.getOrder(user._id));
  }, []);
  return (
    <Container className="text-center">
      <h1>YOUR CART</h1>

      {order && order !== {} ? (
        <Order products={order.products} id={order._id} />
      ) : (
        console.log("No order")
      )}
    </Container>
  );
};

export default CartPage;
