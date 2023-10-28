import { useSelector } from "react-redux";
import { useSelection } from "../hook/useSelection";
import { RootState } from "../store/redux";

const EmployeeTable = ({ employees }) => {
  const { selectedItems, toggleSelectAll, toggleSelectItem, unselectAll } =
    useSelection(employees);

  const handle = () => {
    unselectAll();
  };

  return (
    <div>
      <button onClick={handle}>Unselect All</button>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={
                  selectedItems.length === employees.length &&
                  employees.length > 0
                }
                onChange={toggleSelectAll}
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
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(employee.id)}
                  onChange={() => toggleSelectItem(employee.id)}
                />
              </td>
              <td>{employee.employee_id}</td>
              <td>{employee.first_name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.department}</td>
              <td>{employee.position}</td>
              <td>${employee.salary}</td>
              <td>{employee.hire_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
