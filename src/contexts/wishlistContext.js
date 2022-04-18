import { createContext, useReducer, useContext, useEffect } from "react";
import wishlistReducer from "../reducers/wishlistReducer";
import { useLocalStorage } from "../utils/localStorage";
import { useUser } from "./userContext";

const wishlistContext = createContext();

const WishlistProvider = ({ children }) => {

    const userWishlist = useLocalStorage("userWishlist");
    const [user] = useUser();

    const initialState = () => userWishlist ?? { products: [] };

    const [wishlist, updateWishlist] = useReducer(wishlistReducer, initialState());

    useEffect(() => {

        user && localStorage.setItem("userWishlist", JSON.stringify(wishlist));

    }, [wishlist])

    return (
        <wishlistContext.Provider value={[wishlist, updateWishlist]}>
            {children}
        </wishlistContext.Provider>
    )
}

const useWishlist = () => useContext(wishlistContext);

export { WishlistProvider, useWishlist }