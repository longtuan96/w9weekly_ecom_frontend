import api from "../../api";
import * as types from "../constants/user.constants";

const getCurrentUser = () => async (dispatch) => {
  dispatch({ type: types.USER_GETCURRENT_REQUEST, payload: null });
  try {
    const res = await api.get("/users/me");
    dispatch({
      type: types.USER_GETCURRENT_SUCCESS,
      payload: res.data.data.user,
    });
  } catch (error) {
    dispatch({ type: types.USER_GETCURRENT_FAILURE, payload: error.message });
  }
};

const topUpBalance = (data) => async (dispatch) => {
  dispatch({ type: types.TOPUP_REQUEST, payload: null });
  try {
    await api.put("/users/topup", data);
    dispatch({
      type: types.TOPUP_SUCCESS,
      payload: null,
    });
  } catch (error) {
    dispatch({ type: types.TOPUP_FAILURE, payload: error.message });
  }
};

const payOrder = (orderId, total) => async (dispatch) => {
  dispatch({ type: types.PAYORDER_REQUEST, payload: null });
  try {
    await api.put(`/users/${orderId}/payment`, { total });
    dispatch({
      type: types.PAYORDER_SUCCESS,
      payload: null,
    });
  } catch (error) {
    dispatch({ type: types.PAYORDER_FAILURE, payload: error.message });
  }
};

const userActions = { getCurrentUser, topUpBalance, payOrder };
export default userActions;
