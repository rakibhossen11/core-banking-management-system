import {
  Button,
  Table,
  Pagination,
  TextInput,
  Spinner,
  Alert,
  Label,
  Select,
} from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ActionIcon } from "../../components/Lists/Product";
import { MdOutlineSell } from "react-icons/md";
import {
  fetchCustomers,
  searchCustomersByName,
  setPage,
  resetSearch,
} from "../../redux/feature/customerSlice";
import { useDispatch, useSelector } from "react-redux";
import CustomerDetail from "../CustomerDetail";
import { TopCard } from "../../DashBoard/Dashboard";

const CustomersTable = () => {
  const dispatch = useDispatch();
  const { customers, searchResults, loading, error, pagination } = useSelector(
    (state) => state.customers
  );
  // console.log(customers);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    dispatch(
      fetchCustomers({
        page: pagination.currentPage,
      })
    );
  }, [dispatch, pagination.currentPage]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchCustomersByName(searchQuery));
    if (searchQuery) {
      dispatch(searchCustomersByName(searchQuery)); // ✅ Fetch filtered customers
    } else {
      dispatch(fetchCustomers({ page: 1 })); // ✅ If empty, fetch all customers again
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setIsSearching(false);
    dispatch(resetSearch());
  };

  const onPageChange = (page) => {
    dispatch(setPage(page));
  };

  // console.log(customers);
  // const totalGet = customers.reduce((total,customer) => console.log(total + customer.balance),0);
  // console.log(totalGet);

  const { positive, negative } = customers.reduce(
    (totals, customer) => {
      const balance = Number(customer.balance) || 0; // Ensure it's a number

      if (balance > 0) {
        totals.positive += balance;
      } else if (balance < 0) {
        totals.negative += balance;
      }
      return totals;
    },
    { positive: 0, negative: 0 } // Proper initialization
  );

  // console.log('Total Positive:', positive);
  // console.log('Total Negative:', Math.abs(negative)); // Absolute value

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

  const handleSort = () =>{
    console.log(sortType);
  };

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <form onSubmit={handleSearch} className="mb-6">
            <div className="flex gap-2">
              <TextInput
                className="flex-1"
                placeholder="Search customers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                addon={
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                }
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Search
              </button>
              {isSearching && (
                <Button color="gray" onClick={handleClearSearch}>
                  Clear
                </Button>
              )}
            </div>
          </form>
        </div>
        <div className="flex gap-3">
          <TopCard text1={positive} text2={"Deposit"} />
          <TopCard text1={negative} text2={"Withdraw"} />
        </div>
        <div className="">
          <Link to={`/customer-create`}>
            <Button>New Customer</Button>
          </Link>
        </div>
      </div>
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label value="Sort By" />
        </div>
        <Select
          id=""
          value={sortType}
          onClick={handleSort}
          onChange={(e) => setSortType(e.target.value)}
          required
        >
          <option value=''>Sort By</option>
          <option value='ase'>High To Low</option>
          <option value='dsc'>Low To High</option>
        </Select>
      </div>
      <div>
        <Table>
          <Table.Head>
            {[
              "User ID",
              "User Name",
              "Balance",
              // "Email",
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
                    <Table.Cell
                      className={
                        customer.balance < 0
                          ? "text-red-500 xs"
                          : "text-green-500 xs"
                      }
                    >
                      {customer?.balance}
                    </Table.Cell>
                    {/* <Table.Cell>{customer.email}</Table.Cell> */}
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
                    <Table.Cell>{customer?.balance}</Table.Cell>
                    {/* <Table.Cell>{customer.email}</Table.Cell> */}
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
        {/* Flowbite Pagination */}
        {/* <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-semibold">
              {(pagination.currentPage - 1) * 10 + 1}
            </span>{" "}
            to{" "}
            <span className="font-semibold">
              {Math.min(pagination.currentPage * 10, pagination.totalCustomers)}
            </span>{" "}
            of{" "}
            <span className="font-semibold">{pagination.totalCustomers}</span>{" "}
            customers
          </div>

          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            onPageChange={onPageChange}
            showIcons
            className="mt-4"
          />
        </div> */}
        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <div>
            Showing {(pagination.currentPage - 1) * 10 + 1} to{" "}
            {Math.min(pagination.currentPage * 10, pagination.totalCustomers)}{" "}
            of {pagination.totalCustomers} customers
          </div>
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            onPageChange={onPageChange}
            showIcons
          />
        </div>
      </div>
    </div>
  );
};

export default CustomersTable;
