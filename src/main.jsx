import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.scss";
import { UserProvider } from "./contexts/user.context";
import { ProductsProvider } from "./contexts/products.context.jsx";
import CardDropdownComponent from "./components/card-dropdown/card-dropdown.component.jsx";
import { CartProvider } from "./contexts/cart.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
