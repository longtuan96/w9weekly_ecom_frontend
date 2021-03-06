import { toast } from "react-toastify";
import api from "../../api";

import * as types from "../constants/auth.constants";
import { routeActions } from "./route.actions";

const register = (name, email, password, avatarUrl) => async (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST, payload: null });
  try {
    const res = await api.post("/api/users", {
      name,
      email,
      password,
      avatarUrl,
    });
    dispatch({ type: types.REGISTER_SUCCESS, payload: res.data.data });
    dispatch(routeActions.redirect("/login"));
    toast.success(`Thank you for your registration, ${name}!`);
  } catch (error) {
    dispatch({ type: types.REGISTER_FAILURE, payload: error });
  }
};

const loginRequest = (email, password) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST, payload: null });
  try {
    const res = await api.post("/api/auth/login", { email, password });
    dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.data });
    const name = res.data.data.user.name;
    toast.success(`Welcome ${name}`);
  } catch (error) {
    console.log(error);
    dispatch({ type: types.LOGIN_FAILURE, payload: error });
  }
};

const logout = () => (dispatch) => {
  delete api.defaults.headers.common["authorization"];
  localStorage.setItem("accessToken", "");
  dispatch({ type: types.LOGOUT, payload: null });
};

const getCurrentUser = (accessToken) => async (dispatch) => {
  dispatch({ type: types.GET_CURRENT_USER_REQUEST, payload: null });
  if (accessToken) {
    const bearerToken = "Bearer " + accessToken;
    api.defaults.headers.common["authorization"] = bearerToken;
  }
  try {
    const res = await api.get("/api/users/me");
    dispatch({ type: types.GET_CURRENT_USER_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.GET_CURRENT_USER_FAILURE, payload: error });
  }
};

export const authActions = {
  register,
  loginRequest,
  getCurrentUser,
  logout,
};

export default authActions;
