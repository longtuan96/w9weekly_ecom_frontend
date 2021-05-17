import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import orderReducer from "./order.reducer";
import productReducer from "./product.reducer";
import routeReducer from "./route.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
  auth: authReducer,
  product: productReducer,
  user: userReducer,
  order: orderReducer,
  route: routeReducer,
});
