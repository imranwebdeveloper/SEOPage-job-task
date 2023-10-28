import { useSelector } from "react-redux";
import { RootState } from "../store/redux";
import { useDispatch } from "react-redux";
import {
  unselectAll,
  toggleSelectAll,
  toggleSelectItem,
} from "../slice/employeeSlice";

const EmployeeTable = () => {
  const employee = useSelector((state: RootState) => state.employee);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(unselectAll());
        }}
      >
        Unselect All
      </button>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={
                  employee.selectedData.length === employee.data.length &&
                  employee.data.length > 0
                }
                onChange={() => {
                  dispatch(toggleSelectAll());
                }}
              />
            </th>
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
          {employee.data.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  checked={employee.selectedData.includes(item.id)}
                  onChange={() => dispatch(toggleSelectItem(item.id))}
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
