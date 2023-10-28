import { useSelector } from "react-redux";
import { RootState } from "../store/redux";
import { useDispatch } from "react-redux";

import TableHeaderCheckBox from "./TableHeaderCheckBox";
import {
  toggleSelectAllEmployee,
  toggleSelectEmployee,
  unselectAllEmployee,
} from "../slice";

const EmployeeTable = () => {
  const employee = useSelector((state: RootState) => state.employee);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(unselectAllEmployee());
        }}
      >
        Unselect All
      </button>
      <table>
        <thead>
          <tr>
            <TableHeaderCheckBox
              isALLChecked={employee.isAllChecked}
              toggleHandler={() => {
                dispatch(toggleSelectAllEmployee());
              }}
            />

            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Hire Date</th>
          </tr>
        </thead>
        <tbody>
          {employee.data?.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  checked={employee.selectedData.includes(item.id)}
                  onChange={() => dispatch(toggleSelectEmployee(item.id))}
                />
              </td>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.department}</td>
              <td>{item.position}</td>
              <td>${item.salary}</td>
              <td>{item.hire_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
