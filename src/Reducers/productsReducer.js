const initialProductsState = {
  products: [],
};

const productsReducer = (state = initialProductsState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
