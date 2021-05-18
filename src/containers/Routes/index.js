import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import PublicLayout from "./layouts/PublicLayout";
import PrivateRoute from "./PrivateRoutes";

const Routes = (props) => {
  return (
    <Switch>
      <PrivateRoute path="/admin" component={AdminLayout} />
      <Route path="/api/" component={PublicLayout} />
    </Switch>
  );
};
export default Routes;
