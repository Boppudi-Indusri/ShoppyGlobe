import React, { useMemo } from "react";
import useProducts from "../hooks/useProducts";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

export default function ProductList() {
  const { products, loading, error } = useProducts();
  const query = useSelector(s => s.cart.searchQuery);

  const filtered = useMemo(() => {
    if (!query) return products;
    const q = query.toLowerCase();
    return products.filter(
      p =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [products, query]);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div role="alert">Error loading products: {error}</div>;

  return (
    <div>
      {/* Search bar removed from here */}
      
      <div className="product-grid">
        {filtered.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
