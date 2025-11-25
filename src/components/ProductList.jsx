import React, { useMemo } from "react";
import useProducts from "../hooks/useProducts";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../store/cartSlice";

export default function ProductList() {
  const { products, loading, error } = useProducts();
  const dispatch = useDispatch();
  const query = useSelector(s => s.cart.searchQuery);

  const filtered = useMemo(() => {
    if (!query) return products;
    const q = query.toLowerCase();
    return products.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
  }, [products, query]);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div role="alert">Error loading products: {error}</div>;

  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <input
          aria-label="search"
          placeholder="Search products..."
          value={query}
          onChange={e => dispatch(setSearchQuery(e.target.value))}
        />
      </div>
      <div className="product-grid">
        {filtered.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
