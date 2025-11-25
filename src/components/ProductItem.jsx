import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/cartSlice";
import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();
  const handleAdd = () => dispatch(addProduct(product));

  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "contain",
            border: "1px solid #ddd",
            padding: "8px",
            background: "#fff",
            borderRadius: "10px"
          }}
        />
      </Link>

      <h3>{product.title}</h3>
      <p>₹ {product.price}</p>

      <button onClick={handleAdd}>Add to Cart</button>

      <Link to={`/product/${product.id}`}>View</Link>
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
};


