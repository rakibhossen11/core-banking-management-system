import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { useSelector } from "react-redux";

const Trasection = () => {
  const transactions = useSelector((state) => state.banking.transactions);
  console.log("banking from form", transactions);
  const reports = [
    {
      debit: 125,
      credit: 32,
      detail: "Buy Machine",
      date: "02/02/2025",
    },
    {
      debit: 1225,
      credit: 322,
      detail: "Buy Machine",
      date: "02/02/2025",
    },
  ];

  // const balance = (125 - 32);

  return (
    <div className="overflow-x-auto">
      {/* <Button>Click me</Button> */}
      <Table>
        <TableHead>
          <TableHeadCell>Date</TableHeadCell>
          <TableHeadCell>Transaction Details</TableHeadCell>
          <TableHeadCell>Debit</TableHeadCell>
          <TableHeadCell>Credit</TableHeadCell>
          <TableHeadCell>Balance</TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">Edit</span>
          </TableHeadCell>
        </TableHead>
        {transactions.map((report,key) => (
          <>
            <TableBody key={key.id} className="divide-y">
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {report.date}
                </TableCell>
                <TableCell>{report.detail}</TableCell>
                <TableCell>{(report.type === "withdraw" ? report.amount : 0 )}</TableCell>
                <TableCell>{(report.type === "deposit" ? report.amount : 0 )}</TableCell>
                <TableCell>{report.balanceAfterTransaction}</TableCell>
                <TableCell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                </TableCell>
              </TableRow>
            </TableBody>
          </>
        ))}
      </Table>
    </div>
  );
};

export default Trasection;
