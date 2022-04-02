import { removeFromWishlistInDB } from "../api-calls";
import AddToCartButton from "../components/AddToCartButton";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { useUser } from "../contexts/userContext";
import { useWishlist } from "../contexts/wishlistContext";


const Wishlist = () => {

    const [user] = useUser();
    const [wishlist, updateWishlist] = useWishlist();

    const removeFromWishlist = (product) => {
        removeFromWishlistInDB(product._id, user);
        updateWishlist({ type: "REMOVE_FROM_WISHLIST", payload: product._id });
    }

    return (
        <>
            <Navbar />
            <p className="large-heading">Wishlist</p>
            <div className="d-flex flex-center">
                {
                    user
                        ? wishlist.products.length
                            ? <div className="product-list d-flex flex-justify-evenly flex-align-center">
                                {
                                    wishlist.products
                                        .map(product =>
                                            <div key={product._id}>
                                                <ProductCard product={product} />
                                                <AddToCartButton product={product} />
                                                <div>
                                                    <button className="btn btn-link" onClick={() => removeFromWishlist(product)}>Remove</button>
                                                </div>
                                            </div>
                                        )
                                }
                            </div>
                            : <div>
                                <img src="https://res.cloudinary.com/clouduser/image/upload/c_scale,w_300/v1648733613/cart-is-empty_kspfhu.png" alt="empty cart" />
                            </div>
                        : <div className="d-flex flex-center">
                            <img src="https://res.cloudinary.com/clouduser/image/upload/c_scale,w_300/v1648734042/welcome-sign_fbursm.png" alt="login" />
                            <div className="d-flex flex-center">
                                <p className="large-heading">Login to view wishlist</p>
                            </div>
                        </div>
                }
            </div>
        </>
    )
}

export default Wishlist;