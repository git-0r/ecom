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
      <main className="cart-wrapper">
        <CartProductsList />
        <CartOrderDetails cart={cart} />
      </main>
    </>
  );
};

export default Cart;
