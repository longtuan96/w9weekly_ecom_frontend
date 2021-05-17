import React from "react";

import { Switch, Route } from "react-router-dom";
import AlertMsg from "../../../components/AlertMsg";
import NotFoundPage from "../../../components/NotFoundPage";

import HomePage from "../../HomePage";
import LoginPage from "../../LoginPage";

import RegisterPage from "../../RegisterPage";

import ProductDetailPage from "../../ProductDetailPage";
import PrivateRoute from "../PrivateRoutes";
import CartPage from "../../CartPage";

const PublicLayout = () => {
  return (
    <>
      {/* <h1>This is Public layout</h1> */}

      <AlertMsg />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/products/:id" component={ProductDetailPage} />
        <PrivateRoute exact path="/user/cart" component={CartPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default PublicLayout;
