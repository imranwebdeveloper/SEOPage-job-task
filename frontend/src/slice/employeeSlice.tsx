import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/employee.json";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    selectedData: [] as number[],
    data: data,
  },
  reducers: {
    toggleSelectItem: (state, action) => {
      const selectedId = action.payload;
      if (state.selectedData.includes(selectedId)) {
        state.selectedData = state.selectedData.filter(
          (id) => id !== selectedId
        );
      } else {
        state.selectedData = [...state.selectedData, selectedId];
      }
    },

    toggleSelectAll: (state) => {
      if (state.selectedData.length === state.data.length) {
        state.selectedData = [];
      } else {
        state.selectedData = state.data.map((item) => item.id);
      }
    },
    unselectAll: (state) => {
      state.selectedData = [];
    },
  },
});

export const { toggleSelectItem, toggleSelectAll, unselectAll } =
  employeeSlice.actions;

export default employeeSlice.reducer;
