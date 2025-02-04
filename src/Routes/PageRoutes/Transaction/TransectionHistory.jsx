import React from "react";

const TransectionHistory = ({ transactions }) => {
  // console.log(transection.length);
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Transaction History</h2>
      {transactions.length === 0 ? (
        <p className="text-gray-500">No transactions yet.</p>
      ) : (
        <ul>
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="mb-2 p-2 border-b last:border-b-0"
            >
              <div className="flex justify-between">
                <span className="font-medium">
                  {transaction.type === "deposit" ? "Deposit" : "Withdrawal"}
                </span>
                <span
                  className={
                    transaction.type === "deposit"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {transaction.type === "deposit" ? "+" : "-"}$
                  {transaction.amount.toFixed(2)}
                </span>
              </div>
              <div className="text-sm text-gray-500">{transaction.date}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransectionHistory;
