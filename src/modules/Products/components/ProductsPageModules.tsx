import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores/store";
import { fetchProductsPage } from "../../../stores/slices/productsPageSlice";

const ProductsPageModules = () => {
  const dispatch: any = useDispatch();
  const { products } = useSelector(
    (state: RootState) => state.productsPagelice
  );
  useEffect(() => {
    dispatch(fetchProductsPage());
  }, []);
  return (
    <div className="products-page">
      {products?.map((products: any) => (
        <div key={products.id} className="products-item">
          <img src={products.image} alt={products.name} />
          <h2>{products.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default ProductsPageModules;
