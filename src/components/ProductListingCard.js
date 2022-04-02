import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/userContext";
import { useWishlist } from "../contexts/wishlistContext";
import { addToWishlistInDB, removeFromWishlistInDB } from "../api-calls";
import { useNotification } from "../contexts/notificationContext";
import ProductCard from "./ProductCard";
import AddToCartButton from "./AddToCartButton";

const ProductListingcard = ({ product }) => {

    const [user] = useUser();
    const navigate = useNavigate();
    const { notificationHandler } = useNotification();
    const [wishlist, updateWishlist] = useWishlist();
    const [productInWishlist, setProductInWishlist] = useState(false);

    useEffect(() => {

        const productIndex = wishlist.products?.findIndex(productIncart => productIncart._id === product?._id);

        productIndex === -1
            ? setProductInWishlist(false)
            : setProductInWishlist(true);

    }, [wishlist, productInWishlist, product])

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

    const removeFromWishlist = () => {

        removeFromWishlistInDB(product._id, user);
        notificationHandler("Removed from wishlist");
        updateWishlist({ type: "REMOVE_FROM_WISHLIST", payload: product._id });

    }

    return (
        <div>
            <ProductCard product={product} />
            <div>
                <p className="product-price text-align-center">&#x20B9; {product.price}</p>
                <div className="d-flex flex-center">
                    {
                        productInWishlist
                            ? <div className="icon-wishlist icon-wishlist-red d-flex flex-center" onClick={removeFromWishlist}><ion-icon name="heart" size="small"></ion-icon></div>
                            : <div className="icon-wishlist d-flex flex-center" onClick={addToWishlist}>
                                <ion-icon name="heart-outline" size="small"></ion-icon>
                            </div>
                    }
                    <AddToCartButton product={product} />
                </div>
            </div>
        </div>
    )
}

export default ProductListingcard;