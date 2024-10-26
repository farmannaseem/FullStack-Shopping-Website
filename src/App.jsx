import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainLayout from "./components/MainLayout";
import Footer from "./components/Footer";
import "./App.css";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/cart";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };
  const removeFromCart = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/Product/" element={<Product />} />
          <Route
            path="/ProductDetails/:id"
            element={<ProductDetails onAddToCart={handleAddToCart} />}
          />
          <Route path="/submit/" element={<MainLayout />} />
          <Route
            path="/Cart/"
            element={
              <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
