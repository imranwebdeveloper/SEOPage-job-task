import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/employee.json";

const selectionSlice = createSlice({
  name: "previews",
  initialState: {
    selectionData: [],
    data,
  },
  reducers: {
    selectRow: (state, action) => {
      state.selectionData.push(action.payload);
    },
    deselectRow: (state, action) => {
      return state.selectionData.filter((id) => id !== action.payload);
    },
    selectAllRows: (state, action) => {
      return action.payload.map((row) => row.id);
    },
    deselectAllRows: (state) => {
      state.selectionData = [];
    },
  },
});

export const { selectRow, deselectRow, selectAllRows, deselectAllRows } =
  selectionSlice.actions;

export default selectionSlice.reducer;
