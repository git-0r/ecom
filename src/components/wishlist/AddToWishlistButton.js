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

  const handleWishlist = async () => {
    try {
      if (productInWishlist) {
        updateWishlist({ type: "REMOVE_FROM_WISHLIST", payload: product._id });
        await removeFromWishlistInDB(product._id, user);
        notificationHandler("Removed from wishlist");
      } else {
        if (!user) {
          notificationHandler("Please login");
        } else {
          updateWishlist({ type: "ADD_TO_WISHLIST", payload: product });
          await addToWishlistInDB(product._id, user);
          notificationHandler("Added to wishlist");
        }
      }
    } catch (error) {
      notificationHandler(error.message);
      updateWishlist({
        type: `${
          productInWishlist ? "ADD_TO_WISHLIST" : "REMOVE_FROM_WISHLIST"
        }`,
        payload: product,
      });
    }
  };

  return (
    <div
      className={`icon-wishlist d-flex flex-center${
        productInWishlist ? " icon-wishlist-red" : ""
      }`}
      onClick={handleWishlist}
    >
      <ion-icon
        name={productInWishlist ? "heart" : "heart-outline"}
        size="small"
      ></ion-icon>
    </div>
  );
};

export { AddToWishlistButton };
