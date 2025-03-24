import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Card, Dropdown, Table } from "flowbite-react";
import TransactionForm from "./Transaction/TransactionForm";
import { useSelector } from "react-redux";

const CustomerDetail = ({customerId}) => {
  const customer = useLoaderData();
  const customerData = useSelector((state) => state.transactions); // Get customer data from Redux store
  console.log(customer.customerId);

  return (
    <div>
      <div className="flex justify-around">
        <Card className="max-w-sm">
          <div className="flex flex-col items-center pb-10">
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Name: {customer.name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Current Balance: {customer.balance ? customer.balance : 0}
            </span>
            {/* <div className="mt-4 flex space-x-3 lg:mt-6">
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Add friend
              </a>
              <Link to={`/transactionform/${customer._id}`}>
                <a
                  href="#"
                  className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Message
                </a>
              </Link>
            </div> */}
          </div>
        </Card>
        <TransactionForm />
      </div>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            {["Date", "Sell", "Total", "Action"].map((header, index) => (
              <Table.HeadCell key={index}>{header}</Table.HeadCell>
            ))}
          </Table.Head>
          {customer ? (
            <Table.Body className="divide-y">
              {customer.transactions.map((tran, index) => (
                <Table.Row
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {tran.date}
                  </Table.Cell>
                  {/* <Table.Cell></Table.Cell> */}
                  {/* <Table.Cell>{buyHistory ? buy.quantity : 'NO BUY'}</Table.Cell> */}
                  <Table.Cell>{tran.type}</Table.Cell>
                  <Table.Cell>{tran.amount}</Table.Cell>
                  <Table.Cell
                    className={
                      tran.currentBalance < 0
                        ? "text-red-500"
                        : "text-green-500"
                    }
                  >
                    {tran.currentBalance}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          ) : (
            <p className="text-center mt-4]">NO BUT OR SELL</p>
          )}
        </Table>
      </div>
    </div>
  );
};

export default CustomerDetail;
