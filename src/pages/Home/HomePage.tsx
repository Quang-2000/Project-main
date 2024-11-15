import React from "react";
import Headerr from "../../components/layout/Headerr";
import NavBarr from "../../components/layout/NavBarr";
import Banner from "../../components/layout/Banner";
import Footerr from "../../components/layout/Footerr";
import ProductsPage from "../Products/ProductsPage";

const HomePage = () => {
  return (
    <div>
      <Headerr />
      <NavBarr />
      <Banner />
      <ProductsPage />
      <Footerr />
    </div>
  );
};

export default HomePage;
