import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../stores/store";
import { Product } from "../types";
import NavBarr from "./layout/NavBarr";
import Footerr from "./layout/Footerr";

const SearchProduct = () => {
  const { products, loading, error } = useSelector(
    (state: RootState) => state.searchSlice
  );
  if (loading) return <div>Loading....</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;
  return (
    <div>
      <NavBarr />
      {products.length === 0 ? (
        <p>Không tìm thấy sản phẩm nào</p>
      ) : (
        <div className="product-grid">
          {products.map((product: Product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <span>${product.price}</span>
            </div>
          ))}
        </div>
      )}
      <Footerr />
    </div>
  );
};

export default SearchProduct;
