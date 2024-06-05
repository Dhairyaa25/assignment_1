// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import ProductList from "./Components/ProductList";
import CartPage from "./Components/CartPage";
import AccountPage from "./Components/AccountPage";
const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const existingItem = cart.find((item) => item.product.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { product, quantity }]);
    }
  };

  const updateQuantity = (productId, quantity) => {
    setCart(
      cart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: Number(quantity) }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.product.id !== productId));
  };

  const finalizePurchase = () => {
    alert("Purchase finalized!");
    setCart([]);
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route
            path="/products"
            element={<ProductList addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                finalizePurchase={finalizePurchase}
              />
            }
          />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
