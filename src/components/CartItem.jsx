import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeProduct, setQuantity } from "../store/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const { id, qty, product } = item;

  return (
    <div className="cart-item">
      <img src={product.thumbnail} alt={product.title} loading="lazy" style={{ width: 80 }} />
      <div>
        <h4>{product.title}</h4>
        <p>Price: ₹{product.price}</p>
        <div>
          <button onClick={() => dispatch(setQuantity({ id, qty: qty - 1 }))} disabled={qty <= 1}>-</button>
          <span>{qty}</span>
          <button onClick={() => dispatch(setQuantity({ id, qty: qty + 1 }))}>+</button>
        </div>
        <button onClick={() => dispatch(removeProduct(id))}>Remove</button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.any.isRequired,
    qty: PropTypes.number.isRequired,
    product: PropTypes.object.isRequired
  }).isRequired
};
