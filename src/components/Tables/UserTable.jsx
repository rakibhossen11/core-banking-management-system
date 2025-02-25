import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Button, Card, Table } from "flowbite-react";
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
    <div className="overflow-x-auto">
      <Link to={"/userForm"}>
        <Button pill>Add New</Button>
      </Link>
      <Table>
        <Table.Head>
          {["Name", "Email", "Phone", "Role"].map((header, index) => (
            <Table.HeadCell key={index}>{header}</Table.HeadCell>
          ))}
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {users.map((user) => (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {user.name}
              </Table.Cell>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.phone}</Table.Cell>
              <Table.Cell>
                <Link to={`/customer&details/${user._id}`}>
                  <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
                    see
                  </button>
                </Link>
                <Button onClick={() => handleDelete(user._id)} >Delete</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default UserTable;
