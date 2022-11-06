import { createSlice } from "@reduxjs/toolkit";
const collectorSlice = createSlice({
  name: "collector",
  initialState: {
    collector: {},
  },
  reducers: {
    setCollector(state, action) {
      state.collector = action.payload;
    },
  },
});
export const collectorSliceActions = collectorSlice.actions;
export default collectorSlice;
