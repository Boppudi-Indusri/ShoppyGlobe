
import React from "react";
import { useDispatch } from "react-redux";
import { removeProduct, setQuantity } from "../store/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.product.thumbnail} alt={item.product.title} />

      <div className="cart-details">
        <h3>{item.product.title}</h3>
        <p>₹ {item.product.price}</p>

        <input
          type="number"
          value={item.qty}
          min="1"
          onChange={(e) =>
            dispatch(setQuantity({ id: item.id, qty: +e.target.value }))
          }
        />

        <button onClick={() => dispatch(removeProduct(item.id))}>
          Remove
        </button>
      </div>
    </div>
  );
}
