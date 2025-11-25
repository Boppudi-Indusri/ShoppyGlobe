import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/cartSlice";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => { if (!cancelled) setProduct(data); })
      .catch(err => { if (!cancelled) setError(err.message || "Error"); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [id]);

  if (loading) return <div>Loading product...</div>;
  if (error) return <div role="alert">Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail">
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} loading="lazy" style={{ maxWidth: 400 }} />
      <p>{product.description}</p>
      <p>Price: ₹{product.price}</p>
      <button onClick={() => { dispatch(addProduct(product)); alert("Added to cart"); }}>Add to Cart</button>
    </div>
  );
}
