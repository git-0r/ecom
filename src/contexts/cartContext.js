import { cartReducer } from "../exports";

import { useUser, useLocalStorage } from "../exports";

import { useEffect, useReducer, useContext, createContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { user } = useUser();
  const userCart = useLocalStorage("userCart");
  const guestCart = useLocalStorage("guestCart");

  const initialState = () => {
    if (user) {
      return userCart ?? { products: [], total: 0 };
    } else {
      return guestCart ?? { products: [], total: 0 };
    }
  };

  const [cart, updateCart] = useReducer(cartReducer, initialState());

  useEffect(() => {
    user
      ? localStorage.setItem("userCart", JSON.stringify(cart))
      : localStorage.setItem("guestCart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
