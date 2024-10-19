// @deno-types="@types/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainLayout from "./components/MainLayout";
import Footer from "./components/Footer";
import "./App.css";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/Product/" element={<Product/>}/>
          <Route path="/ProductDetails/:id" element={<ProductDetails />} /> 
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
