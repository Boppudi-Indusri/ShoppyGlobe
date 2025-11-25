import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {}, // keyed by product id: { id, qty, product }
  searchQuery: ''
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const product = action.payload;
      const id = product.id;
      if (state.items[id]) {
        state.items[id].qty += 1;
      } else {
        state.items[id] = { id, qty: 1, product };
      }
    },
    removeProduct(state, action) {
      const id = action.payload;
      delete state.items[id];
    },
    setQuantity(state, action) {
      const { id, qty } = action.payload;
      if (qty < 1) return; // do not go below 1
      if (state.items[id]) {
        state.items[id].qty = qty;
      }
    },
    clearCart(state) {
      state.items = {};
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    }
  },
});

export const { addProduct, removeProduct, setQuantity, clearCart, setSearchQuery } = cartSlice.actions;

export const selectCartItemsArray = (state) => Object.values(state.cart.items);
export const selectCartTotal = (state) =>
  Object.values(state.cart.items).reduce((sum, it) => sum + it.product.price * it.qty, 0);

export default cartSlice.reducer;
