import React, { Suspense, lazy } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: 16 }}>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductList />
        </Suspense>
      </main>
    </div>
  );
}
