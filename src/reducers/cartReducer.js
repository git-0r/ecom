const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":

            const newProduct = action.payload;

            const i = state.findIndex(product => product._id === newProduct._id);

            if (i >= 0) {
                const updatedCart = state.map(
                    product => product._id === newProduct._id
                        ? { ...product, quantity: newProduct.quantity }
                        : product
                )
                return updatedCart;

            } else {
                return [...state, newProduct]
            }

        default:
            return state
    }
}

export default cartReducer