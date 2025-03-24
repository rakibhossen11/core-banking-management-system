import { Button, Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ActionIcon } from "../../components/Lists/Product";
import { MdOutlineSell } from "react-icons/md";
import {
  fetchCustomers,
  searchCustomersByName,
} from "../../redux/feature/customerSlice";
import { useDispatch, useSelector } from "react-redux";
import CustomerDetail from "../CustomerDetail";

const CustomersTable = () => {
  const dispatch = useDispatch();
  const { customers, searchResults, loading, error } = useSelector(
    (state) => state.customers
  );
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchCustomersByName(searchQuery));
    if (searchQuery) {
      dispatch(searchCustomersByName(searchQuery)); // ✅ Fetch filtered customers
    } else {
      dispatch(fetchCustomers()); // ✅ If empty, fetch all customers again
    }
  };

  const handleDelete = (id) => {
    console.log(id);
    // alert function
    Swal.fire({
      title: `You Want Delete ${customers.name} ?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }) //after function to work and delete from database
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/customers/${id}`, {
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
        <div>
          <h2>Search Customers by Name</h2>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Enter customer name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
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
          {customers
            ? customers.map((customer, index) => (
                <Table.Row key={index}>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {customer.customerId}
                  </Table.Cell>
                  <Table.Cell>{customer.name}</Table.Cell>
                  <Table.Cell>{customer.email}</Table.Cell>
                  <Table.Cell>{customer.phone}</Table.Cell>
                  {/* <Table.Cell>
                    {customer.stockQuantity * customer.purchasePrice}
                  </Table.Cell> */}
                  {/* <Table.Cell>{customer.sellprice}</Table.Cell> */}
                  <Table.Cell>
                    <div>
                      <ActionIcon
                        link={`/customerDetails/${customer._id}`}
                        Icon={MdOutlineSell}
                        // <CustomerDetail customerId={customer.customerId} />
                      />
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))
            : searchResults.map((customer, index) => (
                <Table.Row key={index}>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {customer.customerId}
                  </Table.Cell>
                  <Table.Cell>{customer.name}</Table.Cell>
                  <Table.Cell>{customer.email}</Table.Cell>
                  <Table.Cell>{customer.phone}</Table.Cell>
                  {/* <Table.Cell>
                      {customer.stockQuantity * customer.purchasePrice}
                    </Table.Cell> */}
                  {/* <Table.Cell>{customer.sellprice}</Table.Cell> */}
                  <Table.Cell>
                    <div>
                      <ActionIcon
                        link={`/customerDetails/${customer._id}`}
                        Icon={MdOutlineSell}
                        // <CustomerDetail customerId={customer.customerId} />
                      />
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default CustomersTable;
