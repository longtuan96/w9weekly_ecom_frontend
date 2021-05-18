import React from "react";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../../components/ProductCard";
import orderActions from "../../redux/actions/order.actions";
import { productActions } from "../../redux/actions/product.actions";

const ContentSection = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const user = useSelector((state) => state.user.user);
  const order = useSelector((state) => state.order.order);
  const loading = useSelector((state) => state.user.loading);
  useEffect(() => {
    dispatch(productActions.getAllProduct());
  }, []);
  useEffect(() => {
    dispatch(orderActions.getOrder(user.order));
  }, [user]);

  return (
    <div>
      <Container>
        <h1>Food Menu</h1>

        <Row>
          {products
            ? products.map((item) => (
                <Col>
                  <ProductCard
                    itemId={item._id}
                    orderId={order._id}
                    place={"contentSection"}
                    image={item.image}
                    name={item.name}
                    price={item.price}
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
