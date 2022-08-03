import { configureStore } from "@reduxjs/toolkit"
import coinReducer from "../features/coins/coinSlice"

export const store = configureStore({
    reducer:{
        coins:coinReducer
    }
})