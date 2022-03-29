import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./contexts/cartContext";
import { ProductsProvider } from "./contexts/productsContext";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import { UserProvider } from "./contexts/userContext";
import Register from "./pages/Register";

const App = () => {
  return (
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  );
};

export default App;
