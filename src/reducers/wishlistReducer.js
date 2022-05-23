const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "SET_WISHLIST":
      return { ...action.payload };

    case "ADD_TO_WISHLIST":
      return { ...state, products: [...state.products, action.payload] };

    case "REMOVE_FROM_WISHLIST":
      const filteredProducts = state.products.filter(
        (product) => product._id !== action.payload
      );

      return { ...state, products: filteredProducts };

    case "LOGOUT":
      return { products: [] };

    default:
      return action.payload;
  }
};

export { wishlistReducer };
