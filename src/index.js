import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./pages/products-context";

ReactDOM.render(
    <React.StrictMode>
        <ProductsProvider>
            <App />
        </ProductsProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
