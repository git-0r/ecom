import { createContext, useReducer, useContext } from "react";
import cartReducer from "../reducers/cartReducer";

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, updateCart] = useReducer(cartReducer, [])

    return (
        <CartContext.Provider value={[cart, updateCart]}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }