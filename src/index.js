import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./contexts/productsContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import { CartProvider } from "./contexts/cartContext";

ReactDOM.render(
    <React.StrictMode>
        <ProductsProvider>
            <CartProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/product/:id" element={<Product />} />
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </ProductsProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
