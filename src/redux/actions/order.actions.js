import api from "../../api";
import * as types from "../constants/order.constants";
import { useSelector } from "react-redux";

const getOrder = (userId) => async (dispatch) => {
  dispatch({ type: types.ORDER_GET_REQUEST, payload: null });

  try {
    if (!userId) return console.log("userId is invalid");
    const res = await api.get(`/orders/${userId}?status=pending`);
    dispatch({
      type: types.ORDER_GET_SUCCESS,
      payload: res.data.data.order,
    });
  } catch (error) {
    dispatch({ type: types.ORDER_GET_FAILURE, payload: error.message });
  }
};

const createOrder = () => async (dispatch) => {};

const addItemToOrder = () => async (dispatch) => {};

const removeItemToOrder = () => async (dispatch) => {};

const orderActions = {
  getOrder,
  createOrder,
  addItemToOrder,
  removeItemToOrder,
};
export default orderActions;
