import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./contexts/cartContext";
import { ProductsProvider } from "./contexts/productsContext";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <ProductsProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ProductsProvider>
  );
};

export default App;
