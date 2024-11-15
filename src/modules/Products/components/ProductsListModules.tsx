import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../../stores/store";
import { fetchProductsList } from "../../../stores/slices/productsListSlice";

const ProducstListModules = () => {
  const dispatch: any = useDispatch();
  const { products } = useSelector(
    (state: RootState) => state.productsListSlice
  );

  useEffect(() => {
    dispatch(fetchProductsList());
  }, [dispatch]);

  return (
    <div>
      <div className="products-list-container">
        <div className="products">
          {products.map((product: any, index: number) => (
            <div key={index} className="product-card">
              {product ? (
                <>
                  <img
                    src={product.img}
                    alt={product.name}
                    className="product-image"
                  />
                  <h2 className="product-name">{product.name}</h2>
                </>
              ) : (
                <div className="empty-product-card"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProducstListModules;
