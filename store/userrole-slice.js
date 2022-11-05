import { createSlice } from "@reduxjs/toolkit";
const userRoleSlice = createSlice({
    name:"user",
    initialState: {
        userrole:"",
        name:""
    },
    reducers:{
        setUserRole(state, action){
            const {userrole,name} = action.payload;
            state.userrole = userrole;
            state.name = name;
        }

    }
})
export const userRoleActions = userRoleSlice.actions;
export default userRoleSlice;