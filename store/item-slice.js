import { createSlice } from "@reduxjs/toolkit";
const itemSlice = createSlice({
    name:"items",
    initialState:{
        items:[],
    },
    reducers:{
        setItems(state, action){
            state.items = action.payload;
        }
    }
})
export const itemActions = itemSlice.actions;
export default itemSlice;