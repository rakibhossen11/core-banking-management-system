import React from "react";

const Table = ({ data , columns }) => {
    // console.log(columns);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {/* {columns.map((col) =>(
                <th scope="col" key={index}>
                    {col.header}
                </th>
            ))} */}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          
        </tbody>
      </table>
    </div>
  );
};

export default Table;