import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import MyProfilePage from "./MyProfilePage";
import ProductDetail from "./ProductDetail";
import Navbar from "./Navbar";
import Product from "./Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/my-profile-page" element={<MyProfilePage />} />
        <Route exact path="/product/:category" element={<Product />} />
        <Route exact path="/product-details/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
