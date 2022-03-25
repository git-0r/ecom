const cartReducer = (state, action) => {
    switch (action.type) {
        case "INCREASE_IN_CART":

            const productToIncrease = action.payload;

            const productIndex = state.products.findIndex(product => product._id === productToIncrease._id);

            if (productIndex >= 0) {
                const updatedProducts = state.products.map(
                    product => product._id === productToIncrease._id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                )
                return { products: updatedProducts, total: state.total + productToIncrease.price };

            } else {
                return { products: [...state.products, productToIncrease], total: state.total + productToIncrease.price }
            }

        case "DECREASE_IN_CART":

            const productToDecrease = action.payload;
            const updatedProducts = state.products.map(
                product => product._id === productToDecrease._id
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            )
            return { products: updatedProducts, total: state.total - productToDecrease.price };

        case "REMOVE_FROM_CART":
            const productToRemove = action.payload;
            const filteredProducts = state.products.filter(
                product => product._id !== productToRemove._id)
            return { products: filteredProducts, total: state.total - productToRemove.price * productToRemove.quantity };

        default:
            return state
    }
}

export default cartReducer