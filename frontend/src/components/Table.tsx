import { useSelector, useDispatch } from "react-redux";
import {
  selectRow,
  deselectRow,
  selectAllRows,
  deselectAllRows,
} from "../slice/employeeSlice";

const ReusableTable = ({ data, header, td }) => {
  const selectedRows = useSelector((state) => state.selectedRows);
  const dispatch = useDispatch();

  const toggleSelectRow = (rowId) => {
    if (selectedRows.includes(rowId)) {
      dispatch(deselectRow(rowId));
    } else {
      dispatch(selectRow(rowId));
    }
  };

  const toggleSelectAllRows = () => {
    if (selectedRows.length === data.length) {
      dispatch(deselectAllRows());
    } else {
      dispatch(selectAllRows(data));
    }
  };

  return (
    <div>
      <button onClick={toggleSelectAllRows}>Select All</button>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectedRows.length === data.length && data.length > 0}
                onChange={toggleSelectAllRows}
              />
            </th>
            {header}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row.id)}
                  onChange={() => toggleSelectRow(row.id)}
                />
              </td>

              {/* Render the rest of the row data here */}
              {td}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReusableTable;
