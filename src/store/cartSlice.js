import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    minusCount(state, action) {
      let idx = state.findIndex((x) => x.id == action.payload);
      if (state[idx].count > 1) {
        state[idx].count--;
      } else {
        alert("최소 수량입니다.");
      }
    },
    addCount(state, action) {
      let idx = state.findIndex((x) => x.id == action.payload);
      state[idx].count++;
    },
    addItem(state, action) {
      let item = state.find((x) => x.id == action.payload.id);
      // 이미 장바구니에 존재하는 상품일 경우
      if (item) {
        item.count++;
        alert("이미 추가된 상품입니다. 수량을 추가하였습니다.");
      } else {
        let product = {
          id: action.payload.id,
          name: action.payload.title,
          count: 1,
        };
        state.push(product);
        alert("추가되었습니다.");
      }
    },
    deleteItem(state, action) {
      let idx = state.findIndex((x) => x.id == action.payload);
      state.splice(idx, 1);
    },
  },
});

export let { minusCount, addCount, addItem, deleteItem } = cart.actions;

export default cart;
