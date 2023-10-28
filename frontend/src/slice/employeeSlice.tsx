import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/employee.json";
import {
  makeTableSelectionActions,
  TableSelectionType,
} from "../lib/tableSelcetion";

type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip_code: string;
  };
  department: string;
  position: string;
  salary: number;
  hire_date: string;
};

interface EmployeeSliceType extends TableSelectionType<Employee> {}

const tableSelectionActions = makeTableSelectionActions();

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    data: data,
    isAllChecked: false,
    selectedData: [],
  } as EmployeeSliceType,
  reducers: {
    ...tableSelectionActions,
  },
});

export const {
  toggleSelectItem: toggleSelectEmployee,
  toggleSelectAll: toggleSelectAllEmployee,
  unselectAll: unselectAllEmployee,
} = employeeSlice.actions;

export const employeeReducer = employeeSlice.reducer;
