import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

const Order = ({ products, id }) => {
  return (
    <Container>
      <h1>{`Order ${id}`}</h1>
      <Row>
        {products
          ? products.map((item) => (
              <Col className="d-flex justify-content-center">
                <ProductCard
                  key={item._id}
                  image={item.image}
                  price={item.price}
                  name={item.name}
                />
              </Col>
            ))
          : ""}
      </Row>
      <div className="d-flex"></div>
    </Container>
  );
};

export default Order;
