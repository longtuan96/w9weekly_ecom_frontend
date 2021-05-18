import api from "../../api";
import * as types from "../constants/order.constants";
import { useSelector } from "react-redux";

const getOrder = (orderId) => async (dispatch) => {
  dispatch({ type: types.ORDER_GET_REQUEST, payload: null });

  try {
    const res = await api.get(`/orders/${orderId}?status=pending`);
    dispatch({
      type: types.ORDER_GET_SUCCESS,
      payload: res.data.data.order,
    });
  } catch (error) {
    dispatch({ type: types.ORDER_GET_FAILURE, payload: error.message });
  }
};

// const createOrder = () => async (dispatch) => {
//   dispatch({ type: types.CREATE_ORDER_REQUEST, payload: null });
//   try {
//     await api.post("/orders");
//     dispatch({ type: types.CREATE_ORDER_SUCCESS, payload: null });
//   } catch (error) {
//     dispatch({ type: types.CREATE_ORDER_FAILURE, payload: error.mesage });
//   }
// };

const AddOrDeleteItemOrder =
  (productId, orderId, action) => async (dispatch) => {
    dispatch({ type: types.ORDER_UPDATE_REQUEST, payload: null });

    try {
      if (action === "add") {
        await api.put(`/orders/${orderId}`, { product: productId });
      } else if (action === "delete") {
        await api.delete(`/orders/${orderId}`, {
          data: { product: productId },
        });
      }

      dispatch({ type: types.ORDER_UPDATE_SUCCESS, payload: null });
    } catch (error) {
      dispatch({ type: types.ORDER_UPDATE_FAILURE, payload: error.message });
    }
  };

const orderActions = {
  AddOrDeleteItemOrder,
  getOrder,
};
export default orderActions;
