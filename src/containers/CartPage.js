import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Order from "../components/Order";
import ProductCard from "../components/ProductCard";
import orderActions from "../redux/actions/order.actions";
import userActions from "../redux/actions/user.actions";

const CartPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const order = useSelector((state) => state.order.order);
  const loading = useSelector((state) => state.order.loading);
  const [data, setData] = useState({
    topup: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(userActions.topUpBalance(data));
  };
  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handlePayment = () => {
    dispatch(userActions.payOrder(order._id, total));
  };

  const totalOfOrder = () => {
    return order.products.reduce((sum, item) => sum + item.price, 0);
  };
  let total = totalOfOrder();

  useEffect(() => {
    dispatch(orderActions.getOrder(user.order));
  }, []);
  return (
    <>
      {!loading ? (
        <Container className="text-center">
          <h1>YOUR CART</h1>
          <h2>{`Total: ${total}`}</h2>
          <h3>{`Your current Balance: ${user.balance}`}</h3>
          <div className="d-flex justify-content-around mb-4 mt-4">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  as="textarea"
                  rows={1}
                  name="topup"
                  onChange={handleChange}
                />
              </Form.Group>

              <button className="btn-green" type="submit">
                Top Up
              </button>
            </Form>
            <button className="btn-red" onClick={handlePayment}>
              Pay
            </button>
          </div>
          <Row>
            {order
              ? order.products.map((item) => (
                  <Col className="d-flex justify-content-center">
                    <ProductCard
                      itemId={item._id}
                      orderId={order._id}
                      place={"CartPage"}
                      image={item.image}
                      name={item.name}
                      price={item.price}
                    />
                  </Col>
                ))
              : console.log("There is no orders")}
          </Row>
        </Container>
      ) : (
        console.log("----", loading)
      )}
    </>
  );
};

export default CartPage;
