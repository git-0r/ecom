import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addToWishlistInDB, removeFromWishlistInDB } from "../api-calls";
import { useNotification } from "../contexts/notificationContext";
import { useUser } from "../contexts/userContext";
import { useWishlist } from "../contexts/wishlistContext";

const AddToWishlistButton = ({ product }) => {

    const [wishlist, updateWishlist] = useWishlist();
    const [user] = useUser();
    const [productInWishlist, setProductInWishlist] = useState(false);
    const navigate = useNavigate();
    const { notificationHandler } = useNotification();

    const removeFromWishlist = () => {

        removeFromWishlistInDB(product._id, user);
        notificationHandler("Removed from wishlist");
        updateWishlist({ type: "REMOVE_FROM_WISHLIST", payload: product._id });

    }

    const addToWishlist = () => {

        if (!user) {

            navigate("/login");
        }
        else {
            addToWishlistInDB(product._id, user);
            notificationHandler("Added to wishlist");
            updateWishlist({ type: "ADD_TO_WISHLIST", payload: product });
        }
    }


    useEffect(() => {

        const productIndex = wishlist?.products?.findIndex(
            productInWishlist => productInWishlist._id === product?._id);

        productIndex === -1
            ? setProductInWishlist(false)
            : setProductInWishlist(true);

    }, [wishlist, product])

    return (
        productInWishlist
            ? <button className="btn btn-primary" onClick={removeFromWishlist}>Remove from wishlist</button>
            : <button className="btn btn-primary" onClick={addToWishlist}>Add to wishlist</button>
    )
}

export default AddToWishlistButton;