import { addToWishlistInDB, removeFromWishlistInDB } from "../../api/wishlist";

import {
  useUser,
  useWishlist,
  useNotification,
  useCheckProductExists,
} from "../../exports";

const AddToWishlistButton = ({ product }) => {
  const { user } = useUser();
  const { wishlist, updateWishlist } = useWishlist();
  const { notificationHandler } = useNotification();
  const productInWishlist = useCheckProductExists(wishlist?.products, product);

  const removeFromWishlist = () => {
    try {
      removeFromWishlistInDB(product._id, user);
      notificationHandler("Removed from wishlist");
      updateWishlist({ type: "REMOVE_FROM_WISHLIST", payload: product._id });
    } catch (error) {
      notificationHandler(error.message);
    }
  };

  const addToWishlist = async () => {
    try {
      if (!user) {
        notificationHandler("Please login");
      } else {
        await addToWishlistInDB(product._id, user);
        notificationHandler("Added to wishlist");
        updateWishlist({ type: "ADD_TO_WISHLIST", payload: product });
      }
    } catch (error) {
      notificationHandler(error.message);
    }
  };

  return productInWishlist ? (
    <div
      className="icon-wishlist icon-wishlist-red d-flex flex-center"
      onClick={removeFromWishlist}
    >
      <ion-icon name="heart" size="small"></ion-icon>
    </div>
  ) : (
    <div className="icon-wishlist d-flex flex-center" onClick={addToWishlist}>
      <ion-icon name="heart-outline" size="small"></ion-icon>
    </div>
  );
};

export { AddToWishlistButton };
