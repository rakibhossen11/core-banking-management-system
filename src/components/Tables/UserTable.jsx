import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Button, Table } from "flowbite-react";

const UserTable = () => {
  const users = useLoaderData();
  console.log(users);

  return (
    <div className="overflow-x-auto">
      <Link to={'/userForm'}><Button pill>Add New</Button></Link>
      <Table>
        <Table.Head>
        {[
                "Name",
                "Email",
                "Phone",
                "Role",
              ].map((header, index) => (
                <Table.HeadCell key={index}>{header}</Table.HeadCell>
              ))}
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {users.map((user) => 
          (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {user.name}
              </Table.Cell>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.phone}</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {/* <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
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
      </table> */}
    </div>
  );
};

export default UserTable;
