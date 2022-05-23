import { useNavigate } from "react-router-dom";

import {
  useUser,
  useWishlist,
  ProductCard,
  useNotification,
  AddToCartButton,
  useCheckProductExists,
} from "../../exports";

import { addToWishlistInDB, removeFromWishlistInDB } from "../../api/wishlist";

const ProductListingCard = ({ product }) => {
  const { user } = useUser();
  const navigate = useNavigate();
  const { notificationHandler } = useNotification();
  const { wishlist, updateWishlist } = useWishlist();
  const productInWishlist = useCheckProductExists(wishlist?.products, product);

  const addToWishlist = async () => {
    try {
      if (!user) {
        navigate("/login");
      } else {
        await addToWishlistInDB(product._id, user);
        notificationHandler("Added to wishlist");
        updateWishlist({ type: "ADD_TO_WISHLIST", payload: product });
      }
    } catch (error) {
      notificationHandler(error.message);
    }
  };

  const removeFromWishlist = async () => {
    try {
      await removeFromWishlistInDB(product._id, user);
      notificationHandler("Removed from wishlist");
      updateWishlist({ type: "REMOVE_FROM_WISHLIST", payload: product._id });
    } catch (error) {
      notificationHandler(error.message);
    }
  };

  return (
    <div>
      <ProductCard product={product} />
      <div>
        <p className="product-price text-align-center">
          &#x20B9; {product.price}
        </p>
        <div className="d-flex flex-center">
          {productInWishlist ? (
            <div
              className="icon-wishlist icon-wishlist-red d-flex flex-center"
              onClick={removeFromWishlist}
            >
              <ion-icon name="heart" size="small"></ion-icon>
            </div>
          ) : (
            <div
              className="icon-wishlist d-flex flex-center"
              onClick={addToWishlist}
            >
              <ion-icon name="heart-outline" size="small"></ion-icon>
            </div>
          )}
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export { ProductListingCard };
