import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const coinTime=JSON.parse(localStorage.getItem("coinTime"))
const initialState = {
    coinTime:coinTime?coinTime:null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message:""
}

const HistoricalChart = (id,days) => `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;

export const fetchCoinTime= createAsyncThunk("coinTime/fetchCoinTime", async( userData,thunkAPI)=>{
    
    try {
        const {id, days}=userData
        const { data } = await axios.get(HistoricalChart(id,days));
        localStorage.setItem('coinTime',JSON.stringify(data))
        return data

    // return await chartService.fetchCoinTime(userData)
    } catch (error) {
        const message=(error.response&&error.response.data&&error.response.data.message)||error.message||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const chartSlice= createSlice({
    name:"coinTime",
    initialState,
    reducers:{
        reset:(state)=>{
            state.isLoading=false
            state.isError=false
            state.isSuccess=false
            state.message=""
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(fetchCoinTime.pending, (state)=>{
                state.isLoading=true
            })
            .addCase(fetchCoinTime.fulfilled, (state, action)=>{
                state.isLoading=false
                state.isSuccess=true
                state.coinTime=action.payload
            })
            .addCase(fetchCoinTime.rejected, (state, action)=>{
                state.isLoading=false
                state.isError=false
                state.message=action.payload
                state.coinTime=null
            })
    }
})

export const { reset } = chartSlice.actions
export default chartSlice.reducer