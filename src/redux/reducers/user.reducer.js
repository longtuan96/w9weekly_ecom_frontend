import * as types from "../constants/user.constants";
const initialState = {
  users: [],
  user: {},
  totalPageNum: 1,
  selectedUser: {},
  loading: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.USER_GETCURRENT_REQUEST:
      return { ...state, loading: true };
    case types.USER_GETCURRENT_SUCCESS:
      return { ...state, loading: false, user: payload.currentUser };
    case types.USER_GETCURRENT_FAILURE:
      console.log("Error in getCurrent User", payload);
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default userReducer;
