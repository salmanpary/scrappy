import { configureStore } from "@reduxjs/toolkit";
import userRoleSlice from "./userrole-slice";
import itemSlice from "./item-slice";
import collectorSlice from "./collector-slice"; 
const store = configureStore({
    reducer: {
        user: userRoleSlice.reducer,
        items: itemSlice.reducer,
        collector: collectorSlice.reducer,

    }
})
export default store;