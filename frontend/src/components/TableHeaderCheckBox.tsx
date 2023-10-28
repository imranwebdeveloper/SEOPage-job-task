import React from "react";

const TableHeaderCheckBox = ({
  isALLChecked,
  toggleHandler,
}: {
  isALLChecked: boolean;
  toggleHandler: () => void;
}) => {
  return (
    <th>
      <input
        type="checkbox"
        checked={isALLChecked}
        onChange={() => {
          toggleHandler();
        }}
      />
    </th>
  );
};

export default TableHeaderCheckBox;
