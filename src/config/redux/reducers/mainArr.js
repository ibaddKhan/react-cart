import { createSlice, nanoid } from '@reduxjs/toolkit';

export const Array = createSlice({
    name: 'cartArray',
    initialState: {
        todos: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.todos.push({
                title: action.payload.title,
                id: nanoid()
            })
        },
        removeFromCart: (state, action) => {
            state.todos.splice(action.payload.index, 1);
        }
    }
})

export const { addToCart, removeFromCart } = Array.actions
export default Array.reducer