import { Button, Label, Modal, Select, Table, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  featchExpenses,
  featchExpensesMonth,
} from "../redux/feature/expensesSlice";
// import { Bar } from 'react-chartjs-2';

const Expenses = () => {
  const dispatch = useDispatch();
  const { expenses, loading, error } = useSelector((state) => state.expenses);
  //   console.log(expenses);
  //   const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  //   const [page,setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [last30Days, setLast30Days] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 10;

  const [selectedMonth, setSelectedMonth] = useState("");

  useEffect(() => {
    dispatch(featchExpenses());
  }, []);

  // fetch data
  const fetchData = async () => {
    const response = await axios.get("http://localhost:5000/expenses", {
      params: { search, last30Days, page, limit },
    });
    setExpenses(response.data);
    // console.log(response.data);
  };

  //   console.log(expenses);

  // handle search
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  // handle 30 days
  const handleDays = () => {
    setLast30Days(!last30Days);
    setPage(1);
  };

  const handleDateRange = () => {
    const { name, value } = e.target;
    setDateRange((prev) => ({ ...prev, [name]: value }));
  };

  const handlePagination = (newPage) => {
    setPage(newPage);
  };

  // fetch data on the component mount and when dependensis change
  useEffect(() => {
    fetchData();
  }, []);

  const handleMonthChange = (e) => {
    const month = e.target.value;
    console.log(month);
    // setSelectedMonth(month);
    console.log(dispatch(featchExpensesMonth(month)));
    dispatch(featchExpensesMonth(month));
  };

  // Fetch expenses when the selected month changes
  useEffect(() => {
    dispatch(featchExpensesMonth(selectedMonth));
  }, [selectedMonth, dispatch]);

  return (
    <div>
      <Link to={"/addExpenses"}>
        <Button pill>Add New</Button>
      </Link>
      <div className="p-5">
        <h1 className="text-3xl font-bold mb-5">Expense Tracker</h1>

        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="countries" value="Select your country" />
          </div>
          <Select
            id="months"
            value={selectedMonth}
            onChange={handleMonthChange}
            required
          >
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </Select>
        </div>

        {/* Search and filter section */}
        <div className="mb-5 flex gap-4">
          <TextInput
            type="text"
            placeholder="Search by detail"
            value={search}
            onChange={handleSearch}
          />
          <Button onClick={handleDays}>
            {last30Days ? "Show All Data" : "Show Last 30 Days"}
          </Button>
          {/* <TextInput
            type="date"
            name="start"
            value={dateRange.start}
            onChange={handleDateRangeChange}
            placeholder="Start Date"
          />
          <TextInput
            type="date"
            name="end"
            value={dateRange.end}
            onChange={handleDateRangeChange}
            placeholder="End Date"
          /> */}
        </div>

        {/* Chart */}
        {/* <div className="mb-5">
          <Bar data={chartData} />
        </div> */}

        {/* Table to display data */}
        <Table hoverable={true}>
          <Table.Head>
            <Table.HeadCell>Date</Table.HeadCell>
            <Table.HeadCell>Detail</Table.HeadCell>
            <Table.HeadCell>Amount</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {expenses.map((expense) => (
              <Table.Row key={expense._id}>
                <Table.Cell>
                  {new Date(expense.date).toLocaleDateString()}
                </Table.Cell>
                <Table.Cell>{expense.detail}</Table.Cell>
                <Table.Cell>${expense.amount}</Table.Cell>
                <Table.Cell>{expense.category}</Table.Cell>
                <Table.Cell>
                  <Button
                    color="failure"
                    onClick={() => {
                      setExpenseToDelete(expense._id);
                      setShowDeleteModal(true);
                    }}
                  >
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

        {/* Pagination */}
        <div className="flex justify-center mt-5">
          <Button
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
          >
            Previous
          </Button>
          <span className="mx-4 my-2">
            Page {page} of {Math.ceil(total / limit)}
          </span>
          <Button
            disabled={page >= Math.ceil(total / limit)}
            onClick={() => handlePageChange(page + 1)}
          >
            Next
          </Button>
        </div>

        {/* Delete Confirmation Modal */}
        {/* <Modal show={showDeleteModal} onClose={() => setShowDeleteModal(false)}> */}
        <Modal>
          <Modal.Header>Delete Expense</Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to delete this expense?</p>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button color="failure" onClick={handleDelete}>
              Delete
            </Button>
            <Button color="gray" onClick={() => setShowDeleteModal(false)}>
              Cancel
            </Button> */}
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Expenses;
