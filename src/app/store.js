import { configureStore } from "@reduxjs/toolkit"
import coinReducer from "../features/coins/coinSlice"
import chartReducer from "../features/charts/chartSlice"

export const store = configureStore({
    reducer:{
        coins:coinReducer,
        coinTime:chartReducer
    }
})