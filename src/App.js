import { Notification } from "./exports";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Product,
  Cart,
  Login,
  Register,
  Wishlist,
  ProductListing,
  CheckoutSuccess,
  CheckoutFailed,
} from "./exports";
import {
  CartProvider,
  UserProvider,
  WishlistProvider,
  NotificationProvider,
} from "./contexts/exports";
import { Address } from "./pages/exports";
import { LoggedInRoutes } from "./routes/LoggedInRoutes";

const App = () => {
  return (
    <NotificationProvider>
      <UserProvider>
        <CartProvider>
          <WishlistProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<LoggedInRoutes />}>
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/cart/address" element={<Address />} />
                  <Route path="/order/success" element={<CheckoutSuccess />} />
                  <Route path="/order/failed" element={<CheckoutFailed />} />
                </Route>
                <Route path="/cart" element={<Cart />} />
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/products/:category"
                  element={<ProductListing />}
                />
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
