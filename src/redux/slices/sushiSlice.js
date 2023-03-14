import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSushi = createAsyncThunk('sushi/fetchSushiStatus', async (params, thunkAPI)=>{
    const {sortBy, order,category,search,currentPage} = params;
    const {data} = await axios.get(
        `https://6403a4573bdc59fa8f2a3657.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
    return data;
})
const initialState = {
    items:[],
    status: 'loading'
};
const sushiSlice = createSlice({
    name: 'sushi',
    initialState,
    reducers: {
        setItems(state,action){
            state.items = action.payload;
        }
    },
    extraReducers: {
    [fetchSushi.pending]: (state)=>{
     state.status = 'loading';
     state.items = [];
    },
    [fetchSushi.fulfilled]: (state,action)=>{
     state.items = action.payload;
     state.status = 'success';
    },
    [fetchSushi.rejected]: (state,action)=>{
     state.status = 'error';
     state.items = [];
    }
    }
});
export const selectSushiData = (state) => state.sushi
export const {setItems} = sushiSlice.actions;
export default sushiSlice.reducer