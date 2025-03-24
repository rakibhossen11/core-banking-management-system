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

  return (
    <div>
      <div className="flex justify-between">
        <div></div>
        <div className="">
          <Link to={`/customer-create`}>
            <Button>New Customer</Button>
          </Link>
        </div>
      </div>
      <Table>
        <Table.Head>
          {[
            "User ID",
            "User Name",
            // "Category",
            "Email",
            "Status",
            // "Price",
            // "Purchase Price",
            // "Selling Price",
            // "Sales Count",
            // "Stock In",
            // "Stock Out",
            // "Remarks / Notes",
            "Action",
          ].map((header, index) => (
            <Table.HeadCell key={index}>{header}</Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {users.map((user, index) => (
            <Table.Row key={index}>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {}
              </Table.Cell>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.unit}</Table.Cell>
              {/* <Table.Cell>
                      {user.stockQuantity * user.purchasePrice}
                    </Table.Cell> */}
              <Table.Cell>{user.sellprice}</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
    // <div className="w-[968px] rounded-[30px] bg-[#FFFFFF] shadow-lg m-[71px] p-[30px]">
    //   <h1 className="font-popines text-[22px]">All Customers</h1>
    //   <p className="font-popines text-[14px] text-[#16C098]">Active Members</p>
    //   <div className="p-6">
    //     <h2 className="text-2xl font-bold mb-4">User Table</h2>
    //     <div className="overflow-x-auto">
    //       <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
    //         <thead className="bg-gray-50">
    //           <tr>
    //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //               ID
    //             </th>
    //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //               Customer Name
    //             </th>
    //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //               Phone Number
    //             </th>
    //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //               Email
    //             </th>
    //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //               Status
    //             </th>
    //           </tr>
    //         </thead>
    //         <tbody className="divide-y divide-gray-200">
    //           {data.map((item) => (
    //             <tr
    //               key={item.id}
    //               className="hover:bg-gray-50 transition-colors"
    //             >
    //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
    //                 {item.id}
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
    //                 {item.name}
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
    //                 {item.age}
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
    //                 {item.email}
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap text-sm text-[#008767]">
    //                 <div className="flex items-center justify-center bg-[#16C098] mx-[18px] my-[4px] rounded-[4px]">
    //                   <p className="font-popines text-[14px]">
    //                     {item.status}
    //                   </p>
    //                 </div>
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    // </div>
  );
};

export default UserTable;
