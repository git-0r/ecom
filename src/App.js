import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./contexts/cartContext";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import { UserProvider } from "./contexts/userContext";
import Register from "./pages/Register";
import Wishlist from "./pages/Wishlist";
import { WishlistProvider } from "./contexts/wishlistContext";
import Notification from "./components/Notification";
import { NotificationProvider } from "./contexts/notificationContext";
import ProductListing from "./pages/ProductListing";

const App = () => {
  return (
    <NotificationProvider>
      <UserProvider>
        <CartProvider>
          <WishlistProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/products/:category" element={<ProductListing />} />
              </Routes>
            </BrowserRouter>
            <Notification />
          </WishlistProvider>
        </CartProvider>
      </UserProvider>
    </NotificationProvider>
  );
};

export default App;
