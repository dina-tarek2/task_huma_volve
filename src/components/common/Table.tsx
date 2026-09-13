import React from "react";

type TableTypes = {
  columns: string[];
  data: any[];
  striped?: boolean;
};

function Table({ columns, data, striped }: TableTypes) {
  return (
    <table className="border-separate border-spacing-x-6">
      <thead>
        <tr>{columns.map((col) => <th key={col}>{col}</th>)}</tr>
      </thead>
      <tbody>
        {data.map((row,index) => (
          <tr
            key={index}
            className={striped && index % 2 !== 0 ? "bg-gray-300" : ""}
          >
            {columns.map((col) => (<td key={col}>{row[col.toLowerCase()]}</td>))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
