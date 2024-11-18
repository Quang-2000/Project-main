import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores/store";
import { fetchProductsPage } from "../../../stores/slices/productsPageSlice";

const ProductsPageModules = () => {
  const dispatch: any = useDispatch();
  const { products } = useSelector(
    (state: RootState) => state.productsPageSlice
  );

  useEffect(() => {
    dispatch(fetchProductsPage());
  }, [dispatch]);

  return (
    <div className="products-page">
      <div className="product-grid">
        {products?.map((product: any) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPageModules;
