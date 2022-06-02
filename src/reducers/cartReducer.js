const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      return action.payload;

    case "ADD_TO_CART":
      const productToAdd = action.payload;

      return {
        products: [...state.products, productToAdd],
        total: state.total + productToAdd.price,
      };

    case "INCREASE_IN_CART":
      const productToIncrease = action.payload;

      const productsAfterIncrease = state.products.map((product) =>
        product._id === productToIncrease._id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      return {
        products: productsAfterIncrease,
        total: state.total + productToIncrease.price,
      };

    case "DECREASE_IN_CART":
      const productToDecrease = action.payload;
      const productsAfterDecrease = state.products.map((product) =>
        product._id === productToDecrease._id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      return {
        products: productsAfterDecrease,
        total: state.total - productToDecrease.price,
      };

    case "REMOVE_FROM_CART":
      const productToRemove = action.payload;
      const filteredProducts = state.products.filter(
        (product) => product._id !== productToRemove._id
      );
      return {
        products: filteredProducts,
        total: state.total - productToRemove.price * productToRemove.quantity,
      };

    case "LOGOUT":
      return { products: [], total: 0 };
    case "CLEAR":
      return { products: [], total: 0 };
    default:
      return state;
  }
};

export { cartReducer };
