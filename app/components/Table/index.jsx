import React from "react";
import "./index.css";

const TableComponent = ({ columns, data, onSelect }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key} style={col.style || {}}>
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((col) => (
              <td
                key={col.dataIndex}
                className={col.dataIndex === "name" ? "name-highlight" : ""}
              >
                {col.render
                  ? col.render(row?.[col.dataIndex], row)
                  : row?.[col.dataIndex]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
