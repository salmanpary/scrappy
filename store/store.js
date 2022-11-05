import { configureStore } from "@reduxjs/toolkit";
import userRoleSlice from "./userrole-slice";
import itemSlice from "./item-slice";
const store = configureStore({
    reducer: {
        user: userRoleSlice.reducer,
        items: itemSlice.reducer

    }
})
export default store;