import { createSlice } from "@reduxjs/toolkit";
const userRoleSlice = createSlice({
    name:"user",
    initialState: {
        userrole:"",
        name:"",
        location:""
    },
    reducers:{
        setUserRole(state, action){
            console.log(action.payload)
            const {userrole,name,location} = action.payload;
            state.userrole = userrole;
            state.name = name;
            state.location = location;
        }

    }
})
export const userRoleActions = userRoleSlice.actions;
export default userRoleSlice;