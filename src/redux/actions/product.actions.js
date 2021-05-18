import api from "../../api";
import * as types from "../constants/product.constants";

const getAllProduct = () => async (dispatch) => {
  dispatch({ type: types.PRODUCT_GET_ALL_REQUEST, payload: null });
  try {
    const res = await api.get("/api/products");
    dispatch({
      type: types.PRODUCT_GET_ALL_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: types.PRODUCT_GET_ALL_FAILURE, payload: error.message });
  }
};

export const productActions = { getAllProduct };
