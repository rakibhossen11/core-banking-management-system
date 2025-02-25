import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Card, Dropdown } from "flowbite-react";
import TransactionForm from "./Transaction/TransactionForm";

const CustomerDetail = () => {
  const customer = useLoaderData();
  console.log(customer);

  return (
    <div className="flex justify-around">
      <Card className="max-w-sm">
        <div className="flex flex-col items-center pb-10">
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Customer Balance: {customer.name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {customer.balance ? customer.balance : 0 }
          </span>
          <div className="mt-4 flex space-x-3 lg:mt-6">
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
          </div>
        </div>
      </Card> 
      <TransactionForm />
    </div>
  );
};

export default CustomerDetail;
