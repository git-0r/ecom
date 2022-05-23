import { Link } from "react-router-dom";

import { addToCart } from "../../api/cart";

import {
  useCart,
  useUser,
  useNotification,
  useCheckProductExists,
} from "../../exports";

const AddToCartButton = ({ product }) => {
  const { user } = useUser();
  const { cart, updateCart } = useCart();
  const { notificationHandler } = useNotification();
  const productInCart = useCheckProductExists(cart?.products, product);

  const handleCart = async () => {
    try {
      if (user) {
        await addToCart(product, user);
        notificationHandler("Added to cart");
      } else {
        notificationHandler("Added to cart");
      }
      updateCart({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
    } catch (error) {
      notificationHandler(error.message);
    }
  };

  return productInCart ? (
    <Link className="btn btn-link" to="/cart">
      Go to cart
    </Link>
  ) : (
    <button className="btn btn-primary" onClick={handleCart}>
      Add to cart
    </button>
  );
};

export { AddToCartButton };
