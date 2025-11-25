import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItemsArray, selectCartTotal, clearCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const items = useSelector(selectCartItemsArray);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [message, setMessage] = useState("");

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // dummy validation
    if (!form.name || !form.email) {
      setMessage("Please fill required fields");
      return;
    }
    // simulate order placed
    dispatch(clearCart());
    setMessage("Order placed");
    setTimeout(() => {
      navigate("/");
    }, 1000); // auto redirect back to home (rubric: automatically redirect)
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handlePlaceOrder}>
        <div>
          <label>Name *</label>
          <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
        </div>
        <div>
          <label>Email *</label>
          <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
        </div>
        <div>
          <label>Address</label>
          <textarea value={form.address} onChange={e => setForm({...form, address: e.target.value})} />
        </div>
        <h3>Order Summary</h3>
        <ul>
          {items.map(it => <li key={it.id}>{it.product.title} x {it.qty}</li>)}
        </ul>
        <p>Total: ₹{total.toFixed(2)}</p>
        <button type="submit">Place Order</button>
      </form>
      {message && <div role="status">{message}</div>}
    </div>
  );
}

