import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error loading product:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) {
    return <h2>Loading product details...</h2>;
  }

  return (
    <div className="detail-container">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="detail-img"
      />

      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>Price: ₹{product.price}</h3>
    </div>
  );
}

export default ProductDetail;


