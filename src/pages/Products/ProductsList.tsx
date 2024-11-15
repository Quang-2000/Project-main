import React from "react";
import Headerr from "../../components/layout/Headerr";
import NavBarr from "../../components/layout/NavBarr";
import ProducstListModules from "../../modules/Products/components/ProductsListModules";
import Footerr from "../../components/layout/Footerr";
import ProductsPageModules from "../../modules/Products/components/ProductsPageModules";

const ProductsList = () => {
  return (
    <div>
      <Headerr />
      <NavBarr />
      <ProducstListModules />
      <ProductsPageModules />
      <Footerr />
    </div>
  );
};

export default ProductsList;
