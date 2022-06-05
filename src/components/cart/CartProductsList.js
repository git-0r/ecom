import { removeFromCartInDB, updateCartInDB } from "../../api/cart";
import { useCart, useUser, ProductCard, useNotification } from "../../exports";

const CartProductsList = () => {
  const { user } = useUser();
  const { cart, updateCart } = useCart();
  const { notificationHandler } = useNotification();

  const modifyCart = async (e, product) => {
    e.stopPropagation();
    const action = { type: e.target.name, payload: product };

    try {
      if (user) {
        updateCart(action);
        try {
          if (action.type === "REMOVE_FROM_CART") {
            notificationHandler("Removed from cart");
            await removeFromCartInDB(action.payload, user);
          } else if (
            action.type === "DECREASE_IN_CART" ||
            action.type === "INCREASE_IN_CART"
          ) {
            await updateCartInDB(action, user);
          }
        } catch (error) {
          notificationHandler(error.message);
          if (action.type === "REMOVE_FROM_CART") {
            updateCart({ ...action, type: "ADD_TO_CART" });
          } else {
            updateCart({
              ...action,
              type:
                action.type === "INCREASE_IN_CART"
                  ? "DECREASE_IN_CART"
                  : "INCREASE_IN_CART",
            });
          }
        }
      } else {
        updateCart(action);
        action.type === "REMOVE_FROM_CART" &&
          notificationHandler("Removed from cart");
      }
    } catch (error) {
      notificationHandler(error.message);
    }
  };

  return (
    <section className="section-products">
      {cart.products?.map((product) => (
        <div
          onClick={(e) => modifyCart(e, product)}
          className="cart-product-container d-flex flex-align-center"
          key={product._id}
        >
          <div className="cart-product-card d-flex flex-center">
            <ProductCard product={product} />
          </div>
          <div className="cart-product-quantity d-flex flex-center">
            <button
              className="btn-modify-quantity"
              name="DECREASE_IN_CART"
              disabled={product.quantity < 2}
            >
              -
            </button>
            <p className="heading-lg">{product.quantity}</p>
            <button className="btn-modify-quantity" name="INCREASE_IN_CART">
              +
            </button>
          </div>
          <div className="cart-product-price d-flex flex-center">
            <p className="heading-lg">
              &#8377; {product.quantity * product.price}
            </p>
            <button className="text-md btn btn-link" name="REMOVE_FROM_CART">
              Remove
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export { CartProductsList };
