import * as types from "../constants/product.constants";
const initialState = {
  products: [],
  page: 1,
  totalPageNum: 1,
  selectedProduct: null,
  loading: false,
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.PRODUCT_GET_ALL_REQUEST:
      return { ...state, loading: true };
    case types.PRODUCT_GET_ALL_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload.products,
        totalPageNum: payload.totalPages,
        page: payload.page,
      };
    case types.PRODUCT_GET_ALL_FAILURE:
      console.log("error in product get all ", payload);
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default productReducer;
