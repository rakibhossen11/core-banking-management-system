import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const UserTable = () => {
  const users = useLoaderData();
  console.log(users);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
        <thead className="px-4 py-2 border text-left font-semibold">
        <tr>
              {[
                "Name",
                "Email",
                "Phone",
                "Role",
              ].map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-2 border text-left font-semibold"
                >
                  {header}
                </th>
              ))}
            </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="border hover:bg-gray-100">
              <td className="px-4 py-2 border">{user.name}</td>
              <td className="px-4 py-2 border">{user.email}</td>
              <td className="px-4 py-2 border">{user.phone}</td>
            </tr>) )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
