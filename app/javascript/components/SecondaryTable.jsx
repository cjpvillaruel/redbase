import PropTypes from "prop-types";
import React from "react";

const SecondaryTable = ({ columns, data, className = "" }) => {
  return (
    <table className={`border-collapse w-full mb-4 mt-2 ${className}`}>
      <thead className="font-thin">
        <tr>
          {columns.map((column) => {
            return (
              <th
                key={column.name}
                className={`font-normal uppercase text-gray-400 text-left text-xs ${column.headerClassName ?? ""}`}
              >
                {column.title}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr item={index} key={index}>
              {columns.map((column) => {
                return (
                  <td
                    key={column.name}
                    className={` text-xs font-medium ${column.className ?? ""}`}
                  >
                    {column.render
                      ? column.render(item)
                      : column.getValue
                        ? column.getValue(item)
                        : item[column.name]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

SecondaryTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string,
      className: PropTypes.string,
      getValue: PropTypes.func,
      headerClassName: PropTypes.string,
      render: PropTypes.func,
    })
  ),
  data: PropTypes.arrayOf(PropTypes.object),
};
export default SecondaryTable;
