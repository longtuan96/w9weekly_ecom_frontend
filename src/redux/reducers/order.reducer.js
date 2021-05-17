import * as types from "../constants/order.constants";
const initialState = {
  orders: [],
  order: {},
  loading: false,
};

const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ORDER_GET_REQUEST:
      return { ...state, loading: true };
    case types.ORDER_GET_SUCCESS:
      console.log("======", payload);
      return { ...state, loading: true, order: payload };
    case types.ORDER_GET_FAILURE:
      console.log("Error in order getAll", payload);
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default orderReducer;
