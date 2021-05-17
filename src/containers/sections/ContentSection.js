import React from "react";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../../components/ProductCard";
import { productActions } from "../../redux/actions/product.actions";

const ContentSection = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(productActions.getAllProduct());
  }, []);

  return (
    <div>
      <Container>
        <h1>Food Menu</h1>

        <Row>
          {products
            ? products.map((item) => (
                <Col>
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
      </Container>
    </div>
  );
};

export default ContentSection;
