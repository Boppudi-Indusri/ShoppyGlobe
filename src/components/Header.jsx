import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../store/cartSlice";

export default function Header() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.cart.searchQuery);

  return (
    <nav className="navbar">
      <h2 className="logo">SHOPPYGLOBE</h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>

        <li>
          <Link to="/cart" className="cart-link">
            <span className="cart-icon">🛒</span> Cart
          </Link>
        </li>

        <li><Link to="/checkout">Checkout</Link></li>
      </ul>

      {/* SEARCH BAR */}
      <input
        type="text"
        className="nav-search"
        placeholder="Search products..."
        value={query}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />
    </nav>
  );
}
