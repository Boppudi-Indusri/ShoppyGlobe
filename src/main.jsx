
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom";

import { createBrowserRouter } from "react-router-dom";
import React, { Suspense, lazy } from "react";

const App = lazy(() => import("./App"));
const NotFound = lazy(() => import("./components/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(Suspense, { fallback: <div>Loading...</div> }, React.createElement(App))
  },
  {
    path: "/product/:id",
    element: React.createElement(Suspense, { fallback: <div>Loading...</div> }, React.createElement(() => import("./components/ProductDetail").then(m => m.default)))
  },
  {
    path: "/cart",
    element: React.createElement(Suspense, { fallback: <div>Loading...</div> }, React.createElement(() => import("./components/Cart").then(m => m.default)))
  },
  {
    path: "/checkout",
    element: React.createElement(Suspense, { fallback: <div>Loading...</div> }, React.createElement(() => import("./components/Checkout").then(m => m.default)))
  },
  { path: "*", element: React.createElement(Suspense, { fallback: <div>Loading...</div> }, React.createElement(NotFound)) }
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
