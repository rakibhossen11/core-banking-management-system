import React from "react";

const FinancialTables = () => {
  const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", accountType: "Savings", balance: 5000.75, registrationDate: "2023-01-10" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", accountType: "Checking", balance: 1200.50, registrationDate: "2023-03-15" },
    { id: 3, name: "Charlie Lee", email: "charlie@example.com", accountType: "Investment", balance: 15000.00, registrationDate: "2023-06-20" }
  ];

  const transactions = [
    { id: 101, userId: 1, type: "Deposit", amount: 200.00, date: "2024-02-01" },
    { id: 102, userId: 2, type: "Withdrawal", amount: 100.50, date: "2024-02-02" },
    { id: 103, userId: 3, type: "Deposit", amount: 500.00, date: "2024-02-03" }
  ];

  const investments = [
    { id: 201, userId: 1, type: "Stock", amount: 3000.00, roi: 5.2, date: "2024-01-15" },
    { id: 202, userId: 2, type: "Crypto", amount: 1500.00, roi: 10.1, date: "2024-01-20" },
    { id: 203, userId: 3, type: "Stock", amount: 5000.00, roi: 7.5, date: "2024-01-25" }
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Users</h2>
      <table className="w-full caption-bottom text-sm bg-[#f9fafb]">
        <thead className="bg-gray-200">
          <tr className="">
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">ID</th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Name</th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Email</th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Account Type</th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Balance ($)</th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Registration Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-2 text-center">{user.id}</td>
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.accountType}</td>
              <td className="p-2 text-right">{user.balance.toFixed(2)}</td>
              <td className="p-2 text-center">{user.registrationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-xl font-semibold mt-6 mb-4">Transactions</h2>
      <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Transaction ID</th>
            <th className="p-2">User ID</th>
            <th className="p-2">Type</th>
            <th className="p-2">Amount ($)</th>
            <th className="p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id} className="border-t">
              <td className="p-2 text-center">{tx.id}</td>
              <td className="p-2 text-center">{tx.userId}</td>
              <td className="p-2 text-center">{tx.type}</td>
              <td className="p-2 text-right">{tx.amount.toFixed(2)}</td>
              <td className="p-2 text-center">{tx.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-xl font-semibold mt-6 mb-4">Investments</h2>
      <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Investment ID</th>
            <th className="p-2">User ID</th>
            <th className="p-2">Type</th>
            <th className="p-2">Amount ($)</th>
            <th className="p-2">ROI (%)</th>
            <th className="p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {investments.map((inv) => (
            <tr key={inv.id} className="border-t">
              <td className="p-2 text-center">{inv.id}</td>
              <td className="p-2 text-center">{inv.userId}</td>
              <td className="p-2 text-center">{inv.type}</td>
              <td className="p-2 text-right">{inv.amount.toFixed(2)}</td>
              <td className="p-2 text-right">{inv.roi.toFixed(1)}</td>
              <td className="p-2 text-center">{inv.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialTables;