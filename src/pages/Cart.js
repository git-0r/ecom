import Navbar from "../components/Navbar";
import CartProductsList from "../components/CartProductsList"
import CartOrderDetails from "../components/CartOrderDetails";
import { useCart } from "../contexts/cartContext";

const Cart = () => {
  const [cart] = useCart();

  return (
    <>
      <Navbar />
      <p className="large-heading">Cart ({cart.products?.length} items)</p>
      {
        cart?.products?.length
          ? <main className="cart-wrapper">
            <CartProductsList />
            <CartOrderDetails cart={cart} />
          </main>
          : <div className="d-flex flex-center">
            <img src="https://res.cloudinary.com/clouduser/image/upload/c_scale,w_300/v1648733613/cart-is-empty_kspfhu.png" alt="empty cart" />
          </div>
      }
    </>
  );
};

export default Cart;
