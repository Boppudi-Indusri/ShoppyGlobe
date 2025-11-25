import React, { useState } from "react";
import "./Checkout.css";

export default function Checkout() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed!");
    window.location.href = "/";
  };

  return (
    <div className="checkout-container">
      <div className="checkout-box">
        <h2>Checkout</h2>

        <form onSubmit={handleSubmit} className="checkout-form">
          <label>Full Name</label>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label>Address</label>
          <textarea
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>

          <label>Phone Number</label>
          <input
            type="text"
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
          />

          <button type="submit">Place Order</button>
        </form>
      </div>
    </div>
  );
}
