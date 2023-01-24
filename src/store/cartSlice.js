import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      let idx = state.findIndex((x) => x.id == action.payload);
      state[idx].count++;
    },
    addCart(state, action) {
      let product = {
        id: action.payload.id,
        name: action.payload.title,
        count: 1,
      };
      state.push(product);
    },
  },
});

export let { addCount, addCart } = cart.actions;

export default cart;
