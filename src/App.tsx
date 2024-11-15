import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/layout/header.css";
import "./styles/layout/navbar.css";
import "./styles/layout/banner.css";
import "./styles/layout/footerr.css";
import "./styles/products/productsList.css";
import "./styles/products/productsPage.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Signin/Login/LoginPage";
import CartPage from "./pages/Cart/CartPage";
import ProductPage from "./pages/Products/ProductsPage";
import RegisterPage from "./pages/Signin/Register/RegisterPage";
import ProductsList from "./pages/Products/ProductsList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/registerPage" element={<RegisterPage />} />
        <Route path="/productsList" element={<ProductsList />} />
        <Route path="/cartPage" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
