import api from "../../api";
import * as types from "../constants/user.constants";

const getCurrentUser = () => async (dispatch) => {
  dispatch({ type: types.USER_GETCURRENT_REQUEST, payload: null });
  try {
    const res = await api.get("/users/me");
    dispatch({ type: types.USER_GETCURRENT_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.USER_GETCURRENT_FAILURE, payload: error.message });
  }
};

const userActions = { getCurrentUser };
export default userActions;
