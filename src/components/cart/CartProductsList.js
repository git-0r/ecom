import { removeFromCartInDB, updateCartInDB } from "../../api/cart";
import { useCart, useUser, ProductCard, useNotification } from "../../exports";

const CartProductsList = () => {
  const { user } = useUser();
  const { cart, updateCart } = useCart();
  const { notificationHandler } = useNotification();

  const modifyCart = async (action) => {
    try {
      if (user) {
        if (action.type === "REMOVE_FROM_CART") {
          await removeFromCartInDB(action.payload, user);
          notificationHandler("Removed from cart");
        } else {
          await updateCartInDB(action, user);
        }
      } else {
        action.type === "REMOVE_FROM_CART" &&
          notificationHandler("Removed from cart");
      }

      updateCart(action);
    } catch (error) {
      notificationHandler(error.message);
    }
  };

  return (
    <section className="section-products">
      {cart.products?.map((product) => (
        <div
          className="cart-product-container d-flex flex-align-center"
          key={product._id}
        >
          <div className="cart-product-card d-flex flex-center">
            <ProductCard product={product} />
          </div>
          <div className="cart-product-quantity d-flex flex-center">
            <button
              className="btn-modify-quantity"
              onClick={() =>
                modifyCart({ type: "DECREASE_IN_CART", payload: product })
              }
              disabled={product.quantity < 2}
            >
              -
            </button>
            <p className="heading-lg">{product.quantity}</p>
            <button
              className="btn-modify-quantity"
              onClick={() =>
                modifyCart({ type: "INCREASE_IN_CART", payload: product })
              }
            >
              +
            </button>
          </div>
          <div className="cart-product-price d-flex flex-center">
            <p className="heading-lg">
              &#8377; {product.quantity * product.price}
            </p>
            <button
              className="text-md btn btn-link"
              onClick={() =>
                modifyCart({ type: "REMOVE_FROM_CART", payload: product })
              }
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export { CartProductsList };
