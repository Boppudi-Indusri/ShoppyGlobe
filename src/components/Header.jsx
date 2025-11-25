import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const items = useSelector(state => Object.values(state.cart.items));
  const count = items.reduce((s,i)=> s + i.qty, 0);

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">ShoppyGlobe</Link>
        <div className="nav-right">
          <Link to="/cart">Cart ({count})</Link>
        </div>
      </nav>
    </header>
  );
}
