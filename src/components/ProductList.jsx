.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 3 items per row */
  gap: 20px;
  padding: 20px;
}

/* Tablet view (2 items per row) */
@media (max-width: 900px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile view (1 item per row) */
@media (max-width: 600px) {
  .product-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
