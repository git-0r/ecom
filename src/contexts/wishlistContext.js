import { useEffect, useReducer, useContext, createContext } from "react";

import { useUser, wishlistReducer, useLocalStorage } from "../exports";

const wishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const userWishlist = useLocalStorage("userWishlist");
  const { user } = useUser();

  const initialState = () => userWishlist ?? { products: [] };

  const [wishlist, updateWishlist] = useReducer(
    wishlistReducer,
    initialState()
  );

  useEffect(() => {
    user && localStorage.setItem("userWishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <wishlistContext.Provider value={{ wishlist, updateWishlist }}>
      {children}
    </wishlistContext.Provider>
  );
};

const useWishlist = () => useContext(wishlistContext);

export { WishlistProvider, useWishlist };
