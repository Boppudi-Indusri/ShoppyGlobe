import React from "react";
import { useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();
  return (
    <div style={{ padding: 20 }}>
      <h1>404 - Page Not Found</h1>
      <p>We couldn't find <code>{location.pathname}</code></p>
      <p>If you typed the address manually, check it for errors.</p>
      <button onClick={() => window.history.back()}>Go back</button>
    </div>
  );
}
