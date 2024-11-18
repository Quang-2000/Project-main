import { useState, useEffect } from "react";
import { Product } from "../types/productTypes";
import { fetchProducts } from "../api/Product/product.api";

export const useProductSearch = (searchTerm: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetch = async () => {
      if (!searchTerm) return;
      setLoading(true);
      setError(null);
      try {
        const data = await fetchProducts(searchTerm);
        setProducts(data);
      } catch (err) {
        setError("Không tải được sản phẩm");
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [searchTerm]);

  return { products, loading, error };
};
