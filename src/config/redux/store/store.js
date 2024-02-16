import { configureStore } from "@reduxjs/toolkit"
import Array from "../reducers/mainArr"


export const store = configureStore({
    reducer: Array
});
