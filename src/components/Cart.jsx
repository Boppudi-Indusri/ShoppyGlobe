import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { selectCartItemsArray, selectCartTotal } from "../store/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const items = useSelector(selectCartItemsArray);
  const total = useSelector(selectCartTotal);

  if (items.length === 0) return <div>Your cart is empty. <Link to="/">Go shopping</Link></div>;

  return (
    <div>
      <h2>Your Cart</h2>
      <div>
        {items.map(it => <CartItem key={it.id} item={it} />)}
      </div>
      <h3>Total: ₹{total.toFixed(2)}</h3>
      <Link to="/checkout"><button>Checkout</button></Link>
    </div>
  );
}
