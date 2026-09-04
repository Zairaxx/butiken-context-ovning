import { useState } from "react";
import Page from "./components/Page";
import products from "./data/products";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems((prev) => [...prev, product]);
  }

  function removeFromCart(index) {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <Page
      products={products}
      cartItems={cartItems}
      onAddToCart={addToCart}
      onRemove={removeFromCart}
    />
  );
}

export default App;
