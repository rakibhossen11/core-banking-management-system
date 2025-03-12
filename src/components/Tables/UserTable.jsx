import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Button, Card, Label, Select, Table } from "flowbite-react";
import Swal from "sweetalert2";

const UserTable = () => {
  const users = useLoaderData();
  console.log(users);

  const handleDelete = (id) => {
    console.log(id);
    // alert function
    Swal.fire({
      title: `You Want Delete ${users.name} ?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }) //after function to work and delete from database
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
              }
            });
        }
      });
  };

  const data = [
    {
      id: 1,
      name: "John Doe",
      age: 282222222,
      email: "john@example.com",
      status: "active",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 340000000,
      email: "jane@example.com",
      status: "active",
    },
    {
      id: 3,
      name: "Sam Green",
      age: 457777777,
      email: "sam@example.com",
      status: "active",
    },
    {
      id: 4,
      name: "Ella Johnson",
      age: 301111111,
      email: "ella@example.com",
      status: "active",
    },
  ];

  return (
    <div className="w-[968px] rounded-[30px] bg-[#FFFFFF] shadow-lg m-[71px] p-[30px]">
      <h1 className="font-popines text-[22px]">All Customers</h1>
      <p className="font-popines text-[14px] text-[#16C098]">Active Members</p>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">User Table</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.age}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#008767]">
                    <div className="flex items-center justify-center bg-[#16C098] mx-[18px] my-[4px] rounded-[4px]">
                      <p className="font-popines text-[14px]">
                        {item.status}
                      </p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTable;

// const Table = () =>{
//   return(
//     <div>

//     </div>
//   )
// };
