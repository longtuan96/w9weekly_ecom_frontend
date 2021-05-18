import * as types from "../constants/order.constants";
const initialState = {
  orders: [],

  order: {},
  loading: true,
};

const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ORDER_GET_REQUEST:
      return { ...state, loading: true };
    case types.ORDER_GET_SUCCESS:
      return { ...state, loading: false, order: payload };
    case types.ORDER_GET_FAILURE:
      console.log("Error in order getAll", payload);
      return { ...state, loading: true };

    case types.CREATE_ORDER_REQUEST:
      return { ...state, loading: true };
    case types.CREATE_ORDER_SUCCESS:
      console.log("======", payload);
      return { ...state, loading: false, order: payload };
    case types.CREATE_ORDER_FAILURE:
      console.log("Error in order create order", payload);
      return { ...state, loading: true };

    case types.ORDER_UPDATE_REQUEST:
      return { ...state, loading: true };
    case types.ORDER_UPDATE_SUCCESS:
      return { ...state, loading: false };
    case types.ORDER_UPDATE_FAILURE:
      console.log("Error in update order", payload);
      return { ...state, loading: true };
    default:
      return state;
  }
};
console.log("state====", initialState);
export default orderReducer;
