import "./cart.css";

import {
  Navbar,
  useCart,
  CartOrderDetails,
  CartProductsList,
} from "../../exports";

const Cart = () => {
  const { cart } = useCart();
  const { products } = cart;

  return (
    <>
      <Navbar />
      <p className="large-heading">Cart ({products?.length} items)</p>
      {products?.length ? (
        <main className="cart-wrapper">
          <CartProductsList />
          <CartOrderDetails cart={cart} />
        </main>
      ) : (
        <div className="d-flex flex-center">
          <img
            src="https://res.cloudinary.com/clouduser/image/upload/c_scale,w_300/v1648733613/cart-is-empty_kspfhu.png"
            alt="empty cart"
          />
        </div>
      )}
    </>
  );
};

export { Cart };
