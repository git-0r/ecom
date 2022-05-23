import { useNavigate } from "react-router-dom";

import { addToWishlistInDB, removeFromWishlistInDB } from "../../api/wishlist";

import {
  useUser,
  useWishlist,
  useNotification,
  useCheckProductExists,
} from "../../exports";

const AddToWishlistButton = ({ product }) => {
  const { user } = useUser();
  const navigate = useNavigate();
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

  return (
    <button
      className="btn btn-primary"
      onClick={productInWishlist ? removeFromWishlist : addToWishlist}
    >
      {productInWishlist ? "Remove from wishlist" : "Add to wishlist"}
    </button>
  );
};

export { AddToWishlistButton };
