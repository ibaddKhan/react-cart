import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  counter: 0,
};

const mainArrSlice = createSlice({
  name: 'mainArr',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.todos.push(action.payload.item);
      state.counter = state.todos.length;
    },
    removeFromCart: (state, action) => {
      state.todos.splice(action.payload.index, 1);
      state.counter = state.todos.length;
    },
  },
});

export const { addToCart, removeFromCart } = mainArrSlice.actions;
export default mainArrSlice.reducer;